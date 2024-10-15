import React, { useState } from 'react';
import { Music, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

interface Beat {
  id: number;
  title: string;
  price: number;
  genre: string;
  bpm: number;
  sales: number;
}

const MemberMarketplace: React.FC = () => {
  const [beats, setBeats] = useState<Beat[]>([
    { id: 1, title: 'Summer Vibes', price: 49.99, genre: 'Pop', bpm: 128, sales: 15 },
    { id: 2, title: 'Urban Nights', price: 39.99, genre: 'Hip Hop', bpm: 95, sales: 8 },
    { id: 3, title: 'Chill Wave', price: 29.99, genre: 'Lo-Fi', bpm: 80, sales: 22 },
    { id: 4, title: 'Electro Pulse', price: 44.99, genre: 'Electronic', bpm: 140, sales: 11 },
  ]);

  const stats = [
    { title: 'Total Sales', value: '$2,450', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Beats Sold', value: '56', icon: <Music size={24} />, trend: 'up' },
    { title: 'Conversion Rate', value: '3.2%', icon: <TrendingUp size={24} />, trend: 'up' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Your Marketplace</h2>
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
        <h3 className="text-xl font-bold mb-4">Your Beats</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BPM</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {beats.map((beat) => (
                <tr key={beat.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{beat.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${beat.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{beat.genre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{beat.bpm}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{beat.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <Music size={20} className="mr-2" />
          Upload New Beat
        </button>
      </div>
    </div>
  );
};

export default MemberMarketplace;