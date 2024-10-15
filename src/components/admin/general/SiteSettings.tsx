import React, { useState } from 'react';
import { Save, Globe, Mail, Palette } from 'lucide-react';

const SiteSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'BeatBiz Pro',
    siteUrl: 'https://beatbizpro.com',
    adminEmail: 'admin@beatbizpro.com',
    supportEmail: 'support@beatbizpro.com',
    primaryColor: '#4F46E5',
    secondaryColor: '#818CF8',
    logoUrl: '/logo.png',
    faviconUrl: '/favicon.ico',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving site settings:', settings);
    // Implement API call to save settings
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Site Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="siteName">
              Site Name
            </label>
            <input
              type="text"
              id="siteName"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="siteUrl">
              Site URL
            </label>
            <input
              type="url"
              id="siteUrl"
              name="siteUrl"
              value={settings.siteUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="adminEmail">
              Admin Email
            </label>
            <input
              type="email"
              id="adminEmail"
              name="adminEmail"
              value={settings.adminEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="supportEmail">
              Support Email
            </label>
            <input
              type="email"
              id="supportEmail"
              name="supportEmail"
              value={settings.supportEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="primaryColor">
              Primary Color
            </label>
            <input
              type="color"
              id="primaryColor"
              name="primaryColor"
              value={settings.primaryColor}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="secondaryColor">
              Secondary Color
            </label>
            <input
              type="color"
              id="secondaryColor"
              name="secondaryColor"
              value={settings.secondaryColor}
              onChange={handleChange}
              className="w-full h-10 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="logoUrl">
              Logo URL
            </label>
            <input
              type="url"
              id="logoUrl"
              name="logoUrl"
              value={settings.logoUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="faviconUrl">
              Favicon URL
            </label>
            <input
              type="url"
              id="faviconUrl"
              name="faviconUrl"
              value={settings.faviconUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
          >
            <Save size={20} className="mr-2" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SiteSettings;