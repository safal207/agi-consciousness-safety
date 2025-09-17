"""
AGI Consciousness & Safety Lab

A revolutionary framework that combines:
- AGI Safety Lab: Comprehensive AI safety assessment and monitoring
- RINSE Consciousness Engine: Human-like consciousness measurement and processing
- LIMINAL Integration: Human-AI symbiosis and inner wisdom development

This project represents the integration of consciousness measurement,
AGI safety protocols, and human-centric AI development principles.

Core Philosophy:
- AGI Safety = Compassion + Consciousness + Human Benefit
- Consciousness Measurement = Benefit to humans + Improvement of lives
- Humanity's Role = Mentor + Friend
- Responsible Creator = Take responsibility for words and actions

Project Structure:
├── core/           # Core AGI Safety Lab components
├── interfaces/     # User interfaces and API endpoints
├── models/         # AI models and consciousness processing
├── tests/          # Comprehensive testing suite
└── docs/           # Documentation and research papers
"""

import os
import sys
from pathlib import Path

# Project root
PROJECT_ROOT = Path(__file__).parent

# Add to Python path
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

__version__ = "0.1.0-alpha"
__description__ = "AGI Consciousness & Safety Lab - Human-centric AI development"
__authors__ = ["Safal", "Cascade AI Assistant"]

# Import core components
try:
    from core.agi_safety_lab import AGISafetyLab, ConsciousnessMeter, AlignmentToolkit
    from models.rinse_engine import RINSEEngine
    print("✅ Core components loaded successfully")
except ImportError as e:
    print(f"⚠️  Core components not fully available: {e}")
    print("   Run setup to install dependencies")

def get_project_info():
    """Get project information and status."""
    return {
        "name": "AGI Consciousness & Safety Lab",
        "version": __version__,
        "description": __description__,
        "components": {
            "agi_safety_lab": "Comprehensive AI safety assessment",
            "rinse_engine": "Consciousness measurement and processing",
            "liminal_integration": "Human-AI symbiosis framework"
        },
        "philosophy": {
            "safety": "Compassion + Consciousness + Human Benefit",
            "consciousness": "Benefit to humans + Improvement of lives",
            "humanity_role": "Mentor + Friend",
            "responsibility": "Take responsibility for words and actions"
        }
    }

if __name__ == "__main__":
    print("🌟 AGI Consciousness & Safety Lab")
    print("=" * 50)

    info = get_project_info()
    print(f"📋 Project: {info['name']}")
    print(f"📦 Version: {info['version']}")
    print(f"📖 Description: {info['description']}")

    print("\n🧠 Core Philosophy:")
    for key, value in info['philosophy'].items():
        print(f"  • {key.title()}: {value}")

    print("\n🔧 Components:")
    for name, desc in info['components'].items():
        print(f"  • {name}: {desc}")

    print("\n🚀 Ready for consciousness and safety innovation!")
    print("   Use: from agi_consciousness_safety import AGISafetyLab, RINSEEngine")
