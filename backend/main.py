from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for now (update for production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the DecisionTreeClassifier model
model = joblib.load('bcancer.pkl')

# Define input data structure for texture_mean and radius_mean
class PredictionInput(BaseModel):
    texture_mean: float
    radius_mean: float

@app.post("/predict")
async def predict(input_data: PredictionInput):
    try:
        # Only use the two input features the model was trained on
        features = pd.DataFrame([[input_data.radius_mean, input_data.texture_mean]],
                                columns=["mean radius", "mean texture"])

        # Make prediction
        prediction = model.predict(features)[0]

        # Convert prediction to human-readable label
        result = "Malignant (M)" if prediction == 1 else "Benign (B)"
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
async def root():
    return {"message": "Welcome to the DecisionTreeClassifier ML Model API"}
