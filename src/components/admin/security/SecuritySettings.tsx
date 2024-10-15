import React, { useState } from 'react';
import { Save, Lock, Shield, Key } from 'lucide-react';

const SecuritySettings: React.FC = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    passwordComplexity: 'high',
    sessionTimeout: 30,
    loginAttempts: 5,
    ipWhitelist: ['192.168.1.1', '10.0.0.1'],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleIpWhitelistChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSettings(prev => ({
      ...prev,
      ipWhitelist: e.target.value.split('\n').map(ip => ip.trim()).filter(ip => ip !== ''),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save functionality
    console.log('Saving security settings:', settings);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">Enable Two-Factor Authentication</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="passwordComplexity">
            Password Complexity
          </label>
          <select
            id="passwordComplexity"
            name="passwordComplexity"
            value={settings.passwordComplexity}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="sessionTimeout">
            Session Timeout (minutes)
          </label>
          <input
            type="number"
            id="sessionTimeout"
            name="sessionTimeout"
            value={settings.sessionTimeout}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="loginAttempts">
            Max Login Attempts
          </label>
          <input
            type="number"
            id="loginAttempts"
            name="loginAttempts"
            value={settings.loginAttempts}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="ipWhitelist">
            IP Whitelist (one per line)
          </label>
          <textarea
            id="ipWhitelist"
            name="ipWhitelist"
            value={settings.ipWhitelist.join('\n')}
            onChange={handleIpWhitelistChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end">
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

export default SecuritySettings;