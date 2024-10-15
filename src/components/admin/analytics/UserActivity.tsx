import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Clock, Calendar } from 'lucide-react';

const UserActivity: React.FC = () => {
  const activityData = [
    { date: '2023-06-01', activeUsers: 1000, newUsers: 150, avgSessionDuration: 15 },
    { date: '2023-06-02', activeUsers: 1100, newUsers: 160, avgSessionDuration: 16 },
    { date: '2023-06-03', activeUsers: 1050, newUsers: 140, avgSessionDuration: 14 },
    { date: '2023-06-04', activeUsers: 1200, newUsers: 180, avgSessionDuration: 17 },
    { date: '2023-06-05', activeUsers: 1300, newUsers: 200, avgSessionDuration: 18 },
    { date: '2023-06-06', activeUsers: 1250, newUsers: 190, avgSessionDuration: 16 },
    { date: '2023-06-07', activeUsers: 1400, newUsers: 220, avgSessionDuration: 19 },
  ];

  const stats = [
    { title: 'Total Users', value: '15,234', icon: <Users size={24} /> },
    { title: 'Avg. Daily Active Users', value: '1,186', icon: <Calendar size={24} /> },
    { title: 'Avg. Session Duration', value: '16.4 min', icon: <Clock size={24} /> },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">User Activity</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        <h3 className="text-xl font-bold mb-4">User Activity Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="activeUsers" name="Active Users" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="newUsers" name="New Users" fill="#82ca9d" />
            <Bar yAxisId="right" dataKey="avgSessionDuration" name="Avg. Session Duration (min)" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Recent User Activities</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Uploaded new beat</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-07 14:30:00</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">Purchased premium plan</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-07 13:45:00</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Bob Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap">Created new project</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-06-07 12:15:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserActivity;