import React, { useState } from 'react';
import { Music, DollarSign, Star, TrendingUp, Edit2, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  sales: number;
  rating: number;
}

const AdminMarketplace: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Summer Vibes Beat', type: 'Beat', price: 29.99, sales: 150, rating: 4.5 },
    { id: 2, name: 'Trap Drum Kit', type: 'Sample Pack', price: 19.99, sales: 200, rating: 4.2 },
    { id: 3, name: 'Synth Presets Vol. 1', type: 'Preset Pack', price: 24.99, sales: 100, rating: 4.7 },
    { id: 4, name: 'Mixing Masterclass', type: 'Tutorial', price: 49.99, sales: 75, rating: 4.8 },
    { id: 5, name: 'Lo-Fi Melodies', type: 'Loop Pack', price: 14.99, sales: 180, rating: 4.3 },
  ]);

  const stats = [
    { title: 'Total Products', value: products.length, icon: <Music size={24} /> },
    { title: 'Total Sales', value: products.reduce((acc, product) => acc + product.sales, 0), icon: <TrendingUp size={24} /> },
    { title: 'Total Revenue', value: `$${products.reduce((acc, product) => acc + product.price * product.sales, 0).toFixed(2)}`, icon: <DollarSign size={24} /> },
    { title: 'Avg. Rating', value: (products.reduce((acc, product) => acc + product.rating, 0) / products.length).toFixed(1), icon: <Star size={24} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Marketplace Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-500">{stat.icon}</div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-500">{stat.title}</div>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Product Listings</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.sales}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.rating}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default AdminMarketplace;