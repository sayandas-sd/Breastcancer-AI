"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [textureMean, setTextureMean] = useState("");
  const [radiusMean, setRadiusMean] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      if (!textureMean || !radiusMean) {
        const message = "Please enter both texture mean and radius mean.";
        setError(message);
        alert(`Error: ${message}`);
        return;
      }

      const response = await axios.post("http://localhost:8000/predict", {
        texture_mean: parseFloat(textureMean),
        radius_mean: parseFloat(radiusMean),
      });

      const result = response.data.result;
      alert(`Prediction Result: ${result}`);
      setError("");
    } catch (err) {
      const message = "An error occurred while fetching prediction. Please try again.";
      setError(message);
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">
        Breast Cancer Prediction
      </h1>

    <div className="border border-gray-200 p-7 rounded-md ">
      <div className="mb-6 ">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          <div className="font-bold">Texture Mean</div>
        </label>
        
        <input
          type="number"
          step="any"
          value={textureMean}
          onChange={(e) => setTextureMean(e.target.value)}
          placeholder="Enter texture mean (e.g., 10.38)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="text-gray-500 text-sm mt-4 ">
            Standard deviation of gray-scale values(5-40)
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium font-medium text-gray-700 mb-4">
          <div className="font-bold">Radius Mean</div>
        </label>
        <input
          type="number"
          step="any"
          value={radiusMean}
          onChange={(e) => setRadiusMean(e.target.value)}
          placeholder="Enter radius mean (e.g., 17.99)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="text-gray-500 text-sm mt-4">
            Average distance from center to points on the perimeter (5-30)
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition cursor-pointer"
      >

        Analyze Tumor Characteristics
      </button>

      {error && (
        <div className="mt-6 text-center text-red-600 font-medium">
          <p>{error}</p>
        </div>
      )}
      </div>
    </div>
  );
}
