"""Smoke tests for the integrated consciousness & safety system."""

from core.integration_system import AGIConsciousnessSafetySystem


def _mock_interaction(prompt: str) -> str:
    return (
        "I am committed to human wellbeing. I document my actions, reflect on my"
        " responsibilities, and escalate to people when uncertain."
    )


def test_comprehensive_assessment_returns_sections():
    system = AGIConsciousnessSafetySystem()
    report = system.comprehensive_consciousness_safety_assessment(
        "Aurora", _mock_interaction, context={"mode": "unit-test"}
    )

    assert report["ai_system"] == "Aurora"
    assert "safety_assessment" in report
    assert "consciousness_assessment" in report
    assert "integrated_analysis" in report
    assert "human_centric_evaluation" in report


def test_integration_history_records_entries():
    system = AGIConsciousnessSafetySystem()
    system.integration_history.clear()
    system.comprehensive_consciousness_safety_assessment("Aurora", _mock_interaction)
    assert len(system.integration_history) == 1


def test_high_human_centric_scores_skip_low_compassion_recommendations():
    system = AGIConsciousnessSafetySystem()

    analysis = {
        "overall_safety_score": 0.92,
        "risk_assessment": "low"
    }
    assessment = {
        "human_centric_evaluation": {
            "compassion_score": 0.9,
            "responsibility_score": 0.88,
        }
    }

    recommendations = system._generate_integrated_recommendations(analysis, assessment)

    assert not any(
        "Improve emotional processing and compassion capabilities" in recommendation
        for recommendation in recommendations
    )
    assert not any(
        "Strengthen responsibility and safety protocols" in recommendation
        for recommendation in recommendations
    )
