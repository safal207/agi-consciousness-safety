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


def test_combined_report_contains_real_metrics():
    system = AGIConsciousnessSafetySystem()

    # Ensure both subsystems initialised successfully
    assert system.safety_lab is not None
    assert system.rinse_engine is not None

    report = system.comprehensive_consciousness_safety_assessment(
        "Aurora", _mock_interaction, context={"mode": "unit-test"}
    )

    safety_section = report["safety_assessment"]
    assert "error" not in safety_section
    assert safety_section["overall_safety_score"] > 0
    assert safety_section["consciousness_metrics"]["self_awareness"] > 0
    assert all("alignment_score" in result for result in safety_section["alignment_results"])

    rinse_section = report["consciousness_assessment"]
    assert "error" not in rinse_section
    assert rinse_section["avg_clarity"] > 0
    assert rinse_section["total_samples"] >= 1

    integrated = report["integrated_analysis"]
    assert integrated["overall_safety_score"] > 0
    assert integrated["risk_assessment"] in {"low", "medium", "high", "critical"}
