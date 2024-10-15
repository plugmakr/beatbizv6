import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  category: string;
  previewUrl: string;
  usageCount: number;
}

const Templates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: 'Modern Producer', category: 'Music Producer', previewUrl: '/templates/modern-producer.jpg', usageCount: 150 },
    { id: 2, name: 'Classic Studio', category: 'Recording Studio', previewUrl: '/templates/classic-studio.jpg', usageCount: 89 },
    { id: 3, name: 'DJ Portfolio', category: 'DJ', previewUrl: '/templates/dj-portfolio.jpg', usageCount: 210 },
    { id: 4, name: 'Band Showcase', category: 'Band', previewUrl: '/templates/band-showcase.jpg', usageCount: 75 },
    { id: 5, name: 'Minimal Beats', category: 'Beat Maker', previewUrl: '/templates/minimal-beats.jpg', usageCount: 120 },
  ]);

  const handleAddTemplate = () => {
    // Implement add template functionality
    console.log('Add new template');
  };

  const handleEditTemplate = (id: number) => {
    // Implement edit template functionality
    console.log('Edit template', id);
  };

  const handleDeleteTemplate = (id: number) => {
    // Implement delete template functionality
    console.log('Delete template', id);
  };

  const handlePreviewTemplate = (previewUrl: string) => {
    // Implement preview functionality
    window.open(previewUrl, '_blank');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Website Templates</h2>
        <button
          onClick={handleAddTemplate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Template
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-lg overflow-hidden">
            <img src={template.previewUrl} alt={template.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-2">Category: {template.category}</p>
              <p className="text-gray-600 mb-4">Usage Count: {template.usageCount}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handlePreviewTemplate(template.previewUrl)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 flex items-center"
                >
                  <Eye size={16} className="mr-1" />
                  Preview
                </button>
                <div>
                  <button
                    onClick={() => handleEditTemplate(template.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteTemplate(template.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;