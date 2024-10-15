import React, { useState } from 'react';
import { DollarSign, Calendar, Search } from 'lucide-react';

interface Payout {
  id: number;
  user: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

const Payouts: React.FC = () => {
  const [payouts, setPayouts] = useState<Payout[]>([
    { id: 1, user: 'John Doe', amount: 1500, date: '2023-06-15', status: 'completed' },
    { id: 2, user: 'Jane Smith', amount: 2000, date: '2023-06-16', status: 'pending' },
    { id: 3, user: 'Bob Johnson', amount: 1200, date: '2023-06-14', status: 'failed' },
    { id: 4, user: 'Alice Brown', amount: 1800, date: '2023-06-17', status: 'pending' },
    { id: 5, user: 'Charlie Wilson', amount: 2200, date: '2023-06-13', status: 'completed' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPayouts = payouts.filter(payout =>
    payout.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payout.amount.toString().includes(searchTerm) ||
    payout.date.includes(searchTerm)
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Payouts</h2>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search payouts..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPayouts.map((payout) => (
              <tr key={payout.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payout.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <DollarSign size={16} className="text-gray-400 mr-1" />
                    {payout.amount.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-1" />
                    {payout.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    payout.status === 'completed' ? 'bg-green-100 text-green-800' :
                    payout.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {payout.status}
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

export default Payouts;