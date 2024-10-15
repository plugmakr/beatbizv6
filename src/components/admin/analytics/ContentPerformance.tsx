import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Music, Play, Download, Star } from 'lucide-react';

const ContentPerformance: React.FC = () => {
  const performanceData = [
    { name: 'Summer Vibes', plays: 1500, downloads: 300, rating: 4.8 },
    { name: 'Urban Nights', plays: 1200, downloads: 250, rating: 4.6 },
    { name: 'Chill Wave', plays: 1800, downloads: 400, rating: 4.9 },
    { name: 'Trap Kingdom', plays: 1300, downloads: 280, rating: 4.7 },
    { name: 'Electro Pulse', plays: 1100, downloads: 220, rating: 4.5 },
  ];

  const stats = [
    { title: 'Total Tracks', value: '1,234', icon: <Music size={24} /> },
    { title: 'Total Plays', value: '1.2M', icon: <Play size={24} /> },
    { title: 'Total Downloads', value: '250K', icon: <Download size={24} /> },
    { title: 'Avg. Rating', value: '4.7', icon: <Star size={24} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Content Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-indigo-600">{stat.icon}</div>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
            <h3 className="text-gray-600">{stat.title}</h3>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Top Performing Tracks</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="plays" name="Plays" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="downloads" name="Downloads" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="rating" name="Rating" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Content Details</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Track Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plays</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {performanceData.map((track, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{track.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">Artist Name</td>
                <td className="px-6 py-4 whitespace-nowrap">{track.plays}</td>
                <td className="px-6 py-4 whitespace-nowrap">{track.downloads}</td>
                <td className="px-6 py-4 whitespace-nowrap">{track.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentPerformance;