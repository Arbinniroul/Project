import React, { useState } from 'react';
import { X, TrendingUp } from 'lucide-react';
import { Crop2, Region } from '../../types';
import MarketAnalysis from './MarketAnalysis';

interface Props {
  crop: Crop2;
  onClose: () => void;
}

export default function CropDialog({ crop, onClose }: Props) {
  const [showMarket, setShowMarket] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region>(crop.regions[0]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{crop.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Market Analysis Button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowMarket(!showMarket)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              {showMarket ? 'Hide Market Analysis' : 'Take me to Market'}
            </button>

            {showMarket && (
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as Region)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              >
                {crop.regions.map((region) => (
                  <option key={region} value={region}>
                    {region.charAt(0).toUpperCase() + region.slice(1)} Region
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Market Analysis Section */}
          {showMarket && (
            <MarketAnalysis crop={crop} selectedRegion={selectedRegion} />
          )}

          {/* Growing Techniques */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Growing Techniques
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {crop.growingTechniques.map((technique, index) => (
                <li key={index} className="text-gray-700">{technique}</li>
              ))}
            </ul>
          </section>

          {/* Nutrient Requirements */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nutrient Requirements
            </h3>
            <p className="text-gray-700">{crop.nutrientRequirements}</p>
          </section>

          {/* Growing Conditions */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Growing Conditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Temperature</h4>
                <p className="text-gray-700">{crop.temperature}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">pH Range</h4>
                <p className="text-gray-700">{crop.phRange}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Watering Needs</h4>
                <p className="text-gray-700">{crop.wateringNeeds}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Sunlight</h4>
                <p className="text-gray-700">{crop.sunlight}</p>
              </div>
            </div>
          </section>

          {/* Additional Tips */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Additional Tips
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {crop.additionalTips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </section>

          {/* Growing Calendar */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Growing Calendar
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Planting Months</h4>
                <div className="flex flex-wrap gap-2">
                  {crop.plantingMonths.map((month) => (
                    <span
                      key={month}
                      className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Harvesting Months</h4>
                <div className="flex flex-wrap gap-2">
                  {crop.harvestingMonths.map((month) => (
                    <span
                      key={month}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}