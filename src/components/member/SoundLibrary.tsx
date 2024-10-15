import React, { useState } from 'react';
import { Folder, Search, Upload, Share2, Music, Sliders, Repeat } from 'lucide-react';

interface SoundItem {
  id: number;
  name: string;
  type: 'sample' | 'preset' | 'loop';
  genre: string;
  bpm?: number;
  key?: string;
}

const SoundLibrary: React.FC = () => {
  const [soundItems, setSoundItems] = useState<SoundItem[]>([
    { id: 1, name: 'Funky Bass', type: 'sample', genre: 'Funk', bpm: 110 },
    { id: 2, name: 'Chill Pad', type: 'preset', genre: 'Ambient' },
    { id: 3, name: 'Trap Hi-Hat', type: 'loop', genre: 'Trap', bpm: 140 },
    { id: 4, name: 'Deep House Chord', type: 'preset', genre: 'House' },
    { id: 5, name: 'Acoustic Guitar', type: 'sample', genre: 'Acoustic', key: 'C' },
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Sound Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <Folder size={24} className="text-blue-500 mr-2" />
          <span>Organize</span>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <Search size={24} className="text-green-500 mr-2" />
          <span>Search</span>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <Upload size={24} className="text-yellow-500 mr-2" />
          <span>Import</span>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <Share2 size={24} className="text-purple-500 mr-2" />
          <span>Share</span>
        </div>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search sounds..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BPM/Key</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {soundItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {item.type === 'sample' && <Music size={20} className="text-blue-500 mr-2" />}
                    {item.type === 'preset' && <Sliders size={20} className="text-green-500 mr-2" />}
                    {item.type === 'loop' && <Repeat size={20} className="text-yellow-500 mr-2" />}
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.genre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.bpm || item.key || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-green-600 hover:text-green-900 mr-2">Use</button>
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

export default SoundLibrary;