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
  steps: FunnelStep[];
}

const FunnelBuilder: React.FC = () => {
  const [funnels, setFunnels] = useState<Funnel[]>([
    {
      id: 1,
      name: 'Beat Sales Funnel',
      steps: [
        { id: 1, type: 'Landing Page', title: 'Beat Showcase', conversionRate: 30 },
        { id: 2, type: 'Email Opt-in', title: 'Free Beat Pack', conversionRate: 50 },
        { id: 3, type: 'Sales Page', title: 'Premium Beat Collection', conversionRate: 15 },
      ],
    },
    {
      id: 2,
      name: 'Studio Booking Funnel',
      steps: [
        { id: 1, type: 'Landing Page', title: 'Studio Services', conversionRate: 25 },
        { id: 2, type: 'Booking Form', title: 'Schedule Session', conversionRate: 40 },
        { id: 3, type: 'Confirmation', title: 'Booking Confirmation', conversionRate: 90 },
      ],
    },
  ]);

  const [activeFunnel, setActiveFunnel] = useState<Funnel | null>(funnels[0]);
  const [showAddStep, setShowAddStep] = useState(false);

  const addStep = () => {
    setShowAddStep(true);
  };

  const handleAddStep = (type: string, title: string) => {
    if (activeFunnel) {
      const newStep = { id: Date.now(), type, title };
      setActiveFunnel({
        ...activeFunnel,
        steps: [...activeFunnel.steps, newStep],
      });
      setShowAddStep(false);
    }
  };

  const handleDeleteStep = (stepId: number) => {
    if (activeFunnel) {
      setActiveFunnel({
        ...activeFunnel,
        steps: activeFunnel.steps.filter(step => step.id !== stepId),
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Funnel Builder</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Your Funnels</h3>
        <div className="flex space-x-4">
          {funnels.map((funnel) => (
            <button
              key={funnel.id}
              onClick={() => setActiveFunnel(funnel)}
              className={`px-4 py-2 rounded ${
                activeFunnel?.id === funnel.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {funnel.name}
            </button>
          ))}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <PlusCircle size={20} className="mr-2" />
            New Funnel
          </button>
        </div>
      </div>
      {activeFunnel && (
        <div>
          <h3 className="text-xl font-bold mb-4">{activeFunnel.name}</h3>
          <div className="space-y-4">
            {activeFunnel.steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
                      {step.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Conversion Rate: {step.conversionRate}%
                    </div>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 mr-2">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteStep(step.id)}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                {index < activeFunnel.steps.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown size={24} className="text-gray-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={addStep}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <PlusCircle size={20} className="mr-2" />
            Add Step
          </button>
        </div>
      )}
      {showAddStep && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Add New Step</h3>
            {/* Add form fields for adding a new step */}
            <button onClick={() => setShowAddStep(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunnelBuilder;