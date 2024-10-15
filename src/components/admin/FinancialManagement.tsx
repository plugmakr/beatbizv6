import React, { useState } from 'react';
import { DollarSign, TrendingUp, CreditCard, BarChart2, Download, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

const FinancialManagement: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, description: 'Beat sale - Summer Vibes', amount: 350, date: '2023-06-15', type: 'income' },
    { id: 2, description: 'Studio equipment purchase', amount: -1200, date: '2023-06-12', type: 'expense' },
    { id: 3, description: 'Royalty payment', amount: 780, date: '2023-06-10', type: 'income' },
    { id: 4, description: 'Software subscription', amount: -49, date: '2023-06-05', type: 'expense' },
    { id: 5, description: 'Beat sale - Urban Nights', amount: 420, date: '2023-06-03', type: 'income' },
  ]);

  const financialSummary = [
    { id: 1, title: 'Total Revenue', amount: '$125,230', icon: <DollarSign size={24} />, trend: 'up' },
    { id: 2, title: 'Monthly Growth', amount: '15%', icon: <TrendingUp size={24} />, trend: 'up' },
    { id: 3, title: 'Avg. Transaction', amount: '$89', icon: <CreditCard size={24} />, trend: 'neutral' },
    { id: 4, title: 'Profit Margin', amount: '32%', icon: <BarChart2 size={24} />, trend: 'up' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 15000 },
    { month: 'Feb', revenue: 18000 },
    { month: 'Mar', revenue: 22000 },
    { month: 'Apr', revenue: 20000 },
    { month: 'May', revenue: 25000 },
    { month: 'Jun', revenue: 28000 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Financial Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {financialSummary.map((item) => (
          <div key={item.id} className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className={`text-${item.trend === 'up' ? 'green' : item.trend === 'down' ? 'red' : 'yellow'}-600`}>
                {item.icon}
              </div>
              <span className="text-2xl font-bold">{item.amount}</span>
            </div>
            <h3 className="text-gray-600">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <div className="flex space-x-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <Filter size={20} className="mr-2" />
              Filter
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <Download size={20} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {transaction.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialManagement;