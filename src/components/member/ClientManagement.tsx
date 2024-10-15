import React, { useState } from 'react';
import { Plus, User, Mail, Phone, MapPin } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
}

const ClientManagement: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'DJ Sunshine', email: 'djsunshine@example.com', phone: '+1 234-567-8901', location: 'Los Angeles, CA' },
    { id: 2, name: 'RapStar Records', email: 'info@rapstarrecords.com', phone: '+1 987-654-3210', location: 'Atlanta, GA' },
    { id: 3, name: 'Melody Makers', email: 'contact@melodymakers.com', phone: '+1 456-789-0123', location: 'Nashville, TN' },
  ]);

  const handleAddClient = () => {
    // Implement add client functionality
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Client Management</h2>
        <button
          onClick={handleAddClient}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Client
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <User size={24} className="text-gray-400 mr-2" />
              <h3 className="text-xl font-bold">{client.name}</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="text-gray-400 mr-2" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-gray-400 mr-2" />
                <span>{client.location}</span>
              </div>
            </div>
            <div className="mt-4 space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300">
                Edit
              </button>
              <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition duration-300">
                View Projects
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManagement;