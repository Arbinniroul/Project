import { Crop, MonthData } from '../types';

const createMonthData = (recommendedCrops: Crop[], alternatives: Crop[]): MonthData => ({
  recommendedCrops,
  alternatives,
  customerPreferences: {
    trending: recommendedCrops.map(crop => crop.name),
    marketDemand: 'high',
  },
});

const commonCrops: Record<string, Crop> = {
  spinach: {
    id: 'spinach-1',
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    description: 'Cold-hardy leafy green, perfect for winter growing',
    growthFactors: {
      soilType: 'Well-draining, fertile soil',
      waterRequirements: 'Moderate, consistent moisture',
      temperature: '40-75°F (4-24°C)',
    },
    season: ['winter', 'early spring'],
  },
  kale: {
    id: 'kale-1',
    name: 'Kale',
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=800&q=80',
    description: 'Nutrient-rich leafy green that thrives in cold weather',
    growthFactors: {
      soilType: 'Rich, well-draining soil',
      waterRequirements: 'Regular watering',
      temperature: '40-65°F (4-18°C)',
    },
    season: ['winter', 'fall'],
  },
  tomato: {
    id: 'tomato-1',
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    description: 'Versatile summer crop, perfect for gardens and containers',
    growthFactors: {
      soilType: 'Rich, well-draining soil',
      waterRequirements: 'Regular, deep watering',
      temperature: '65-85°F (18-29°C)',
    },
    season: ['summer'],
  },
  lettuce: {
    id: 'lettuce-1',
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80',
    description: 'Quick-growing leafy green, ideal for continuous harvesting',
    growthFactors: {
      soilType: 'Loose, fertile soil',
      waterRequirements: 'Consistent moisture',
      temperature: '60-70°F (15-21°C)',
    },
    season: ['spring', 'fall'],
  },
};

export const cropData: Record<string, MonthData> = {
  january: createMonthData([commonCrops.spinach, commonCrops.kale], [commonCrops.lettuce]),
  february: createMonthData([commonCrops.spinach, commonCrops.kale], [commonCrops.lettuce]),
  march: createMonthData([commonCrops.lettuce, commonCrops.spinach], [commonCrops.kale]),
  april: createMonthData([commonCrops.lettuce, commonCrops.spinach], [commonCrops.tomato]),
  may: createMonthData([commonCrops.lettuce, commonCrops.tomato], [commonCrops.spinach]),
  june: createMonthData([commonCrops.tomato], [commonCrops.lettuce]),
  july: createMonthData([commonCrops.tomato], [commonCrops.lettuce]),
  august: createMonthData([commonCrops.tomato], [commonCrops.lettuce]),
  september: createMonthData([commonCrops.lettuce, commonCrops.spinach], [commonCrops.kale]),
  october: createMonthData([commonCrops.lettuce, commonCrops.kale], [commonCrops.spinach]),
  november: createMonthData([commonCrops.kale, commonCrops.spinach], [commonCrops.lettuce]),
  december: createMonthData([commonCrops.kale, commonCrops.spinach], [commonCrops.lettuce]),
};