import React from 'react';
import { FlaskRound as Flask, Leaf } from 'lucide-react';

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      type: 'fertilizer',
      product: 'Organic Neem Oil',
      dosage: '5ml per liter of water',
      frequency: 'Every 7 days',
      notes: 'Effective against aphids and other soft-bodied insects'
    },
    {
      type: 'treatment',
      product: 'Sulfur-based Fungicide',
      dosage: '2.5g per liter of water',
      frequency: 'Every 14 days',
      notes: 'Controls powdery mildew and other fungal diseases'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Treatment Recommendations</h2>
        <Flask className="h-6 w-6 text-purple-600" />
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{rec.product}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {rec.type}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Leaf className="h-4 w-4 text-green-500 mr-2" />
                <span>Dosage: {rec.dosage}</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-purple-100 rounded-full mr-2" />
                <span>Frequency: {rec.frequency}</span>
              </div>
              <p className="mt-2 text-gray-700 bg-purple-50 p-2 rounded">
                Note: {rec.notes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;