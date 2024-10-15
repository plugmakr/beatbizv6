import React, { useState } from 'react';
import { PlusCircle, ArrowDown, Edit2, Trash2, BarChart2 } from 'lucide-react';

interface FunnelStep {
  id: number;
  type: string;
  title: string;
  conversionRate?: number;
}

interface Funnel {
  id: number;
  name: string;
  description: string;
  steps: FunnelStep[];
  totalConversions: number;
  lastUpdated: string;
}

const FunnelBuilder: React.FC = () => {
  const [funnels, setFunnels] = useState<Funnel[]>([
    {
      id: 1,
      name: 'Beat Sales Funnel',
      description: 'Funnel for selling beats to producers',
      steps: [
        { id: 1, type: 'Landing Page', title: 'Beat Showcase', conversionRate: 30 },
        { id: 2, type: 'Email Opt-in', title: 'Free Beat Pack', conversionRate: 50 },
        { id: 3, type: 'Sales Page', title: 'Premium Beat Collection', conversionRate: 15 },
      ],
      totalConversions: 450,
      lastUpdated: '2023-06-15',
    },
    {
      id: 2,
      name: 'Studio Booking Funnel',
      description: 'Funnel for booking studio sessions',
      steps: [
        { id: 1, type: 'Landing Page', title: 'Studio Services', conversionRate: 25 },
        { id: 2, type: 'Booking Form', title: 'Schedule Session', conversionRate: 40 },
        { id: 3, type: 'Confirmation', title: 'Booking Confirmation', conversionRate: 90 },
      ],
      totalConversions: 320,
      lastUpdated: '2023-06-14',
    },
  ]);

  const handleAddFunnel = () => {
    // Implement add funnel functionality
    console.log('Add new funnel');
  };

  const handleEditFunnel = (id: number) => {
    // Implement edit funnel functionality
    console.log('Edit funnel', id);
  };

  const handleDeleteFunnel = (id: number) => {
    // Implement delete funnel functionality
    console.log('Delete funnel', id);
  };

  const handleViewAnalytics = (id: number) => {
    // Implement view analytics functionality
    console.log('View analytics for funnel', id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Funnel Builder</h2>
        <button
          onClick={handleAddFunnel}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <PlusCircle size={20} className="mr-2" />
          Add New Funnel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steps</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Conversions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {funnels.map((funnel) => (
              <tr key={funnel.id}>
                <td className="px-6 py-4 whitespace-nowrap">{funnel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{funnel.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{funnel.steps.length}</td>
                <td className="px-6 py-4 whitespace-nowrap">{funnel.totalConversions}</td>
                <td className="px-6 py-4 whitespace-nowrap">{funnel.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditFunnel(funnel.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteFunnel(funnel.id)} className="text-red-600 hover:text-red-900 mr-2">
                    <Trash2 size={18} />
                  </button>
                  <button onClick={() => handleViewAnalytics(funnel.id)} className="text-green-600 hover:text-green-900">
                    <BarChart2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FunnelBuilder;