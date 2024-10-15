import React, { useState } from 'react';
import { Layout, Edit, Globe, BarChart2, Plus, Trash2 } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  thumbnail: string;
  category: string;
}

interface Website {
  id: number;
  name: string;
  template: Template;
  customDomain: string | null;
  status: 'draft' | 'published';
  lastUpdated: string;
}

const WebsiteBuilder: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: 'Modern Producer', thumbnail: 'https://via.placeholder.com/150?text=Modern+Producer', category: 'Music' },
    { id: 2, name: 'Classic Studio', thumbnail: 'https://via.placeholder.com/150?text=Classic+Studio', category: 'Studio' },
    { id: 3, name: 'Urban Beats', thumbnail: 'https://via.placeholder.com/150?text=Urban+Beats', category: 'Music' },
  ]);

  const [websites, setWebsites] = useState<Website[]>([
    { id: 1, name: 'John Doe Music', template: templates[0], customDomain: 'johndoemusic.com', status: 'published', lastUpdated: '2023-06-15' },
    { id: 2, name: 'City Beats Studio', template: templates[1], customDomain: null, status: 'draft', lastUpdated: '2023-06-14' },
  ]);

  const handleAddTemplate = () => {
    // Implement add template functionality
    console.log('Add new template');
  };

  const handleAddWebsite = () => {
    // Implement add website functionality
    console.log('Add new website');
  };

  const handleEditWebsite = (id: number) => {
    // Implement edit website functionality
    console.log('Edit website', id);
  };

  const handleDeleteWebsite = (id: number) => {
    // Implement delete website functionality
    console.log('Delete website', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Website Builder</h2>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Templates</h3>
          <button
            onClick={handleAddTemplate}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Add Template
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="border rounded-lg overflow-hidden">
              <img src={template.thumbnail} alt={template.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold mb-2">{template.name}</h4>
                <p className="text-sm text-gray-600 mb-2">Category: {template.category}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                  Edit Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">User Websites</h3>
          <button
            onClick={handleAddWebsite}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Add Website
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Custom Domain</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {websites.map((website) => (
              <tr key={website.id}>
                <td className="px-6 py-4 whitespace-nowrap">{website.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{website.template.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{website.customDomain || 'Not set'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    website.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {website.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{website.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditWebsite(website.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleDeleteWebsite(website.id)} className="text-red-600 hover:text-red-900">
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

export default WebsiteBuilder;