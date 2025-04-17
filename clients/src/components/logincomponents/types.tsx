export interface WeatherForecast {
    date: string;
    temperature: number;
    humidity: number;
    rainfall: number;
  }
  
  export interface CropRecommendationInput {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    soilPh: number;
    temperature: number;
    humidity: number;
    rainfall: number;
  }
  
  export interface CropRecommendation {
    recommendedCrop: string;
    confidence: number;
  }