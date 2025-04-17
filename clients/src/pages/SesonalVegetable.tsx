import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

import { MonthSelector } from '@/components/logincomponents/MonthSelector';
import { SearchBar } from '@/components/logincomponents/SearchBar';
import { cropData } from '@/data/crops';
import { CropCard } from '@/components/logincomponents/CropCard';
import Navbar from '@/components/common/Navbar';
import { Footer } from '@/components/logincomponents/Footer';

function SeasonalVegetable() {
  const [selectedMonth, setSelectedMonth] = useState('january');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<{ email: string } | null>(null);

  const monthData = cropData[selectedMonth];

  const filteredRecommendedCrops = monthData.recommendedCrops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlternatives = monthData.alternatives.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
            
      
      {/* Search and Month Selector in Body */}
      <section className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} className="w-1/2" />
          
          {/* Month Selector */}
          <MonthSelector
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
            className="w-1/3"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Recommended Crops */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Recommended Crops for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecommendedCrops.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
              ))}
            </div>
          </section>

          {/* Alternative Crops */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alternative Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlternatives.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
              ))}
            </div>
          </section>

          {/* Market Insights */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Insights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Trending Crops</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {monthData.customerPreferences.trending.map((crop) => (
                    <span
                      key={crop}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Market Demand</h3>
                <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {monthData.customerPreferences.marketDemand.toUpperCase()}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default SeasonalVegetable;
