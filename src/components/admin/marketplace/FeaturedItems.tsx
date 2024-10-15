import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Star } from 'lucide-react';

interface FeaturedItem {
  id: number;
  name: string;
  category: string;
  price: number;
  featuredUntil: string;
}

const FeaturedItems: React.FC = () => {
  const [featuredItems, setFeaturedItems] = useState<FeaturedItem[]>([
    { id: 1, name: 'Summer Vibes Beat Pack', category: 'Beats', price: 49.99, featuredUntil: '2023-07-15' },
    { id: 2, name: 'Pro Mixing Tutorial Series', category: 'Tutorials', price: 99.99, featuredUntil: '2023-07-31' },
    { id: 3, name: 'Vintage Synth Presets', category: 'Presets', price: 39.99, featuredUntil: '2023-07-20' },
    { id: 4, name: 'Urban Drums Sample Pack', category: 'Sample Packs', price: 29.99, featuredUntil: '2023-07-25' },
  ]);

  const handleAddFeaturedItem = () => {
    // Implement add featured item functionality
    console.log('Add new featured item');
  };

  const handleEditFeaturedItem = (id: number) => {
    // Implement edit featured item functionality
    console.log('Edit featured item', id);
  };

  const handleDeleteFeaturedItem = (id: number) => {
    // Implement delete featured item functionality
    console.log('Delete featured item', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Items</h2>
        <button
          onClick={handleAddFeaturedItem}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Featured Item
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured Until</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {featuredItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 mr-2" />
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.featuredUntil}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditFeaturedItem(item.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteFeaturedItem(item.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedItems;