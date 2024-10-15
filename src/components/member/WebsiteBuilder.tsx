import React, { useState } from 'react';
import { Layout, Edit, Globe, BarChart2, Eye, Code } from 'lucide-react';

interface WebsiteTemplate {
  id: number;
  name: string;
  thumbnail: string;
}

interface WebsiteSection {
  id: number;
  name: string;
  content: string;
}

const WebsiteBuilder: React.FC = () => {
  const [templates, setTemplates] = useState<WebsiteTemplate[]>([
    { id: 1, name: 'Modern Producer', thumbnail: 'https://via.placeholder.com/150?text=Modern+Producer' },
    { id: 2, name: 'Classic Studio', thumbnail: 'https://via.placeholder.com/150?text=Classic+Studio' },
    { id: 3, name: 'Urban Beats', thumbnail: 'https://via.placeholder.com/150?text=Urban+Beats' },
    { id: 4, name: 'Acoustic Vibes', thumbnail: 'https://via.placeholder.com/150?text=Acoustic+Vibes' },
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | null>(null);
  const [websiteSections, setWebsiteSections] = useState<WebsiteSection[]>([
    { id: 1, name: 'Header', content: '<h1>Welcome to My Music Studio</h1>' },
    { id: 2, name: 'About', content: '<p>I am a passionate music producer with over 10 years of experience.</p>' },
    { id: 3, name: 'Services', content: '<ul><li>Beat Production</li><li>Mixing and Mastering</li><li>Vocal Recording</li></ul>' },
    { id: 4, name: 'Contact', content: '<p>Email: contact@mystudio.com</p><p>Phone: (123) 456-7890</p>' },
  ]);

  const [showEditSection, setShowEditSection] = useState(false);
  const [editingSection, setEditingSection] = useState<WebsiteSection | null>(null);

  const handleTemplateSelect = (template: WebsiteTemplate) => {
    setSelectedTemplate(template);
  };

  const handleEditSection = (section: WebsiteSection) => {
    setEditingSection(section);
    setShowEditSection(true);
  };

  const handleSaveSection = (updatedContent: string) => {
    if (editingSection) {
      setWebsiteSections(sections =>
        sections.map(section =>
          section.id === editingSection.id ? { ...section, content: updatedContent } : section
        )
      );
      setShowEditSection(false);
      setEditingSection(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Website Builder</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <Layout size={24} className="text-blue-500 mr-2" />
          <span>Choose Template</span>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <Edit size={24} className="text-green-500 mr-2" />
          <span>Customize</span>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <Globe size={24} className="text-yellow-500 mr-2" />
          <span>Publish</span>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <BarChart2 size={24} className="text-purple-500 mr-2" />
          <span>Analytics</span>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Choose a Template</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="border rounded-lg overflow-hidden">
              <img src={template.thumbnail} alt={template.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-bold mb-2">{template.name}</h4>
                <button
                  onClick={() => handleTemplateSelect(template)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTemplate && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Customize Your Website</h3>
          <div className="space-y-4">
            {websiteSections.map((section) => (
              <div key={section.id} className="bg-gray-100 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">{section.name}</h4>
                  <button
                    onClick={() => handleEditSection(section)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    Edit
                  </button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold mb-4">Your Website</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-4">Current domain: <strong>yourmusic.beatbizpro.com</strong></p>
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <Eye size={20} className="mr-2" />
              Preview
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <Globe size={20} className="mr-2" />
              Publish
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <BarChart2 size={20} className="mr-2" />
              Analytics
            </button>
          </div>
        </div>
      </div>
      {showEditSection && editingSection && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Edit {editingSection.name}</h3>
            <textarea
              className="w-full h-64 p-2 border rounded"
              defaultValue={editingSection.content}
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowEditSection(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveSection(editingSection.content)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteBuilder;