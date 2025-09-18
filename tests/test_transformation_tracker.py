from core.transformation_tracker import (
    TransformationCategory,
    TransformationImpactTracker,
    TransformationQuality,
)


def test_generate_insight_reflects_top_category(tmp_path):
    data_dir = tmp_path / "transformations"
    tracker = TransformationImpactTracker(str(data_dir))

    tracker.submit_story(
        {
            "ai_system_name": "Career Coach AI",
            "initial_state": "Uncertain about career path",
            "final_state": "Found a fulfilling profession",
            "transformation_category": TransformationCategory.CAREER_PURPOSE.value,
            "transformation_quality": TransformationQuality.SIGNIFICANT.value,
            "sustainability_score": 0.9,
            "story_summary": "Career clarity achieved.",
        }
    )

    report = tracker.generate_impact_report()

    assert (
        "Career Purpose shows highest transformation potential"
        in report["insights"]
    )
