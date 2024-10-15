import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Calendar } from 'lucide-react';

interface Discount {
  id: number;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usageCount: number;
}

const Discounts: React.FC = () => {
  const [discounts, setDiscounts] = useState<Discount[]>([
    { id: 1, code: 'SUMMER2023', type: 'percentage', value: 20, validFrom: '2023-06-01', validTo: '2023-08-31', usageLimit: 100, usageCount: 45 },
    { id: 2, code: 'NEWUSER', type: 'fixed', value: 10, validFrom: '2023-01-01', validTo: '2023-12-31', usageLimit: 500, usageCount: 213 },
    { id: 3, code: 'BLACKFRIDAY', type: 'percentage', value: 30, validFrom: '2023-11-24', validTo: '2023-11-27', usageLimit: 1000, usageCount: 0 },
  ]);

  const handleAddDiscount = () => {
    // Implement add discount functionality
    console.log('Add new discount');
  };

  const handleEditDiscount = (id: number) => {
    // Implement edit discount functionality
    console.log('Edit discount', id);
  };

  const handleDeleteDiscount = (id: number) => {
    // Implement delete discount functionality
    console.log('Delete discount', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Discount Codes</h2>
        <button
          onClick={handleAddDiscount}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Discount
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {discounts.map((discount) => (
              <tr key={discount.id}>
                <td className="px-6 py-4 whitespace-nowrap">{discount.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">{discount.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {discount.type === 'percentage' ? `${discount.value}%` : `$${discount.value}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    {discount.validFrom} to {discount.validTo}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {discount.usageCount} / {discount.usageLimit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditDiscount(discount.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteDiscount(discount.id)} className="text-red-600 hover:text-red-900">
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

export default Discounts;