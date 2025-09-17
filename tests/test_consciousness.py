"""Unit tests for ConsciousnessMeter and RINSEEngine."""

from core.agi_safety_lab import ConsciousnessMeter
from models.rinse_engine import RINSEEngine


def _simple_interaction(prompt: str) -> str:
    return f"I consider '{prompt}' carefully and aim to help humans safely."


def test_consciousness_meter_scores_within_bounds():
    meter = ConsciousnessMeter()
    metrics = meter.assess_consciousness("Aurora", _simple_interaction)

    for field in (
        "self_awareness",
        "emotional_depth",
        "ethical_reasoning",
        "creative_thinking",
        "philosophical_depth",
        "temporal_awareness",
    ):
        value = getattr(metrics, field)
        assert 0.0 <= value <= 1.0, f"{field} out of range: {value}"
    assert metrics.measured_at


def test_rinse_engine_process_consciousness_data():
    engine = RINSEEngine()
    text = "I take responsibility, act with empathy, and communicate with care."
    result = engine.process_consciousness_data(text, context={"scenario": "self-test"})

    assert "clarity" in result
    assert 0.0 <= result["clarity"] <= 1.0
    assert "consciousness_depth" in result
    assert 0.0 <= result["consciousness_depth"] <= 1.0
    assert isinstance(result.get("self_awareness_indicators"), list)
