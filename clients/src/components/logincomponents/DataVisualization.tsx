import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { year: '2019', yield: 4000, temperature: 24, rainfall: 2400 },
    { year: '2020', yield: 3000, temperature: 25, rainfall: 2210 },
    { year: '2021', yield: 2000, temperature: 26, rainfall: 2290 },
    { year: '2022', yield: 2780, temperature: 27, rainfall: 2000 },
    { year: '2023', yield: 1890, temperature: 28, rainfall: 1800 },
  ];
  
  export function DataVisualization() {
    return (
      <div className="w-full h-[400px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="yield"
              stroke="hsl(var(--chart-1))"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="hsl(var(--chart-2))"
            />
            <Line
              type="monotone"
              dataKey="rainfall"
              stroke="hsl(var(--chart-3))"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }