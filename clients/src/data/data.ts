import { Crop2, RegionInfo } from '../types';

export const regions: Record<string, RegionInfo> = {
  terai: {
    name: 'Terai Region',
    description: 'Fertile plains with subtropical climate',
    altitude: '59-700m',
    climate: 'Hot and humid',
    image: 'https://images.unsplash.com/photo-1589557909852-77656473c5a1?auto=format&fit=crop&q=80&w=1200',
  },
  hilly: {
    name: 'Hilly Region',
    description: 'Mid-hills with temperate climate',
    altitude: '700-3000m',
    climate: 'Moderate',
    image: 'https://images.unsplash.com/photo-1606067360299-4dd9be53e571?auto=format&fit=crop&q=80&w=1200',
  },
  himalayan: {
    name: 'Himalayan Region',
    description: 'High altitude mountains with alpine climate',
    altitude: '3000-8848m',
    climate: 'Cold',
    image: 'https://images.unsplash.com/photo-1574725035820-950c0e01ccd9?auto=format&fit=crop&q=80&w=1200',
  },
};

export const crops2: Crop2[] = [
  {
    id: '1',
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=800',
    regions: ['terai', 'hilly'],
    phRange: '5.5 - 7.0',
    temperature: '20°C - 25°C',
    wateringNeeds: 'Regular, consistent moisture',
    sunlight: 'Full sun (6-8 hours)',
    fertilizer: 'NPK 10:10:10',
    plantingMonths: ['Aug', 'Sep', 'Oct'],
    harvestingMonths: ['Nov', 'Dec', 'Jan'],
    growingTechniques: [
      'Greenhouse/Polyhouse cultivation with controlled temperature and humidity',
      'Use ventilation fans to prevent excess moisture buildup',
      'Vertical growing with trellises'
    ],
    nutrientRequirements: 'Compost + NPK (Nitrogen-Phosphorus-Potassium) 10:10:10',
    additionalTips: [
      'Use mulching to retain soil moisture',
      'Support plants with trellises',
      'Prune side shoots for better air circulation'
    ],
    marketData: {
      seedCost: 500,
      fertilizerCost: 1200,
      laborCost: 3000,
      estimatedYield: 2000,
      marketPrices: {
        terai: 60,
        hilly: 80,
        himalayan: 100
      }
    }
  },
  {
    id: '2',
    name: 'Cauliflower',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&q=80&w=800',
    regions: ['hilly'],
    phRange: '6.0 - 7.0',
    temperature: '15°C - 20°C',
    wateringNeeds: 'Moderate, well-drained soil',
    sunlight: 'Full sun to partial shade',
    fertilizer: 'NPK 15:5:10',
    plantingMonths: ['Sep', 'Oct'],
    harvestingMonths: ['Dec', 'Jan', 'Feb'],
    growingTechniques: [
      'High-Tunnel Farming to protect from heavy rainfall and frost',
      'Raised bed cultivation',
      'Use of shade nets during intense sunlight'
    ],
    nutrientRequirements: 'Well-decomposed farmyard manure + NPK 15:5:10',
    additionalTips: [
      'Use shading nets to protect from excess sunlight',
      'Maintain proper spacing between plants',
      'Regular monitoring for pests'
    ],
    marketData: {
      seedCost: 800,
      fertilizerCost: 1500,
      laborCost: 2500,
      estimatedYield: 1500,
      marketPrices: {
        terai: 70,
        hilly: 90,
        himalayan: 120
      }
    }
  },
  {
    id: '3',
    name: 'Cucumber',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&q=80&w=800',
    regions: ['terai'],
    phRange: '6.0 - 7.0',
    temperature: '20°C - 30°C',
    wateringNeeds: 'Regular watering, moist soil',
    sunlight: 'Full sun',
    fertilizer: 'NPK 20:10:10',
    plantingMonths: ['Aug', 'Sep'],
    harvestingMonths: ['Oct', 'Nov', 'Dec'],
    growingTechniques: [
      'Shaded Net House to prevent overheating',
      'Vertical training of vines',
      'Drip irrigation system'
    ],
    nutrientRequirements: 'Nitrogen-rich fertilizer with potash (NPK 20:10:10)',
    additionalTips: [
      'Train vines vertically for better air circulation',
      'Remove yellowing leaves promptly',
      'Harvest regularly to encourage production'
    ],
    marketData: {
      seedCost: 400,
      fertilizerCost: 1000,
      laborCost: 2000,
      estimatedYield: 2500,
      marketPrices: {
        terai: 40,
        hilly: 60,
        himalayan: 80
      }
    }
  },
  {
    id: '4',
    name: 'Broccoli',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&q=80&w=800',
    regions: ['hilly'],
    phRange: '6.0 - 7.0',
    temperature: '15°C - 20°C',
    wateringNeeds: 'Consistent moisture',
    sunlight: 'Full sun',
    fertilizer: 'NPK 10:20:10',
    plantingMonths: ['Sep', 'Oct'],
    harvestingMonths: ['Dec', 'Jan'],
    growingTechniques: [
      'Raised Beds with Plastic Mulch',
      'Protected cultivation in tunnels',
      'Proper spacing for air circulation'
    ],
    nutrientRequirements: 'Phosphorus-rich compost + NPK 10:20:10',
    additionalTips: [
      'Water early in the morning to reduce fungal infections',
      'Maintain proper spacing between plants',
      'Harvest when heads are tight and compact'
    ],
    marketData: {
      seedCost: 900,
      fertilizerCost: 1800,
      laborCost: 2800,
      estimatedYield: 1200,
      marketPrices: {
        terai: 100,
        hilly: 120,
        himalayan: 150
      }
    }
  },
  {
    id: '5',
    name: 'Peas',
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&q=80&w=800',
    regions: ['hilly', 'himalayan'],
    phRange: '6.0 - 7.5',
    temperature: '13°C - 18°C',
    wateringNeeds: 'Regular, avoid waterlogging',
    sunlight: 'Full sun',
    fertilizer: 'NPK 15:30:15',
    plantingMonths: ['Oct', 'Nov'],
    harvestingMonths: ['Jan', 'Feb', 'Mar'],
    growingTechniques: [
      'Cold Frame or Hoop House cultivation',
      'Vertical support system',
      'Row covers for frost protection'
    ],
    nutrientRequirements: 'Phosphorus and nitrogen (NPK 15:30:15)',
    additionalTips: [
      'Support plants with sticks or trellises',
      'Plant in well-draining soil',
      'Regular harvesting encourages production'
    ],
    marketData: {
      seedCost: 600,
      fertilizerCost: 1300,
      laborCost: 2200,
      estimatedYield: 1800,
      marketPrices: {
        terai: 80,
        hilly: 100,
        himalayan: 130
      }
    }
  }
];