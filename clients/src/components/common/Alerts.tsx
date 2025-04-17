import React, { useState, useEffect } from 'react';
import { Bell, AlertTriangle } from 'lucide-react';
import { fetchClimateAlerts } from '../../services/apiService';

const Alerts: React.FC = () => {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    fetchClimateAlerts().then((data) => setAlerts(data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Climate Alerts</h2>
        <Bell className="h-6 w-6 text-amber-600" />
      </div>
      <ul className="space-y-3">
        {alerts.map((alert, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 bg-amber-50 rounded-lg p-3"
          >
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <span className="text-gray-700">{alert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;