import React from 'react'
import { MessageSquare, Video, Calendar, FileText } from 'lucide-react'

const CollaborationTools = () => {
  const collaborationTools = [
    { id: 1, name: 'Chat', icon: <MessageSquare size={24} />, description: 'Real-time messaging with team members and clients' },
    { id: 2, name: 'Video Conferencing', icon: <Video size={24} />, description: 'High-quality video calls for remote collaboration' },
    { id: 3, name: 'Shared Calendar', icon: <Calendar size={24} />, description: 'Coordinate schedules and deadlines' },
    { id: 4, name: 'Document Sharing', icon: <FileText size={24} />, description: 'Securely share and collaborate on documents' },
  ]

  const recentCollaborations = [
    { id: 1, project: 'Summer Vibes EP', collaborator: 'DJ Sunshine', lastActivity: '2 hours ago' },
    { id: 2, project: 'Trap Beats Collection', collaborator: 'RapStar Records', lastActivity: '1 day ago' },
    { id: 3, project: 'Acoustic Sessions', collaborator: 'Melody Makers', lastActivity: '3 days ago' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Collaboration Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {collaborationTools.map((tool) => (
          <div key={tool.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-indigo-600 mr-3">{tool.icon}</div>
              <h3 className="text-xl font-bold">{tool.name}</h3>
            </div>
            <p className="text-gray-600">{tool.description}</p>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
              Launch
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Collaborations</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collaborator</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentCollaborations.map((collab) => (
              <tr key={collab.id}>
                <td className="px-6 py-4 whitespace-nowrap">{collab.project}</td>
                <td className="px-6 py-4 whitespace-nowrap">{collab.collaborator}</td>
                <td className="px-6 py-4 whitespace-nowrap">{collab.lastActivity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CollaborationTools