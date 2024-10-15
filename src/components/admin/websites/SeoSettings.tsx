import React, { useState } from 'react';
import { Save, Search, Globe, FileText } from 'lucide-react';

const SeoSettings: React.FC = () => {
  const [seoSettings, setSeoSettings] = useState({
    defaultTitle: 'BeatBiz Pro - Music Production Platform',
    defaultDescription: 'Empower your music production with BeatBiz Pro. Collaborate, create, and share your beats with the world.',
    defaultKeywords: 'music production, beats, collaboration, producers, artists',
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    enableSitemap: true,
    enableRobotsTxt: true,
    socialImageUrl: 'https://beatbizpro.com/images/social-share.jpg',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSeoSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving SEO settings:', seoSettings);
    // Implement API call to save settings
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">SEO Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="defaultTitle">
              Default Page Title
            </label>
            <input
              type="text"
              id="defaultTitle"
              name="defaultTitle"
              value={seoSettings.defaultTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="defaultDescription">
              Default Meta Description
            </label>
            <textarea
              id="defaultDescription"
              name="defaultDescription"
              value={seoSettings.defaultDescription}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="defaultKeywords">
              Default Meta Keywords
            </label>
            <input
              type="text"
              id="defaultKeywords"
              name="defaultKeywords"
              value={seoSettings.defaultKeywords}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="googleAnalyticsId">
              Google Analytics ID
            </label>
            <input
              type="text"
              id="googleAnalyticsId"
              name="googleAnalyticsId"
              value={seoSettings.googleAnalyticsId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="enableSitemap"
                checked={seoSettings.enableSitemap}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Enable Sitemap Generation</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="enableRobotsTxt"
                checked={seoSettings.enableRobotsTxt}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Enable robots.txt</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="socialImageUrl">
              Default Social Share Image URL
            </label>
            <input
              type="url"
              id="socialImageUrl"
              name="socialImageUrl"
              value={seoSettings.socialImageUrl}
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
            Save SEO Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SeoSettings;