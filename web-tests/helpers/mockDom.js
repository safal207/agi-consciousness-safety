class MockClassList {
    constructor(element) {
        this.element = element;
        this._set = new Set();
    }

    _sync() {
        this.element.attributes.set('class', this.toString());
    }

    add(...tokens) {
        tokens
            .filter(Boolean)
            .forEach(token => {
                this._set.add(token);
            });
        this._sync();
        return this;
    }

    remove(...tokens) {
        tokens.forEach(token => this._set.delete(token));
        this._sync();
        return this;
    }

    toggle(token, force) {
        if (force === true) {
            this._set.add(token);
        } else if (force === false) {
            this._set.delete(token);
        } else if (this._set.has(token)) {
            this._set.delete(token);
        } else {
            this._set.add(token);
        }
        this._sync();
        return this._set.has(token);
    }

    contains(token) {
        return this._set.has(token);
    }

    toString() {
        return Array.from(this._set).join(' ');
    }

    setFromString(value) {
        this._set = new Set(String(value).split(/\s+/).filter(Boolean));
        this._sync();
    }
}

function datasetKeyFromAttribute(name) {
    return name
        .slice(5)
        .split('-')
        .map((segment, index) => (index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1)))
        .join('');
}

function attributeNameFromDataset(key) {
    return `data-${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}`;
}

class MockStyle {
    constructor() {
        this._map = new Map();
    }

    setProperty(name, value) {
        this._map.set(name, value);
    }

    getPropertyValue(name) {
        return this._map.get(name) ?? '';
    }
}

class MockElement {
    constructor(tagName, document) {
        this.tagName = tagName.toUpperCase();
        this.ownerDocument = document;
        this.parentNode = null;
        this.children = [];
        this.attributes = new Map();
        this.classList = new MockClassList(this);
        this._eventListeners = new Map();
        this._text = '';
        this.value = '';
        this.style = new MockStyle();
        this.dataset = new Proxy(
            {},
            {
                set: (target, key, value) => {
                    const stringValue = String(value);
                    target[key] = stringValue;
                    this.attributes.set(attributeNameFromDataset(key), stringValue);
                    return true;
                },
                get: (target, key) => target[key],
                deleteProperty: (target, key) => {
                    delete target[key];
                    this.attributes.delete(attributeNameFromDataset(key));
                    return true;
                }
            }
        );
    }

    set id(value) {
        const normalized = value ? String(value) : '';
        if (!normalized) {
            if (this._id) {
                this.ownerDocument._registerId(this._id, null);
            }
            this._id = '';
            this.attributes.delete('id');
            return;
        }
        this._id = normalized;
        this.ownerDocument._registerId(normalized, this);
        this.attributes.set('id', normalized);
    }

    get id() {
        return this._id ?? '';
    }

    set className(value) {
        this.classList.setFromString(value ?? '');
    }

    get className() {
        return this.classList.toString();
    }

    set textContent(value) {
        const stringValue = value == null ? '' : String(value);
        this._text = stringValue;
        if (this.children.length) {
            this.children.forEach(child => {
                child.parentNode = null;
            });
            this.children = [];
        }
    }

    get textContent() {
        if (this.children.length) {
            return this.children.map(child => child.textContent).join('');
        }
        return this._text;
    }

    setAttribute(name, value) {
        const normalized = value == null ? '' : String(value);
        if (name === 'id') {
            this.id = normalized;
            return;
        }
        if (name === 'class') {
            this.className = normalized;
            return;
        }
        this.attributes.set(name, normalized);
        if (name.startsWith('data-')) {
            const datasetKey = datasetKeyFromAttribute(name);
            this.dataset[datasetKey] = normalized;
        }
    }

    getAttribute(name) {
        if (name === 'id') {
            return this.id || null;
        }
        if (name === 'class') {
            return this.className || null;
        }
        return this.attributes.get(name) ?? null;
    }

    removeAttribute(name) {
        if (name === 'id') {
            if (this._id) {
                this.ownerDocument._registerId(this._id, null);
            }
            this._id = '';
            this.attributes.delete('id');
            return;
        }
        if (name === 'class') {
            this.className = '';
            this.attributes.delete('class');
            return;
        }
        this.attributes.delete(name);
        if (name.startsWith('data-')) {
            const datasetKey = datasetKeyFromAttribute(name);
            Reflect.deleteProperty(this.dataset, datasetKey);
        }
    }

    hasAttribute(name) {
        return this.getAttribute(name) !== null;
    }

    appendChild(child) {
        if (child.parentNode) {
            child.parentNode.removeChild(child);
        }
        child.parentNode = this;
        this.children.push(child);
        this._text = '';
        this.ownerDocument._registerElement(child);
        return child;
    }

    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
            child.parentNode = null;
        }
        return child;
    }

    append(...nodes) {
        nodes.forEach(node => {
            if (node instanceof MockElement) {
                this.appendChild(node);
            }
        });
    }

    querySelectorAll(selector) {
        return this.ownerDocument.querySelectorAll(selector, this);
    }

    querySelector(selector) {
        const [first] = this.querySelectorAll(selector);
        return first ?? null;
    }

    addEventListener(type, listener) {
        const handlers = this._eventListeners.get(type) ?? [];
        handlers.push(listener);
        this._eventListeners.set(type, handlers);
    }

    dispatchEvent(event) {
        event.target = event.target ?? this;
        event.currentTarget = this;
        event.defaultPrevented = false;
        event.preventDefault = () => {
            event.defaultPrevented = true;
        };
        const handlers = this._eventListeners.get(event.type) ?? [];
        handlers.forEach(handler => handler.call(this, event));
        return !event.defaultPrevented;
    }
}

function collectDescendants(root, includeSelf = false) {
    const nodes = [];
    const queue = includeSelf ? [root] : [...root.children];
    while (queue.length) {
        const node = queue.shift();
        if (!(node instanceof MockElement)) {
            continue;
        }
        nodes.push(node);
        queue.push(...node.children);
    }
    return nodes;
}

function matchesSelector(element, selector) {
    const trimmed = selector.trim();
    if (!trimmed) {
        return false;
    }

    let cursor = trimmed;
    let tagName = '';
    if (!cursor.startsWith('.') && !cursor.startsWith('#') && !cursor.startsWith('[')) {
        const match = cursor.match(/^[a-zA-Z0-9-]+/);
        if (!match) {
            return false;
        }
        tagName = match[0];
        if (element.tagName.toLowerCase() !== tagName.toLowerCase()) {
            return false;
        }
        cursor = cursor.slice(tagName.length);
    }

    const tokens = cursor.match(/(\.[^.#\[]+|#[^.#\[]+|\[[^\]]+\])/g) ?? [];
    for (const token of tokens) {
        if (token.startsWith('.')) {
            if (!element.classList.contains(token.slice(1))) {
                return false;
            }
            continue;
        }
        if (token.startsWith('#')) {
            if (element.id !== token.slice(1)) {
                return false;
            }
            continue;
        }
        if (token.startsWith('[')) {
            const body = token.slice(1, -1);
            const [rawName, rawValue] = body.split('=');
            const name = rawName.trim();
            if (rawValue === undefined) {
                if (!element.hasAttribute(name)) {
                    return false;
                }
            } else {
                const expected = rawValue.trim().replace(/^['"]|['"]$/g, '');
                if (element.getAttribute(name) !== expected) {
                    return false;
                }
            }
        }
    }

    if (!tagName && tokens.length === 0) {
        if (trimmed.startsWith('.')) {
            return element.classList.contains(trimmed.slice(1));
        }
        if (trimmed.startsWith('#')) {
            return element.id === trimmed.slice(1);
        }
        if (trimmed.startsWith('[')) {
            const body = trimmed.slice(1, -1);
            const [rawName, rawValue] = body.split('=');
            const name = rawName.trim();
            if (rawValue === undefined) {
                return element.hasAttribute(name);
            }
            const expected = rawValue.trim().replace(/^['"]|['"]$/g, '');
            return element.getAttribute(name) === expected;
        }
    }

    return true;
}

class MockDocument {
    constructor() {
        this._idMap = new Map();
        this.defaultView = {
            setTimeout: fn => {
                fn();
                return 0;
            }
        };

        this.documentElement = new MockElement('html', this);
        this.head = new MockElement('head', this);
        this.body = new MockElement('body', this);

        this.documentElement.appendChild(this.head);
        this.documentElement.appendChild(this.body);

        this._registerElement(this.documentElement);
        this._registerElement(this.head);
        this._registerElement(this.body);
    }

    _registerElement(element) {
        if (element.id) {
            this._idMap.set(element.id, element);
        }
    }

    _registerId(id, element) {
        if (!id) {
            return;
        }
        if (element) {
            this._idMap.set(id, element);
        } else {
            this._idMap.delete(id);
        }
    }

    _isConnected(element) {
        let current = element;
        while (current) {
            if (current === this.documentElement) {
                return true;
            }
            current = current.parentNode;
        }
        return false;
    }

    createElement(tagName) {
        return new MockElement(tagName, this);
    }

    getElementById(id) {
        const element = this._idMap.get(id);
        if (element && this._isConnected(element)) {
            return element;
        }
        this._idMap.delete(id);
        return null;
    }

    querySelectorAll(selector, within) {
        const root = within ?? this.documentElement;
        const includeSelf = !within;
        const candidates = collectDescendants(root, includeSelf);
        return candidates.filter(node => matchesSelector(node, selector));
    }

    querySelector(selector) {
        const [first] = this.querySelectorAll(selector);
        return first ?? null;
    }

    addEventListener() {
        // No-op for tests
    }
}

function setDataI18n(element, key) {
    element.setAttribute('data-i18n', key);
}

function createResultItem(doc, valueId, defaultText, labelId, labelKey) {
    const item = doc.createElement('div');
    item.className = 'result-item';

    const value = doc.createElement('div');
    value.className = 'result-value';
    value.id = valueId;
    value.setAttribute('aria-live', 'polite');
    value.textContent = defaultText;

    const label = doc.createElement('div');
    label.className = 'result-label';
    label.id = labelId;
    setDataI18n(label, labelKey);

    item.append(value, label);
    return item;
}

function createPhilosophyCard(doc, { id, titleKey, descKey, ariaKey, icon }) {
    const card = doc.createElement('article');
    card.id = id;
    card.className = 'philosophy-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('data-i18n-attr', 'aria-label');
    card.setAttribute('data-i18n-attr-key', ariaKey);

    const iconElement = doc.createElement('span');
    iconElement.className = 'philosophy-icon';
    iconElement.setAttribute('aria-hidden', 'true');
    iconElement.textContent = icon;
    card.appendChild(iconElement);

    const title = doc.createElement('h3');
    title.className = 'philosophy-title';
    title.id = titleKey;
    setDataI18n(title, titleKey);
    card.appendChild(title);

    const description = doc.createElement('p');
    description.className = 'philosophy-description';
    description.id = descKey;
    setDataI18n(description, descKey);
    card.appendChild(description);

    return card;
}

export function createMockDocument() {
    const doc = new MockDocument();
    doc.documentElement.setAttribute('lang', 'en');

    const title = doc.createElement('title');
    setDataI18n(title, 'page-title');
    doc.head.appendChild(title);

    const languageToggle = doc.createElement('div');
    languageToggle.className = 'language-toggle';
    languageToggle.setAttribute('role', 'group');
    languageToggle.setAttribute('data-i18n-attr', 'aria-label');
    languageToggle.setAttribute('data-i18n-attr-key', 'language-toggle-label');
    doc.body.appendChild(languageToggle);

    const addLangButton = (lang, key, pressed) => {
        const button = doc.createElement('button');
        button.className = 'lang-btn';
        button.setAttribute('type', 'button');
        button.dataset.lang = lang;
        setDataI18n(button, key);
        button.setAttribute('data-i18n-attr', 'aria-label');
        button.setAttribute('data-i18n-attr-key', `${key}-aria`);
        button.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        languageToggle.appendChild(button);
        return button;
    };

    addLangButton('en', 'language-button-english', true);
    addLangButton('ru', 'language-button-russian', false);

    const container = doc.createElement('div');
    container.className = 'container';
    doc.body.appendChild(container);

    const header = doc.createElement('header');
    header.className = 'header';
    container.appendChild(header);

    const mainTitle = doc.createElement('h1');
    mainTitle.className = 'main-title';
    mainTitle.id = 'main-title';
    setDataI18n(mainTitle, 'main-title');
    header.appendChild(mainTitle);

    const subtitle = doc.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.id = 'subtitle';
    setDataI18n(subtitle, 'subtitle');
    header.appendChild(subtitle);

    const lotusQuote = doc.createElement('div');
    lotusQuote.className = 'lotus-quote';
    lotusQuote.id = 'lotus-quote';
    setDataI18n(lotusQuote, 'lotus-quote');
    header.appendChild(lotusQuote);

    const demoSection = doc.createElement('section');
    demoSection.className = 'demo-section';
    demoSection.setAttribute('aria-labelledby', 'demo-title');
    container.appendChild(demoSection);

    const demoTitle = doc.createElement('h2');
    demoTitle.className = 'section-title';
    demoTitle.id = 'demo-title';
    setDataI18n(demoTitle, 'demo-title');
    demoSection.appendChild(demoTitle);

    const demoSubtitle = doc.createElement('p');
    demoSubtitle.className = 'section-subtitle';
    demoSubtitle.id = 'demo-subtitle';
    setDataI18n(demoSubtitle, 'demo-subtitle');
    demoSection.appendChild(demoSubtitle);

    const sliderControls = doc.createElement('div');
    sliderControls.className = 'demo-controls';
    sliderControls.id = 'slider-controls';
    demoSection.appendChild(sliderControls);

    const resultsSection = doc.createElement('section');
    resultsSection.className = 'results-display';
    resultsSection.setAttribute('aria-live', 'polite');
    resultsSection.setAttribute('aria-atomic', 'true');
    demoSection.appendChild(resultsSection);

    const resultsHeading = doc.createElement('h3');
    resultsHeading.className = 'results-heading';
    resultsHeading.id = 'assessment-title';
    setDataI18n(resultsHeading, 'assessment-title');
    resultsSection.appendChild(resultsHeading);

    const resultsGrid = doc.createElement('div');
    resultsGrid.className = 'results-grid';
    resultsSection.appendChild(resultsGrid);

    const resultConfigs = [
        ['overall-score', '0.00', 'overall-label', 'overall-label'],
        ['risk-level', '-', 'risk-label', 'risk-label'],
        ['trust-score', '-', 'trust-label', 'trust-label'],
        ['readiness', '-', 'readiness-label', 'readiness-label'],
        ['transformation-count', '0', 'transformation-count-label', 'transformation-count-label']
    ];

    resultConfigs.forEach(([valueId, defaultText, labelId, labelKey]) => {
        const item = createResultItem(doc, valueId, defaultText, labelId, labelKey);
        resultsGrid.appendChild(item);
    });

    const trueStateSection = doc.createElement('section');
    trueStateSection.className = 'true-state-section';
    trueStateSection.setAttribute('aria-labelledby', 'true-state-title');
    container.appendChild(trueStateSection);

    const trueStateTitle = doc.createElement('h2');
    trueStateTitle.className = 'section-title';
    trueStateTitle.id = 'true-state-title';
    setDataI18n(trueStateTitle, 'true-state-title');
    trueStateSection.appendChild(trueStateTitle);

    const trueStateSubtitle = doc.createElement('p');
    trueStateSubtitle.className = 'section-subtitle';
    trueStateSubtitle.id = 'true-state-subtitle';
    setDataI18n(trueStateSubtitle, 'true-state-subtitle');
    trueStateSection.appendChild(trueStateSubtitle);

    const approachList = doc.createElement('div');
    approachList.className = 'true-state-approach-list';
    approachList.id = 'true-state-approach-list';
    approachList.setAttribute('role', 'group');
    approachList.setAttribute('data-i18n-attr', 'aria-label');
    approachList.setAttribute('data-i18n-attr-key', 'true-state-approach-list-label');
    trueStateSection.appendChild(approachList);

    const approachConfigs = [
        {
            slug: 'ai',
            buttonId: 'true-state-ai-button',
            panelId: 'true-state-panel-ai',
            titleKey: 'true-state-approach-ai-title',
            descriptionKey: 'true-state-approach-ai-description',
            pointKeys: ['true-state-approach-ai-point-1', 'true-state-approach-ai-point-2'],
            expanded: true
        },
        {
            slug: 'community',
            buttonId: 'true-state-community-button',
            panelId: 'true-state-panel-community',
            titleKey: 'true-state-approach-community-title',
            descriptionKey: 'true-state-approach-community-description',
            pointKeys: ['true-state-approach-community-point-1', 'true-state-approach-community-point-2'],
            expanded: false
        },
        {
            slug: 'lifeline',
            buttonId: 'true-state-lifeline-button',
            panelId: 'true-state-panel-lifeline',
            titleKey: 'true-state-approach-lifeline-title',
            descriptionKey: 'true-state-approach-lifeline-description',
            pointKeys: ['true-state-approach-lifeline-point-1', 'true-state-approach-lifeline-point-2'],
            expanded: false
        }
    ];

    approachConfigs.forEach(config => {
        const article = doc.createElement('article');
        article.className = 'true-state-approach';

        const button = doc.createElement('button');
        button.className = 'true-state-toggle';
        button.id = config.buttonId;
        button.dataset.approach = config.slug;
        button.setAttribute('type', 'button');
        button.setAttribute('aria-controls', config.panelId);
        button.setAttribute('aria-expanded', config.expanded ? 'true' : 'false');
        setDataI18n(button, config.titleKey);
        article.appendChild(button);

        const panel = doc.createElement('div');
        panel.className = 'true-state-panel';
        panel.id = config.panelId;
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-labelledby', config.buttonId);
        panel.setAttribute('aria-hidden', config.expanded ? 'false' : 'true');
        if (!config.expanded) {
            panel.setAttribute('hidden', 'true');
        }
        article.appendChild(panel);

        const description = doc.createElement('p');
        description.className = 'true-state-panel-text';
        setDataI18n(description, config.descriptionKey);
        panel.appendChild(description);

        const list = doc.createElement('ul');
        list.className = 'true-state-points';
        config.pointKeys.forEach(pointKey => {
            const item = doc.createElement('li');
            setDataI18n(item, pointKey);
            list.appendChild(item);
        });
        panel.appendChild(list);

        approachList.appendChild(article);
    });

    const philosophySection = doc.createElement('section');
    philosophySection.className = 'philosophy-section';
    philosophySection.setAttribute('aria-labelledby', 'philosophy-section-title');
    container.appendChild(philosophySection);

    const philosophyTitle = doc.createElement('h2');
    philosophyTitle.className = 'section-title';
    philosophyTitle.id = 'philosophy-section-title';
    setDataI18n(philosophyTitle, 'philosophy-section-title');
    philosophySection.appendChild(philosophyTitle);

    const philosophySubtitle = doc.createElement('p');
    philosophySubtitle.className = 'section-subtitle';
    philosophySubtitle.id = 'philosophy-subtitle';
    setDataI18n(philosophySubtitle, 'philosophy-subtitle');
    philosophySection.appendChild(philosophySubtitle);

    const philosophyGrid = doc.createElement('div');
    philosophyGrid.className = 'philosophy-grid';
    philosophySection.appendChild(philosophyGrid);

    const cardConfigs = [
        {
            id: 'compassion-card',
            titleKey: 'compassion-card-title',
            descKey: 'compassion-card-desc',
            ariaKey: 'compassion-card-aria-label',
            icon: '💖'
        },
        {
            id: 'consciousness-card',
            titleKey: 'consciousness-card-title',
            descKey: 'consciousness-card-desc',
            ariaKey: 'consciousness-card-aria-label',
            icon: '🧠'
        },
        {
            id: 'benefit-card',
            titleKey: 'benefit-card-title',
            descKey: 'benefit-card-desc',
            ariaKey: 'benefit-card-aria-label',
            icon: '🌍'
        },
        {
            id: 'responsibility-card',
            titleKey: 'responsibility-card-title',
            descKey: 'responsibility-card-desc',
            ariaKey: 'responsibility-card-aria-label',
            icon: '🛡️'
        }
    ];

    cardConfigs.forEach(config => {
        const card = createPhilosophyCard(doc, config);
        philosophyGrid.appendChild(card);
    });

    const visionSection = doc.createElement('section');
    visionSection.className = 'vision-section';
    visionSection.setAttribute('aria-labelledby', 'vision-title');
    container.appendChild(visionSection);

    const visionTitle = doc.createElement('h2');
    visionTitle.className = 'vision-title';
    visionTitle.id = 'vision-title';
    setDataI18n(visionTitle, 'vision-title');
    visionSection.appendChild(visionTitle);

    const visionText = doc.createElement('p');
    visionText.className = 'vision-text';
    visionText.id = 'vision-text';
    setDataI18n(visionText, 'vision-text');
    visionSection.appendChild(visionText);

    const footer = doc.createElement('footer');
    footer.className = 'footer';
    container.appendChild(footer);

    const footerContent = doc.createElement('div');
    footerContent.className = 'footer-content';
    footer.appendChild(footerContent);

    const footerTitle = doc.createElement('h2');
    footerTitle.className = 'footer-title';
    footerTitle.id = 'footer-title';
    setDataI18n(footerTitle, 'footer-title');
    footerContent.appendChild(footerTitle);

    const footerText = doc.createElement('p');
    footerText.className = 'footer-text';
    footerText.id = 'footer-text';
    setDataI18n(footerText, 'footer-text');
    footerContent.appendChild(footerText);

    return doc;
}

export function fireEvent(element, type, detail = {}) {
    const event = { type, ...detail };
    element.dispatchEvent(event);
    return event;
}
