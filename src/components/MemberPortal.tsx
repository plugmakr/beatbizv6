import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Music, DollarSign, Users, BarChart2, MessageSquare, Briefcase, Settings, HelpCircle, Zap, Globe, FileText } from 'lucide-react';

const MemberPortal: React.FC = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const sidebarItems = [
    { icon: <Music size={20} />, label: 'Projects', key: 'projects' },
    { icon: <DollarSign size={20} />, label: 'Finances', key: 'finances' },
    { icon: <Users size={20} />, label: 'Clients', key: 'clients' },
    { icon: <BarChart2 size={20} />, label: 'Analytics', key: 'analytics' },
    { icon: <MessageSquare size={20} />, label: 'Collaboration', key: 'collaboration' },
    { icon: <Briefcase size={20} />, label: 'Marketplace', key: 'marketplace' },
    { icon: <Zap size={20} />, label: 'Sound Library', key: 'sound-library' },
    { icon: <Globe size={20} />, label: 'Website', key: 'website' },
    { icon: <FileText size={20} />, label: 'Funnels', key: 'funnels' },
    { icon: <Settings size={20} />, label: 'Settings', key: 'settings' },
    { icon: <HelpCircle size={20} />, label: 'Support', key: 'support' },
  ];

  const subSections: { [key: string]: string[] } = {
    projects: ['Active Projects', 'Completed', 'Templates', 'Collaborations'],
    finances: ['Income', 'Expenses', 'Invoices', 'Royalties'],
    clients: ['Client List', 'Contracts', 'Communication', 'Proposals'],
    analytics: ['Performance', 'Audience', 'Sales', 'Social Media'],
    collaboration: ['Team', 'Messages', 'File Sharing', 'Task Management'],
    marketplace: ['My Products', 'Sales', 'Promotions', 'Analytics'],
    'sound-library': ['Samples', 'Presets', 'Loops', 'Organize'],
    website: ['Edit Pages', 'SEO', 'Analytics', 'Domain'],
    funnels: ['Active Funnels', 'Templates', 'Analytics', 'Email Campaigns'],
    settings: ['Profile', 'Notifications', 'Integrations', 'Billing'],
    support: ['Help Center', 'Tickets', 'Tutorials', 'Community'],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">BeatBiz Studio</h1>
        <nav>
          {sidebarItems.map((item) => (
            <Link
              key={item.key}
              to={`/member/${item.key}`}
              className={`flex items-center space-x-2 p-2 rounded ${
                activeSection === item.key ? 'bg-purple-800' : 'hover:bg-purple-600'
              }`}
              onClick={() => setActiveSection(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top navigation for subsections */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                {subSections[activeSection]?.map((subSection) => (
                  <Link
                    key={subSection}
                    to={`/member/${activeSection}/${subSection.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                  >
                    {subSection}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MemberPortal;