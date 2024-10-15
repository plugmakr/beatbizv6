import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Play, Pause, RefreshCw } from 'lucide-react';

interface Test {
  id: number;
  name: string;
  status: 'running' | 'paused' | 'completed';
  startDate: string;
  endDate: string;
  variants: {
    name: string;
    visitors: number;
    conversions: number;
    conversionRate: number;
  }[];
}

const AbTesting: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([
    {
      id: 1,
      name: 'Landing Page Headline Test',
      status: 'running',
      startDate: '2023-06-01',
      endDate: '2023-06-15',
      variants: [
        { name: 'Variant A', visitors: 1000, conversions: 50, conversionRate: 5 },
        { name: 'Variant B', visitors: 1000, conversions: 65, conversionRate: 6.5 },
      ],
    },
    {
      id: 2,
      name: 'Call-to-Action Button Color',
      status: 'completed',
      startDate: '2023-05-15',
      endDate: '2023-05-30',
      variants: [
        { name: 'Blue CTA', visitors: 1500, conversions: 90, conversionRate: 6 },
        { name: 'Green CTA', visitors: 1500, conversions: 105, conversionRate: 7 },
      ],
    },
    {
      id: 3,
      name: 'Pricing Page Layout',
      status: 'paused',
      startDate: '2023-06-10',
      endDate: '2023-06-24',
      variants: [
        { name: 'Layout 1', visitors: 500, conversions: 20, conversionRate: 4 },
        { name: 'Layout 2', visitors: 500, conversions: 25, conversionRate: 5 },
      ],
    },
  ]);

  const handleStartTest = (id: number) => {
    setTests(tests.map(test => 
      test.id === id ? { ...test, status: 'running' } : test
    ));
  };

  const handlePauseTest = (id: number) => {
    setTests(tests.map(test => 
      test.id === id ? { ...test, status: 'paused' } : test
    ));
  };

  const handleRestartTest = (id: number) => {
    setTests(tests.map(test => 
      test.id === id ? { ...test, status: 'running', startDate: new Date().toISOString().split('T')[0] } : test
    ));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">A/B Testing</h2>
      {tests.map((test) => (
        <div key={test.id} className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{test.name}</h3>
            <div className="flex items-center">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                test.status === 'running' ? 'bg-green-100 text-green-800' :
                test.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {test.status}
              </span>
              {test.status === 'running' && (
                <button onClick={() => handlePauseTest(test.id)} className="ml-2 text-yellow-600 hover:text-yellow-800">
                  <Pause size={18} />
                </button>
              )}
              {test.status === 'paused' && (
                <button onClick={() => handleStartTest(test.id)} className="ml-2 text-green-600 hover:text-green-800">
                  <Play size={18} />
                </button>
              )}
              {test.status === 'completed' && (
                <button onClick={() => handleRestartTest(test.id)} className="ml-2 text-blue-600 hover:text-blue-800">
                  <RefreshCw size={18} />
                </button>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {test.startDate} - {test.endDate}
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={test.variants}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="visitors" fill="#8884d8" name="Visitors" />
              <Bar yAxisId="right" dataKey="conversions" fill="#82ca9d" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Results:</h4>
            <ul>
              {test.variants.map((variant, index) => (
                <li key={index} className="mb-1">
                  {variant.name}: {variant.conversionRate}% conversion rate
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbTesting;