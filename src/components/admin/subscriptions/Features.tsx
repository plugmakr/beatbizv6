import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Feature {
  id: number;
  name: string;
  description: string;
  plans: string[];
}

const Features: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([
    { id: 1, name: 'Project Management', description: 'Create and manage music production projects', plans: ['Basic', 'Pro', 'Enterprise'] },
    { id: 2, name: 'Collaboration Tools', description: 'Work with other producers and artists', plans: ['Pro', 'Enterprise'] },
    { id: 3, name: 'Advanced Analytics', description: 'In-depth insights into your music performance', plans: ['Pro', 'Enterprise'] },
    { id: 4, name: 'Custom Integrations', description: 'Integrate with your favorite music production tools', plans: ['Enterprise'] },
    { id: 5, name: 'Unlimited Storage', description: 'Store all your projects and files without limits', plans: ['Enterprise'] },
  ]);

  const handleAddFeature = () => {
    // Implement add feature functionality
    console.log('Add new feature');
  };

  const handleEditFeature = (id: number) => {
    // Implement edit feature functionality
    console.log('Edit feature', id);
  };

  const handleDeleteFeature = (id: number) => {
    // Implement delete feature functionality
    console.log('Delete feature', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Features</h2>
        <button
          onClick={handleAddFeature}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Feature
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available in Plans</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature) => (
              <tr key={feature.id}>
                <td className="px-6 py-4 whitespace-nowrap">{feature.name}</td>
                <td className="px-6 py-4">{feature.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {feature.plans.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditFeature(feature.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteFeature(feature.id)} className="text-red-600 hover:text-red-900">
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

export default Features;