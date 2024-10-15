import React from 'react'
import { BarChart, Calendar, DollarSign, Music, Users, MessageSquare, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  const recentActivity = [
    { id: 1, action: 'New beat uploaded', time: '2 hours ago' },
    { id: 2, action: 'Client contract signed', time: '5 hours ago' },
    { id: 3, action: 'Payment received', time: '1 day ago' },
    { id: 4, action: 'New collaboration started', time: '2 days ago' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<Music size={24} />} title="Active Projects" value="12" />
        <DashboardCard icon={<DollarSign size={24} />} title="Revenue This Month" value="$5,230" />
        <DashboardCard icon={<Calendar size={24} />} title="Upcoming Deadlines" value="3" />
        <DashboardCard icon={<Users size={24} />} title="Total Clients" value="28" />
        <DashboardCard icon={<MessageSquare size={24} />} title="Unread Messages" value="7" />
        <DashboardCard icon={<TrendingUp size={24} />} title="Beat Sales" value="87" />
        <DashboardCard icon={<BarChart size={24} />} title="Website Traffic" value="+15%" />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickActionButton label="Create New Project" />
          <QuickActionButton label="Send Invoice" />
          <QuickActionButton label="Schedule Meeting" />
          <QuickActionButton label="Upload New Beat" />
          <QuickActionButton label="View Analytics" />
          <QuickActionButton label="Manage Social Media" />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="bg-white rounded-lg shadow divide-y">
          {recentActivity.map((activity) => (
            <li key={activity.id} className="px-4 py-3 flex justify-between items-center">
              <span>{activity.action}</span>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const DashboardCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-indigo-600">{icon}</div>
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <h3 className="text-gray-600">{title}</h3>
    </div>
  )
}

const QuickActionButton = ({ label }: { label: string }) => (
  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300">
    {label}
  </button>
)

export default Dashboard