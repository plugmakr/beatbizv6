import React, { useState } from 'react';
import { Search, Download } from 'lucide-react';

interface AccessLog {
  id: number;
  user: string;
  action: string;
  ipAddress: string;
  timestamp: string;
  status: 'success' | 'failure';
}

const AccessLogs: React.FC = () => {
  const [logs, setLogs] = useState<AccessLog[]>([
    { id: 1, user: 'john@example.com', action: 'Login', ipAddress: '192.168.1.1', timestamp: '2023-06-15 10:30:00', status: 'success' },
    { id: 2, user: 'jane@example.com', action: 'Password Change', ipAddress: '192.168.1.2', timestamp: '2023-06-15 11:15:00', status: 'success' },
    { id: 3, user: 'unknown@example.com', action: 'Login Attempt', ipAddress: '192.168.1.3', timestamp: '2023-06-15 12:00:00', status: 'failure' },
    { id: 4, user: 'bob@example.com', action: 'File Download', ipAddress: '192.168.1.4', timestamp: '2023-06-15 13:45:00', status: 'success' },
    { id: 5, user: 'alice@example.com', action: 'Settings Update', ipAddress: '192.168.1.5', timestamp: '2023-06-15 14:30:00', status: 'success' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredLogs = logs.filter(log =>
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.ipAddress.includes(searchTerm)
  );

  const handleExportLogs = () => {
    // Implement log export functionality
    console.log('Exporting logs');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Access Logs</h2>
        <button
          onClick={handleExportLogs}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Download size={20} className="mr-2" />
          Export Logs
        </button>
      </div>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          <div className="absolute left-3 top-2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLogs.map((log) => (
              <tr key={log.id}>
                <td className="px-6 py-4 whitespace-nowrap">{log.user}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.action}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.ipAddress}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
  );
};

export default AccessLogs;