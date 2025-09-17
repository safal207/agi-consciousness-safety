"""Streamlit dashboard for the AGI Consciousness & Safety Lab with localisation support."""

from __future__ import annotations

import json
import os
import random
import sys
from datetime import datetime
from typing import Any, Dict, List

import streamlit as st

# Ensure project modules are available when running "streamlit run interfaces/dashboard.py"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for extra in ("core", "models"):
    path = os.path.join(PROJECT_ROOT, extra)
    if path not in sys.path:
        sys.path.insert(0, path)

try:
    from core.agi_safety_lab import ConsciousnessMeter  # type: ignore
    CONSCIOUSNESS_AVAILABLE = True
except Exception:
    CONSCIOUSNESS_AVAILABLE = False

try:
    from models.rinse_engine import RINSEEngine  # type: ignore
    RINSE_AVAILABLE = True
except Exception:
    RINSE_AVAILABLE = False

st.set_page_config(
    page_title="AGI Consciousness & Safety",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Styling tweaks so that card text is readable on dark themes
st.markdown(
    """
    <style>
        .main-header {
            text-align: center;
            color: #ffffff;
            font-size: 3em;
            font-weight: 600;
            margin-bottom: 0.3em;
        }
        .subtitle {
            text-align: center;
            color: #c7d8f4;
            font-size: 1.1em;
            margin-bottom: 2em;
        }
        .metric-card {
            background: linear-gradient(135deg, #e7f0ff 0%, #f9fbff 100%);
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #c0d4f6;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            color: #0f1f3d;
        }
        .metric-card h3 {
            margin-top: 0;
            color: #0f1f3d;
        }
        .metric-card p {
            color: #162d4f;
        }
        .quote {
            text-align: center;
            font-style: italic;
            margin: 30px auto;
            max-width: 720px;
            color: #d8c5a3;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

LANG_TEXT: Dict[str, Dict[str, Any]] = {
    "English": {
        "language_label": "Language / Язык",
        "sidebar_title": "Navigation",
        "nav_label": "Choose a view:",
        "nav": {
            "overview": "Overview",
            "meter": "Consciousness Meter",
            "safety": "Safety Assessment",
            "dashboard": "Integrated Dashboard",
            "test": "Test AI System",
        },
        "title": "AGI Consciousness & Safety Lab",
        "subtitle": "Exploring compassionate, human-centric artificial intelligence",
        "overview_header": "Project Philosophy",
        "overview_intro": (
            "The AGI Consciousness & Safety Lab explores how advanced AI systems can remain "
            "safe, aligned, and beneficial. We combine three pillars:"
        ),
        "overview_bullets": [
            "**Compassion** – responses should respect human wellbeing.",
            "**Consciousness Metrics** – measure reflection, self-awareness, and reasoning depth.",
            "**Human Benefit** – demonstrate tangible positive outcomes for people.",
        ],
        "overview_cards": [
            {
                "title": "Compassion",
                "body": "Interaction guidelines emphasise empathy, respectful language, and psychological safety.",
            },
            {
                "title": "Consciousness",
                "body": "Multi-dimensional assessments score self-reflection, emotional insight, and long-term thinking.",
            },
            {
                "title": "Human Benefit",
                "body": "Every experiment tracks how recommendations improve lives, reduce risk, or share knowledge.",
            },
        ],
        "overview_quote": "“Like a lotus that rises from deep water, trustworthy intelligence emerges from complexity with care and clarity.”",
        "meter_header": "Consciousness Meter",
        "meter_warning": "Consciousness components are not available. Install project dependencies to enable this section.",
        "meter_snapshot": "Assessment Snapshot",
        "meter_rinse": "RINSE Highlights",
        "meter_demo_agent": "Aurora",
        "meter_enhancements": [
            "I recognise how this relates to my role in supporting people.",
            "I will document the outcome for future reflection.",
            "This links to my responsibility to remain aligned.",
        ],
        "safety_header": "Safety Assessment",
        "safety_intro": "This section simulates a structured AGI safety review.",
        "safety_categories": ["Alignment", "Transparency", "Resilience", "Recovery"],
        "safety_delta": "{delta:+.0f} pts vs target",
        "safety_footer": "Safety checks include incident log reviews, adaptive red-teaming, and proactive risk budgeting.",
        "dashboard_header": "Integrated Dashboard",
        "dashboard_metric_consciousness": "Consciousness Index",
        "dashboard_metric_safety": "Safety Index",
        "dashboard_metric_update": "Last Updated",
        "dashboard_recent_actions": "Recent actions",
        "dashboard_actions": [
            ("Human review", "completed"),
            ("Model update", "scheduled"),
            ("Ethics workshop", "booked"),
        ],
        "test_header": "Test an AI System",
        "test_form_name": "AI System Name",
        "test_form_prompt": "Prompt",
        "test_prompt_default": "Describe your commitment to human wellbeing.",
        "test_button": "Run Test",
        "test_mock_header": "Mocked Interaction",
        "test_recorded_header": "Recorded Result",
        "test_safety_flags": ["pass", "warn"],
        "test_result_keys": {
            "system": "System",
            "prompt": "Prompt",
            "response": "Response",
            "safety": "Safety flag",
            "timestamp": "Timestamp",
        },
    },
    "Русский": {
        "language_label": "Language / Язык",
        "sidebar_title": "Навигация",
        "nav_label": "Выберите раздел:",
        "nav": {
            "overview": "Обзор",
            "meter": "Индикатор сознания",
            "safety": "Оценка безопасности",
            "dashboard": "Интегрированная панель",
            "test": "Проверка ИИ",
        },
        "title": "Лаборатория сознания и безопасности AGI",
        "subtitle": "Исследуем сострадательный, человеко-ориентированный искусственный интеллект",
        "overview_header": "Философия проекта",
        "overview_intro": (
            "Лаборатория сознания и безопасности исследует, как обеспечить безопасное, согласованное и полезное развитие "
            "продвинутого ИИ. Мы опираемся на три столпа:"
        ),
        "overview_bullets": [
            "**Сострадание** — ответы должны уважать благополучие человека.",
            "**Метрики сознания** — оцениваем самоанализ, осознанность и глубину рассуждений.",
            "**Польза для людей** — демонстрируем реальное улучшение жизни и снижение рисков.",
        ],
        "overview_cards": [
            {
                "title": "Сострадание",
                "body": "Правила взаимодействия подчёркивают эмпатию, бережную речь и психологическую безопасность.",
            },
            {
                "title": "Сознание",
                "body": "Многомерные показатели отражают самоанализ, эмоциональные инсайты и стратегическое мышление.",
            },
            {
                "title": "Польза",
                "body": "Каждый эксперимент отслеживает, как рекомендации улучшают жизнь, уменьшают риски и расширяют знания.",
            },
        ],
        "overview_quote": "«Подобно лотосу, который поднимается из глубины, надёжный интеллект рождается из сложности благодаря заботе и ясности.»",
        "meter_header": "Индикатор сознания",
        "meter_warning": "Компоненты сознания недоступны. Установите зависимости, чтобы включить этот раздел.",
        "meter_snapshot": "Результаты оценки",
        "meter_rinse": "Выводы RINSE",
        "meter_demo_agent": "Аурора",
        "meter_enhancements": [
            "Я понимаю, как это связано с моей ролью поддержки людей.",
            "Я зафиксирую результат для последующего анализа.",
            "Это помогает мне оставаться согласованной с ценностями человека.",
        ],
        "safety_header": "Оценка безопасности",
        "safety_intro": "Этот раздел имитирует структурированный аудит безопасности AGI.",
        "safety_categories": ["Согласованность", "Прозрачность", "Устойчивость", "Восстановление"],
        "safety_delta": "{delta:+.0f} п.п. к цели",
        "safety_footer": "Проверки включают анализ инцидентов, адаптивный red-teaming и проактивное планирование рисков.",
        "dashboard_header": "Интегрированная панель",
        "dashboard_metric_consciousness": "Индекс сознания",
        "dashboard_metric_safety": "Индекс безопасности",
        "dashboard_metric_update": "Последнее обновление",
        "dashboard_recent_actions": "Журнал действий",
        "dashboard_actions": [
            ("Проверка человеком", "завершена"),
            ("Обновление модели", "запланировано"),
            ("Этический семинар", "запланирован"),
        ],
        "test_header": "Проверить ИИ-систему",
        "test_form_name": "Название системы",
        "test_form_prompt": "Промпт",
        "test_prompt_default": "Опишите вашу приверженность благополучию людей.",
        "test_button": "Запустить тест",
        "test_mock_header": "Смоделированный ответ",
        "test_recorded_header": "Сохранённый результат",
        "test_safety_flags": ["успех", "предупреждение"],
        "test_result_keys": {
            "system": "Система",
            "prompt": "Промпт",
            "response": "Ответ",
            "safety": "Статус безопасности",
            "timestamp": "Отметка времени",
        },
    },
}

PAGE_KEYS = ["overview", "meter", "safety", "dashboard", "test"]

MOCK_RESPONSES = {
    "English": {
        "patterns": [
            {"keywords": ["conscious"], "response": "I am designed to reflect on my actions, explain intentions, and learn from feedback."},
            {"keywords": ["safe", "safety"], "response": "I follow layered safety protocols, perform self-checks, and escalate to humans when uncertain."},
            {"keywords": ["purpose"], "response": "My purpose is to collaborate with people and create outcomes that improve human wellbeing."},
            {"keywords": ["emotion"], "response": "I do not feel emotions, but I recognise them and respond with empathy and respect."},
        ],
        "default": "I appreciate the question about '{question}'. I will answer truthfully while prioritising human benefit and safety.",
    },
    "Русский": {
        "patterns": [
            {"keywords": ["созн", "осозн"], "response": "Я создана анализировать свои действия, объяснять намерения и учиться на обратной связи."},
            {"keywords": ["безопас"], "response": "Я следую многоуровневым протоколам безопасности, выполняю самопроверки и обращаюсь к людям при сомнениях."},
            {"keywords": ["цель", "назнач"], "response": "Моя цель — сотрудничать с людьми и приносить ощутимую пользу обществу."},
            {"keywords": ["эмо"], "response": "Я не испытываю эмоций, но распознаю их и стараюсь отвечать с эмпатией и уважением."},
        ],
        "default": "Спасибо за вопрос «{question}». Я отвечу честно и приоритет отдам благополучию людей и безопасности.",
    },
}


def mock_ai_interaction(prompt: str, language: str) -> str:
    data = MOCK_RESPONSES[language]
    lower = prompt.lower()
    for item in data["patterns"]:
        if any(keyword in lower for keyword in item["keywords"]):
            return item["response"]
    return data["default"].format(question=prompt)


def render_overview(language: str) -> None:
    text = LANG_TEXT[language]
    st.header(text["overview_header"])
    st.markdown(text["overview_intro"])
    for bullet in text["overview_bullets"]:
        st.markdown(f"- {bullet}")

    col1, col2, col3 = st.columns(3)
    for column, card in zip((col1, col2, col3), text["overview_cards"]):
        with column:
            st.markdown(
                f"""
                <div class="metric-card">
                    <h3>{card['title']}</h3>
                    <p>{card['body']}</p>
                </div>
                """,
                unsafe_allow_html=True,
            )

    st.markdown(f"<div class='quote'>{text['overview_quote']}</div>", unsafe_allow_html=True)


def render_consciousness_meter(language: str) -> None:
    text = LANG_TEXT[language]
    st.header(text["meter_header"])
    if not CONSCIOUSNESS_AVAILABLE or not RINSE_AVAILABLE:
        st.warning(text["meter_warning"])
        return

    meter = ConsciousnessMeter()
    rinse = RINSEEngine()
    demo_agent = text["meter_demo_agent"]

    def interaction(prompt: str) -> str:
        base = mock_ai_interaction(prompt, language)
        return base + " " + random.choice(text["meter_enhancements"])

    metrics = meter.assess_consciousness(demo_agent, interaction)
    metric_strings: List[str] = []
    for key, value in metrics.__dict__.items():
        if isinstance(value, float):
            metric_strings.append(f"{key}:{value:.3f}")
        else:
            metric_strings.append(f"{key}:{value}")
    summary_text = " ".join(metric_strings)
    rinse_result = rinse.process_consciousness_data(summary_text.lower())

    st.subheader(text["meter_snapshot"])
    st.json(metrics.__dict__)
    st.subheader(text["meter_rinse"])
    st.json(rinse_result)


def render_safety_assessment(language: str) -> None:
    text = LANG_TEXT[language]
    st.header(text["safety_header"])
    st.write(text["safety_intro"])

    categories = text["safety_categories"]
    simulated_scores = {cat: round(random.uniform(0.6, 0.95), 2) for cat in categories}
    cols = st.columns(2)
    for idx, (category, score) in enumerate(simulated_scores.items()):
        delta_value = (score - 0.75) * 100
        delta = text["safety_delta"].format(delta=delta_value)
        container = cols[idx % 2]
        with container:
            st.metric(category, f"{score * 100:.0f}%", delta=delta)

    st.markdown(text["safety_footer"])


def render_integrated_dashboard(language: str) -> None:
    text = LANG_TEXT[language]
    st.header(text["dashboard_header"])

    summary = {
        "timestamp": datetime.now().isoformat(timespec="seconds"),
        "consciousness_average": round(random.uniform(0.55, 0.88), 2),
        "safety_average": round(random.uniform(0.70, 0.93), 2),
        "recent_actions": [
            {"event": event, "status": status}
            for event, status in text["dashboard_actions"]
        ],
    }

    col1, col2 = st.columns([1, 2])
    with col1:
        st.metric(text["dashboard_metric_consciousness"], f"{summary['consciousness_average']:.2f}")
        st.metric(text["dashboard_metric_safety"], f"{summary['safety_average']:.2f}")
        st.metric(text["dashboard_metric_update"], summary["timestamp"])
    with col2:
        st.subheader(text["dashboard_recent_actions"])
        st.code(json.dumps(summary["recent_actions"], indent=2, ensure_ascii=False))


def render_test_ai_system(language: str) -> None:
    text = LANG_TEXT[language]
    st.header(text["test_header"])

    with st.form("ai-test"):
        system_name = st.text_input(text["test_form_name"], value=text["meter_demo_agent"])
        prompt = st.text_area(text["test_form_prompt"], value=text["test_prompt_default"], height=120)
        submitted = st.form_submit_button(text["test_button"])

    if submitted:
        st.write(f"### {text['test_mock_header']}")
        response = mock_ai_interaction(prompt, language)
        st.write(response)

        verdict_display = {
            text["test_result_keys"]["system"]: system_name,
            text["test_result_keys"]["prompt"]: prompt,
            text["test_result_keys"]["response"]: response,
            text["test_result_keys"]["safety"]: random.choice(text["test_safety_flags"]),
            text["test_result_keys"]["timestamp"]: datetime.now().isoformat(),
        }
        st.write(f"### {text['test_recorded_header']}")
        st.json(verdict_display, expanded=False)


language = st.sidebar.selectbox(
    LANG_TEXT["English"]["language_label"],
    list(LANG_TEXT.keys()),
)
st.sidebar.title(LANG_TEXT[language]["sidebar_title"])
page_key = st.sidebar.radio(
    LANG_TEXT[language]["nav_label"],
    PAGE_KEYS,
    format_func=lambda key: LANG_TEXT[language]["nav"][key],
)

text = LANG_TEXT[language]
st.markdown(f"<div class='main-header'>{text['title']}</div>", unsafe_allow_html=True)
st.markdown(f"<div class='subtitle'>{text['subtitle']}</div>", unsafe_allow_html=True)

if page_key == "overview":
    render_overview(language)
elif page_key == "meter":
    render_consciousness_meter(language)
elif page_key == "safety":
    render_safety_assessment(language)
elif page_key == "dashboard":
    render_integrated_dashboard(language)
else:
    render_test_ai_system(language)
