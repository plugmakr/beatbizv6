import React, { useState, useEffect } from 'react'
import { Music, Calendar, Clock, Users } from 'lucide-react'
import axios from 'axios'

const ProjectManagement = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('https://beatbiz.co/api/projects', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  const onDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString())
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent, dropIndex: number) => {
    const dragIndex = Number(e.dataTransfer.getData('text/plain'))
    const newProjects = [...projects]
    const [reorderedItem] = newProjects.splice(dragIndex, 1)
    newProjects.splice(dropIndex, 0, reorderedItem)
    setProjects(newProjects)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li
            key={project.id}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
            className="bg-white rounded-lg shadow-md p-4 cursor-move"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Music className="text-indigo-600" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="text-gray-400 mr-2" size={16} />
                  <span className="text-sm">{project.deadline}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  project.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
          Add New Project
        </button>
      </div>
    </div>
  )
}

export default ProjectManagement