import React, { useState } from 'react';
import { Globe, Edit2, Trash2 } from 'lucide-react';

interface Website {
  id: number;
  name: string;
  url: string;
  status: 'live' | 'draft';
}

const MemberWebsites: React.FC = () => {
  const [websites, setWebsites] = useState<Website[]>([
    { id: 1, name: 'My Music Portfolio', url: 'https://mymusicportfolio.com', status: 'live' },
    { id: 2, name: 'Beat Store', url: 'https://mybeats.com', status: 'draft' },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">My Websites</h2>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Website
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {websites.map((website) => (
              <tr key={website.id}>
                <td className="px-6 py-4 whitespace-nowrap">{website.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    {website.url}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    website.status === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {website.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
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

export default MemberWebsites;