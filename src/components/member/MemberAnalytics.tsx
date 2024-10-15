import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Music, DollarSign } from 'lucide-react';

const MemberAnalytics: React.FC = () => {
  const performanceData = [
    { month: 'Jan', sales: 20, streams: 1000 },
    { month: 'Feb', sales: 35, streams: 1500 },
    { month: 'Mar', sales: 30, streams: 1300 },
    { month: 'Apr', sales: 45, streams: 2000 },
    { month: 'May', sales: 55, streams: 2500 },
    { month: 'Jun', sales: 50, streams: 2200 },
  ];

  const audienceData = [
    { age: '18-24', percentage: 30 },
    { age: '25-34', percentage: 40 },
    { age: '35-44', percentage: 20 },
    { age: '45+', percentage: 10 },
  ];

  const stats = [
    { title: 'Total Sales', value: '285', icon: <Music size={24} />, trend: 'up' },
    { title: 'Total Revenue', value: '$12,350', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Total Streams', value: '10,500', icon: <TrendingUp size={24} />, trend: 'up' },
    { title: 'Unique Listeners', value: '3,200', icon: <Users size={24} />, trend: 'up' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-gray-500">{stat.icon}</div>
              <div className="text-green-500">↑</div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-500">{stat.title}</div>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Performance Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="streams" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Audience Demographics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={audienceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MemberAnalytics;