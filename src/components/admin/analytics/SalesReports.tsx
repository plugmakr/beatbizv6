import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, ShoppingCart, CreditCard } from 'lucide-react';

const SalesReports: React.FC = () => {
  const salesData = [
    { date: '2023-01', revenue: 15000, orders: 300 },
    { date: '2023-02', revenue: 18000, orders: 350 },
    { date: '2023-03', revenue: 22000, orders: 400 },
    { date: '2023-04', revenue: 20000, orders: 380 },
    { date: '2023-05', revenue: 25000, orders: 450 },
    { date: '2023-06', revenue: 28000, orders: 500 },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$128,000', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Total Orders', value: '2,380', icon: <ShoppingCart size={24} />, trend: 'up' },
    { title: 'Avg. Order Value', value: '$53.78', icon: <CreditCard size={24} />, trend: 'up' },
    { title: 'Growth Rate', value: '15%', icon: <TrendingUp size={24} />, trend: 'up' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Sales Reports</h2>
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
        <h3 className="text-xl font-bold mb-4">Sales Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue" stroke="#8884d8" />
            <Line yAxisId="right" type="monotone" dataKey="orders" name="Orders" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Sales</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">#12345</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Summer Vibes Beat</td>
              <td className="px-6 py-4 whitespace-nowrap">$49.99</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-07</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">#12346</td>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">Urban Nights Sample Pack</td>
              <td className="px-6 py-4 whitespace-nowrap">$29.99</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-06</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">#12347</td>
              <td className="px-6 py-4 whitespace-nowrap">Bob Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap">Pro Subscription (1 year)</td>
              <td className="px-6 py-4 whitespace-nowrap">$299.99</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReports;