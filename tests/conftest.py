"""Pytest configuration helpers for the AGI consciousness project."""

from __future__ import annotations
import sys
from pathlib import Path

def _ensure_repo_root_on_path() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    root_str = str(repo_root)
    if root_str not in sys.path:
        sys.path.insert(0, root_str)


_ensure_repo_root_on_path()
