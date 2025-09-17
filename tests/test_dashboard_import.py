"""Ensure the Streamlit dashboard module loads without raising."""

import importlib
import sys

import pytest


@pytest.mark.skipif(
    importlib.util.find_spec("streamlit") is None, reason="streamlit not installed"
)
def test_dashboard_module_imports(tmp_path, monkeypatch):
    module_name = "interfaces.dashboard"
    if module_name in sys.modules:
        del sys.modules[module_name]

    monkeypatch.setenv("STREAMLIT_CACHE_DIR", str(tmp_path / "streamlit-cache"))
    module = importlib.import_module(module_name)

    assert hasattr(module, "render_overview")
    assert hasattr(module, "render_consciousness_meter")
