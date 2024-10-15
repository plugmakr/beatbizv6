import React, { useState } from 'react';
import { MessageSquare, HelpCircle, Book, Users } from 'lucide-react';

interface Ticket {
  id: number;
  subject: string;
  user: string;
  status: 'open' | 'in-progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

const SupportManagement: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    { id: 1, subject: 'Cannot access my account', user: 'john@example.com', status: 'open', priority: 'high', createdAt: '2023-06-15 09:30:00' },
    { id: 2, subject: 'How to upload beats?', user: 'jane@example.com', status: 'in-progress', priority: 'medium', createdAt: '2023-06-14 14:45:00' },
    { id: 3, subject: 'Payment issue', user: 'sam@example.com', status: 'closed', priority: 'high', createdAt: '2023-06-13 11:20:00' },
    { id: 4, subject: 'Feature request', user: 'alex@example.com', status: 'open', priority: 'low', createdAt: '2023-06-12 16:55:00' },
    { id: 5, subject: 'Collaboration tool not working', user: 'emma@example.com', status: 'in-progress', priority: 'medium', createdAt: '2023-06-11 13:10:00' },
  ]);

  const [faqs, setFaqs] = useState([
    { id: 1, question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.' },
    { id: 2, question: 'What file formats are supported for beat uploads?', answer: 'We support MP3, WAV, and AIFF file formats for beat uploads.' },
    { id: 3, question: 'How do I withdraw my earnings?', answer: 'You can withdraw your earnings through PayPal or bank transfer from your account dashboard.' },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Support Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Support Tickets</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New FAQ
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <MessageSquare size={24} className="text-blue-500 mr-2" />
          <span>Live Chat Support</span>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <HelpCircle size={24} className="text-green-500 mr-2" />
          <span>Knowledge Base</span>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <Users size={24} className="text-purple-500 mr-2" />
          <span>Community Forum</span>
        </div>
      </div>
    </div>
  );
};

export default SupportManagement;