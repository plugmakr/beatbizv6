import React, { useState } from 'react';
import { Shield, Key, Lock, AlertTriangle } from 'lucide-react';

interface SecurityLog {
  id: number;
  event: string;
  user: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error';
}

const SecurityManagement: React.FC = () => {
  const [securityLogs, setSecurityLogs] = useState<SecurityLog[]>([
    { id: 1, event: 'User Login', user: 'john@example.com', timestamp: '2023-06-15 10:30:00', status: 'success' },
    { id: 2, event: 'Failed Login Attempt', user: 'unknown@example.com', timestamp: '2023-06-15 11:15:00', status: 'error' },
    { id: 3, event: 'Password Changed', user: 'jane@example.com', timestamp: '2023-06-15 14:45:00', status: 'success' },
    { id: 4, event: 'API Key Generated', user: 'admin@example.com', timestamp: '2023-06-15 16:20:00', status: 'warning' },
    { id: 5, event: 'Account Locked', user: 'sam@example.com', timestamp: '2023-06-15 18:00:00', status: 'error' },
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordComplexity: 'high',
    sessionTimeout: 30,
    ipWhitelist: ['192.168.1.1', '10.0.0.1'],
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Security Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Security Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={() => setSecuritySettings(prev => ({ ...prev, twoFactorAuth: !prev.twoFactorAuth }))}
                  className="mr-2"
                />
                Enable Two-Factor Authentication
              </label>
            </div>
            <div>
              <label className="block mb-2">Password Complexity:</label>
              <select
                value={securitySettings.passwordComplexity}
                onChange={(e) => setSecuritySettings(prev => ({ ...prev, passwordComplexity: e.target.value }))}
                className="w-full p-2 border rounded"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Session Timeout (minutes):</label>
              <input
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={(e) => setSecuritySettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">IP Whitelist:</label>
              <textarea
                value={securitySettings.ipWhitelist.join('\n')}
                onChange={(e) => setSecuritySettings(prev => ({ ...prev, ipWhitelist: e.target.value.split('\n') }))}
                className="w-full p-2 border rounded"
                rows={4}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Security Logs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {securityLogs.map((log) => (
                  <tr key={log.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{log.event}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{log.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{log.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        log.status === 'success' ? 'bg-green-100 text-green-800' :
                        log.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Security Settings
        </button>
      </div>
    </div>
  );
};

export default SecurityManagement;