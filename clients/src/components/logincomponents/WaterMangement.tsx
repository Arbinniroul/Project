import React from 'react';
import { Droplets } from 'lucide-react';

const WaterManagement: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Water Management</h2>
        <Droplets className="h-6 w-6 text-blue-600" />
      </div>
      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Water Usage
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                50%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Water Saving Tip</h3>
        <p className="text-gray-700 text-sm">
          Use drip irrigation to improve efficiency and reduce water waste. This can save up to 40% more water compared to traditional methods.
        </p>
      </div>
    </div>
  );
};

export default WaterManagement;