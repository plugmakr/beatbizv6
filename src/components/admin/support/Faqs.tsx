import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: 1, question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.', category: 'Account' },
    { id: 2, question: 'What file formats are supported for beat uploads?', answer: 'We support MP3, WAV, and AIFF file formats for beat uploads.', category: 'Uploads' },
    { id: 3, question: 'How do I withdraw my earnings?', answer: 'You can withdraw your earnings through PayPal or bank transfer from your account dashboard.', category: 'Payments' },
    { id: 4, question: 'Can I collaborate with other producers?', answer: 'Yes, you can use our collaboration tools to work with other producers on projects.', category: 'Collaboration' },
    { id: 5, question: 'How do I promote my beats?', answer: 'You can use our built-in marketing tools to promote your beats on social media and other platforms.', category: 'Marketing' },
  ]);

  const handleAddFaq = () => {
    // Implement add FAQ functionality
    console.log('Add new FAQ');
  };

  const handleEditFaq = (id: number) => {
    // Implement edit FAQ functionality
    console.log('Edit FAQ', id);
  };

  const handleDeleteFaq = (id: number) => {
    // Implement delete FAQ functionality
    console.log('Delete FAQ', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <button
          onClick={handleAddFaq}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add FAQ
        </button>
      </div>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <div className="flex space-x-2">
                <button onClick={() => handleEditFaq(faq.id)} className="text-blue-600 hover:text-blue-800">
                  <Edit2 size={18} />
                </button>
                <button onClick={() => handleDeleteFaq(faq.id)} className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{faq.answer}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {faq.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;