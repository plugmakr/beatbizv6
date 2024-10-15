import React from 'react'
import { Folder, Search, Upload, Share2 } from 'lucide-react'

const SoundLibrary = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Sound Library Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ActionCard icon={<Folder size={24} />} title="Organize Sounds" description="Categorize and tag your samples, presets, and loops" />
        <ActionCard icon={<Search size={24} />} title="Quick Search" description="Find the perfect sound in seconds" />
        <ActionCard icon={<Upload size={24} />} title="Import Sounds" description="Add new sounds to your library" />
        <ActionCard icon={<Share2 size={24} />} title="Collaborate" description="Share sounds with team members" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Sound Library</h2>
        {/* Add sound library browsing and management interface here */}
      </div>
    </div>
  )
}

const ActionCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default SoundLibrary