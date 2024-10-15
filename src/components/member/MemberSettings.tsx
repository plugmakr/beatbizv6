import React, { useState } from 'react';
import { Save, Bell, Lock, CreditCard, Globe } from 'lucide-react';

const MemberSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Music producer and beat maker',
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });
  const [security, setSecurity] = useState({
    twoFactorAuth: false,
  });
  const [billing, setBilling] = useState({
    plan: 'Pro',
    nextBillingDate: '2023-07-15',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSecurity(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`mr-4 ${activeTab === 'profile' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`mr-4 ${activeTab === 'notifications' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`mr-4 ${activeTab === 'security' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
          Security
        </button>
        <button
          onClick={() => setActiveTab('billing')}
          className={`mr-4 ${activeTab === 'billing' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
        >
          Billing
        </button>
      </div>
      {activeTab === 'profile' && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleProfileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
            />
          </div>
        </div>
      )}
      {activeTab === 'notifications' && (
        <div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={notifications.emailNotifications}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <span>Email Notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={notifications.pushNotifications}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <span>Push Notifications</span>
            </label>
          </div>
        </div>
      )}
      {activeTab === 'security' && (
        <div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={security.twoFactorAuth}
                onChange={handleSecurityChange}
                className="mr-2"
              />
              <span>Enable Two-Factor Authentication</span>
            </label>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Change Password
          </button>
        </div>
      )}
      {activeTab === 'billing' && (
        <div>
          <p className="mb-4">Current Plan: <strong>{billing.plan}</strong></p>
          <p className="mb-4">Next Billing Date: {billing.nextBillingDate}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upgrade Plan
          </button>
        </div>
      )}
      <div className="mt-6">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <Save size={20} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MemberSettings;