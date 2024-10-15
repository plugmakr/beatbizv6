import React, { useState } from 'react';
import { MessageSquare, HelpCircle, Book, Send } from 'lucide-react';

interface Ticket {
  id: number;
  subject: string;
  status: 'open' | 'in-progress' | 'closed';
  lastUpdated: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const MemberSupport: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    { id: 1, subject: 'How to upload beats?', status: 'open', lastUpdated: '2023-06-15' },
    { id: 2, subject: 'Payment issue', status: 'in-progress', lastUpdated: '2023-06-14' },
    { id: 3, subject: 'Collaboration tool not working', status: 'closed', lastUpdated: '2023-06-13' },
  ]);

  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: 1, question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.' },
    { id: 2, question: 'What file formats are supported for beat uploads?', answer: 'We support MP3, WAV, and AIFF file formats for beat uploads.' },
    { id: 3, question: 'How do I withdraw my earnings?', answer: 'You can withdraw your earnings through PayPal or bank transfer from your account dashboard.' },
  ]);

  const [newTicketSubject, setNewTicketSubject] = useState('');

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTicketSubject.trim()) {
      const newTicket: Ticket = {
        id: tickets.length + 1,
        subject: newTicketSubject,
        status: 'open',
        lastUpdated: new Date().toISOString().split('T')[0],
      };
      setTickets([...tickets, newTicket]);
      setNewTicketSubject('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Your Tickets</h3>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">{ticket.subject}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    ticket.status === 'open' ? 'bg-yellow-200 text-yellow-800' :
                    ticket.status === 'in-progress' ? 'bg-blue-200 text-blue-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Last updated: {ticket.lastUpdated}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleCreateTicket} className="mt-4">
            <div className="flex">
              <input
                type="text"
                value={newTicketSubject}
                onChange={(e) => setNewTicketSubject(e.target.value)}
                placeholder="Enter ticket subject"
                className="flex-grow shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r flex items-center"
              >
                <Send size={20} className="mr-2" />
                Create Ticket
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <MessageSquare size={24} className="text-blue-500 mr-2" />
          <span>Live Chat Support</span>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <HelpCircle size={24} className="text-green-500 mr-2" />
          <span>Knowledge Base</span>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <Book size={24} className="text-purple-500 mr-2" />
          <span>Video Tutorials</span>
        </div>
      </div>
    </div>
  );
};

export default MemberSupport;