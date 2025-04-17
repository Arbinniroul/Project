import React from 'react';
import { Crop } from '../../types';
import { Droplets, Sun, Thermometer } from 'lucide-react';

interface Props {
  crop: Crop;
  onClick: () => void;
}

export default function CropCard2({ crop, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{crop.name}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">{crop.temperature}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">{crop.wateringNeeds}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-emerald-600" />
            <span className="text-sm text-gray-600">{crop.sunlight}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
              pH: {crop.phRange}
            </span>
            {crop.regions.map((region) => (
              <span
                key={region}
                className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}