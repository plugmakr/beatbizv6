import React from 'react'
import { User, Mail, Phone, MapPin } from 'lucide-react'

const ClientManagement = () => {
  const clients = [
    { id: 1, name: 'DJ Sunshine', email: 'djsunshine@example.com', phone: '+1 234-567-8901', location: 'Los Angeles, CA' },
    { id: 2, name: 'RapStar Records', email: 'info@rapstarrecords.com', phone: '+1 987-654-3210', location: 'Atlanta, GA' },
    { id: 3, name: 'Melody Makers', email: 'contact@melodymakers.com', phone: '+1 456-789-0123', location: 'Nashville, TN' },
    { id: 4, name: 'ElectroWave', email: 'beats@electrowave.com', phone: '+1 321-654-9870', location: 'Miami, FL' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Client Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <User size={24} className="text-indigo-600 mr-2" />
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
              <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition duration-300">
                Edit
              </button>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300">
                View Projects
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
          Add New Client
        </button>
      </div>
    </div>
  )
}

export default ClientManagement