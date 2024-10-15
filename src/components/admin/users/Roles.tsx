import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
}

const Roles: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: 'Admin', description: 'Full access to all features', permissions: ['manage_users', 'manage_content', 'manage_settings'] },
    { id: 2, name: 'Producer', description: 'Can manage own content and collaborate', permissions: ['create_content', 'edit_content', 'collaborate'] },
    { id: 3, name: 'Artist', description: 'Can view and purchase content', permissions: ['view_content', 'purchase_content'] },
  ]);

  const handleAddRole = () => {
    // Implement add role functionality
    console.log('Add new role');
  };

  const handleEditRole = (id: number) => {
    // Implement edit role functionality
    console.log('Edit role', id);
  };

  const handleDeleteRole = (id: number) => {
    // Implement delete role functionality
    console.log('Delete role', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Roles</h2>
        <button
          onClick={handleAddRole}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Role
        </button>
      </div>
      <div className="space-y-4">
        {roles.map((role) => (
          <div key={role.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{role.name}</h3>
              <div>
                <button onClick={() => handleEditRole(role.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDeleteRole(role.id)} className="text-red-600 hover:text-red-900">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{role.description}</p>
            <div>
              <h4 className="font-semibold mb-1">Permissions:</h4>
              <ul className="list-disc list-inside">
                {role.permissions.map((permission, index) => (
                  <li key={index} className="text-sm text-gray-600">{permission}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;