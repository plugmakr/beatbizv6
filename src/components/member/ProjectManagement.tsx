import React, { useState } from 'react';
import { Music, Calendar, Clock, Users, Plus } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  client: string;
  deadline: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Completed';
}

const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: 'Summer Vibes EP', client: 'DJ Sunshine', deadline: '2023-07-15', status: 'In Progress' },
    { id: 2, name: 'Acoustic Sessions', client: 'Melody Makers', deadline: '2023-08-01', status: 'Planning' },
    { id: 3, name: 'Urban Beats Collection', client: 'RapStar Records', deadline: '2023-07-30', status: 'Review' },
  ]);

  const handleAddProject = () => {
    // Implement add project functionality
    console.log('Add new project');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Project Management</h2>
        <button
          onClick={handleAddProject}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Project
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Music size={20} className="text-gray-400 mr-2" />
                    <span className="font-medium">{project.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{project.client}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-gray-400 mr-2" />
                    <span>{project.deadline}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectManagement;