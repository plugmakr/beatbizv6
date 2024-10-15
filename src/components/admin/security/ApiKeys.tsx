import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Key, Copy } from 'lucide-react';

interface ApiKey {
  id: number;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
  status: 'active' | 'inactive';
}

const ApiKeys: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    { id: 1, name: 'Production API Key', key: 'prod_api_key_123456', createdAt: '2023-06-01', lastUsed: '2023-06-15', status: 'active' },
    { id: 2, name: 'Development API Key', key: 'dev_api_key_789012', createdAt: '2023-06-05', lastUsed: '2023-06-14', status: 'active' },
    { id: 3, name: 'Test API Key', key: 'test_api_key_345678', createdAt: '2023-06-10', lastUsed: '2023-06-13', status: 'inactive' },
  ]);

  const handleAddApiKey = () => {
    // Implement add API key functionality
    console.log('Add new API key');
  };

  const handleEditApiKey = (id: number) => {
    // Implement edit API key functionality
    console.log('Edit API key', id);
  };

  const handleDeleteApiKey = (id: number) => {
    // Implement delete API key functionality
    console.log('Delete API key', id);
  };

  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key);
    // Implement a toast or notification to inform the user that the key has been copied
    console.log('API key copied to clipboard');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">API Keys</h2>
        <button
          onClick={handleAddApiKey}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add API Key
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">API Key</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Used</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {apiKeys.map((apiKey) => (
              <tr key={apiKey.id}>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">{apiKey.key.substring(0, 8)}...</span>
                    <button
                      onClick={() => handleCopyApiKey(apiKey.key)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">{apiKey.lastUsed}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    apiKey.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {apiKey.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditApiKey(apiKey.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteApiKey(apiKey.id)} className="text-red-600 hover:text-red-900">
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

export default ApiKeys;