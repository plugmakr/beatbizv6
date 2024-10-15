import React, { useState } from 'react';
import { MessageSquare, Video, Calendar, FileText, Plus } from 'lucide-react';

interface Collaborator {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface Project {
  id: number;
  name: string;
  collaborators: Collaborator[];
}

const Collaboration: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'Summer Vibes EP',
      collaborators: [
        { id: 1, name: 'John Doe', role: 'Producer', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'Jane Smith', role: 'Vocalist', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
      ],
    },
    {
      id: 2,
      name: 'Acoustic Sessions',
      collaborators: [
        { id: 3, name: 'Mike Johnson', role: 'Guitarist', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: 4, name: 'Emily Brown', role: 'Singer-Songwriter', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      ],
    },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Collaboration Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <MessageSquare size={24} className="text-blue-500 mr-2" />
          <span>Chat</span>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <Video size={24} className="text-green-500 mr-2" />
          <span>Video Call</span>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <Calendar size={24} className="text-yellow-500 mr-2" />
          <span>Schedule</span>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <FileText size={24} className="text-purple-500 mr-2" />
          <span>Shared Files</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Active Projects</h3>
        {projects.map((project) => (
          <div key={project.id} className="mb-6 bg-gray-100 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
            <div className="flex items-center mb-4">
              {project.collaborators.map((collaborator) => (
                <img
                  key={collaborator.id}
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  className="w-8 h-8 rounded-full mr-2"
                  title={`${collaborator.name} - ${collaborator.role}`}
                />
              ))}
              <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Plus size={16} />
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300">
                Chat
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-300">
                Video Call
              </button>
              <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-700 transition duration-300">
                Share Files
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;