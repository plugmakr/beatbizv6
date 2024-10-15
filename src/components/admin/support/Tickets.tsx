import React, { useState } from 'react';
import { Search, Filter, Download, Eye, MessageSquare } from 'lucide-react';

interface Ticket {
  id: number;
  subject: string;
  user: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  lastUpdated: string;
}

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    { id: 1, subject: 'Cannot access my account', user: 'john@example.com', status: 'open', priority: 'high', createdAt: '2023-06-15 10:30:00', lastUpdated: '2023-06-15 10:30:00' },
    { id: 2, subject: 'How to upload beats?', user: 'jane@example.com', status: 'in-progress', priority: 'medium', createdAt: '2023-06-14 14:45:00', lastUpdated: '2023-06-15 09:15:00' },
    { id: 3, subject: 'Payment issue', user: 'sam@example.com', status: 'closed', priority: 'high', createdAt: '2023-06-13 11:20:00', lastUpdated: '2023-06-14 16:30:00' },
    { id: 4, subject: 'Feature request', user: 'alex@example.com', status: 'open', priority: 'low', createdAt: '2023-06-12 16:55:00', lastUpdated: '2023-06-12 16:55:00' },
    { id: 5, subject: 'Collaboration tool not working', user: 'emma@example.com', status: 'in-progress', priority: 'medium', createdAt: '2023-06-11 13:10:00', lastUpdated: '2023-06-13 11:45:00' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewTicket = (id: number) => {
    // Implement view ticket functionality
    console.log('View ticket', id);
  };

  const handleReplyTicket = (id: number) => {
    // Implement reply to ticket functionality
    console.log('Reply to ticket', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Support Tickets</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center">
            <Filter size={20} className="mr-2" />
            Filter
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center">
            <Download size={20} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ticket.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">{ticket.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleViewTicket(ticket.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Eye size={18} />
                  </button>
                  <button onClick={() => handleReplyTicket(ticket.id)} className="text-green-600 hover:text-green-900">
                    <MessageSquare size={18} />
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

export default Tickets;