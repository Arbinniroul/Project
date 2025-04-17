import React from 'react';


interface MonthSelectorProps {
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

const months = [
  'january', 'february', 'march', 'april',
  'may', 'june', 'july', 'august',
  'september', 'october', 'november', 'december'
];

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  selectedMonth,
  onMonthChange,
}) => {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">

      </div>
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        className="block w-full pl-10 pr-4 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-lg bg-white text-black shadow-sm"
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month.charAt(0).toUpperCase() + month.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};