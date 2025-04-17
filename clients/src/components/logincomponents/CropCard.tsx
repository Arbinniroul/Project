import React from 'react';
import { Droplets, Thermometer, Sprout } from 'lucide-react';
import { Crop } from '../../types';

interface CropCardProps {
  crop: Crop;
}

export const CropCard: React.FC<CropCardProps> = ({ crop }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{crop.name}</h3>
        <p className="text-gray-600 mb-4">{crop.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-600">{crop.growthFactors.soilType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-600">{crop.growthFactors.waterRequirements}</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-red-500" />
            <span className="text-sm text-gray-600">{crop.growthFactors.temperature}</span>
          </div>
        </div>
      </div>
    </div>
  );
};