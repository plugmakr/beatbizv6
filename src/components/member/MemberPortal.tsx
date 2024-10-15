import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Music, DollarSign, Users, BarChart2, MessageSquare, Briefcase, Settings, HelpCircle, Zap, Globe, FileText } from 'lucide-react';
import AccordionMenu from '../AccordionMenu';

const MemberPortal: React.FC = () => {
  const menuItems = [
    { icon: <Music size={20} />, label: 'Projects', key: 'projects', subItems: [
      { key: 'active', label: 'Active Projects' },
      { key: 'completed', label: 'Completed Projects' },
      { key: 'templates', label: 'Project Templates' },
    ] },
    { icon: <DollarSign size={20} />, label: 'Finances', key: 'finances', subItems: [
      { key: 'overview', label: 'Financial Overview' },
      { key: 'transactions', label: 'Transactions' },
      { key: 'invoices', label: 'Invoices' },
    ] },
    { icon: <Users size={20} />, label: 'Clients', key: 'clients', subItems: [
      { key: 'list', label: 'Client List' },
      { key: 'add', label: 'Add Client' },
      { key: 'management', label: 'Client Management' },
    ] },
    { icon: <BarChart2 size={20} />, label: 'Analytics', key: 'analytics', subItems: [
      { key: 'performance', label: 'Performance' },
      { key: 'audience', label: 'Audience' },
      { key: 'sales', label: 'Sales Analytics' },
    ] },
    { icon: <MessageSquare size={20} />, label: 'Collaboration', key: 'collaboration', subItems: [
      { key: 'messages', label: 'Messages' },
      { key: 'projects', label: 'Collaborative Projects' },
      { key: 'files', label: 'Shared Files' },
    ] },
    { icon: <Briefcase size={20} />, label: 'Marketplace', key: 'marketplace', subItems: [
      { key: 'my-products', label: 'My Products' },
      { key: 'sales', label: 'Sales' },
      { key: 'promotions', label: 'Promotions' },
    ] },
    { icon: <Zap size={20} />, label: 'Sound Library', key: 'sound-library', subItems: [
      { key: 'samples', label: 'Samples' },
      { key: 'presets', label: 'Presets' },
      { key: 'loops', label: 'Loops' },
    ] },
    { icon: <Globe size={20} />, label: 'Website', key: 'website', subItems: [
      { key: 'edit', label: 'Edit Website' },
      { key: 'analytics', label: 'Website Analytics' },
      { key: 'seo', label: 'SEO Settings' },
    ] },
    { icon: <FileText size={20} />, label: 'Funnels', key: 'funnels', subItems: [
      { key: 'active', label: 'Active Funnels' },
      { key: 'templates', label: 'Funnel Templates' },
      { key: 'analytics', label: 'Funnel Analytics' },
    ] },
    { icon: <Settings size={20} />, label: 'Settings', key: 'settings', subItems: [
      { key: 'account', label: 'Account Settings' },
      { key: 'notifications', label: 'Notifications' },
      { key: 'integrations', label: 'Integrations' },
    ] },
    { icon: <HelpCircle size={20} />, label: 'Support', key: 'support', subItems: [
      { key: 'help-center', label: 'Help Center' },
      { key: 'tickets', label: 'Support Tickets' },
      { key: 'faq', label: 'FAQ' },
    ] },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-4 overflow-y-auto">
        <Link to="/" className="block mb-8">
          <h1 className="text-2xl font-bold">BeatBiz Studio</h1>
        </Link>
        <AccordionMenu menuItems={menuItems} basePath="/member" />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MemberPortal;