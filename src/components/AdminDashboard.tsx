import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Settings, DollarSign, BarChart2, HelpCircle, Globe, Shield, Zap, Layout, FileText, ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  key: string;
  subItems: { key: string; label: string }[];
}

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { 
      icon: <Settings size={20} />, 
      label: 'General', 
      key: 'general', 
      subItems: [
        { key: 'site-settings', label: 'Site Settings' },
        { key: 'notifications', label: 'Notifications' },
        { key: 'maintenance', label: 'Maintenance' }
      ] 
    },
    { 
      icon: <Users size={20} />, 
      label: 'User Management', 
      key: 'users', 
      subItems: [
        { key: 'all-users', label: 'All Users' },
        { key: 'roles', label: 'Roles' },
        { key: 'permissions', label: 'Permissions' }
      ] 
    },
    { 
      icon: <DollarSign size={20} />, 
      label: 'Financials', 
      key: 'financials', 
      subItems: [
        { key: 'revenue', label: 'Revenue' },
        { key: 'payouts', label: 'Payouts' },
        { key: 'subscriptions', label: 'Subscriptions' },
        { key: 'sales-percentages', label: 'Sales Percentages' }
      ] 
    },
    { 
      icon: <BarChart2 size={20} />, 
      label: 'Analytics', 
      key: 'analytics', 
      subItems: [
        { key: 'user-activity', label: 'User Activity' },
        { key: 'content-performance', label: 'Content Performance' },
        { key: 'sales-reports', label: 'Sales Reports' },
        { key: 'marketplace-insights', label: 'Marketplace Insights' }
      ] 
    },
    { 
      icon: <Globe size={20} />, 
      label: 'Marketplace', 
      key: 'marketplace', 
      subItems: [
        { key: 'products', label: 'Products' },
        { key: 'categories', label: 'Categories' },
        { key: 'featured-items', label: 'Featured Items' },
        { key: 'promotions', label: 'Promotions' }
      ] 
    },
    { 
      icon: <Shield size={20} />, 
      label: 'Security', 
      key: 'security', 
      subItems: [
        { key: 'access-logs', label: 'Access Logs' },
        { key: 'security-settings', label: 'Security Settings' },
        { key: 'data-protection', label: 'Data Protection' },
        { key: 'api-keys', label: 'API Keys' }
      ] 
    },
    { 
      icon: <HelpCircle size={20} />, 
      label: 'Support', 
      key: 'support', 
      subItems: [
        { key: 'tickets', label: 'Tickets' },
        { key: 'faqs', label: 'FAQs' },
        { key: 'contact-forms', label: 'Contact Forms' },
        { key: 'knowledge-base', label: 'Knowledge Base' }
      ] 
    },
    { 
      icon: <Zap size={20} />, 
      label: 'Subscription Plans', 
      key: 'subscriptions', 
      subItems: [
        { key: 'plan-management', label: 'Plan Management' },
        { key: 'pricing', label: 'Pricing' },
        { key: 'features', label: 'Features' },
        { key: 'discounts', label: 'Discounts' }
      ] 
    },
    { 
      icon: <Layout size={20} />, 
      label: 'Website Builder', 
      key: 'websites', 
      subItems: [
        { key: 'templates', label: 'Templates' },
        { key: 'custom-domains', label: 'Custom Domains' },
        { key: 'seo-settings', label: 'SEO Settings' },
        { key: 'website-analytics', label: 'Website Analytics' }
      ] 
    },
    { 
      icon: <FileText size={20} />, 
      label: 'Funnel Builder', 
      key: 'funnels', 
      subItems: [
        { key: 'funnel-templates', label: 'Funnel Templates' },
        { key: 'conversion-rates', label: 'Conversion Rates' },
        { key: 'ab-testing', label: 'A/B Testing' },
        { key: 'email-integration', label: 'Email Integration' }
      ] 
    },
  ];

  const toggleSection = (key: string) => {
    setActiveSection(activeSection === key ? null : key);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-8">BeatBiz Admin</h1>
        <nav>
          {menuItems.map((item) => (
            <div key={item.key} className="mb-2">
              <button
                onClick={() => toggleSection(item.key)}
                className="flex items-center justify-between w-full p-2 rounded hover:bg-indigo-600 transition-colors duration-200"
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
                {activeSection === item.key ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {activeSection === item.key && (
                <div className="ml-6 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.key}
                      to={`/admin/${item.key}/${subItem.key}`}
                      className="block p-2 rounded hover:bg-indigo-600 transition-colors duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;