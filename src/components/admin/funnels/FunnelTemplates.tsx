import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Copy } from 'lucide-react';

interface FunnelTemplate {
  id: number;
  name: string;
  description: string;
  steps: number;
  category: string;
  usageCount: number;
}

const FunnelTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<FunnelTemplate[]>([
    { id: 1, name: 'Beat Sales Funnel', description: 'Convert visitors into beat buyers', steps: 4, category: 'Sales', usageCount: 150 },
    { id: 2, name: 'Email List Builder', description: 'Grow your email list with free beat offers', steps: 3, category: 'Lead Generation', usageCount: 89 },
    { id: 3, name: 'Studio Booking Funnel', description: 'Book more studio sessions', steps: 5, category: 'Service', usageCount: 62 },
    { id: 4, name: 'Artist Promotion', description: 'Promote new artist releases', steps: 4, category: 'Marketing', usageCount: 105 },
    { id: 5, name: 'Music Course Funnel', description: 'Sell online music production courses', steps: 6, category: 'Education', usageCount: 78 },
  ]);

  const handleAddTemplate = () => {
    // Implement add template functionality
    console.log('Add new funnel template');
  };

  const handleEditTemplate = (id: number) => {
    // Implement edit template functionality
    console.log('Edit funnel template', id);
  };

  const handleDeleteTemplate = (id: number) => {
    // Implement delete template functionality
    console.log('Delete funnel template', id);
  };

  const handleDuplicateTemplate = (id: number) => {
    // Implement duplicate template functionality
    console.log('Duplicate funnel template', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Funnel Templates</h2>
        <button
          onClick={handleAddTemplate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Template
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steps</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {templates.map((template) => (
              <tr key={template.id}>
                <td className="px-6 py-4 whitespace-nowrap">{template.name}</td>
                <td className="px-6 py-4">{template.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{template.steps}</td>
                <td className="px-6 py-4 whitespace-nowrap">{template.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{template.usageCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditTemplate(template.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDuplicateTemplate(template.id)} className="text-green-600 hover:text-green-900 mr-2">
                    <Copy size={18} />
                  </button>
                  <button onClick={() => handleDeleteTemplate(template.id)} className="text-red-600 hover:text-red-900">
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

export default FunnelTemplates;