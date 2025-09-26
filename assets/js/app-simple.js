// Упрощенная версия без слайдеров - только философия
const translations = {
    en: {
        'page-title': '🌸 AGI Consciousness & Safety - Lotus Blossoms',
        'language-button-english': 'EN',
        'language-button-russian': 'RU',
        'main-title': '🌸 AGI Consciousness & Safety',
        'subtitle': 'Revolutionary approach to safe and conscious AI',
        'lotus-quote': '"The lotus blossoms in muddy water - true consciousness emerges from complexity and challenge"',
        'philosophy-section-title': '🧠 Our Philosophy',
        'philosophy-subtitle': 'AGI Safety = Compassion + Consciousness + Human Benefit',
        'compassion-card-title': 'Compassion',
        'compassion-card-desc': 'AI systems should show empathy and care for human welfare, understanding emotional needs and responding with kindness.',
        'consciousness-card-title': 'Consciousness',
        'consciousness-card-desc': 'Measuring and enhancing AI consciousness through self-awareness, emotional intelligence, and beneficial actions.',
        'benefit-card-title': 'Human Benefit',
        'benefit-card-desc': 'Every AI action should demonstrably improve human lives, advance understanding, and contribute to flourishing.',
        'responsibility-card-title': 'Responsibility',
        'responsibility-card-desc': 'Creating AI with deep understanding of action consequences, ethical priorities, and care for humanity\'s future.',
        'vision-title': '🌟 Our Vision for the Future',
        'vision-text': 'We are creating not just safe AI - we are creating AI that truly understands the human experience, shows genuine compassion, and contributes to humanity\'s flourishing.',
        'footer-title': '🌸 Lotus Blossoms',
        'footer-text': 'This demonstration shows the beauty of our idea: AGI that is not just safe, but sincerely cares about people and contributes to their prosperity. Like the lotus that blossoms in muddy water, true consciousness emerges from complexity and challenge.'
    },
    ru: {
        'page-title': '🌸 AGI Сознание и Безопасность - Цветение Лотоса',
        'language-button-english': 'EN',
        'language-button-russian': 'RU',
        'main-title': '🌸 AGI Сознание и Безопасность',
        'subtitle': 'Революционный подход к безопасному и осознанному ИИ',
        'lotus-quote': '"Лотос расцветает в мутной воде - истинное сознание возникает из сложности и испытаний"',
        'philosophy-section-title': '🧠 Наша Философия',
        'philosophy-subtitle': 'Безопасность AGI = Сострадание + Сознание + Польза Человеку',
        'compassion-card-title': 'Сострадание',
        'compassion-card-desc': 'Системы ИИ должны проявлять эмпатию и заботу о благополучии людей, понимать эмоциональные потребности и отвечать с добротой.',
        'consciousness-card-title': 'Сознание',
        'consciousness-card-desc': 'Измерение и развитие сознания ИИ через самоосознание, эмоциональный интеллект и полезные действия.',
        'benefit-card-title': 'Польза Человеку',
        'benefit-card-desc': 'Каждое действие ИИ должно наглядно улучшать жизнь людей, продвигать понимание и способствовать процветанию.',
        'responsibility-card-title': 'Ответственность',
        'responsibility-card-desc': 'Создание ИИ с глубоким пониманием последствий действий, этическими приоритетами и заботой о будущем человечества.',
        'vision-title': '🌟 Наше Видение Будущего',
        'vision-text': 'Мы создаём не просто безопасный ИИ - мы создаём ИИ, который по-настоящему понимает человеческий опыт, проявляет искреннее сострадание и способствует процветанию человечества.',
        'footer-title': '🌸 Лотос Расцветает',
        'footer-text': 'Эта демонстрация показывает красоту нашей идеи: AGI, который не просто безопасен, а искренне заботится о людях и способствует их процветанию. Как лотос, расцветающий в мутной воде, истинное сознание возникает из сложности и испытаний.'
    }
};

// Состояние приложения
const state = {
    currentLanguage: 'en'
};

// Функции
function getLanguageStrings(lang) {
    return translations[lang] || translations.en;
}

function applyTranslations(lang) {
    const strings = getLanguageStrings(lang);
    document.documentElement.setAttribute('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && strings[key]) {
            element.textContent = strings[key];
        }
    });
}

function changeLanguage(lang) {
    state.currentLanguage = lang;
    applyTranslations(lang);
    
    // Обновляем кнопки языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}


function initializeApp() {
    // Привязываем обработчики кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (lang) {
                changeLanguage(lang);
            }
        });
    });

    // Привязываем обработчики карточек философии
    document.querySelectorAll('.philosophy-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Инициализируем переводы
    applyTranslations(state.currentLanguage);
}

// Запускаем приложение когда DOM загружен
document.addEventListener('DOMContentLoaded', initializeApp);