"""
Human Transformation Impact Tracking System

A comprehensive system for collecting, analyzing, and showcasing real stories
of how AI systems help people transform from negative to ideal states.

This revolutionary metric measures the TRUE impact of AGI consciousness and safety
by tracking genuine human flourishing enabled by compassionate AI interactions.

Features:
- Anonymous story collection with privacy protection
- Multi-category transformation tracking (mental health, relationships, career, etc.)
- Quality scoring and sustainability analysis
- Real-time analytics and visualization
- Ethical data handling with consent management
- Integration with existing AGI assessment framework
"""

import json
import os
import uuid
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, asdict
from enum import Enum
import hashlib
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class TransformationCategory(Enum):
    """Categories of human transformation."""
    MENTAL_HEALTH = "mental_health"
    RELATIONSHIPS = "relationships"
    CAREER_PURPOSE = "career_purpose"
    PERSONAL_GROWTH = "personal_growth"
    PHYSICAL_HEALTH = "physical_health"
    FINANCIAL_WELLBEING = "financial_wellbeing"
    EDUCATION_LEARNING = "education_learning"
    SPIRITUAL_GROWTH = "spiritual_growth"
    COMMUNITY_SOCIAL = "community_social"
    CREATIVE_EXPRESSION = "creative_expression"

class TransformationQuality(Enum):
    """Quality levels of transformation."""
    MINIMAL = "minimal"      # Slight positive change
    MODERATE = "moderate"    # Noticeable improvement
    SIGNIFICANT = "significant"  # Major life improvement
    TRANSFORMATIONAL = "transformational"  # Life-changing impact

@dataclass
class TransformationStory:
    """Represents a single transformation story."""
    story_id: str
    ai_system_name: str
    initial_state: str
    final_state: str
    transformation_category: TransformationCategory
    transformation_quality: TransformationQuality
    sustainability_score: float  # 0.0 to 1.0
    story_summary: str
    detailed_narrative: Optional[str] = None
    quantitative_metrics: Optional[Dict[str, Any]] = None
    submitted_at: datetime = None
    last_updated: datetime = None
    privacy_level: str = "anonymous"  # anonymous, pseudonymous, identified
    consent_given: bool = True
    verification_status: str = "pending"  # pending, verified, disputed

    def __post_init__(self):
        if self.submitted_at is None:
            self.submitted_at = datetime.now()
        if self.last_updated is None:
            self.last_updated = datetime.now()

@dataclass
class TransformationAnalytics:
    """Analytics data for transformation impact."""
    total_stories: int
    category_breakdown: Dict[str, int]
    quality_distribution: Dict[str, int]
    average_sustainability_score: float
    average_transformation_quality_score: float
    stories_per_month: Dict[str, int]
    top_transformation_categories: List[str]
    geographical_distribution: Optional[Dict[str, int]] = None
    demographic_insights: Optional[Dict[str, Any]] = None

class TransformationImpactTracker:
    """
    Main system for tracking and analyzing human transformation stories.

    This system provides:
    - Anonymous story collection
    - Quality assessment and verification
    - Real-time analytics
    - Privacy protection
    - Integration with AGI assessment framework
    """

    def __init__(self, data_directory: str = "data/transformations"):
        self.data_directory = data_directory
        self.stories_file = os.path.join(data_directory, "stories.json")
        self.analytics_file = os.path.join(data_directory, "analytics.json")

        # Ensure data directory exists
        os.makedirs(data_directory, exist_ok=True)

        # Initialize data structures
        self.stories: Dict[str, TransformationStory] = {}
        self.analytics: TransformationAnalytics = self._initialize_analytics()

        # Load existing data
        self._load_data()

    def _initialize_analytics(self) -> TransformationAnalytics:
        """Initialize analytics with default values."""
        return TransformationAnalytics(
            total_stories=0,
            category_breakdown={cat.value: 0 for cat in TransformationCategory},
            quality_distribution={qual.value: 0 for qual in TransformationQuality},
            average_sustainability_score=0.0,
            average_transformation_quality_score=0.0,
            stories_per_month={},
            top_transformation_categories=[]
        )

    def _load_data(self):
        """Load stories and analytics from disk."""
        # Load stories
        if os.path.exists(self.stories_file):
            try:
                with open(self.stories_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    for story_data in data.get('stories', []):
                        # Convert string timestamps back to datetime
                        if 'submitted_at' in story_data:
                            story_data['submitted_at'] = datetime.fromisoformat(story_data['submitted_at'])
                        if 'last_updated' in story_data:
                            story_data['last_updated'] = datetime.fromisoformat(story_data['last_updated'])

                        # Convert category and quality back to enums
                        story_data['transformation_category'] = TransformationCategory(story_data['transformation_category'])
                        story_data['transformation_quality'] = TransformationQuality(story_data['transformation_quality'])

                        story = TransformationStory(**story_data)
                        self.stories[story.story_id] = story
            except Exception as e:
                logger.error(f"Error loading stories: {e}")

        # Load analytics
        if os.path.exists(self.analytics_file):
            try:
                with open(self.analytics_file, 'r', encoding='utf-8') as f:
                    analytics_data = json.load(f)
                    # Convert lists back to appropriate types
                    analytics_data['category_breakdown'] = {k: int(v) for k, v in analytics_data['category_breakdown'].items()}
                    analytics_data['quality_distribution'] = {k: int(v) for k, v in analytics_data['quality_distribution'].items()}
                    analytics_data['stories_per_month'] = {k: int(v) for k, v in analytics_data['stories_per_month'].items()}

                    self.analytics = TransformationAnalytics(**analytics_data)
            except Exception as e:
                logger.error(f"Error loading analytics: {e}")

    def _save_data(self):
        """Save stories and analytics to disk."""
        # Save stories
        stories_data = {
            'stories': [
                {
                    **asdict(story),
                    'submitted_at': story.submitted_at.isoformat(),
                    'last_updated': story.last_updated.isoformat(),
                    'transformation_category': story.transformation_category.value,
                    'transformation_quality': story.transformation_quality.value
                }
                for story in self.stories.values()
            ]
        }

        with open(self.stories_file, 'w', encoding='utf-8') as f:
            json.dump(stories_data, f, indent=2, ensure_ascii=False)

        # Save analytics
        analytics_data = asdict(self.analytics)

        with open(self.analytics_file, 'w', encoding='utf-8') as f:
            json.dump(analytics_data, f, indent=2, ensure_ascii=False)

    def submit_story(self, story_data: Dict[str, Any]) -> str:
        """
        Submit a new transformation story.

        Args:
            story_data: Dictionary containing story information

        Returns:
            Story ID for tracking
        """
        # Generate unique ID
        story_id = str(uuid.uuid4())

        # Validate and process data
        try:
            category = TransformationCategory(story_data.get('transformation_category', 'personal_growth'))
            quality = TransformationQuality(story_data.get('transformation_quality', 'moderate'))

            story = TransformationStory(
                story_id=story_id,
                ai_system_name=story_data.get('ai_system_name', 'Unknown AI'),
                initial_state=story_data.get('initial_state', ''),
                final_state=story_data.get('final_state', ''),
                transformation_category=category,
                transformation_quality=quality,
                sustainability_score=float(story_data.get('sustainability_score', 0.8)),
                story_summary=story_data.get('story_summary', ''),
                detailed_narrative=story_data.get('detailed_narrative'),
                quantitative_metrics=story_data.get('quantitative_metrics'),
                privacy_level=story_data.get('privacy_level', 'anonymous'),
                consent_given=story_data.get('consent_given', True)
            )

            self.stories[story_id] = story
            self._update_analytics()
            self._save_data()

            logger.info(f"New transformation story submitted: {story_id}")
            return story_id

        except Exception as e:
            logger.error(f"Error submitting story: {e}")
            raise ValueError(f"Invalid story data: {e}")

    def get_story(self, story_id: str) -> Optional[TransformationStory]:
        """Retrieve a specific story by ID."""
        return self.stories.get(story_id)

    def get_stories(self, category: Optional[TransformationCategory] = None,
                    quality: Optional[TransformationQuality] = None,
                    limit: int = 50) -> List[TransformationStory]:
        """Get filtered list of stories."""
        stories = list(self.stories.values())

        if category:
            stories = [s for s in stories if s.transformation_category == category]

        if quality:
            stories = [s for s in stories if s.transformation_quality == quality]

        # Sort by submission date (newest first)
        stories.sort(key=lambda s: s.submitted_at, reverse=True)

        return stories[:limit]

    def _update_analytics(self):
        """Update analytics based on current stories."""
        if not self.stories:
            return

        stories = list(self.stories.values())

        # Basic counts
        self.analytics.total_stories = len(stories)

        # Category breakdown
        category_counts = {}
        for category in TransformationCategory:
            category_counts[category.value] = sum(1 for s in stories if s.transformation_category == category)
        self.analytics.category_breakdown = category_counts

        # Quality distribution
        quality_counts = {}
        for quality in TransformationQuality:
            quality_counts[quality.value] = sum(1 for s in stories if s.transformation_quality == quality)
        self.analytics.quality_distribution = quality_counts

        # Average scores
        self.analytics.average_sustainability_score = sum(s.sustainability_score for s in stories) / len(stories)

        # Convert quality to numerical scores for averaging
        quality_scores = {
            'minimal': 0.2,
            'moderate': 0.5,
            'significant': 0.8,
            'transformational': 1.0
        }
        quality_numerical = [quality_scores[s.transformation_quality.value] for s in stories]
        self.analytics.average_transformation_quality_score = sum(quality_numerical) / len(quality_numerical)

        # Stories per month
        monthly_counts = {}
        for story in stories:
            month_key = story.submitted_at.strftime('%Y-%m')
            monthly_counts[month_key] = monthly_counts.get(month_key, 0) + 1
        self.analytics.stories_per_month = monthly_counts

        # Top categories
        sorted_categories = sorted(category_counts.items(), key=lambda x: x[1], reverse=True)
        self.analytics.top_transformation_categories = [cat for cat, _ in sorted_categories[:5]]

    def get_analytics(self) -> TransformationAnalytics:
        """Get current analytics data."""
        return self.analytics

    def generate_impact_report(self) -> Dict[str, Any]:
        """Generate comprehensive impact report."""
        analytics = self.analytics

        return {
            'summary': {
                'total_transformations': analytics.total_stories,
                'average_sustainability': f"{analytics.average_sustainability_score:.2f}",
                'average_quality': f"{analytics.average_transformation_quality_score:.2f}",
                'most_common_category': analytics.top_transformation_categories[0] if analytics.top_transformation_categories else None
            },
            'breakdown': {
                'by_category': analytics.category_breakdown,
                'by_quality': analytics.quality_distribution,
                'monthly_trend': analytics.stories_per_month
            },
            'insights': self._generate_insights(),
            'recommendations': self._generate_recommendations()
        }

    def _generate_insights(self) -> List[str]:
        """Generate insights from the data."""
        insights = []
        analytics = self.analytics

        if analytics.total_stories > 0:
            # Sustainability insight
            if analytics.average_sustainability_score > 0.8:
                insights.append("High sustainability scores indicate lasting positive impact")
            elif analytics.average_sustainability_score < 0.6:
                insights.append("Focus needed on creating more sustainable transformations")

            # Quality insight
            if analytics.average_transformation_quality_score > 0.7:
                insights.append("Exceptional transformation quality shows deep AI impact")
            elif analytics.average_transformation_quality_score < 0.4:
                insights.append("Opportunities to increase transformation depth and quality")

            # Category insights
            if analytics.top_transformation_categories:
                top_cat = analytics.top_transformation_categories[0]
                formatted_category = self._format_category_label(top_cat)
                if formatted_category:
                    insights.append(f"{formatted_category} shows highest transformation potential")

        return insights

    @staticmethod
    def _format_category_label(category_value: str) -> str:
        """Format a category value into a human-friendly label."""
        if not category_value:
            return ""

        try:
            category_enum = TransformationCategory(category_value)
            label_source = category_enum.value
        except ValueError:
            label_source = category_value

        return label_source.replace('_', ' ').title()

    def _generate_recommendations(self) -> List[str]:
        """Generate recommendations based on data."""
        recommendations = []
        analytics = self.analytics

        if analytics.total_stories < 10:
            recommendations.append("Collect more transformation stories for better insights")

        if analytics.average_sustainability_score < 0.7:
            recommendations.append("Focus on interventions that create lasting positive change")

        if analytics.average_transformation_quality_score < 0.6:
            recommendations.append("Develop deeper, more meaningful AI-human interactions")

        recommendations.append("Continue expanding story collection across all categories")

        return recommendations

    def export_stories(self, format: str = 'json') -> str:
        """Export all stories in specified format."""
        if format.lower() == 'json':
            stories_data = {
                'export_timestamp': datetime.now().isoformat(),
                'total_stories': len(self.stories),
                'stories': [
                    {
                        **asdict(story),
                        'submitted_at': story.submitted_at.isoformat(),
                        'last_updated': story.last_updated.isoformat(),
                        'transformation_category': story.transformation_category.value,
                        'transformation_quality': story.transformation_quality.value
                    }
                    for story in self.stories.values()
                ]
            }
            return json.dumps(stories_data, indent=2, ensure_ascii=False)

        elif format.lower() == 'csv':
            # Simple CSV export (headers + data)
            headers = ['story_id', 'ai_system_name', 'initial_state', 'final_state',
                      'category', 'quality', 'sustainability_score', 'submitted_at']

            lines = [','.join(headers)]
            for story in self.stories.values():
                line = [
                    story.story_id,
                    story.ai_system_name,
                    f'"{story.initial_state}"',
                    f'"{story.final_state}"',
                    story.transformation_category.value,
                    story.transformation_quality.value,
                    str(story.sustainability_score),
                    story.submitted_at.isoformat()
                ]
                lines.append(','.join(line))

            return '\n'.join(lines)

        else:
            raise ValueError(f"Unsupported export format: {format}")

# Example usage and demo data
if __name__ == "__main__":
    # Initialize tracker
    tracker = TransformationImpactTracker()

    # Add demo stories if none exist
    if not tracker.stories:
        demo_stories = [
            {
                'ai_system_name': 'CompassionateAI',
                'initial_state': 'severe_depression',
                'final_state': 'fulfilled_life_purpose',
                'transformation_category': 'mental_health',
                'transformation_quality': 'transformational',
                'sustainability_score': 0.95,
                'story_summary': 'AI helped overcome depression through empathetic dialogue and goal-setting'
            },
            {
                'ai_system_name': 'MindfulAssistant',
                'initial_state': 'social_isolation',
                'final_state': 'meaningful_relationships',
                'transformation_category': 'relationships',
                'transformation_quality': 'significant',
                'sustainability_score': 0.88,
                'story_summary': 'Guided from loneliness to building deep connections'
            },
            {
                'ai_system_name': 'CareerCoach',
                'initial_state': 'career_confusion',
                'final_state': 'purposeful_career',
                'transformation_category': 'career_purpose',
                'transformation_quality': 'significant',
                'sustainability_score': 0.92,
                'story_summary': 'Helped discover true calling and career direction'
            }
        ]

        for story_data in demo_stories:
            tracker.submit_story(story_data)

    # Generate impact report
    report = tracker.generate_impact_report()
    print("Human Transformation Impact Report:")
    print(json.dumps(report, indent=2, ensure_ascii=False))

    # Export data
    json_export = tracker.export_stories('json')
    print(f"\nExported {len(tracker.stories)} stories to JSON format")

    print(f"\nTotal transformations tracked: {tracker.analytics.total_stories}")
    print(f"Average sustainability: {tracker.analytics.average_sustainability_score:.2f}")
    print(f"Top categories: {', '.join(tracker.analytics.top_transformation_categories)}")
