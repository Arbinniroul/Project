import Navbar from '@/components/common/Navbar';
import CropCard2 from '@/components/logincomponents/CropCard2';
import CropDialog from '@/components/logincomponents/CropDialog';
import { Footer } from '@/components/logincomponents/Footer';
import RegionSelector from '@/components/logincomponents/RegionSelector';
import { crops2 } from '@/data/data';
import { Region } from '@/types';

import { Leaf } from 'lucide-react';
import React, { useState } from 'react'

const Offspring = () => {
    const [selectedRegion, setSelectedRegion] = useState<Region| null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCrop, setSelectedCrop] = useState<typeof crops2[0] | null>(null);
  
    const filteredCrops = crops2.filter((crop) => {
      const matchesRegion = !selectedRegion || crop.regions.includes(selectedRegion);
      const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
       <Navbar/>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Region Selector */}
          <RegionSelector
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
          />
  
          {/* Search Bar */}
          <div className="max-w-md mx-auto my-8">
            <input
              type="text"
              placeholder="Search crops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
            />
          </div>
  
          {/* Crops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredCrops.map((crop) => (
              <CropCard2
                key={crop.id}
                crop={crop}
                onClick={() => setSelectedCrop(crop)}
              />
            ))}
          </div>
  
          {filteredCrops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No crops found for the selected criteria.
              </p>
            </div>
          )}
        </div>
  
        {/* Crop Details Dialog */}
        {selectedCrop && (
          <CropDialog
            crop={selectedCrop}
            onClose={() => setSelectedCrop(null)}
          />
        )}
        <Footer/>
      </div>
      
    );
}

export default Offspring
