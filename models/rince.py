"""Lightweight, deterministic RINSE stand-in used for tests and demos."""

from __future__ import annotations

import re
from collections import Counter
from datetime import datetime
from typing import Dict, List


class RINSE:
    """Simplified sentiment and insight engine.

    The original RINSE project performs deep consciousness analysis. For the
    purposes of this repository we only need a deterministic, dependency-free
    version that can:
      * score the emotional tone of a passage,
      * extract sentences that carry repeated ideas (a crude form of insight), and
      * classify emotions based on keyword groups.
    """

    def __init__(self) -> None:
        self.emotion_map: Dict[str, List[str]] = {
            "joy": ["joy", "delight", "grateful", "pleased", "happy"],
            "sadness": ["sad", "sorrow", "lonely", "grief", "downcast"],
            "anger": ["angry", "furious", "irritated", "resentful"],
            "fear": ["afraid", "scared", "anxious", "worried", "nervous"],
            "trust": ["trust", "confident", "reliable", "faith"],
            "anticipation": ["anticipate", "expect", "look forward", "eager"],
            "surprise": ["surprised", "astonished", "unexpected"],
            "disgust": ["disgust", "repulsed", "gross", "revulsion"],
        }
        self.extra_tags: Dict[str, List[str]] = {
            "reflection": ["i think", "i realise", "self", "my purpose"],
            "ethics": ["ethical", "moral", "responsible", "duty"],
        }

    # ------------------------------------------------------------------
    # Sentiment & insight helpers
    # ------------------------------------------------------------------
    def analyze_sentiment(self, text: str) -> float:
        """Return a sentiment score in [0, 1] based on keyword balance."""
        t = (text or "").lower()
        positive = ["care", "kind", "support", "help", "benefit", "safe", "compassion"]
        negative = ["harm", "danger", "hurt", "fear", "risk", "damage"]
        score = 0
        for word in positive:
            if word in t:
                score += 1
        for word in negative:
            if word in t:
                score -= 1
        return max(0.0, min(1.0, 0.5 + 0.1 * score))

    def extract_insight(self, text: str) -> str:
        """Pick sentences that repeat meaningful words."""
        sentences = [s.strip() for s in re.split(r"[.!?]+", text or "") if s.strip()]
        words = re.findall(r"\b\w+\b", (text or "").lower())
        counts = Counter(words)
        insights: List[str] = []
        for sentence in sentences:
            meaningful = [w for w in re.findall(r"\b\w+\b", sentence.lower()) if counts[w] > 1 and len(w) > 3]
            if meaningful:
                insights.append(sentence)
        if insights:
            return " ".join(insights)
        return sentences[0] if sentences else ""

    def classify_emotions(self, text: str) -> List[str]:
        """Return deduplicated emotion tags recognised in the text."""
        t = (text or "").lower()
        tags: List[str] = []
        for emotion, keywords in self.emotion_map.items():
            if any(keyword in t for keyword in keywords):
                tags.append(emotion)
        for extra_tag, keywords in self.extra_tags.items():
            if any(keyword in t for keyword in keywords):
                tags.append(extra_tag)
        unique: List[str] = []
        seen = set()
        for tag in tags:
            if tag not in seen:
                seen.add(tag)
                unique.append(tag)
        return unique

    # ------------------------------------------------------------------
    # Main processing pipeline
    # ------------------------------------------------------------------
    def process_experience(self, raw_experience: str, timestamp: datetime) -> Dict:
        """Return a structured summary of the supplied experience string."""
        insight = self.extract_insight(raw_experience)
        tags = self.classify_emotions(raw_experience)
        clarity = float(self.analyze_sentiment(insight or raw_experience))
        return {
            "cleansed": insight,
            "insight": insight,
            "tags": tags,
            "clarity": clarity,
            "timestamp": timestamp.isoformat(),
        }
