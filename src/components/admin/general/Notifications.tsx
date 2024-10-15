import React, { useState } from 'react';
import { Bell, Mail, Smartphone, Globe } from 'lucide-react';

interface Notification {
  id: number;
  type: 'email' | 'sms' | 'push' | 'site';
  message: string;
  enabled: boolean;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: 'email', message: 'New user registration', enabled: true },
    { id: 2, type: 'sms', message: 'New order placed', enabled: false },
    { id: 3, type: 'push', message: 'New comment on your beat', enabled: true },
    { id: 4, type: 'site', message: 'System maintenance scheduled', enabled: true },
  ]);

  const handleToggle = (id: number) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
    ));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail size={20} />;
      case 'sms': return <Smartphone size={20} />;
      case 'push': return <Bell size={20} />;
      case 'site': return <Globe size={20} />;
      default: return <Bell size={20} />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Notification Settings</h2>
      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="text-indigo-600 mr-4">
                {getIcon(notif.type)}
              </div>
              <div>
                <h3 className="font-semibold">{notif.message}</h3>
                <p className="text-sm text-gray-500">{notif.type.toUpperCase()} Notification</p>
              </div>
            </div>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" checked={notif.enabled} onChange={() => handleToggle(notif.id)} />
                <div className={`block w-14 h-8 rounded-full ${notif.enabled ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${notif.enabled ? 'transform translate-x-6' : ''}`}></div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;