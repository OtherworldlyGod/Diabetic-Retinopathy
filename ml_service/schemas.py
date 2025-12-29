from pydantic import BaseModel

class PredictionResponse(BaseModel):
    predicted_class: str
    confidence: float
    model_type: str
    disclaimer: str
