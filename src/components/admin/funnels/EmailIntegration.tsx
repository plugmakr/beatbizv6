import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Mail } from 'lucide-react';

interface EmailIntegration {
  id: number;
  name: string;
  provider: string;
  status: 'active' | 'inactive';
  lastSynced: string;
}

const EmailIntegration: React.FC = () => {
  const [integrations, setIntegrations] = useState<EmailIntegration[]>([
    { id: 1, name: 'Newsletter Signup', provider: 'Mailchimp', status: 'active', lastSynced: '2023-06-15 10:30:00' },
    { id: 2, name: 'Customer Onboarding', provider: 'SendGrid', status: 'active', lastSynced: '2023-06-14 15:45:00' },
    { id: 3, name: 'Abandoned Cart', provider: 'ConvertKit', status: 'inactive', lastSynced: '2023-06-10 09:20:00' },
  ]);

  const handleAddIntegration = () => {
    // Implement add integration functionality
    console.log('Add new email integration');
  };

  const handleEditIntegration = (id: number) => {
    // Implement edit integration functionality
    console.log('Edit email integration', id);
  };

  const handleDeleteIntegration = (id: number) => {
    // Implement delete integration functionality
    console.log('Delete email integration', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Email Integrations</h2>
        <button
          onClick={handleAddIntegration}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Integration
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Synced</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {integrations.map((integration) => (
              <tr key={integration.id}>
                <td className="px-6 py-4 whitespace-nowrap">{integration.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{integration.provider}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    integration.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {integration.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{integration.lastSynced}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditIntegration(integration.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteIntegration(integration.id)} className="text-red-600 hover:text-red-900">
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

export default EmailIntegration;