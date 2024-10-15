import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, DollarSign, Music, TrendingUp } from 'lucide-react';

const AdminAnalytics: React.FC = () => {
  const userActivityData = [
    { date: '2023-06-01', activeUsers: 1000, newUsers: 150 },
    { date: '2023-06-02', activeUsers: 1100, newUsers: 160 },
    { date: '2023-06-03', activeUsers: 1050, newUsers: 140 },
    { date: '2023-06-04', activeUsers: 1200, newUsers: 180 },
    { date: '2023-06-05', activeUsers: 1300, newUsers: 200 },
    { date: '2023-06-06', activeUsers: 1250, newUsers: 190 },
    { date: '2023-06-07', activeUsers: 1400, newUsers: 220 },
  ];

  const contentPerformanceData = [
    { name: 'Beats', views: 5000, sales: 200 },
    { name: 'Samples', views: 3000, sales: 150 },
    { name: 'Tutorials', views: 2000, sales: 50 },
    { name: 'Presets', views: 1500, sales: 100 },
  ];

  const salesData = [
    { month: 'Jan', revenue: 10000 },
    { month: 'Feb', revenue: 12000 },
    { month: 'Mar', revenue: 15000 },
    { month: 'Apr', revenue: 14000 },
    { month: 'May', revenue: 18000 },
    { month: 'Jun', revenue: 20000 },
  ];

  const marketplaceData = [
    { name: 'Beats', value: 400 },
    { name: 'Samples', value: 300 },
    { name: 'Presets', value: 200 },
    { name: 'Tutorials', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const stats = [
    { title: 'Total Users', value: '15,234', icon: <Users size={24} />, trend: 'up' },
    { title: 'Total Revenue', value: '$89,230', icon: <DollarSign size={24} />, trend: 'up' },
    { title: 'Content Uploads', value: '3,456', icon: <Music size={24} />, trend: 'up' },
    { title: 'Conversion Rate', value: '3.2%', icon: <TrendingUp size={24} />, trend: 'up' },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">User Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
              <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Content Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contentPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="views" fill="#8884d8" />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Sales Report</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Marketplace Insights</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={marketplaceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {marketplaceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;