import joblib
import pandas as pd

# Load the model
model = joblib.load('bcancer.pkl')

# Example input data (30 features for breast cancer dataset)
features = [
    17.99, 10.38, 122.8, 1001.0, 0.1184, 0.2776, 0.3001, 0.1471, 0.2419, 0.07871,
    1.095, 0.9053, 8.589, 153.4, 0.006399, 0.04904, 0.05373, 0.01587, 0.03003, 0.006193,
    25.38, 17.33, 184.6, 2019.0, 0.1622, 0.6656, 0.7119, 0.2654, 0.4601, 0.1189
]

# Convert to DataFrame (scikit-learn expects 2D array)
features_df = pd.DataFrame([features])

# Make prediction
prediction = model.predict(features_df)[0]
print(f"Prediction: {prediction}")  # 0 = benign, 1 = malignant