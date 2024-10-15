import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ShoppingBag, TrendingUp, DollarSign, Users } from 'lucide-react';

const MarketplaceInsights: React.FC = () => {
  const categoryData = [
    { name: 'Beats', value: 45 },
    { name: 'Sample Packs', value: 25 },
    { name: 'Presets', value: 15 },
    { name: 'Tutorials', value: 10 },
    { name: 'Services', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const stats = [
    { title: 'Total Products', value: '1,234', icon: <ShoppingBag size={24} /> },
    { title: 'Total Sales', value: '$128,000', icon: <DollarSign size={24} /> },
    { title: 'Conversion Rate', value: '3.2%', icon: <TrendingUp size={24} /> },
    { title: 'Active Sellers', value: '256', icon: <Users size={24} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Marketplace Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        <h3 className="text-xl font-bold mb-4">Sales by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Top Selling Products</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Summer Vibes Beat Pack</td>
              <td className="px-6 py-4 whitespace-nowrap">Beats</td>
              <td className="px-6 py-4 whitespace-nowrap">250</td>
              <td className="px-6 py-4 whitespace-nowrap">$4,999</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Urban Drums Sample Pack</td>
              <td className="px-6 py-4 whitespace-nowrap">Sample Packs</td>
              <td className="px-6 py-4 whitespace-nowrap">180</td>
              <td className="px-6 py-4 whitespace-nowrap">$3,599</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Synth Master Class</td>
              <td className="px-6 py-4 whitespace-nowrap">Tutorials</td>
              <td className="px-6 py-4 whitespace-nowrap">120</td>
              <td className="px-6 py-4 whitespace-nowrap">$5,999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketplaceInsights;