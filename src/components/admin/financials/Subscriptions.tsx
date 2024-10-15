import React, { useState } from 'react';
import { Users, DollarSign, Calendar, Search } from 'lucide-react';

interface Subscription {
  id: number;
  user: string;
  plan: string;
  amount: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'cancelled' | 'expired';
}

const Subscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    { id: 1, user: 'John Doe', plan: 'Pro', amount: 30, startDate: '2023-01-01', endDate: '2023-12-31', status: 'active' },
    { id: 2, user: 'Jane Smith', plan: 'Basic', amount: 15, startDate: '2023-03-15', endDate: '2023-09-14', status: 'active' },
    { id: 3, user: 'Bob Johnson', plan: 'Enterprise', amount: 100, startDate: '2023-02-01', endDate: '2024-01-31', status: 'active' },
    { id: 4, user: 'Alice Brown', plan: 'Pro', amount: 30, startDate: '2023-04-01', endDate: '2023-06-30', status: 'cancelled' },
    { id: 5, user: 'Charlie Wilson', plan: 'Basic', amount: 15, startDate: '2023-01-01', endDate: '2023-03-31', status: 'expired' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscription.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Subscriptions</h2>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search subscriptions..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSubscriptions.map((subscription) => (
              <tr key={subscription.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users size={16} className="text-gray-400 mr-1" />
                    {subscription.user}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.plan}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <DollarSign size={16} className="text-gray-400 mr-1" />
                    {subscription.amount.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-1" />
                    {subscription.startDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-1" />
                    {subscription.endDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    subscription.status === 'active' ? 'bg-green-100 text-green-800' :
                    subscription.status === 'cancelled' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {subscription.status}
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

export default Subscriptions;