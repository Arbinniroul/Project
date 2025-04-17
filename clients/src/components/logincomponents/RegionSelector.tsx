import React from 'react';
import { MapIcon } from 'lucide-react';
import { regions } from '../../data/data';
import { Region } from '../../types';

interface Props {
  selectedRegion: Region | null;
  onRegionSelect: (region: Region) => void;
}

export default function RegionSelector({ selectedRegion, onRegionSelect }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-4">
        <MapIcon className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-800">Select Region</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(regions).map(([key, region]) => (
          <button
            key={key}
            onClick={() => onRegionSelect(key as Region)}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
              selectedRegion === key
                ? 'ring-4 ring-emerald-500 ring-offset-2'
                : 'hover:scale-105'
            }`}
          >
            <img
              src={region.image}
              alt={region.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{region.name}</h3>
              <p className="text-sm opacity-90">{region.altitude}</p>
              <p className="text-sm opacity-90">{region.climate}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}