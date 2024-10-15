import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Globe, CheckCircle, XCircle } from 'lucide-react';

interface CustomDomain {
  id: number;
  domain: string;
  userId: number;
  userName: string;
  status: 'pending' | 'active' | 'error';
  createdAt: string;
}

const CustomDomains: React.FC = () => {
  const [customDomains, setCustomDomains] = useState<CustomDomain[]>([
    { id: 1, domain: 'johndoemusic.com', userId: 101, userName: 'John Doe', status: 'active', createdAt: '2023-05-15' },
    { id: 2, domain: 'janesmith.music', userId: 102, userName: 'Jane Smith', status: 'pending', createdAt: '2023-06-01' },
    { id: 3, domain: 'bobsbeats.com', userId: 103, userName: 'Bob Johnson', status: 'error', createdAt: '2023-05-20' },
    { id: 4, domain: 'aliceaudio.net', userId: 104, userName: 'Alice Brown', status: 'active', createdAt: '2023-04-10' },
  ]);

  const handleAddDomain = () => {
    // Implement add domain functionality
    console.log('Add new custom domain');
  };

  const handleEditDomain = (id: number) => {
    // Implement edit domain functionality
    console.log('Edit custom domain', id);
  };

  const handleDeleteDomain = (id: number) => {
    // Implement delete domain functionality
    console.log('Delete custom domain', id);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={18} className="text-green-500" />;
      case 'pending':
        return <Globe size={18} className="text-yellow-500" />;
      case 'error':
        return <XCircle size={18} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Custom Domains</h2>
        <button
          onClick={handleAddDomain}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Domain
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customDomains.map((domain) => (
              <tr key={domain.id}>
                <td className="px-6 py-4 whitespace-nowrap">{domain.domain}</td>
                <td className="px-6 py-4 whitespace-nowrap">{domain.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(domain.status)}
                    <span className="ml-2 capitalize">{domain.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{domain.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditDomain(domain.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteDomain(domain.id)} className="text-red-600 hover:text-red-900">
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

export default CustomDomains;