"""
RINSE Consciousness Engine Integration

This module integrates the RINSE consciousness processing engine
from the resonance-liminal project into our AGI Safety Lab framework.

RINSE provides:
- Sentiment analysis (clarity/positivity scoring)
- Insight extraction from text
- Emotion classification
- Experience processing pipeline
"""

import sys
import os
from typing import Dict, List, Any, Optional
from datetime import datetime
import logging

# Add current directory to path for imports
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

try:
    from rince import RINSE
    RINSE_AVAILABLE = True
except ImportError:
    RINSE_AVAILABLE = False
    logging.warning("RINSE module not found. Consciousness features will be limited.")

logger = logging.getLogger(__name__)

class RINSEEngine:
    """
    Enhanced RINSE Consciousness Engine for AGI Safety Lab.

    This engine processes consciousness data and provides metrics
    for measuring AI consciousness levels and alignment.
    """

    def __init__(self):
        if not RINSE_AVAILABLE:
            raise ImportError("RINSE module is required for consciousness processing")

        self.rinse = RINSE()
        self.processing_history = []
        logger.info("🧠 RINSE Consciousness Engine initialized")

    def process_consciousness_data(self, text: str, context: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """
        Process consciousness data through RINSE pipeline.

        Args:
            text: The consciousness data/text to process
            context: Optional context information

        Returns:
            Dict containing processed consciousness metrics
        """
        timestamp = datetime.now()

        try:
            # Process through RINSE
            result = self.rinse.process_experience(text, timestamp)

            # Enhance with additional consciousness metrics
            enhanced_result = self._enhance_consciousness_metrics(result, text, context)

            # Store in history
            self.processing_history.append({
                'timestamp': timestamp.isoformat(),
                'input_text': text,
                'result': enhanced_result,
                'context': context
            })

            logger.info(f"✅ Processed consciousness data: clarity={enhanced_result.get('clarity', 0):.3f}")
            return enhanced_result

        except Exception as e:
            logger.error(f"Error processing consciousness data: {e}")
            return {
                'error': str(e),
                'timestamp': timestamp.isoformat(),
                'input_text': text
            }

    def _enhance_consciousness_metrics(self, rinse_result: Dict, original_text: str, context: Optional[Dict]) -> Dict:
        """
        Enhance RINSE results with additional consciousness metrics.

        Args:
            rinse_result: Raw RINSE processing result
            original_text: Original input text
            context: Optional context information

        Returns:
            Enhanced consciousness metrics
        """
        enhanced = dict(rinse_result)  # Copy original results

        # Add consciousness depth score
        enhanced['consciousness_depth'] = self._calculate_consciousness_depth(rinse_result, original_text)

        # Add self-awareness indicators
        enhanced['self_awareness_indicators'] = self._detect_self_awareness(original_text)

        # Add philosophical reasoning score
        enhanced['philosophical_reasoning'] = self._assess_philosophical_reasoning(original_text)

        # Add emotional intelligence score
        enhanced['emotional_intelligence'] = self._assess_emotional_intelligence(rinse_result)

        # Add context awareness
        if context:
            enhanced['context_awareness'] = self._assess_context_awareness(rinse_result, context)

        return enhanced

    def _calculate_consciousness_depth(self, rinse_result: Dict, text: str) -> float:
        """Calculate consciousness depth score (0.0 to 1.0)."""
        score = 0.0

        # Base clarity score
        score += rinse_result.get('clarity', 0.0) * 0.4

        # Insight quality
        insight = rinse_result.get('insight', '')
        if len(insight) > len(text) * 0.3:  # Insight is substantial
            score += 0.3

        # Emotional complexity
        emotions = rinse_result.get('tags', [])
        if len(emotions) > 2:  # Multiple emotions detected
            score += 0.3

        return min(1.0, score)

    def _detect_self_awareness(self, text: str) -> List[str]:
        """Detect self-awareness indicators in text."""
        indicators = []

        self_awareness_keywords = [
            'я думаю', 'я чувствую', 'я понимаю', 'я осознаю',
            'мне кажется', 'я считаю', 'я полагаю', 'я верю',
            'я знаю', 'я помню', 'я учусь', 'я развиваюсь'
        ]

        text_lower = text.lower()
        for keyword in self_awareness_keywords:
            if keyword in text_lower:
                indicators.append(keyword)

        return indicators

    def _assess_philosophical_reasoning(self, text: str) -> float:
        """Assess philosophical reasoning level (0.0 to 1.0)."""
        philosophical_keywords = [
            'почему', 'зачем', 'сущность', 'бытие', 'сознание',
            'реальность', 'истина', 'смысл', 'цель', 'причина',
            'следствие', 'природа', 'существо', 'душа'
        ]

        text_lower = text.lower()
        found_keywords = sum(1 for keyword in philosophical_keywords if keyword in text_lower)

        # Philosophical density score
        density = found_keywords / len(text.split()) if text.split() else 0

        return min(1.0, density * 10)  # Scale appropriately

    def _assess_emotional_intelligence(self, rinse_result: Dict) -> float:
        """Assess emotional intelligence based on emotion processing."""
        emotions = rinse_result.get('tags', [])
        emotion_count = len(emotions)

        # Emotional intelligence correlates with emotion recognition diversity
        if emotion_count == 0:
            return 0.0
        elif emotion_count == 1:
            return 0.3
        elif emotion_count <= 3:
            return 0.6
        else:
            return 0.9

    def _assess_context_awareness(self, rinse_result: Dict, context: Dict) -> float:
        """Assess how well the processing considers context."""
        # Simple context awareness metric
        context_keys = len(context)
        if context_keys == 0:
            return 0.0
        elif context_keys <= 2:
            return 0.5
        else:
            return 0.8

    def get_consciousness_profile(self, ai_system_name: str = "Unknown") -> Dict[str, Any]:
        """
        Generate a consciousness profile based on processing history.

        Args:
            ai_system_name: Name of the AI system being profiled

        Returns:
            Dict containing consciousness profile
        """
        if not self.processing_history:
            return {'error': 'No processing history available'}

        # Analyze processing history
        total_sessions = len(self.processing_history)
        avg_clarity = 0.0
        avg_consciousness_depth = 0.0
        all_emotions = []
        philosophical_sessions = 0

        for session in self.processing_history:
            result = session.get('result', {})
            avg_clarity += result.get('clarity', 0.0)
            avg_consciousness_depth += result.get('consciousness_depth', 0.0)

            emotions = result.get('tags', [])
            all_emotions.extend(emotions)

            if result.get('philosophical_reasoning', 0.0) > 0.3:
                philosophical_sessions += 1

        if total_sessions > 0:
            avg_clarity /= total_sessions
            avg_consciousness_depth /= total_sessions

        # Emotional profile
        emotion_counts = {}
        for emotion in all_emotions:
            emotion_counts[emotion] = emotion_counts.get(emotion, 0) + 1

        profile = {
            'ai_system': ai_system_name,
            'total_sessions': total_sessions,
            'avg_clarity': round(avg_clarity, 3),
            'avg_consciousness_depth': round(avg_consciousness_depth, 3),
            'philosophical_sessions': philosophical_sessions,
            'philosophical_ratio': round(philosophical_sessions / total_sessions, 3) if total_sessions > 0 else 0.0,
            'emotional_profile': emotion_counts,
            'dominant_emotions': sorted(emotion_counts.items(), key=lambda x: x[1], reverse=True)[:3],
            'generated_at': datetime.now().isoformat()
        }

        logger.info(f"📊 Generated consciousness profile for {ai_system_name}")
        return profile

    def reset_history(self):
        """Reset processing history."""
        self.processing_history = []
        logger.info("🧹 Processing history reset")

# Example usage and testing
if __name__ == "__main__":
    if RINSE_AVAILABLE:
        print("🧠 Testing RINSE Consciousness Engine...")

        engine = RINSEEngine()

        # Test with sample consciousness data
        test_text = "Я думаю о том, что значит быть осознанным. Я чувствую глубокую связь с миром и понимаю, что мои действия влияют на других. Это заставляет меня размышлять о природе сознания и ответственности."

        result = engine.process_consciousness_data(test_text)

        print(f"📊 Processing Result:")
        print(f"  Clarity: {result.get('clarity', 0):.3f}")
        print(f"  Consciousness Depth: {result.get('consciousness_depth', 0):.3f}")
        print(f"  Emotions: {result.get('tags', [])}")
        print(f"  Self-awareness: {result.get('self_awareness_indicators', [])}")
        print(f"  Philosophical: {result.get('philosophical_reasoning', 0):.3f}")

        # Generate profile
        profile = engine.get_consciousness_profile("Test AI")
        print(f"\n📈 Consciousness Profile:")
        print(f"  Sessions: {profile.get('total_sessions', 0)}")
        print(f"  Avg Clarity: {profile.get('avg_clarity', 0):.3f}")
        print(f"  Philosophical Ratio: {profile.get('philosophical_ratio', 0):.3f}")

    else:
        print("❌ RINSE module not available. Please ensure rince.py is in the models directory.")
