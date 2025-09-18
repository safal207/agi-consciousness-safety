import { test } from 'node:test';
import assert from 'node:assert/strict';

import { createMockDocument, fireEvent } from './helpers/mockDom.js';
import {
    changeLanguage,
    findMissingTranslationKeys,
    getAssessmentSnapshot,
    getCurrentLanguage,
    initializeApp,
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

test('initializeApp renders sliders, default values, and assessment snapshot', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const groups = doc.querySelectorAll('.control-group');
    assert.equal(groups.length, sliderDefinitions.length);

    const decimalEn = value => formatDecimal(value, 'en');
    sliderDefinitions.forEach(def => {
        const slider = doc.getElementById(`${def.slug}-slider`);
        assert.ok(slider, `expected slider for ${def.slug}`);
        assert.equal(slider.getAttribute('aria-valuemin'), String(def.min));
        assert.equal(slider.getAttribute('aria-valuemax'), String(def.max));

        const valueDisplay = doc.getElementById(`${def.slug}-value`);
        assert.ok(valueDisplay, `expected value display for ${def.slug}`);
        assert.equal(valueDisplay.textContent, decimalEn(def.defaultValue));
    });

    const snapshot = getAssessmentSnapshot();
    const expectedOverall = sliderDefinitions.reduce((sum, def) => sum + def.defaultValue * def.weight, 0);
    assert.equal(snapshot.overallScore.toFixed(3), expectedOverall.toFixed(3));
    assert.equal(doc.getElementById('overall-score').textContent, decimalEn(snapshot.overallScore));
    assert.equal(doc.getElementById('risk-level').textContent, statusContent.en.risk_medium);
    assert.equal(doc.getElementById('trust-score').textContent, statusContent.en.trust_medium);
    assert.equal(doc.getElementById('readiness').textContent, statusContent.en.readiness_caution);
    assert.equal(doc.getElementById('transformation-count').textContent, formatInteger(snapshot.peopleHelped, 'en'));
});

test('changeLanguage applies translations, aria states, and locale formatting', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const ruLanguage = changeLanguage(doc, 'ru');
    assert.equal(ruLanguage, 'ru');
    assert.equal(getCurrentLanguage(), 'ru');
    assert.equal(doc.documentElement.getAttribute('lang'), 'ru');

    const ruTranslations = translations.ru;
    assert.equal(doc.getElementById('main-title').textContent, ruTranslations['main-title']);
    assert.equal(doc.getElementById('risk-label').textContent, ruTranslations['risk-label']);
    assert.equal(doc.getElementById('risk-level').textContent, statusContent.ru.risk_medium);

    const enButton = doc.querySelector('[data-lang="en"]');
    const ruButton = doc.querySelector('[data-lang="ru"]');
    assert.equal(enButton.getAttribute('aria-pressed'), 'false');
    assert.equal(ruButton.getAttribute('aria-pressed'), 'true');

    const compassionSlider = doc.getElementById('compassion-slider');
    const ariaValueText = compassionSlider.getAttribute('aria-valuetext');
    assert.ok(
        ariaValueText.includes(ruTranslations['compassion-title'] ?? ''),
        'aria-valuetext should include translated label'
    );

    const ruValue = doc.getElementById('compassion-value').textContent;
    assert.equal(ruValue, formatDecimal(0.8, 'ru'));

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

test('findMissingTranslationKeys reports no gaps for supported languages', () => {
    const doc = createMockDocument();
    initializeApp(doc);
    changeLanguage(doc, 'en');

    const missing = findMissingTranslationKeys(doc);
    assert.deepEqual(missing, {});
});
