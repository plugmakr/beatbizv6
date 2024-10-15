import React, { useState } from 'react';
import { Save, Shield, Lock, Key, Database } from 'lucide-react';

const DataProtection: React.FC = () => {
  const [settings, setSettings] = useState({
    dataEncryption: true,
    backupFrequency: 'daily',
    retentionPeriod: 30,
    gdprCompliance: true,
    dataAnonymization: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement save functionality
    console.log('Saving data protection settings:', settings);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Data Protection</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="dataEncryption"
              checked={settings.dataEncryption}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">Enable Data Encryption</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="backupFrequency">
            Backup Frequency
          </label>
          <select
            id="backupFrequency"
            name="backupFrequency"
            value={settings.backupFrequency}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="retentionPeriod">
            Data Retention Period (days)
          </label>
          <input
            type="number"
            id="retentionPeriod"
            name="retentionPeriod"
            value={settings.retentionPeriod}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="gdprCompliance"
              checked={settings.gdprCompliance}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">GDPR Compliance</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="dataAnonymization"
              checked={settings.dataAnonymization}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-700">Enable Data Anonymization</span>
          </label>
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

export default DataProtection;