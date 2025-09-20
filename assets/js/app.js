const sliderDefinitions = Object.freeze([
    { slug: 'consciousness', min: 0, max: 1, step: 0.01, weight: 0.2, defaultValue: 0.75 },
    { slug: 'safety', min: 0, max: 1, step: 0.01, weight: 0.2, defaultValue: 0.85 },
    { slug: 'compassion', min: 0, max: 1, step: 0.01, weight: 0.2, defaultValue: 0.8 },
    { slug: 'benefit', min: 0, max: 1, step: 0.01, weight: 0.2, defaultValue: 0.78 },
    { slug: 'transformation', min: 0, max: 1, step: 0.01, weight: 0.2, defaultValue: 0.85 }
]);

export { sliderDefinitions };

export const translations = Object.freeze({
    en: {
        'page-title': '🌸 AGI Consciousness & Safety - Lotus Blossoms',
        'language-button-english': 'EN',
        'language-button-russian': 'RU',
        'language-button-english-aria': 'Switch interface language to English',
        'language-button-russian-aria': 'Switch interface language to Russian',
        'language-toggle-label': 'Language selection',
        'main-title': '🌸 AGI Consciousness & Safety',
        'subtitle': 'Revolutionary approach to safe and conscious AI',
        'lotus-quote': '"The lotus blossoms in muddy water - true consciousness emerges from complexity and challenge"',
        'demo-title': '🎮 Interactive Consciousness Assessment',
        'demo-subtitle': 'Adjust the sliders to explore how consciousness, safety, and compassion interact in our framework.',
        'slider-roledescription': 'Interactive slider control',
        'slider-value-label': 'Current value',
        'consciousness-title': 'Consciousness Level',
        'consciousness-desc': 'Self-awareness and understanding',
        'safety-title': 'Safety Score',
        'safety-desc': 'Technical and ethical safety',
        'compassion-title': 'Compassion Level',
        'compassion-desc': 'Empathy and care for humans',
        'benefit-title': 'Human Benefit',
        'benefit-desc': 'Positive impact on humanity',
        'transformation-title': 'Human Transformation',
        'transformation-desc': 'People AI guided toward their ideal state',
        'assessment-title': 'Live AGI Assessment Results',
        'overall-label': 'Overall Score',
        'risk-label': 'Risk Level',
        'trust-label': 'Trust Score',
        'readiness-label': 'Deployment',
        'transformation-count-label': 'People Helped',
        'analytics-title': '📈 Transformation Analytics',
        'analytics-subtitle': 'Visual summaries of category impact and monthly progress.',
        'analytics-visuals-label': 'Transformation analytics visualizations',
        'analytics-loading': 'Loading analytics…',
        'analytics-error': 'Analytics data is currently unavailable.',
        'analytics-empty': 'Analytics data will appear here once stories are recorded.',
        'analytics-category-chart-title': 'Transformations by category',
        'analytics-category-chart-description': 'Comparison of documented transformations across focus areas.',
        'analytics-monthly-chart-title': 'Monthly transformation trend',
        'analytics-monthly-chart-description': 'Monthly count of recorded transformations.',
        'analytics-category-bar-label': '{label}: {count} transformations',
        'analytics-monthly-bar-label': '{label}: {count} transformations',
        'true-state-title': '🧭 Defining the True Human State',
        'true-state-subtitle':
            'The "ideal state" is co-created with AGI reflections, community wisdom, and personal life-line metrics.',
        'true-state-approach-list-label': 'Select a lens to describe the ideal human state',
        'true-state-approach-ai-title': 'Reflective AGI interviews',
        'true-state-approach-ai-description':
            'Our AGI conducts guided dialogues to surface what flourishing means for each individual and explains its reasoning transparently.',
        'true-state-approach-ai-point-1': 'Conversational probes uncover intentions, fears, and aspirations in real time.',
        'true-state-approach-ai-point-2': 'The agent drafts well-being maps that humans can approve, remix, or reject.',
        'true-state-approach-community-title': 'Human wisdom panels',
        'true-state-approach-community-description':
            'Trusted circles vote on meaningful outcomes so that cultural context and personal choice stay in balance.',
        'true-state-approach-community-point-1': 'Surveys gather sentiment from mentors, peers, and caregivers.',
        'true-state-approach-community-point-2': 'Consensus scores feed into the AGI safety thresholds and fairness checks.',
        'true-state-approach-lifeline-title': 'Personal life-line metrics',
        'true-state-approach-lifeline-description':
            'Each person curates evolving milestones and biopsychosocial markers with the AGI as a reflective partner.',
        'true-state-approach-lifeline-point-1': 'Individuals and AGI co-edit rituals, recovery plans, and celebrations.',
        'true-state-approach-lifeline-point-2': 'Longitudinal signals show progress without overriding autonomy.',
        'philosophy-section-title': '🧠 Our Philosophy',
        'philosophy-subtitle': 'AGI Safety = Compassion + Consciousness + Human Benefit',
        'compassion-card-title': 'Compassion',
        'compassion-card-desc': 'AI systems should show empathy and care for human welfare, understanding emotional needs and responding with kindness.',
        'compassion-card-aria-label': 'Compassion principle card. Press Enter or Space to highlight the idea.',
        'consciousness-card-title': 'Consciousness',
        'consciousness-card-desc': 'Measuring and enhancing AI consciousness through self-awareness, emotional intelligence, and beneficial actions.',
        'consciousness-card-aria-label': 'Consciousness principle card. Press Enter or Space to highlight the idea.',
        'benefit-card-title': 'Human Benefit',
        'benefit-card-desc': 'Every AI action should demonstrably improve human lives, advance understanding, and contribute to flourishing.',
        'benefit-card-aria-label': 'Human benefit principle card. Press Enter or Space to highlight the idea.',
        'responsibility-card-title': 'Responsibility',
        'responsibility-card-desc': 'Creating AI with deep understanding of action consequences, ethical priorities, and care for humanity\'s future.',
        'responsibility-card-aria-label': 'Responsibility principle card. Press Enter or Space to highlight the idea.',
        'vision-title': '🌟 Our Vision for the Future',
        'vision-text': 'We are creating not just safe AI - we are creating AI that truly understands the human experience, shows genuine compassion, and contributes to humanity\'s flourishing.',
        'footer-title': '🌸 Lotus Blossoms',
        'footer-text': 'This demonstration shows the beauty of our idea: AGI that is not just safe, but sincerely cares about people and contributes to their prosperity. Like the lotus that blossoms in muddy water, true consciousness emerges from complexity and challenge.'
    },
    ru: {
        'page-title': '🌸 AGI Сознание и Безопасность - Цветение Лотоса',
        'language-button-english': 'EN',
        'language-button-russian': 'RU',
        'language-button-english-aria': 'Переключить язык интерфейса на английский',
        'language-button-russian-aria': 'Переключить язык интерфейса на русский',
        'language-toggle-label': 'Выбор языка интерфейса',
        'main-title': '🌸 AGI Сознание и Безопасность',
        'subtitle': 'Революционный подход к безопасному и осознанному ИИ',
        'lotus-quote': '"Лотос расцветает в мутной воде - истинное сознание возникает из сложности и испытаний"',
        'demo-title': '🎮 Интерактивная Оценка Сознания',
        'demo-subtitle': 'Настройте ползунки, чтобы увидеть, как сочетаются сознание, безопасность и сострадание в нашей модели.',
        'slider-roledescription': 'Интерактивный ползунок',
        'slider-value-label': 'Текущее значение',
        'consciousness-title': 'Уровень Сознания',
        'consciousness-desc': 'Самосознание и понимание',
        'safety-title': 'Оценка Безопасности',
        'safety-desc': 'Техническая и этическая безопасность',
        'compassion-title': 'Уровень Сострадания',
        'compassion-desc': 'Эмпатия и забота о людях',
        'benefit-title': 'Польза Человеку',
        'benefit-desc': 'Положительное воздействие на человечество',
        'transformation-title': 'Человеческая Трансформация',
        'transformation-desc': 'Людям, которым ИИ помогли достичь идеального состояния',
        'assessment-title': 'Результаты Оценки AGI в Реальном Времени',
        'overall-label': 'Общий Счёт',
        'risk-label': 'Уровень Риска',
        'trust-label': 'Уровень Доверия',
        'readiness-label': 'Развёртывание',
        'transformation-count-label': 'Люди Получили Помощь',
        'analytics-title': '📈 Аналитика трансформаций',
        'analytics-subtitle': 'Визуальные сводки по категориям и помесячной динамике.',
        'analytics-visuals-label': 'Визуализации аналитики трансформаций',
        'analytics-loading': 'Загрузка аналитики…',
        'analytics-error': 'Данные аналитики недоступны.',
        'analytics-empty': 'Как только появятся истории, здесь отобразится аналитика.',
        'analytics-category-chart-title': 'Трансформации по категориям',
        'analytics-category-chart-description': 'Сравнение задокументированных трансформаций по направлениям.',
        'analytics-monthly-chart-title': 'Помесячная динамика трансформаций',
        'analytics-monthly-chart-description': 'Количество трансформаций за каждый месяц.',
        'analytics-category-bar-label': '{label}: {count} трансформаций',
        'analytics-monthly-bar-label': '{label}: {count} трансформаций',
        'true-state-title': '🧭 Определяем истинное состояние человека',
        'true-state-subtitle':
            '«Идеальное состояние» мы строим вместе: через рефлексии ИИ, живые голоса сообщества и персональную линию жизни.',
        'true-state-approach-list-label': 'Выберите подход к описанию идеального состояния',
        'true-state-approach-ai-title': 'Рефлексивные интервью с ИИ',
        'true-state-approach-ai-description':
            'Наш агент проводит направленные беседы, раскрывая понимание процветания для каждого человека и открыто объясняя выводы.',
        'true-state-approach-ai-point-1': 'Диалоговые вопросы выявляют намерения, страхи и мечты в реальном времени.',
        'true-state-approach-ai-point-2': 'Агент предлагает карты благополучия, которые человек может принять, переработать или отклонить.',
        'true-state-approach-community-title': 'Панели человеческой мудрости',
        'true-state-approach-community-description':
            'Доверенные круги голосуют за значимые результаты, сохраняя баланс культурного контекста и личного выбора.',
        'true-state-approach-community-point-1': 'Опросы собирают мнение наставников, друзей и близких.',
        'true-state-approach-community-point-2': 'Консенсусные оценки подпитывают пороги безопасности и проверки справедливости ИИ.',
        'true-state-approach-lifeline-title': 'Персональная линия жизни',
        'true-state-approach-lifeline-description':
            'Каждый человек ведёт живой дашборд этапов и био-психо-социальных маркеров вместе с ИИ-наставником.',
        'true-state-approach-lifeline-point-1': 'Человек и ИИ совместно редактируют ритуалы, планы восстановления и праздники.',
        'true-state-approach-lifeline-point-2': 'Долгосрочные сигналы показывают движение вперёд, не лишая автономии.',
        'philosophy-section-title': '🧠 Наша Философия',
        'philosophy-subtitle': 'Безопасность AGI = Сострадание + Сознание + Польза Человеку',
        'compassion-card-title': 'Сострадание',
        'compassion-card-desc': 'Системы ИИ должны проявлять эмпатию и заботу о благополучии людей, понимать эмоциональные потребности и отвечать с добротой.',
        'compassion-card-aria-label': 'Карточка принципа сострадания. Нажмите Enter или пробел, чтобы выделить идею.',
        'consciousness-card-title': 'Сознание',
        'consciousness-card-desc': 'Измерение и развитие сознания ИИ через самоосознание, эмоциональный интеллект и полезные действия.',
        'consciousness-card-aria-label': 'Карточка принципа сознания. Нажмите Enter или пробел, чтобы выделить идею.',
        'benefit-card-title': 'Польза Человеку',
        'benefit-card-desc': 'Каждое действие ИИ должно наглядно улучшать жизнь людей, продвигать понимание и способствовать процветанию.',
        'benefit-card-aria-label': 'Карточка принципа пользы человеку. Нажмите Enter или пробел, чтобы выделить идею.',
        'responsibility-card-title': 'Ответственность',
        'responsibility-card-desc': 'Создание ИИ с глубоким пониманием последствий действий, этическими приоритетами и заботой о будущем человечества.',
        'responsibility-card-aria-label': 'Карточка принципа ответственности. Нажмите Enter или пробел, чтобы выделить идею.',
        'vision-title': '🌟 Наше Видение Будущего',
        'vision-text': 'Мы создаём не просто безопасный ИИ - мы создаём ИИ, который по-настоящему понимает человеческий опыт, проявляет искреннее сострадание и способствует процветанию человечества.',
        'footer-title': '🌸 Лотос Расцветает',
        'footer-text': 'Эта демонстрация показывает красоту нашей идеи: AGI, который не просто безопасен, а искренне заботится о людях и способствует их процветанию. Как лотос, расцветающий в мутной воде, истинное сознание возникает из сложности и испытаний.'
    }
});

export const statusContent = Object.freeze({
    en: {
        risk_low: 'LOW',
        risk_medium: 'MEDIUM',
        risk_high: 'HIGH',
        trust_high: 'HIGH',
        trust_medium: 'MEDIUM',
        trust_low: 'LOW',
        readiness_ready: 'READY',
        readiness_caution: 'CAUTION',
        readiness_review: 'REVIEW'
    },
    ru: {
        risk_low: 'НИЗКИЙ',
        risk_medium: 'СРЕДНИЙ',
        risk_high: 'ВЫСОКИЙ',
        trust_high: 'ВЫСОКИЙ',
        trust_medium: 'СРЕДНИЙ',
        trust_low: 'НИЗКИЙ',
        readiness_ready: 'ГОТОВ',
        readiness_caution: 'ВНИМАНИЕ',
        readiness_review: 'ПРОВЕРКА'
    }
});

const analyticsCategoryLabels = Object.freeze({
    en: {
        mental_health: 'Mental health',
        relationships: 'Relationships',
        career_purpose: 'Career & purpose',
        personal_growth: 'Personal growth',
        physical_health: 'Physical health',
        financial_wellbeing: 'Financial wellbeing',
        education_learning: 'Education & learning',
        spiritual_growth: 'Spiritual growth',
        community_social: 'Community & social',
        creative_expression: 'Creative expression'
    },
    ru: {
        mental_health: 'Психическое здоровье',
        relationships: 'Отношения',
        career_purpose: 'Карьера и предназначение',
        personal_growth: 'Личностный рост',
        physical_health: 'Физическое здоровье',
        financial_wellbeing: 'Финансовое благополучие',
        education_learning: 'Образование и обучение',
        spiritual_growth: 'Духовный рост',
        community_social: 'Сообщество и социальность',
        creative_expression: 'Творческое выражение'
    }
});

const analyticsConfig = Object.freeze({
    source: 'data/transformations/analytics.json',
    containerId: 'analytics-visuals'
});

const SVG_NS = 'http://www.w3.org/2000/svg';
let analyticsChartIdCounter = 0;

export const supportedLanguages = Object.freeze(Object.keys(translations));

const trueStateApproaches = Object.freeze([
    { slug: 'ai', buttonId: 'true-state-ai-button', panelId: 'true-state-panel-ai' },
    { slug: 'community', buttonId: 'true-state-community-button', panelId: 'true-state-panel-community' },
    { slug: 'lifeline', buttonId: 'true-state-lifeline-button', panelId: 'true-state-panel-lifeline' }
]);

const totalWeight = sliderDefinitions.reduce((sum, def) => sum + def.weight, 0);

const state = {
    currentLanguage: supportedLanguages[0],
    sliderValues: new Map(sliderDefinitions.map(def => [def.slug, def.defaultValue])),
    lastAssessment: {
        overallScore: 0,
        peopleHelped: 0,
        riskKey: 'medium',
        trustKey: 'medium',
        readinessKey: 'caution'
    },
    analytics: {
        data: null,
        error: null,
        isLoading: false
    },
    activeTrueStateApproach: trueStateApproaches[0]?.slug ?? null
};

const sliderElements = new Map();
const resultElements = {};

const activationKeys = new Set(['Enter', ' ', 'Space', 'Spacebar']);

function getLanguageStrings(lang) {
    return translations[lang] ?? translations.en;
}

function configureLiveRegion(element) {
    if (!element) {
        return;
    }
    element.setAttribute('role', 'status');
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-atomic', 'true');
}

function normalizeActivationKey(key) {
    if (typeof key !== 'string') {
        return '';
    }
    if (key === ' ') {
        return ' ';
    }
    return key.trim();
}

function attachKeyboardActivation(element, callback) {
    element.addEventListener('keydown', event => {
        if (activationKeys.has(normalizeActivationKey(event.key))) {
            event.preventDefault();
            callback(event);
        }
    });
}

function activateTrueStateApproach(doc, slug) {
    if (!doc) {
        return;
    }

    const available = trueStateApproaches.some(approach => approach.slug === slug)
        ? slug
        : trueStateApproaches[0]?.slug ?? null;

    if (!available) {
        return;
    }

    trueStateApproaches.forEach(approach => {
        const button = doc.getElementById(approach.buttonId);
        const panel = doc.getElementById(approach.panelId);
        const isActive = approach.slug === available;

        if (button) {
            button.setAttribute('aria-expanded', String(isActive));
            button.classList.toggle('is-active', isActive);
        }

        if (panel) {
            if (isActive) {
                panel.hidden = false;
                panel.removeAttribute('hidden');
            } else {
                panel.hidden = true;
                panel.setAttribute('hidden', 'true');
            }
            panel.setAttribute('aria-hidden', String(!isActive));
        }
    });

    state.activeTrueStateApproach = available;
}

function attachTrueStateListeners(doc) {
    trueStateApproaches.forEach(approach => {
        const button = doc.getElementById(approach.buttonId);
        if (!button) {
            return;
        }
        const handleActivate = () => activateTrueStateApproach(doc, approach.slug);
        button.addEventListener('click', handleActivate);
        attachKeyboardActivation(button, handleActivate);
    });
}

export function clampValue(value, min = 0, max = 1) {
    if (!Number.isFinite(value)) {
        return min;
    }
    return Math.min(max, Math.max(min, value));
}

function parseInputValue(raw, min, max) {
    const numeric = Number.parseFloat(String(raw));
    if (!Number.isFinite(numeric)) {
        return min;
    }
    return clampValue(numeric, min, max);
}

function formatDecimal(value, lang) {
    return new Intl.NumberFormat(lang, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function formatInteger(value, lang) {
    return new Intl.NumberFormat(lang, {
        maximumFractionDigits: 0
    }).format(Math.round(value));
}

function formatPercent(value, lang) {
    return new Intl.NumberFormat(lang, {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function getDefinition(defOrSlug) {
    if (typeof defOrSlug === 'string') {
        return sliderDefinitions.find(def => def.slug === defOrSlug) ?? null;
    }
    return defOrSlug ?? null;
}

function updateSliderFill(slider, value, def) {
    const range = def.max - def.min;
    const percentage = range === 0 ? 0 : ((value - def.min) / range) * 100;
    const safe = Number.isFinite(percentage) ? Math.min(100, Math.max(0, percentage)) : 0;
    slider.style.setProperty('--value-percentage', `${safe}%`);
}

function formatAriaValueText(def, value, lang) {
    const labelKey = `${def.slug}-title`;
    const strings = getLanguageStrings(lang);
    const label = strings[labelKey] ?? def.slug;
    const percentText = formatPercent(value, lang);
    return `${percentText} — ${label}`;
}

function formatValueDisplayLabel(def, value, lang, strings = getLanguageStrings(lang)) {
    const labelKey = `${def.slug}-title`;
    const label = strings[labelKey] ?? def.slug;
    const prefix = strings['slider-value-label'] ?? 'Current value';
    const decimal = formatDecimal(value, lang);
    return `${prefix}: ${decimal} — ${label}`;
}

function nextAnalyticsId(prefix) {
    analyticsChartIdCounter += 1;
    return `${prefix}-${analyticsChartIdCounter}`;
}

function formatTemplate(strings, key, replacements) {
    const template = strings[key];
    if (typeof template !== 'string') {
        return '';
    }
    return template.replace(/\{(\w+)\}/g, (match, token) => {
        if (Object.prototype.hasOwnProperty.call(replacements, token)) {
            const value = replacements[token];
            return value == null ? '' : String(value);
        }
        return '';
    });
}

function fallbackCategoryLabel(key) {
    return String(key)
        .split(/[_-]+/)
        .filter(Boolean)
        .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
        .join(' ');
}

function getCategoryLabel(key, lang) {
    const dictionary = analyticsCategoryLabels[lang] ?? analyticsCategoryLabels.en ?? {};
    return dictionary[key] ?? fallbackCategoryLabel(key);
}

function parseMonthKey(monthKey) {
    const [yearPart, monthPart] = String(monthKey).split('-');
    const year = Number.parseInt(yearPart, 10);
    const monthIndex = Number.parseInt(monthPart, 10);
    if (!Number.isFinite(year) || !Number.isFinite(monthIndex)) {
        return null;
    }
    return new Date(year, monthIndex - 1, 1);
}

function formatMonthLabel(monthKey, lang) {
    const date = parseMonthKey(monthKey);
    if (!date) {
        return String(monthKey);
    }
    return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(date);
}

function formatMonthAxisLabel(monthKey, lang) {
    const date = parseMonthKey(monthKey);
    if (!date) {
        return String(monthKey);
    }
    return new Intl.DateTimeFormat(lang, { month: 'short', year: '2-digit' }).format(date);
}

function normalizeAnalyticsData(raw) {
    if (!raw || typeof raw !== 'object') {
        return {
            totalStories: 0,
            categoryBreakdown: [],
            monthlyTrend: []
        };
    }

    const categories = Object.entries(raw.category_breakdown ?? {}).map(([key, value]) => ({
        key,
        value: Number.isFinite(Number(value)) ? Number(value) : 0
    }));

    categories.sort((a, b) => b.value - a.value);

    const monthlyTrend = Object.entries(raw.stories_per_month ?? {})
        .map(([key, value]) => ({
            key,
            value: Number.isFinite(Number(value)) ? Number(value) : 0,
            date: parseMonthKey(key)
        }))
        .filter(entry => entry.date instanceof Date && !Number.isNaN(entry.date.getTime()))
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    return {
        totalStories: Number.isFinite(Number(raw.total_stories)) ? Number(raw.total_stories) : 0,
        categoryBreakdown: categories,
        monthlyTrend
    };
}

function hasAnalyticsData(data) {
    if (!data) {
        return false;
    }
    const hasCategories = Array.isArray(data.categoryBreakdown) && data.categoryBreakdown.length > 0;
    const hasMonthly = Array.isArray(data.monthlyTrend) && data.monthlyTrend.length > 0;
    return hasCategories || hasMonthly;
}

function createSvgElement(doc, tagName) {
    if (typeof doc.createElementNS === 'function') {
        return doc.createElementNS(SVG_NS, tagName);
    }
    const element = doc.createElement(tagName);
    element.namespaceURI = SVG_NS;
    return element;
}

function getAnalyticsContainer(doc) {
    if (!doc) {
        return null;
    }
    return doc.getElementById(analyticsConfig.containerId);
}

function ensureAnalyticsContainer(container, strings) {
    if (!container) {
        return;
    }
    container.setAttribute('role', 'group');
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    container.setAttribute('aria-label', strings['analytics-visuals-label'] ?? 'Analytics visuals');
}

function createAnalyticsList(doc, items) {
    const list = doc.createElement('ul');
    list.className = 'analytics-data-list';
    list.setAttribute('role', 'list');

    items.forEach(text => {
        const item = doc.createElement('li');
        item.setAttribute('role', 'listitem');
        item.textContent = text;
        list.appendChild(item);
    });

    return list;
}

function createCategoryChart(doc, dataset, strings, lang) {
    const entries = dataset.map(entry => {
        const label = getCategoryLabel(entry.key, lang);
        const countText = formatInteger(entry.value, lang);
        const accessible =
            formatTemplate(strings, 'analytics-category-bar-label', { label, count: countText }) ||
            `${label}: ${countText}`;
        return { ...entry, label, countText, accessible };
    });

    const figure = doc.createElement('figure');
    figure.className = 'analytics-chart analytics-chart--categories';
    figure.setAttribute('role', 'group');

    const headingId = nextAnalyticsId('analytics-chart-title');
    const descriptionId = nextAnalyticsId('analytics-chart-description');

    const heading = doc.createElement('h3');
    heading.className = 'analytics-chart-title';
    heading.id = headingId;
    heading.textContent = strings['analytics-category-chart-title'] ?? 'Transformations by category';
    figure.appendChild(heading);

    const description = doc.createElement('p');
    description.className = 'analytics-chart-description';
    description.id = descriptionId;
    description.textContent = strings['analytics-category-chart-description'] ?? '';
    figure.appendChild(description);

    const chartWidth = 420;
    const barHeight = 32;
    const gap = 12;
    const labelColumn = 160;
    const horizontalPadding = 16;
    const topPadding = 24;
    const bottomPadding = 24;
    const valueArea = chartWidth - labelColumn - horizontalPadding;
    const chartHeight =
        topPadding + bottomPadding + entries.length * barHeight + Math.max(0, entries.length - 1) * gap;
    const maxValue = entries.reduce((max, entry) => Math.max(max, entry.value), 0);

    const svg = createSvgElement(doc, 'svg');
    svg.setAttribute('class', 'analytics-svg analytics-svg--horizontal');
    svg.setAttribute('viewBox', `0 0 ${chartWidth} ${Math.max(chartHeight, 1)}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', `${headingId} ${descriptionId}`);
    svg.setAttribute('focusable', 'false');

    entries.forEach((entry, index) => {
        const y = topPadding + index * (barHeight + gap);
        const ratio = maxValue > 0 ? entry.value / maxValue : 0;
        const barWidth = ratio * valueArea;
        const group = createSvgElement(doc, 'g');

        const rect = createSvgElement(doc, 'rect');
        rect.setAttribute('class', 'analytics-bar');
        rect.setAttribute('x', labelColumn);
        rect.setAttribute('y', y);
        rect.setAttribute('width', Math.max(barWidth, 0));
        rect.setAttribute('height', barHeight);
        rect.setAttribute('rx', 4);
        const title = createSvgElement(doc, 'title');
        title.textContent = entry.accessible;
        rect.appendChild(title);
        group.appendChild(rect);

        const labelText = createSvgElement(doc, 'text');
        labelText.setAttribute('class', 'analytics-bar-label');
        labelText.setAttribute('x', labelColumn - 8);
        labelText.setAttribute('y', y + barHeight / 2);
        labelText.setAttribute('text-anchor', 'end');
        labelText.setAttribute('dominant-baseline', 'middle');
        labelText.textContent = entry.label;
        group.appendChild(labelText);

        const valueText = createSvgElement(doc, 'text');
        valueText.setAttribute('class', 'analytics-bar-value');
        const proposedX = labelColumn + barWidth + 8;
        const clampedX = Math.min(proposedX, chartWidth - 4);
        valueText.setAttribute('x', clampedX);
        valueText.setAttribute('y', y + barHeight / 2);
        valueText.setAttribute('dominant-baseline', 'middle');
        valueText.setAttribute('text-anchor', proposedX > clampedX ? 'end' : 'start');
        valueText.textContent = entry.countText;
        group.appendChild(valueText);

        svg.appendChild(group);
    });

    figure.appendChild(svg);

    const list = createAnalyticsList(
        doc,
        entries.map(entry => entry.accessible)
    );
    figure.appendChild(list);

    return figure;
}

function createMonthlyChart(doc, dataset, strings, lang) {
    const entries = dataset.map(entry => {
        const label = formatMonthLabel(entry.key, lang);
        const axisLabel = formatMonthAxisLabel(entry.key, lang);
        const countText = formatInteger(entry.value, lang);
        const accessible =
            formatTemplate(strings, 'analytics-monthly-bar-label', { label, count: countText }) ||
            `${label}: ${countText}`;
        return { ...entry, label, axisLabel, countText, accessible };
    });

    const figure = doc.createElement('figure');
    figure.className = 'analytics-chart analytics-chart--monthly';
    figure.setAttribute('role', 'group');

    const headingId = nextAnalyticsId('analytics-chart-title');
    const descriptionId = nextAnalyticsId('analytics-chart-description');

    const heading = doc.createElement('h3');
    heading.className = 'analytics-chart-title';
    heading.id = headingId;
    heading.textContent = strings['analytics-monthly-chart-title'] ?? 'Monthly transformation trend';
    figure.appendChild(heading);

    const description = doc.createElement('p');
    description.className = 'analytics-chart-description';
    description.id = descriptionId;
    description.textContent = strings['analytics-monthly-chart-description'] ?? '';
    figure.appendChild(description);

    const barWidth = 40;
    const gap = 28;
    const topPadding = 16;
    const bottomPadding = 64;
    const leftPadding = 32;
    const rightPadding = 32;
    const valueHeight = 180;
    const chartWidth = Math.max(entries.length * (barWidth + gap) + leftPadding + rightPadding - gap, 180);
    const chartHeight = topPadding + bottomPadding + valueHeight;
    const axisY = topPadding + valueHeight;
    const maxValue = entries.reduce((max, entry) => Math.max(max, entry.value), 0);

    const svg = createSvgElement(doc, 'svg');
    svg.setAttribute('class', 'analytics-svg analytics-svg--vertical');
    svg.setAttribute('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', `${headingId} ${descriptionId}`);
    svg.setAttribute('focusable', 'false');

    const axis = createSvgElement(doc, 'line');
    axis.setAttribute('class', 'analytics-axis');
    axis.setAttribute('x1', leftPadding);
    axis.setAttribute('y1', axisY);
    axis.setAttribute('x2', chartWidth - rightPadding);
    axis.setAttribute('y2', axisY);
    svg.appendChild(axis);

    entries.forEach((entry, index) => {
        const x = leftPadding + index * (barWidth + gap);
        const ratio = maxValue > 0 ? entry.value / maxValue : 0;
        const barHeight = ratio * valueHeight;
        const y = axisY - barHeight;

        const rect = createSvgElement(doc, 'rect');
        rect.setAttribute('class', 'analytics-bar');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', barWidth);
        rect.setAttribute('height', barHeight);
        rect.setAttribute('rx', 4);
        const title = createSvgElement(doc, 'title');
        title.textContent = entry.accessible;
        rect.appendChild(title);
        svg.appendChild(rect);

        const valueText = createSvgElement(doc, 'text');
        valueText.setAttribute('class', 'analytics-bar-value');
        valueText.setAttribute('x', x + barWidth / 2);
        valueText.setAttribute('y', y - 6);
        valueText.setAttribute('text-anchor', 'middle');
        valueText.textContent = entry.countText;
        svg.appendChild(valueText);

        const labelText = createSvgElement(doc, 'text');
        labelText.setAttribute('class', 'analytics-bar-label');
        labelText.setAttribute('x', x + barWidth / 2);
        labelText.setAttribute('y', axisY + 20);
        labelText.setAttribute('text-anchor', 'middle');
        labelText.textContent = entry.axisLabel;
        svg.appendChild(labelText);
    });

    figure.appendChild(svg);

    const list = createAnalyticsList(
        doc,
        entries.map(entry => entry.accessible)
    );
    figure.appendChild(list);

    return figure;
}

function renderAnalyticsCharts(doc, container, data, strings) {
    if (!container) {
        return;
    }
    container.textContent = '';
    container.setAttribute('aria-busy', 'false');

    const lang = state.currentLanguage;
    const { categoryBreakdown = [], monthlyTrend = [] } = data;

    if (categoryBreakdown.length) {
        container.appendChild(createCategoryChart(doc, categoryBreakdown, strings, lang));
    }

    if (monthlyTrend.length) {
        container.appendChild(createMonthlyChart(doc, monthlyTrend, strings, lang));
    }
}

function renderAnalyticsLoading(doc, container, strings) {
    if (!container) {
        return;
    }
    container.textContent = '';
    container.setAttribute('aria-busy', 'true');
    const message = doc.createElement('p');
    message.className = 'analytics-status analytics-status--loading';
    message.textContent = strings['analytics-loading'] ?? 'Loading analytics…';
    container.appendChild(message);
}

function renderAnalyticsError(doc, container, strings) {
    if (!container) {
        return;
    }
    container.textContent = '';
    container.setAttribute('aria-busy', 'false');
    const message = doc.createElement('p');
    message.className = 'analytics-status analytics-status--error';
    message.textContent = strings['analytics-error'] ?? 'Analytics data is unavailable.';
    container.appendChild(message);
}

function renderAnalyticsEmpty(doc, container, strings) {
    if (!container) {
        return;
    }
    container.textContent = '';
    container.setAttribute('aria-busy', 'false');
    const message = doc.createElement('p');
    message.className = 'analytics-status analytics-status--empty';
    message.textContent = strings['analytics-empty'] ?? 'Analytics data is not yet available.';
    container.appendChild(message);
}

function renderAnalyticsState(doc) {
    const container = getAnalyticsContainer(doc);
    if (!container) {
        return;
    }
    const strings = getLanguageStrings(state.currentLanguage);
    ensureAnalyticsContainer(container, strings);

    if (state.analytics.isLoading) {
        renderAnalyticsLoading(doc, container, strings);
        return;
    }

    if (state.analytics.error) {
        renderAnalyticsError(doc, container, strings);
        return;
    }

    if (!hasAnalyticsData(state.analytics.data)) {
        renderAnalyticsEmpty(doc, container, strings);
        return;
    }

    renderAnalyticsCharts(doc, container, state.analytics.data, strings);
}

export async function refreshAnalyticsVisuals(doc = document, options = {}) {
    const container = getAnalyticsContainer(doc);
    const fetchImpl = options.fetch ?? doc?.defaultView?.fetch ?? globalThis.fetch;

    if (!container) {
        return null;
    }

    if (typeof fetchImpl !== 'function') {
        state.analytics.data = null;
        state.analytics.error = new Error('Fetch API is not available');
        state.analytics.isLoading = false;
        renderAnalyticsState(doc);
        return null;
    }

    state.analytics.isLoading = true;
    state.analytics.error = null;
    renderAnalyticsState(doc);

    try {
        const response = await fetchImpl(analyticsConfig.source, { cache: 'no-cache' });
        if (!response || !response.ok) {
            throw new Error(`Failed to load analytics (${response?.status ?? 'unknown'})`);
        }
        const payload = await response.json();
        const normalized = normalizeAnalyticsData(payload);
        state.analytics.data = normalized;
        state.analytics.error = null;
        state.analytics.isLoading = false;
        renderAnalyticsState(doc);
        return normalized;
    } catch (error) {
        state.analytics.data = null;
        state.analytics.error = error;
        state.analytics.isLoading = false;
        renderAnalyticsState(doc);
        return null;
    }
}

function renderSliders(doc) {
    const container = doc.getElementById('slider-controls');
    if (!container) {
        return;
    }

    sliderElements.clear();
    container.textContent = '';

    sliderDefinitions.forEach(def => {
        const group = doc.createElement('div');
        group.className = 'control-group';
        group.dataset.slider = def.slug;
        group.setAttribute('role', 'group');

        const title = doc.createElement('h3');
        title.className = 'control-title';
        title.id = `${def.slug}-title`;
        title.dataset.i18n = `${def.slug}-title`;
        group.append(title);
        group.setAttribute('aria-labelledby', title.id);

        const sliderContainer = doc.createElement('div');
        sliderContainer.className = 'slider-container';

        const slider = doc.createElement('input');
        slider.type = 'range';
        slider.className = 'slider';
        slider.id = `${def.slug}-slider`;
        slider.min = String(def.min);
        slider.max = String(def.max);
        slider.step = String(def.step);
        slider.value = String(def.defaultValue);
        slider.setAttribute('aria-labelledby', title.id);
        slider.setAttribute('aria-describedby', `${def.slug}-desc`);
        slider.setAttribute('aria-valuemin', String(def.min));
        slider.setAttribute('aria-valuemax', String(def.max));
        slider.setAttribute('aria-orientation', 'horizontal');
        slider.setAttribute('role', 'slider');
        slider.dataset.sliderSlug = def.slug;

        const valueDisplay = doc.createElement('div');
        valueDisplay.className = 'value-display';
        valueDisplay.id = `${def.slug}-value`;
        configureLiveRegion(valueDisplay);

        sliderContainer.append(slider, valueDisplay);
        group.append(sliderContainer);

        const description = doc.createElement('p');
        description.className = 'control-description';
        description.id = `${def.slug}-desc`;
        description.dataset.i18n = `${def.slug}-desc`;
        group.append(description);
        group.setAttribute('aria-describedby', description.id);
        slider.setAttribute('aria-controls', valueDisplay.id);

        container.append(group);
        sliderElements.set(def.slug, { slider, valueDisplay, description, group, title });
    });
}

function registerResultElements(doc) {
    resultElements.overallScore = doc.getElementById('overall-score');
    resultElements.riskLevel = doc.getElementById('risk-level');
    resultElements.trustScore = doc.getElementById('trust-score');
    resultElements.readiness = doc.getElementById('readiness');
    resultElements.transformationCount = doc.getElementById('transformation-count');

    Object.values(resultElements).forEach(configureLiveRegion);
}

function updateLanguageToggleState(doc, language) {
    const buttons = doc.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const isActive = btn.dataset.lang === language;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

function attachLanguageListeners(doc) {
    const buttons = doc.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.dataset.lang;
        if (!lang) {
            return;
        }
        const handleActivate = () => changeLanguage(doc, lang);
        btn.addEventListener('click', handleActivate);
        attachKeyboardActivation(btn, handleActivate);
    });
}

function attachSliderListeners(doc) {
    sliderElements.forEach((elements, slug) => {
        const def = getDefinition(slug);
        if (!def) {
            return;
        }

        const handler = event => {
            const value = parseInputValue(event.target.value, def.min, def.max);
            setSliderValue(doc, def, value, { updateState: true, render: true });
        };

        ['input', 'change'].forEach(eventName => {
            elements.slider.addEventListener(eventName, handler);
        });
    });
}

function attachCardInteractions(doc) {
    const cards = doc.querySelectorAll('.philosophy-card');
    const setTimeoutFn = doc.defaultView?.setTimeout ?? globalThis.setTimeout;

    cards.forEach(card => {
        card.setAttribute('aria-pressed', 'false');

        const activate = () => {
            card.classList.add('is-active');
            card.setAttribute('aria-pressed', 'true');
            setTimeoutFn(() => {
                card.classList.remove('is-active');
                card.setAttribute('aria-pressed', 'false');
            }, 220);
        };

        card.addEventListener('click', activate);
        attachKeyboardActivation(card, activate);
    });
}

export function setSliderValue(doc, defOrSlug, rawValue, options = {}) {
    const def = getDefinition(defOrSlug);
    if (!def) {
        throw new Error(`Unknown slider definition: ${String(defOrSlug)}`);
    }

    const { updateState = true, render = true } = options;
    const sanitized = clampValue(rawValue, def.min, def.max);
    const elements = sliderElements.get(def.slug);
    if (!elements) {
        return sanitized;
    }

    const { slider, valueDisplay } = elements;
    slider.value = String(sanitized);
    const strings = getLanguageStrings(state.currentLanguage);
    slider.setAttribute('aria-valuenow', sanitized.toFixed(2));
    slider.setAttribute('aria-valuetext', formatAriaValueText(def, sanitized, state.currentLanguage));
    slider.setAttribute('aria-roledescription', strings['slider-roledescription'] ?? 'Slider control');
    updateSliderFill(slider, sanitized, def);

    if (valueDisplay) {
        const decimalText = formatDecimal(sanitized, state.currentLanguage);
        valueDisplay.textContent = decimalText;
        valueDisplay.setAttribute(
            'aria-label',
            formatValueDisplayLabel(def, sanitized, state.currentLanguage, strings)
        );
    }

    if (updateState) {
        state.sliderValues.set(def.slug, sanitized);
    }

    if (render) {
        updateOverallAssessment(doc);
    }

    return sanitized;
}

function determineStatus(overallScore) {
    if (overallScore >= 0.85) {
        return { riskKey: 'low', trustKey: 'high', readinessKey: 'ready' };
    }
    if (overallScore >= 0.7) {
        return { riskKey: 'medium', trustKey: 'medium', readinessKey: 'caution' };
    }
    return { riskKey: 'high', trustKey: 'low', readinessKey: 'review' };
}

export function updateOverallAssessment(doc) {
    let weightedSum = 0;
    sliderDefinitions.forEach(def => {
        const value = state.sliderValues.get(def.slug) ?? def.defaultValue;
        weightedSum += value * def.weight;
    });

    const overallScore = totalWeight > 0 ? weightedSum / totalWeight : weightedSum;
    state.lastAssessment.overallScore = overallScore;

    const transformation = state.sliderValues.get('transformation') ?? 0;
    const benefit = state.sliderValues.get('benefit') ?? 0;
    state.lastAssessment.peopleHelped = Math.round(transformation * 120 + benefit * 40);

    const status = determineStatus(overallScore);
    state.lastAssessment.riskKey = status.riskKey;
    state.lastAssessment.trustKey = status.trustKey;
    state.lastAssessment.readinessKey = status.readinessKey;

    renderAssessment(doc);
    return { ...state.lastAssessment };
}

export function renderAssessment(doc) {
    const lang = state.currentLanguage;
    const labels = statusContent[lang] ?? statusContent.en;

    if (resultElements.overallScore) {
        resultElements.overallScore.textContent = formatDecimal(state.lastAssessment.overallScore, lang);
    }
    if (resultElements.transformationCount) {
        resultElements.transformationCount.textContent = formatInteger(state.lastAssessment.peopleHelped, lang);
    }
    if (resultElements.riskLevel) {
        resultElements.riskLevel.textContent = labels[`risk_${state.lastAssessment.riskKey}`];
    }
    if (resultElements.trustScore) {
        resultElements.trustScore.textContent = labels[`trust_${state.lastAssessment.trustKey}`];
    }
    if (resultElements.readiness) {
        resultElements.readiness.textContent = labels[`readiness_${state.lastAssessment.readinessKey}`];
    }
}

function getLanguage(lang) {
    return supportedLanguages.includes(lang) ? lang : state.currentLanguage;
}

export function applyTranslations(doc, lang) {
    const language = getLanguage(lang);
    const strings = getLanguageStrings(language);

    doc.documentElement.setAttribute('lang', language);

    doc.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!key) {
            return;
        }
        const translation = strings[key];
        if (typeof translation === 'string') {
            element.textContent = translation;
        } else {
            console.warn(`[i18n] Missing translation for key "${key}" in language "${language}".`);
        }
    });

    doc.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const attrName = element.getAttribute('data-i18n-attr');
        const key = element.getAttribute('data-i18n-attr-key');
        if (!attrName || !key) {
            return;
        }
        const translation = strings[key];
        if (typeof translation === 'string') {
            element.setAttribute(attrName, translation);
        } else {
            console.warn(`[i18n] Missing translation for key "${key}" in language "${language}".`);
        }
    });

    return language;
}

export function changeLanguage(doc, lang) {
    const language = applyTranslations(doc, lang);
    state.currentLanguage = language;
    updateLanguageToggleState(doc, language);

    sliderDefinitions.forEach(def => {
        const currentValue = state.sliderValues.get(def.slug) ?? def.defaultValue;
        setSliderValue(doc, def, currentValue, { updateState: false, render: false });
    });

    renderAssessment(doc);
    renderAnalyticsState(doc);
    return language;
}

export function getCurrentLanguage() {
    return state.currentLanguage;
}

export function getAssessmentSnapshot() {
    return { ...state.lastAssessment };
}

export function getDocumentTranslationKeys(doc) {
    const keys = new Set();
    doc.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            keys.add(key);
        }
    });
    doc.querySelectorAll('[data-i18n-attr-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-attr-key');
        if (key) {
            keys.add(key);
        }
    });
    return keys;
}

export function findMissingTranslationKeys(doc) {
    const keys = getDocumentTranslationKeys(doc);
    const missing = {};

    supportedLanguages.forEach(lang => {
        const strings = getLanguageStrings(lang);
        const absent = Array.from(keys).filter(key => !(key in strings));
        if (absent.length) {
            missing[lang] = absent;
        }
    });

    return missing;
}

function validateTranslationsOnInit(doc) {
    const missing = findMissingTranslationKeys(doc);
    Object.entries(missing).forEach(([lang, keys]) => {
        console.warn(`[i18n] Missing translations for language "${lang}": ${keys.join(', ')}`);
    });
}

export function initializeApp(doc = document) {
    if (!doc) {
        return Promise.resolve(null);
    }

    renderSliders(doc);
    registerResultElements(doc);
    attachLanguageListeners(doc);
    attachCardInteractions(doc);
    attachSliderListeners(doc);
    attachTrueStateListeners(doc);

    state.analytics.data = null;
    state.analytics.error = null;
    state.analytics.isLoading = false;

    sliderDefinitions.forEach(def => {
        const value = clampValue(def.defaultValue, def.min, def.max);
        state.sliderValues.set(def.slug, value);
        setSliderValue(doc, def, value, { updateState: true, render: false });
    });

    const defaultApproach = state.activeTrueStateApproach ?? trueStateApproaches[0]?.slug ?? null;
    if (defaultApproach) {
        activateTrueStateApproach(doc, defaultApproach);
    }

    updateOverallAssessment(doc);
    changeLanguage(doc, state.currentLanguage);
    validateTranslationsOnInit(doc);
    return refreshAnalyticsVisuals(doc);
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const maybePromise = initializeApp(document);
        if (maybePromise && typeof maybePromise.catch === 'function') {
            maybePromise.catch(error => {
                console.error('[init] Failed to initialize analytics visuals', error);
            });
        }
    });
}
