import React from 'react';
import { TrendingUp, DollarSign, Sprout, Users } from 'lucide-react';
import { Crop2, Region } from '../../types';

interface Props {
  crop: Crop2;
  selectedRegion: Region;
}

export default function MarketAnalysis({ crop, selectedRegion }: Props) {
  const totalCost = crop.marketData.seedCost + 
                   crop.marketData.fertilizerCost + 
                   crop.marketData.laborCost;
  
  const marketPrice = crop.marketData.marketPrices[selectedRegion];
  const estimatedYield = crop.marketData.estimatedYield;
  const totalRevenue = marketPrice * estimatedYield;
  const profitPerKg = marketPrice - (totalCost / estimatedYield);
  const totalProfit = totalRevenue - totalCost;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Market Analysis for {selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)} Region
      </h3>

      {/* Cost Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Sprout className="w-5 h-5 text-emerald-600" />
            <h4 className="font-medium text-gray-800">Seed Cost</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            NPR {crop.marketData.seedCost.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            <h4 className="font-medium text-gray-800">Fertilizer Cost</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            NPR {crop.marketData.fertilizerCost.toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-emerald-600" />
            <h4 className="font-medium text-gray-800">Labor Cost</h4>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            NPR {crop.marketData.laborCost.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          <h4 className="text-lg font-semibold text-gray-800">Profit Analysis</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-sm font-medium text-gray-600 mb-1">Total Investment</h5>
            <p className="text-2xl font-bold text-gray-900">
              NPR {totalCost.toLocaleString()}
            </p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-600 mb-1">Market Price (per kg)</h5>
            <p className="text-2xl font-bold text-gray-900">
              NPR {marketPrice.toLocaleString()}
            </p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-600 mb-1">Estimated Yield</h5>
            <p className="text-2xl font-bold text-gray-900">
              {estimatedYield.toLocaleString()} kg
            </p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-600 mb-1">Total Revenue</h5>
            <p className="text-2xl font-bold text-gray-900">
              NPR {totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-medium text-gray-600 mb-1">Profit per kg</h5>
              <p className="text-2xl font-bold text-emerald-600">
                NPR {profitPerKg.toFixed(2)}
              </p>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-600 mb-1">Total Profit</h5>
              <p className="text-2xl font-bold text-emerald-600">
                NPR {totalProfit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}