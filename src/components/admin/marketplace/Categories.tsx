import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Beats', description: 'Instrumental tracks for various genres', productCount: 500 },
    { id: 2, name: 'Sample Packs', description: 'Collections of audio samples and loops', productCount: 250 },
    { id: 3, name: 'Presets', description: 'Preset banks for popular music software', productCount: 150 },
    { id: 4, name: 'Tutorials', description: 'Educational content for music production', productCount: 100 },
    { id: 5, name: 'Services', description: 'Music production and mixing services', productCount: 50 },
  ]);

  const handleAddCategory = () => {
    // Implement add category functionality
    console.log('Add new category');
  };

  const handleEditCategory = (id: number) => {
    // Implement edit category functionality
    console.log('Edit category', id);
  };

  const handleDeleteCategory = (id: number) => {
    // Implement delete category functionality
    console.log('Delete category', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <button
          onClick={handleAddCategory}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Category
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                <td className="px-6 py-4">{category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{category.productCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditCategory(category.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteCategory(category.id)} className="text-red-600 hover:text-red-900">
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

export default Categories;