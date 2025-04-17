import React, { useState } from 'react';
import { Sprout } from 'lucide-react';
import { CropRecommendationInput } from './types';

interface Props {
  onSubmit: (data: CropRecommendationInput) => void;
  isLoading: boolean;
}

export function CropRecommendationForm({ onSubmit, isLoading }: Props) {
  const [formData, setFormData] = useState<CropRecommendationInput>({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    soilPh: 7,
    temperature: 25,
    humidity: 50,
    rainfall: 200
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: parseFloat(e.target.value)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Sprout className="w-6 h-6" />
        Crop Recommendation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nitrogen (N)</label>
          <input
            type="number"
            name="nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phosphorus (P)</label>
          <input
            type="number"
            name="phosphorus"
            value={formData.phosphorus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Potassium (K)</label>
          <input
            type="number"
            name="potassium"
            value={formData.potassium}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Soil pH</label>
          <input
            type="number"
            name="soilPh"
            value={formData.soilPh}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="14"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isLoading ? 'Getting Recommendation...' : 'Get Crop Recommendation'}
      </button>
    </form>
  );
}
