import Navbar from "@/components/common/Navbar";
import { Footer } from "@/components/logincomponents/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Aug', yield: 4000 },
  { month: 'Sep', yield: 3000 },
  { month: 'Oct', yield: 2000 },
  { month: 'Nov', yield: 2780 },
  { month: 'Dec', yield: 1890 },
  { month: 'Jan', yield: 2390 },
];

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="py-12 px-6 bg-gradient-to-br from-white to-gray-100 text-gray-900">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12">Dashboard</h1>
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Crops Card */}
        <Card className="shadow-lg rounded-2xl border border-gray-300 bg-white bg-opacity-80 hover:shadow-2xl transition-all transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Total Crops</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-extrabold text-green-500">12</p>
          </CardContent>
        </Card>
        
        {/* Average Yield Card */}
        <Card className="shadow-lg rounded-2xl border border-gray-300 bg-white bg-opacity-80 hover:shadow-2xl transition-all transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Average Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-extrabold text-yellow-400">2,745 kg/ha</p>
          </CardContent>
        </Card>
        
        {/* Temperature Card */}
        <Card className="shadow-lg rounded-2xl border border-gray-300 bg-white bg-opacity-80 hover:shadow-2xl transition-all transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-extrabold text-red-500">25°C</p>
          </CardContent>
        </Card>
        
        {/* Rainfall Card */}
        <Card className="shadow-lg rounded-2xl border border-gray-300 bg-white bg-opacity-80 hover:shadow-2xl transition-all transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Rainfall</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-extrabold text-blue-500">150mm</p>
          </CardContent>
        </Card>
      </div>

      {/* Crop Yield Trends Chart */}
      <Card className="mt-12 shadow-lg rounded-2xl border border-gray-300 bg-white bg-opacity-80">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">Crop Yield Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: 'rgba(0, 0, 0, 0.7)' }}
                  axisLine={{ stroke: 'rgba(0, 0, 0, 0.3)' }}
                  tickLine={{ stroke: 'rgba(0, 0, 0, 0.3)' }}
                />
                <YAxis 
                  tick={{ fill: 'rgba(0, 0, 0, 0.7)' }}
                  axisLine={{ stroke: 'rgba(0, 0, 0, 0.3)' }}
                  tickLine={{ stroke: 'rgba(0, 0, 0, 0.3)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    borderRadius: '10px',
                  }}
                  labelStyle={{ color: 'black' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="yield" 
                  stroke="rgb(34, 197, 94)" 
                  strokeWidth={3}
                  dot={{ fill: 'rgb(34, 197, 94)' }}
                  activeDot={{ r: 8, fill: 'rgb(34, 197, 94)' }}
                  isAnimationActive={true}
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </div>
  );
}
