from fastapi import FastAPI, UploadFile, File, HTTPException
from ml_service.inference import predict
from ml_service.schemas import PredictionResponse

app = FastAPI(
    title="Diabetic Retinopathy Inference API",
    description="Baseline ML inference service for retinal image analysis",
    version="1.0"
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/predict", response_model=PredictionResponse)
async def predict_dr(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Only image files are supported")

    image_bytes = await file.read()
    result = predict(image_bytes)

    return result
