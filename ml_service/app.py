from fastapi import FastAPI, UploadFile, File, HTTPException
from ml_service.inference import predict
from ml_service.schemas import PredictionResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Diabetic Retinopathy Inference API",
    description="Baseline ML inference service for retinal image analysis",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
