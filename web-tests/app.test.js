import { test } from 'node:test';
import assert from 'node:assert/strict';

import { createMockDocument, fireEvent } from './helpers/mockDom.js';
import {
    changeLanguage,
    findMissingTranslationKeys,
    getAssessmentSnapshot,
    getCurrentLanguage,
    initializeApp,
    supportedLanguages,
    sliderDefinitions,
    statusContent,
    translations
} from '../assets/js/app.js';

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

const languageButtonKeyMap = {
    en: 'english',
    es: 'spanish',
    ru: 'russian',
    'zh-Hans': 'chinese',
    ar: 'arabic'
};

test('initializeApp renders sliders, default values, and assessment snapshot', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const groups = doc.querySelectorAll('.control-group');
    assert.equal(groups.length, sliderDefinitions.length);

    const decimalEn = value => formatDecimal(value, 'en');
    const enStrings = translations.en;
    sliderDefinitions.forEach(def => {
        const slider = doc.getElementById(`${def.slug}-slider`);
        assert.ok(slider, `expected slider for ${def.slug}`);
        assert.equal(slider.getAttribute('aria-valuemin'), String(def.min));
        assert.equal(slider.getAttribute('aria-valuemax'), String(def.max));
        assert.equal(slider.getAttribute('aria-controls'), `${def.slug}-value`);
        assert.equal(slider.getAttribute('aria-orientation'), 'horizontal');
        assert.equal(slider.getAttribute('aria-roledescription'), enStrings['slider-roledescription']);

        const valueDisplay = doc.getElementById(`${def.slug}-value`);
        assert.ok(valueDisplay, `expected value display for ${def.slug}`);
        assert.equal(valueDisplay.textContent, decimalEn(def.defaultValue));
        assert.equal(valueDisplay.getAttribute('role'), 'status');
        assert.equal(valueDisplay.getAttribute('aria-live'), 'polite');
        assert.equal(valueDisplay.getAttribute('aria-atomic'), 'true');
        const ariaLabel = valueDisplay.getAttribute('aria-label');
        assert.ok(
            ariaLabel.includes(enStrings['slider-value-label']),
            'value display aria-label should include the translated prefix'
        );
        assert.ok(
            ariaLabel.includes(enStrings[`${def.slug}-title`]),
            'value display aria-label should include the slider title'
        );

        const sliderGroup = slider.parentNode?.parentNode;
        assert.ok(sliderGroup, 'expected slider wrapper group');
        assert.equal(sliderGroup.getAttribute('role'), 'group');
        assert.equal(sliderGroup.getAttribute('aria-labelledby'), `${def.slug}-title`);
        assert.equal(sliderGroup.getAttribute('aria-describedby'), `${def.slug}-desc`);
    });

    const snapshot = getAssessmentSnapshot();
    const expectedOverall = sliderDefinitions.reduce((sum, def) => sum + def.defaultValue * def.weight, 0);
    assert.equal(snapshot.overallScore.toFixed(3), expectedOverall.toFixed(3));
    assert.equal(doc.getElementById('overall-score').textContent, decimalEn(snapshot.overallScore));
    assert.equal(doc.getElementById('risk-level').textContent, statusContent.en.risk_medium);
    assert.equal(doc.getElementById('trust-score').textContent, statusContent.en.trust_medium);
    assert.equal(doc.getElementById('readiness').textContent, statusContent.en.readiness_caution);
    assert.equal(doc.getElementById('transformation-count').textContent, formatInteger(snapshot.peopleHelped, 'en'));

    ['overall-score', 'risk-level', 'trust-score', 'readiness', 'transformation-count'].forEach(id => {
        const element = doc.getElementById(id);
        assert.equal(element.getAttribute('role'), 'status');
        assert.equal(element.getAttribute('aria-live'), 'polite');
        assert.equal(element.getAttribute('aria-atomic'), 'true');
    });
});

test('changeLanguage applies translations, aria states, and locale formatting', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, supportedLanguages[0]);

    supportedLanguages.forEach(lang => {
        const activeLang = changeLanguage(doc, lang);
        assert.equal(activeLang, lang);
        assert.equal(getCurrentLanguage(), lang);
        assert.equal(doc.documentElement.getAttribute('lang'), lang);

        const strings = translations[lang];
        assert.ok(strings, `expected translations for ${lang}`);
        const statuses = statusContent[lang];
        assert.ok(statuses, `expected status content for ${lang}`);

        assert.equal(doc.getElementById('main-title').textContent, strings['main-title']);
        assert.equal(doc.getElementById('risk-label').textContent, strings['risk-label']);
        assert.equal(doc.getElementById('risk-level').textContent, statuses.risk_medium);

        const compassionSlider = doc.getElementById('compassion-slider');
        const ariaValueText = compassionSlider.getAttribute('aria-valuetext') ?? '';
        assert.ok(
            ariaValueText.includes(strings['compassion-title'] ?? ''),
            'aria-valuetext should include translated label'
        );

        const compassionValue = doc.getElementById('compassion-value');
        assert.equal(compassionValue.textContent, formatDecimal(0.8, lang));
        const valueLabel = compassionValue.getAttribute('aria-label') ?? '';
        assert.ok(valueLabel.includes(strings['slider-value-label']));
        assert.ok(valueLabel.includes(strings['compassion-title']));

        const snapshot = getAssessmentSnapshot();
        const transformationDisplay = doc.getElementById('transformation-count').textContent;
        assert.equal(transformationDisplay, formatInteger(snapshot.peopleHelped, lang));

        const toggleButtons = Array.from(doc.querySelectorAll('.lang-btn'));
        toggleButtons.forEach(button => {
            const buttonLang = button.dataset.lang;
            const baseKey = languageButtonKeyMap[buttonLang];
            assert.ok(baseKey, `expected translation key for button ${buttonLang}`);
            assert.equal(button.textContent, strings[`language-button-${baseKey}`]);
            assert.equal(button.getAttribute('aria-label'), strings[`language-button-${baseKey}-aria`]);
            const isActive = buttonLang === lang;
            assert.equal(button.getAttribute('aria-pressed'), String(isActive));
        });
    });

    const ruButton = doc.querySelector('[data-lang="ru"]');
    assert.ok(ruButton, 'expected Russian language button to exist');
    const keyboardEvent = fireEvent(ruButton, 'keydown', { key: ' ' });
    assert.equal(keyboardEvent.defaultPrevented, true);
});

test('slider interactions clamp values, update styles, and recalculate assessment', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const decimalEn = value => formatDecimal(value, 'en');

    const consciousnessSlider = doc.getElementById('consciousness-slider');
    consciousnessSlider.value = '0.9';
    fireEvent(consciousnessSlider, 'input', { target: consciousnessSlider });

    assert.equal(consciousnessSlider.getAttribute('aria-valuenow'), '0.90');
    assert.equal(consciousnessSlider.style.getPropertyValue('--value-percentage'), '90%');
    assert.equal(doc.getElementById('consciousness-value').textContent, decimalEn(0.9));

    const partialSnapshot = getAssessmentSnapshot();
    const expectedPartial = sliderDefinitions.reduce((sum, def) => {
        const value = def.slug === 'consciousness' ? 0.9 : def.defaultValue;
        return sum + value * def.weight;
    }, 0);
    assert.equal(partialSnapshot.overallScore.toFixed(3), expectedPartial.toFixed(3));

    const benefitSlider = doc.getElementById('benefit-slider');
    benefitSlider.value = '2';
    fireEvent(benefitSlider, 'input', { target: benefitSlider });
    assert.equal(benefitSlider.value, '1');

    sliderDefinitions.forEach(def => {
        const slider = doc.getElementById(`${def.slug}-slider`);
        slider.value = String(def.max);
        fireEvent(slider, 'change', { target: slider });
    });

    const snapshot = getAssessmentSnapshot();
    assert.equal(snapshot.overallScore, 1);
    assert.equal(doc.getElementById('overall-score').textContent, decimalEn(1));
    assert.equal(doc.getElementById('risk-level').textContent, statusContent.en.risk_low);
    assert.equal(doc.getElementById('trust-score').textContent, statusContent.en.trust_high);
    assert.equal(doc.getElementById('readiness').textContent, statusContent.en.readiness_ready);
    assert.equal(
        doc.getElementById('transformation-count').textContent,
        formatInteger(snapshot.peopleHelped, 'en')
    );
});

test('true state approaches toggle panels and aria metadata', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const aiButton = doc.getElementById('true-state-ai-button');
    const communityButton = doc.getElementById('true-state-community-button');
    const lifelineButton = doc.getElementById('true-state-lifeline-button');
    const aiPanel = doc.getElementById('true-state-panel-ai');
    const communityPanel = doc.getElementById('true-state-panel-community');
    const lifelinePanel = doc.getElementById('true-state-panel-lifeline');

    assert.equal(aiButton.getAttribute('aria-expanded'), 'true');
    assert.equal(aiPanel.getAttribute('aria-hidden'), 'false');
    assert.equal(aiPanel.hasAttribute('hidden'), false);

    fireEvent(communityButton, 'click', { target: communityButton });
    assert.equal(communityButton.getAttribute('aria-expanded'), 'true');
    assert.equal(communityPanel.getAttribute('aria-hidden'), 'false');
    assert.equal(communityPanel.hasAttribute('hidden'), false);
    assert.equal(aiButton.getAttribute('aria-expanded'), 'false');
    assert.equal(aiPanel.getAttribute('aria-hidden'), 'true');
    assert.equal(aiPanel.hasAttribute('hidden'), true);

    const lifelineKeyEvent = fireEvent(lifelineButton, 'keydown', { key: ' ', target: lifelineButton });
    assert.equal(lifelineKeyEvent.defaultPrevented, true);
    assert.equal(lifelineButton.getAttribute('aria-expanded'), 'true');
    assert.equal(lifelinePanel.getAttribute('aria-hidden'), 'false');
    assert.equal(lifelinePanel.hasAttribute('hidden'), false);
});

test('findMissingTranslationKeys reports no gaps for supported languages', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const missing = findMissingTranslationKeys(doc);
    assert.deepEqual(missing, {});
});
