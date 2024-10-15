import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const FinanceManagement: React.FC = () => {
  const revenueData = [
    { month: 'Jan', revenue: 1200 },
    { month: 'Feb', revenue: 1900 },
    { month: 'Mar', revenue: 1500 },
    { month: 'Apr', revenue: 2200 },
    { month: 'May', revenue: 2800 },
    { month: 'Jun', revenue: 2500 },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$12,100', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Avg. Order Value', value: '$89', icon: <ShoppingCart size={24} />, trend: 'up' },
    { title: 'Monthly Growth', value: '15%', icon: <TrendingUp size={24} />, trend: 'up' },
  ];

  const recentTransactions = [
    { id: 1, date: '2023-06-15', description: 'Beat sale - Summer Vibes', amount: 150 },
    { id: 2, date: '2023-06-12', description: 'Royalty payment', amount: 75 },
    { id: 3, date: '2023-06-10', description: 'Studio session fee', amount: 200 },
    { id: 4, date: '2023-06-05', description: 'Beat sale - Urban Nights', amount: 120 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Finance Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-500">{stat.icon}</div>
              <div className="text-green-500">↑</div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-500">{stat.title}</div>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinanceManagement;