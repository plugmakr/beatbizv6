import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Tag } from 'lucide-react';

interface Promotion {
  id: number;
  name: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive' | 'scheduled';
}

const Promotions: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([
    { id: 1, name: 'Summer Sale', discountType: 'percentage', discountValue: 20, startDate: '2023-07-01', endDate: '2023-07-31', status: 'scheduled' },
    { id: 2, name: 'New User Discount', discountType: 'fixed', discountValue: 10, startDate: '2023-06-01', endDate: '2023-12-31', status: 'active' },
    { id: 3, name: 'Black Friday Deal', discountType: 'percentage', discountValue: 30, startDate: '2023-11-24', endDate: '2023-11-27', status: 'scheduled' },
    { id: 4, name: 'Easter Special', discountType: 'percentage', discountValue: 15, startDate: '2023-04-07', endDate: '2023-04-10', status: 'inactive' },
  ]);

  const handleAddPromotion = () => {
    // Implement add promotion functionality
    console.log('Add new promotion');
  };

  const handleEditPromotion = (id: number) => {
    // Implement edit promotion functionality
    console.log('Edit promotion', id);
  };

  const handleDeletePromotion = (id: number) => {
    // Implement delete promotion functionality
    console.log('Delete promotion', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Promotions</h2>
        <button
          onClick={handleAddPromotion}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Promotion
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {promotions.map((promotion) => (
              <tr key={promotion.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Tag size={16} className="text-indigo-600 mr-2" />
                    {promotion.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {promotion.discountType === 'percentage' ? `${promotion.discountValue}%` : `$${promotion.discountValue}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{promotion.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{promotion.endDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    promotion.status === 'active' ? 'bg-green-100 text-green-800' :
                    promotion.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {promotion.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditPromotion(promotion.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeletePromotion(promotion.id)} className="text-red-600 hover:text-red-900">
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

export default Promotions;