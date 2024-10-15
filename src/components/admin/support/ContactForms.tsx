import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';

interface ContactForm {
  id: number;
  name: string;
  fields: string[];
  submissions: number;
  createdAt: string;
}

const ContactForms: React.FC = () => {
  const [contactForms, setContactForms] = useState<ContactForm[]>([
    { id: 1, name: 'General Inquiry', fields: ['Name', 'Email', 'Subject', 'Message'], submissions: 150, createdAt: '2023-05-01' },
    { id: 2, name: 'Technical Support', fields: ['Name', 'Email', 'Issue Type', 'Description'], submissions: 75, createdAt: '2023-05-15' },
    { id: 3, name: 'Collaboration Request', fields: ['Name', 'Email', 'Project Type', 'Message'], submissions: 30, createdAt: '2023-06-01' },
  ]);

  const handleAddForm = () => {
    // Implement add form functionality
    console.log('Add new contact form');
  };

  const handleEditForm = (id: number) => {
    // Implement edit form functionality
    console.log('Edit contact form', id);
  };

  const handleDeleteForm = (id: number) => {
    // Implement delete form functionality
    console.log('Delete contact form', id);
  };

  const handleViewSubmissions = (id: number) => {
    // Implement view submissions functionality
    console.log('View submissions for form', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Contact Forms</h2>
        <button
          onClick={handleAddForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Form
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fields</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submissions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contactForms.map((form) => (
              <tr key={form.id}>
                <td className="px-6 py-4 whitespace-nowrap">{form.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{form.fields.join(', ')}</td>
                <td className="px-6 py-4 whitespace-nowrap">{form.submissions}</td>
                <td className="px-6 py-4 whitespace-nowrap">{form.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditForm(form.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteForm(form.id)} className="text-red-600 hover:text-red-900 mr-2">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => handleViewSubmissions(form.id)} className="text-green-600 hover:text-green-900">
                    <Eye size={18} />
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

export default ContactForms;