import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Users, Globe, Clock } from 'lucide-react';

const WebsiteAnalytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('last7days');

  const pageViewData = [
    { date: '2023-06-01', views: 1200 },
    { date: '2023-06-02', views: 1500 },
    { date: '2023-06-03', views: 1800 },
    { date: '2023-06-04', views: 1600 },
    { date: '2023-06-05', views: 2000 },
    { date: '2023-06-06', views: 2200 },
    { date: '2023-06-07', views: 1900 },
  ];

  const topPages = [
    { page: '/home', views: 5000 },
    { page: '/beats', views: 3500 },
    { page: '/producers', views: 2800 },
    { page: '/about', views: 1500 },
    { page: '/contact', views: 1200 },
  ];

  const stats = [
    { title: 'Total Visitors', value: '15,234', icon: <Users size={24} /> },
    { title: 'Avg. Session Duration', value: '3m 45s', icon: <Clock size={24} /> },
    { title: 'Bounce Rate', value: '42%', icon: <Globe size={24} /> },
    { title: 'Pages per Session', value: '3.5', icon: <Globe size={24} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Website Analytics</h2>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
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
        <h3 className="text-xl font-bold mb-4">Page Views</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pageViewData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Top Pages</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topPages}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="page" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WebsiteAnalytics;