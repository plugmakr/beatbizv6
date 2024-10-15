import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Music, DollarSign, Users, Calendar, BarChart2, MessageSquare, Settings, Youtube, TrendingUp } from 'lucide-react'

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600">BeatBiz Pro</h1>
        </div>
        <ul className="space-y-2 p-4">
          <NavItem to="/admin" icon={<Music size={20} />} label="Dashboard" />
          <NavItem to="/admin/projects" icon={<Calendar size={20} />} label="Projects" />
          <NavItem to="/admin/finances" icon={<DollarSign size={20} />} label="Finances" />
          <NavItem to="/admin/clients" icon={<Users size={20} />} label="Clients" />
          <NavItem to="/admin/collaboration" icon={<MessageSquare size={20} />} label="Collaboration" />
          <NavItem to="/admin/marketing" icon={<BarChart2 size={20} />} label="Marketing" />
          <NavItem to="/admin/analytics" icon={<Settings size={20} />} label="Analytics" />
          <NavItem to="/admin/social-media" icon={<Youtube size={20} />} label="Social Media" />
          <NavItem to="/admin/funnel-builder" icon={<TrendingUp size={20} />} label="Funnel Builder" />
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <li>
    <Link to={to} className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600">
      {icon}
      <span>{label}</span>
    </Link>
  </li>
)

export default AdminLayout