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
        'transformation-stories-title': '🌱 Transformation Stories',
        'transformation-stories-subtitle':
            'Real accounts of people partnering with conscious AI to discover their true trajectory.',
        'transformation-story-empty':
            'We are curating the first journeys now. Share yours below to inspire the community.',
        'transformation-story-submission-title': 'Share your transformation',
        'transformation-story-submission-copy':
            'Tell us how an AGI guide supported your path. Your draft stays private until we review it together.',
        'transformation-story-form-contributor-label': 'Your name (optional)',
        'transformation-story-form-contributor-placeholder': 'How should we reference you?',
        'transformation-story-form-guide-label': 'AI guide or collaborator',
        'transformation-story-form-guide-placeholder':
            'Name the agent, assistant, or practice that guided you',
        'transformation-story-form-initial-label': 'Starting point',
        'transformation-story-form-initial-placeholder': 'Where were you before the transformation?',
        'transformation-story-form-final-label': 'Transformed state',
        'transformation-story-form-final-placeholder': 'What shifted after the experience?',
        'transformation-story-form-story-label': 'Transformation story',
        'transformation-story-form-story-placeholder':
            'Share highlights of the journey, breakthroughs, and support that made a difference.',
        'transformation-story-form-submit': 'Submit your story',
        'transformation-story-ai-label': 'AI guide',
        'transformation-story-initial-label': 'Starting point',
        'transformation-story-final-label': 'Transformed state',
        'transformation-story-category-label': 'Focus',
        'transformation-story-sustainability-label': 'Sustainability',
        'transformation-story-contributor-label': 'Shared by',
        'transformation-story-card-aria-label':
            'Transformation story guided by {aiSystem}. Summary: {summary}. Outcome: {finalState}.',
        'transformation-story-unknown-ai': 'Unknown guide',
        'transformation-story-unknown-state': 'Unknown',
        'transformation-story-untitled': 'Transformation in progress',
        'transformation-story-draft-guide-fallback': 'Community guide',
        'transformation-story-form-success':
            'Thank you! Your story draft is saved locally until we can review it.',
        'transformation-story-form-error': 'We could not submit your story. Please try again.',
        'transformation-story-form-required': 'Please add a few words about your transformation before submitting.',
        'transformation-story-load-error':
            'We could not load transformation stories right now. Please check back soon.',
        'transformation-story-draft-category': 'Community submission',
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
        'transformation-stories-title': '🌱 Истории Трансформации',
        'transformation-stories-subtitle':
            'Реальные истории людей, которые вместе с осознанным ИИ нашли свою истинную траекторию.',
        'transformation-story-empty':
            'Мы собираем первые истории. Поделитесь своей, чтобы вдохновить сообщество.',
        'transformation-story-submission-title': 'Расскажите о своей трансформации',
        'transformation-story-submission-copy':
            'Опишите, как ИИ-наставник поддержал ваш путь. Черновик останется приватным до проверки.',
        'transformation-story-form-contributor-label': 'Ваше имя (необязательно)',
        'transformation-story-form-contributor-placeholder': 'Как вас представить?',
        'transformation-story-form-guide-label': 'ИИ-наставник или соавтор',
        'transformation-story-form-guide-placeholder':
            'Имя агента, ассистента или практики, которая помогла',
        'transformation-story-form-initial-label': 'Исходная точка',
        'transformation-story-form-initial-placeholder': 'Где вы были до трансформации?',
        'transformation-story-form-final-label': 'Итоговое состояние',
        'transformation-story-form-final-placeholder': 'Что изменилось после опыта?',
        'transformation-story-form-story-label': 'История трансформации',
        'transformation-story-form-story-placeholder':
            'Поделитесь ключевыми моментами, инсайтами и поддержкой, которая помогла.',
        'transformation-story-form-submit': 'Отправить историю',
        'transformation-story-ai-label': 'ИИ-наставник',
        'transformation-story-initial-label': 'Исходная точка',
        'transformation-story-final-label': 'Итоговое состояние',
        'transformation-story-category-label': 'Фокус',
        'transformation-story-sustainability-label': 'Устойчивость',
        'transformation-story-contributor-label': 'Автор',
        'transformation-story-card-aria-label':
            'История трансформации с участием {aiSystem}. Кратко: {summary}. Результат: {finalState}.',
        'transformation-story-unknown-ai': 'Неизвестный наставник',
        'transformation-story-unknown-state': 'Неизвестно',
        'transformation-story-untitled': 'История трансформации',
        'transformation-story-draft-guide-fallback': 'Наставник сообщества',
        'transformation-story-form-success':
            'Спасибо! Черновик истории сохранён локально и ожидает рассмотрения.',
        'transformation-story-form-error': 'Не удалось отправить историю. Попробуйте ещё раз.',
        'transformation-story-form-required': 'Пожалуйста, добавьте несколько слов о трансформации перед отправкой.',
        'transformation-story-load-error':
            'Сейчас не удалось загрузить истории трансформации. Попробуйте позже.',
        'transformation-story-draft-category': 'История сообщества',
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
    activeTrueStateApproach: trueStateApproaches[0]?.slug ?? null,
    transformationStories: [],
    storyDrafts: [],
    storyLoadPromise: null,
    storyFeedbackKey: null,
    storyFeedbackIsError: false
};

const sliderElements = new Map();
const resultElements = {};
const storyElements = {
    list: null,
    empty: null,
    form: null,
    feedback: null
};

const storyFieldIds = Object.freeze({
    contributor: 'story-name',
    guide: 'story-guide',
    initial: 'story-initial',
    final: 'story-final',
    summary: 'story-summary'
});

const defaultStoriesEndpoint = 'data/transformations/stories.json';

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

function sanitizeText(value) {
    if (value == null) {
        return '';
    }
    return String(value).trim();
}

function optionalText(value) {
    const text = sanitizeText(value);
    return text ? text : null;
}

function createUniqueStoryId() {
    return `story-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function fillTemplate(template, replacements) {
    return Object.entries(replacements).reduce((result, [token, replacement]) => {
        const safeReplacement = sanitizeText(replacement);
        return result.split(token).join(safeReplacement);
    }, template);
}

function humanizeStoryValue(value) {
    const text = sanitizeText(value);
    if (!text) {
        return '';
    }
    return text
        .replace(/[_-]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ');
}

function normalizeStory(raw, options = {}) {
    if (!raw || typeof raw !== 'object') {
        return null;
    }

    const fallbackCategory = optionalText(options.fallbackCategory);
    const parsedScore = Number.parseFloat(raw.sustainability_score);

    const normalized = {
        story_id: optionalText(raw.story_id) ?? createUniqueStoryId(),
        ai_system_name: optionalText(raw.ai_system_name),
        initial_state: optionalText(raw.initial_state),
        final_state: optionalText(raw.final_state),
        transformation_category: optionalText(raw.transformation_category) ?? fallbackCategory,
        transformation_quality: optionalText(raw.transformation_quality),
        sustainability_score: Number.isFinite(parsedScore) ? clampValue(parsedScore, 0, 1) : null,
        story_summary: optionalText(raw.story_summary),
        detailed_narrative: optionalText(raw.detailed_narrative) ?? optionalText(raw.story_summary),
        contributor_name: optionalText(raw.contributor_name),
        source: options.source ?? raw.source ?? raw.__source ?? 'remote'
    };

    return normalized;
}

function formatStoryState(value, strings) {
    const humanized = humanizeStoryValue(value);
    if (humanized) {
        return humanized;
    }
    return strings['transformation-story-unknown-state'] ?? '';
}

function formatStoryCategory(story, strings) {
    if (story.transformation_category) {
        return humanizeStoryValue(story.transformation_category);
    }
    if (story.source === 'draft') {
        return strings['transformation-story-draft-category'] ?? '';
    }
    return '';
}

function formatStorySustainability(story, lang) {
    if (!Number.isFinite(story.sustainability_score)) {
        return '';
    }
    return formatPercent(clampValue(story.sustainability_score, 0, 1), lang);
}

function formatStoryAriaLabel(story, strings, lang) {
    const template = strings['transformation-story-card-aria-label'];
    if (typeof template !== 'string') {
        return '';
    }

    const summary =
        story.story_summary ||
        story.detailed_narrative ||
        strings['transformation-story-untitled'] ||
        '';

    const aiSystem =
        story.ai_system_name ||
        strings['transformation-story-draft-guide-fallback'] ||
        strings['transformation-story-unknown-ai'] ||
        '';

    const finalState = story.final_state
        ? formatStoryState(story.final_state, strings)
        : strings['transformation-story-unknown-state'] ?? '';

    return fillTemplate(template, {
        '{aiSystem}': aiSystem,
        '{summary}': summary,
        '{finalState}': finalState,
        '{sustainability}': formatStorySustainability(story, lang)
    });
}

function createMetaParagraph(doc, label, value) {
    const sanitizedValue = sanitizeText(value);
    if (!sanitizedValue) {
        return null;
    }

    const paragraph = doc.createElement('p');
    paragraph.className = 'story-meta';

    if (label) {
        const labelSpan = doc.createElement('span');
        labelSpan.className = 'story-meta-label';
        labelSpan.textContent = `${label}:`;
        paragraph.append(labelSpan);
    }

    const valueSpan = doc.createElement('span');
    valueSpan.className = 'story-meta-value';
    valueSpan.textContent = sanitizedValue;
    paragraph.append(valueSpan);

    return paragraph;
}

function getCombinedStories() {
    const seen = new Set();
    const combined = [];
    [...state.storyDrafts, ...state.transformationStories].forEach(story => {
        if (!story) {
            return;
        }
        const id = story.story_id;
        if (id && seen.has(id)) {
            return;
        }
        if (id) {
            seen.add(id);
        }
        combined.push(story);
    });
    return combined;
}

function createStoryCard(doc, story, strings, lang) {
    if (!story) {
        return null;
    }

    const card = doc.createElement('article');
    card.className = 'story-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    if (story.story_id) {
        card.dataset.storyId = story.story_id;
    }
    if (story.source) {
        card.dataset.storySource = story.source;
    }

    const ariaLabel = formatStoryAriaLabel(story, strings, lang);
    if (ariaLabel) {
        card.setAttribute('aria-label', ariaLabel);
    }

    const title = doc.createElement('h3');
    title.className = 'story-title';
    title.textContent =
        story.story_summary ||
        story.detailed_narrative ||
        strings['transformation-story-untitled'] ||
        '';
    card.append(title);

    const aiLabel = strings['transformation-story-ai-label'];
    const aiValue =
        story.ai_system_name ||
        strings['transformation-story-draft-guide-fallback'] ||
        strings['transformation-story-unknown-ai'] ||
        '';
    const aiMeta = createMetaParagraph(doc, aiLabel, aiValue);
    if (aiMeta) {
        card.append(aiMeta);
    }

    const initialMeta = story.initial_state
        ? createMetaParagraph(
              doc,
              strings['transformation-story-initial-label'],
              formatStoryState(story.initial_state, strings)
          )
        : null;
    if (initialMeta) {
        card.append(initialMeta);
    }

    const finalMeta = story.final_state
        ? createMetaParagraph(
              doc,
              strings['transformation-story-final-label'],
              formatStoryState(story.final_state, strings)
          )
        : null;
    if (finalMeta) {
        card.append(finalMeta);
    }

    const categoryText = formatStoryCategory(story, strings);
    const categoryMeta = categoryText
        ? createMetaParagraph(doc, strings['transformation-story-category-label'], categoryText)
        : null;
    if (categoryMeta) {
        card.append(categoryMeta);
    }

    const sustainabilityText = formatStorySustainability(story, lang);
    const sustainabilityMeta = sustainabilityText
        ? createMetaParagraph(
              doc,
              strings['transformation-story-sustainability-label'],
              sustainabilityText
          )
        : null;
    if (sustainabilityMeta) {
        card.append(sustainabilityMeta);
    }

    const contributorMeta = story.contributor_name
        ? createMetaParagraph(
              doc,
              strings['transformation-story-contributor-label'],
              story.contributor_name
          )
        : null;
    if (contributorMeta) {
        card.append(contributorMeta);
    }

    if (story.detailed_narrative && story.detailed_narrative !== story.story_summary) {
        const body = doc.createElement('p');
        body.className = 'story-body';
        body.textContent = story.detailed_narrative;
        card.append(body);
    }

    return card;
}

function renderTransformationStories(doc) {
    const list = storyElements.list ?? doc.getElementById('transformation-stories-list');
    if (!list) {
        return;
    }

    const lang = state.currentLanguage;
    const strings = getLanguageStrings(lang);
    const emptyMessage = storyElements.empty ?? doc.getElementById('transformation-stories-empty');

    list.textContent = '';

    const stories = getCombinedStories();
    list.dataset.storyCount = String(stories.length);
    list.setAttribute('data-story-count', String(stories.length));

    if (!stories.length) {
        if (emptyMessage) {
            emptyMessage.hidden = false;
            emptyMessage.removeAttribute('hidden');
        }
        return;
    }

    if (emptyMessage) {
        emptyMessage.hidden = true;
        emptyMessage.setAttribute('hidden', 'true');
    }

    stories
        .map(story => createStoryCard(doc, story, strings, lang))
        .filter(Boolean)
        .forEach(card => {
            list.append(card);
        });
}

function updateStoryFeedback(messageKey, isError = false, doc = document) {
    state.storyFeedbackKey = messageKey ?? null;
    state.storyFeedbackIsError = Boolean(isError);

    const feedback = storyElements.feedback ?? doc.getElementById('transformation-story-feedback');
    if (!feedback) {
        return;
    }

    if (!messageKey) {
        feedback.textContent = '';
        feedback.hidden = true;
        feedback.setAttribute('hidden', 'true');
        delete feedback.dataset.feedbackState;
        return;
    }

    const strings = getLanguageStrings(state.currentLanguage);
    const message = strings[messageKey];
    if (typeof message !== 'string') {
        feedback.textContent = '';
        feedback.hidden = true;
        feedback.setAttribute('hidden', 'true');
        delete feedback.dataset.feedbackState;
        return;
    }

    feedback.hidden = false;
    feedback.removeAttribute('hidden');
    feedback.textContent = message;
    feedback.dataset.feedbackState = isError ? 'error' : 'success';
}

function clearStoryForm(doc) {
    Object.values(storyFieldIds).forEach(id => {
        const field = doc.getElementById(id);
        if (field) {
            field.value = '';
        }
    });
}

function attachStoryFormListener(doc) {
    const form = storyElements.form ?? doc.getElementById('transformation-story-form');
    if (!form) {
        return;
    }

    form.addEventListener('submit', event => {
        if (event?.preventDefault) {
            event.preventDefault();
        }

        const strings = getLanguageStrings(state.currentLanguage);
        try {
            const summaryField = doc.getElementById(storyFieldIds.summary);
            const summary = sanitizeText(summaryField?.value);

            if (!summary) {
                updateStoryFeedback('transformation-story-form-required', true, doc);
                return;
            }

            const guideValue = optionalText(doc.getElementById(storyFieldIds.guide)?.value);
            const contributorValue = optionalText(doc.getElementById(storyFieldIds.contributor)?.value);

            const draft = normalizeStory(
                {
                    story_id: createUniqueStoryId(),
                    ai_system_name:
                        guideValue ?? strings['transformation-story-draft-guide-fallback'] ?? '',
                    story_summary: summary,
                    detailed_narrative: summary,
                    initial_state: doc.getElementById(storyFieldIds.initial)?.value,
                    final_state: doc.getElementById(storyFieldIds.final)?.value,
                    transformation_category: 'community_submission',
                    sustainability_score: null,
                    contributor_name: contributorValue
                },
                { source: 'draft', fallbackCategory: 'community_submission' }
            );

            if (!draft.ai_system_name) {
                draft.ai_system_name = strings['transformation-story-draft-guide-fallback'] ?? '';
            }

            if (!draft.story_summary) {
                draft.story_summary = strings['transformation-story-untitled'] ?? '';
            }

            state.storyDrafts.unshift(draft);
            renderTransformationStories(doc);
            updateStoryFeedback('transformation-story-form-success', false, doc);
            clearStoryForm(doc);
        } catch (error) {
            console.error('Failed to process transformation story submission', error);
            updateStoryFeedback('transformation-story-form-error', true, doc);
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

function registerStoryElements(doc) {
    storyElements.list = doc.getElementById('transformation-stories-list');
    storyElements.empty = doc.getElementById('transformation-stories-empty');
    storyElements.form = doc.getElementById('transformation-story-form');
    storyElements.feedback = doc.getElementById('transformation-story-feedback');

    if (storyElements.list) {
        storyElements.list.setAttribute('data-story-count', String(getCombinedStories().length));
    }

    if (storyElements.feedback) {
        configureLiveRegion(storyElements.feedback);
        storyElements.feedback.hidden = true;
        storyElements.feedback.setAttribute('hidden', 'true');
    }

    attachStoryFormListener(doc);
}

async function loadTransformationStories(doc, options = {}) {
    const fetchImpl = options.fetchImpl ?? options.fetchImplementation ?? globalThis.fetch;
    const source = options.source ?? options.storySource ?? defaultStoriesEndpoint;
    const list = storyElements.list ?? doc.getElementById('transformation-stories-list');

    if (list) {
        list.setAttribute('aria-busy', 'true');
    }

    if (typeof fetchImpl !== 'function') {
        renderTransformationStories(doc);
        if (list) {
            list.setAttribute('aria-busy', 'false');
        }
        return [];
    }

    let stories = [];
    try {
        const response = await fetchImpl(source, { headers: { Accept: 'application/json' } });
        if (!response || typeof response.json !== 'function') {
            throw new Error('Invalid transformation stories response');
        }
        const payload = await response.json();
        const dataStories = Array.isArray(payload?.stories) ? payload.stories : [];
        stories = dataStories
            .map(item => normalizeStory(item, { source: 'remote' }))
            .filter(Boolean);
        state.transformationStories = stories;
        updateStoryFeedback(null, false, doc);
    } catch (error) {
        console.error('Failed to load transformation stories', error);
        updateStoryFeedback('transformation-story-load-error', true, doc);
    } finally {
        renderTransformationStories(doc);
        if (list) {
            list.setAttribute('aria-busy', 'false');
        }
    }

    return stories;
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
    renderTransformationStories(doc);
    updateStoryFeedback(state.storyFeedbackKey, state.storyFeedbackIsError, doc);
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

export function initializeApp(doc = document, options = {}) {
    if (!doc) {
        return Promise.resolve([]);
    }

    const providedFetch = typeof options.fetchImplementation === 'function' || typeof options.fetchImpl === 'function';
    const fetchImpl =
        options.fetchImplementation ?? options.fetchImpl ?? (providedFetch ? undefined : globalThis.fetch);
    const loadPreference =
        options.shouldLoadStories ??
        (providedFetch || (typeof window !== 'undefined' && typeof (fetchImpl ?? globalThis.fetch) === 'function'));
    const storySource = options.storySource ?? defaultStoriesEndpoint;

    state.transformationStories = [];
    state.storyDrafts = [];
    state.storyFeedbackKey = null;
    state.storyFeedbackIsError = false;
    state.storyLoadPromise = null;

    renderSliders(doc);
    registerResultElements(doc);
    registerStoryElements(doc);
    attachLanguageListeners(doc);
    attachCardInteractions(doc);
    attachSliderListeners(doc);
    attachTrueStateListeners(doc);

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
    renderTransformationStories(doc);

    const shouldLoadStories = Boolean(loadPreference);
    const effectiveFetch = options.fetchImplementation ?? options.fetchImpl ?? globalThis.fetch;
    state.storyLoadPromise = shouldLoadStories && typeof effectiveFetch === 'function'
        ? loadTransformationStories(doc, { fetchImpl: effectiveFetch, source: storySource })
        : Promise.resolve([]);

    changeLanguage(doc, state.currentLanguage);
    validateTranslationsOnInit(doc);

    return state.storyLoadPromise;
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => initializeApp(document));
}
