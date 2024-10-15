import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const ConversionRates: React.FC = () => {
  const [dateRange, setDateRange] = useState('last7days');

  const conversionData = [
    { date: '2023-06-01', rate: 2.5 },
    { date: '2023-06-02', rate: 2.7 },
    { date: '2023-06-03', rate: 3.1 },
    { date: '2023-06-04', rate: 2.9 },
    { date: '2023-06-05', rate: 3.3 },
    { date: '2023-06-06', rate: 3.5 },
    { date: '2023-06-07', rate: 3.2 },
  ];

  const funnelPerformance = [
    { name: 'Beat Sales Funnel', conversionRate: 3.5, change: 0.5 },
    { name: 'Email List Builder', conversionRate: 5.2, change: -0.3 },
    { name: 'Studio Booking Funnel', conversionRate: 4.1, change: 0.2 },
    { name: 'Artist Promotion', conversionRate: 2.8, change: 0.1 },
    { name: 'Music Course Funnel', conversionRate: 3.9, change: -0.1 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Conversion Rates</h2>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Overall Conversion Rate</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={conversionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rate" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Funnel Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funnel Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {funnelPerformance.map((funnel, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{funnel.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{funnel.conversionRate.toFixed(2)}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`flex items-center ${funnel.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {funnel.change >= 0 ? (
                        <ArrowUpRight size={16} className="mr-1" />
                      ) : (
                        <ArrowDownRight size={16} className="mr-1" />
                      )}
                      {Math.abs(funnel.change).toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConversionRates;