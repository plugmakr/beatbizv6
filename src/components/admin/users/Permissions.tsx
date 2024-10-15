import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Permission {
  id: number;
  name: string;
  description: string;
  category: string;
}

const Permissions: React.FC = () => {
  const [permissions, setPermissions] = useState<Permission[]>([
    { id: 1, name: 'manage_users', description: 'Can create, edit, and delete users', category: 'User Management' },
    { id: 2, name: 'manage_content', description: 'Can create, edit, and delete content', category: 'Content Management' },
    { id: 3, name: 'manage_settings', description: 'Can modify system settings', category: 'System' },
    { id: 4, name: 'view_analytics', description: 'Can view analytics data', category: 'Analytics' },
    { id: 5, name: 'process_payments', description: 'Can process payments and refunds', category: 'Finance' },
  ]);

  const handleAddPermission = () => {
    // Implement add permission functionality
    console.log('Add new permission');
  };

  const handleEditPermission = (id: number) => {
    // Implement edit permission functionality
    console.log('Edit permission', id);
  };

  const handleDeletePermission = (id: number) => {
    // Implement delete permission functionality
    console.log('Delete permission', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Permissions</h2>
        <button
          onClick={handleAddPermission}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Permission
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td className="px-6 py-4 whitespace-nowrap">{permission.name}</td>
              <td className="px-6 py-4">{permission.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">{permission.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEditPermission(permission.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDeletePermission(permission.id)} className="text-red-600 hover:text-red-900">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Permissions;