import React from 'react';
import { Bug, AlertTriangle } from 'lucide-react';

const DetectionResults: React.FC = () => {
  const mockResults = [
    {
      type: 'pest',
      name: 'Aphids',
      confidence: 0.95,
      severity: 'high',
      location: 'Upper leaves'
    },
    {
      type: 'disease',
      name: 'Powdery Mildew',
      confidence: 0.88,
      severity: 'medium',
      location: 'Lower stems'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Detection Results</h2>
        <Bug className="h-6 w-6 text-red-600" />
      </div>

      <div className="space-y-4">
        {mockResults.map((result, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{result.name}</h3>
                <p className="text-sm text-gray-600">
                  {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                </p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                {(result.confidence * 100).toFixed(0)}% confidence
              </span>
            </div>
            
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-sm">
                <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                <span className="text-gray-700">
                  Severity: <span className="font-medium">{result.severity}</span>
                </span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 bg-red-100 rounded-full mr-2" />
                <span className="text-gray-700">
                  Location: <span className="font-medium">{result.location}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetectionResults;