import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, TrendingUp } from 'lucide-react';

const SalesPercentages: React.FC = () => {
  const salesData = [
    { name: 'Beats', value: 45 },
    { name: 'Samples', value: 25 },
    { name: 'Mixing Services', value: 20 },
    { name: 'Merchandise', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const stats = [
    { title: 'Total Sales', value: '$128,000', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Growth Rate', value: '15%', icon: <TrendingUp size={24} />, trend: 'up' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Sales Percentages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-indigo-600">{stat.icon}</div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-gray-600">{stat.title}</h3>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Sales Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={salesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {salesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Sales Breakdown</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {salesData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.value}%</td>
                <td className="px-6 py-4 whitespace-nowrap">${(128000 * item.value / 100).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPercentages;