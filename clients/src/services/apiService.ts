// Mock API service with simulated delays for realism
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchWeatherData = async () => {
  await delay(1000);
  return {
    temperature: '28°C',
    rainfall: '120mm',
    condition: 'Sunny'
  };
};

export const fetchCropPredictions = async () => {
  await delay(1500);
  return [
    'Rice: High Yield Expected (95% confidence)',
    'Wheat: Moderate Yield Predicted (80% confidence)',
    'Maize: Low Yield Warning (65% confidence)'
  ];
};

export const fetchClimateAlerts = async () => {
  await delay(800);
  return [
    'Drought alert: Region A experiencing below-average rainfall',
    'Heavy rainfall warning: Prepare for intense precipitation in Region B',
    'Heat stress warning: Protect sensitive crops from high temperatures'
  ];
};