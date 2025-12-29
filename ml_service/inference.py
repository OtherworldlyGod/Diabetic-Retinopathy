import numpy as np
from ml_service.preprocessing import preprocess_image

CLASS_MAP = {
    0: "No DR",
    1: "Mild",
    2: "Moderate",
    3: "Severe",
    4: "Proliferative"
}

def predict(image_bytes: bytes) -> dict:
    """
    Placeholder inference backend.

    In production, this would call a trained CNN.
    This implementation demonstrates system integration.
    """

    # Fake deterministic prediction for demo
    rng = np.random.default_rng(seed=42)
    probs = rng.random(5)
    probs = probs / probs.sum()

    idx = int(np.argmax(probs))

    return {
        "predicted_class": CLASS_MAP[idx],
        "confidence": float(probs[idx]),
        "model_type": "MockInferenceBackend",
        "disclaimer": (
            "This deployment demonstrates ML system architecture. "
            "Final model artifacts are environment-dependent."
        )
    }
