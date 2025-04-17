export interface Crop {
  id: string;
  name: string;
  image: string;
  description: string;
  growthFactors: {
    soilType: string;
    waterRequirements: string;
    temperature: string;
  };
  season: string[];
}

export interface MonthData {
  recommendedCrops: Crop[];
  alternatives: Crop[];
  customerPreferences: {
    trending: string[];
    marketDemand: 'high' | 'medium' | 'low';
  };
}
export interface Crop2 {
  id: string;
  name: string;
  image: string;
  regions: Region[];
  phRange: string;
  temperature: string;
  wateringNeeds: string;
  sunlight: string;
  fertilizer: string;
  plantingMonths: string[];
  harvestingMonths: string[];
  growingTechniques: string[];
  nutrientRequirements: string;
  additionalTips: string[];
  marketData: MarketData;
}

export type Region = 'terai' | 'hilly' | 'himalayan';

export interface RegionInfo {
  name: string;
  description: string;
  altitude: string;
  climate: string;
  image: string;
}

export interface MarketData {
  seedCost: number;
  fertilizerCost: number;
  laborCost: number;
  estimatedYield: number;
  marketPrices: Record<Region, number>;
}