import React, { useState } from 'react';
import { Settings, Calendar, Clock, Save } from 'lucide-react';

const Maintenance: React.FC = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [scheduledMaintenance, setScheduledMaintenance] = useState({
    date: '',
    time: '',
    duration: '',
    message: '',
  });

  const handleToggleMaintenance = () => {
    setMaintenanceMode(!maintenanceMode);
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setScheduledMaintenance(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the scheduled maintenance to your backend
    console.log('Scheduled maintenance:', scheduledMaintenance);
    alert('Maintenance scheduled successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Maintenance Settings</h2>
      <div className="mb-8">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Settings size={24} className="text-indigo-600 mr-4" />
            <div>
              <h3 className="font-semibold">Maintenance Mode</h3>
              <p className="text-sm text-gray-500">Enable to put the site into maintenance mode</p>
            </div>
          </div>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={maintenanceMode} onChange={handleToggleMaintenance} />
              <div className={`block w-14 h-8 rounded-full ${maintenanceMode ? 'bg-indigo-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${maintenanceMode ? 'transform translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">Schedule Maintenance</h3>
      <form onSubmit={handleSaveSchedule} className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
              Date
            </label>
            <div className="relative">
              <Calendar size={20} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="date"
                id="date"
                name="date"
                value={scheduledMaintenance.date}
                onChange={handleScheduleChange}
                className="pl-10 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="time">
              Time
            </label>
            <div className="relative">
              <Clock size={20} className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="time"
                id="time"
                name="time"
                value={scheduledMaintenance.time}
                onChange={handleScheduleChange}
                className="pl-10 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="duration">
              Duration (hours)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={scheduledMaintenance.duration}
              onChange={handleScheduleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Maintenance Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={scheduledMaintenance.message}
            onChange={handleScheduleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a message to display during maintenance..."
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
          >
            <Save size={20} className="mr-2" />
            Save Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default Maintenance;