import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/common/Navbar";
import { WeatherDashboard } from "@/components/logincomponents/Wdashboard";
import { Footer } from "@/components/logincomponents/Footer";

const PEXELS_API_KEY = "yQi3D5OGQ1hiFXu9kOCjNMVjJYxeCnGQvAKvi1mZbClCHurrxuqd5w0f";

export default function Prediction() {
  const [temperature, setTemperature] = useState<number>(25);
  const [predictedTemperature, setPredictedTemperature] = useState<number>(25);
  const [humidity, setHumidity] = useState<number>(50);
  const [predictedHumidity, setPredictedHumidity] = useState<number>(50);
  const [rainfall, setRainfall] = useState<number>(250);
  const [nitrogen, setNitrogen] = useState<number>(34);
  const [phosphorus, setPhosphorus] = useState<number>(32);
  const [potassium, setPotassium] = useState<number>(64);
  const [ph, setPh] = useState<number>(6.5);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ recommendedCrop: string; confidence: number } | null>(null);
  const [cropImage, setCropImage] = useState<string | null>(null);

  const handlePrediction = async () => {
    setIsLoading(true);
    try {
      const data = {
        N: nitrogen,
        P: phosphorus,
        K: potassium,
        temperature,
        humidity,
        ph,
        rainfall,
      };

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const result = await response.json();
      const crop = result.predicted_crop;
      setRecommendation({
        recommendedCrop: crop,
        confidence: result.confidence || 0.9,
      });

      // Fetch image for the recommended crop
      const imageResponse = await fetch(
        `https://api.pexels.com/v1/search?query=${crop}&per_page=1`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );

      if (imageResponse.ok) {
        const imageResult = await imageResponse.json();
        const firstImage = imageResult.photos[0]?.src.medium;
        setCropImage(firstImage || null);
      } else {
        console.error("Failed to fetch crop image");
        setCropImage(null);
      }
    } catch (error) {
      console.error("Error predicting crop:", error);
      setRecommendation(null);
      setCropImage(null);
    } finally {
      setIsLoading(false);
    }
  };

  const updatePredictedValues = (temp: number, hum: number) => {
    setPredictedTemperature(temp);
    setPredictedHumidity(hum);
    setTemperature(temp);
    setHumidity(hum);
  };

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-green-200 to-white text-white">
      <Navbar />
      <div className="container max-w-screen-xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-black">Crop Prediction</h1>
        <WeatherDashboard
          lat={27.7}
          lon={85.332}
          apiKey="aa5353c3143331890ace358e11b2e067"
          onWeatherData={({ temperature, humidity }) => updatePredictedValues(temperature, humidity)}
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl mx-auto mt-10">
          <Card className="bg-gray-800 text-black">
            <CardHeader>
              <CardTitle className="text-white">Input Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: "Nitrogen (N)", value: nitrogen, setValue: setNitrogen, min: 0, max: 100 },
                { label: "Phosphorus (P)", value: phosphorus, setValue: setPhosphorus, min: 0, max: 100 },
                { label: "Potassium (K)", value: potassium, setValue: setPotassium, min: 0, max: 100 },
                { label: "Soil pH", value: ph, setValue: setPh, min: 0, max: 14 },
                { label: "Rainfall (mm)", value: rainfall, setValue: setRainfall, min: 0, max: 500 },
                { label: `Temperature (°C) [Predicted: ${predictedTemperature}°C]`, value: temperature, setValue: setTemperature, min: 0, max: 50 },
                { label: `Humidity (%) [Predicted: ${predictedHumidity}%]`, value: humidity, setValue: setHumidity, min: 0, max: 100 },
              ].map(({ label, value, setValue, min, max }) => (
                <div className="space-y-2" key={label}>
                  <label className="text-sm font-medium text-gray-400">{label}: {value}</label>
                  <Slider value={[value]} onValueChange={(v) => setValue(v[0])} min={min} max={max} step={1} className="bg-gray-700" />
                </div>
              ))}
              <Button onClick={handlePrediction} className="w-full">
                {isLoading ? "Predicting..." : "Get Recommendation"}
              </Button>
            </CardContent>
          </Card>
          {recommendation && (
            <Card className="bg-gray-800 text-white px-auto py-5">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4">Recommendation Result</h2>
                <p className="text-lg">
                  Recommended Crop: <span className="font-semibold">{recommendation.recommendedCrop}</span>
                </p>
                <p className="text-lg">
                  Confidence: <span className="font-semibold">{(recommendation.confidence * 100).toFixed(2)}%</span>
                </p>
                {cropImage && (
                  <img src={cropImage} alt={recommendation.recommendedCrop} className="rounded-lg mt-4" />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer/>

    </div>
  );
}
