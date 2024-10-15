import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  active: boolean;
}

const PlanManagement: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: 1,
      name: 'Basic',
      price: 15,
      billingCycle: 'monthly',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        'Email support',
        '5GB storage'
      ],
      active: true
    },
    {
      id: 2,
      name: 'Pro',
      price: 30,
      billingCycle: 'monthly',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Collaboration tools'
      ],
      active: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 100,
      billingCycle: 'monthly',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited storage',
        'On-premise deployment option'
      ],
      active: true
    }
  ]);

  const handleAddPlan = () => {
    // Implement add plan functionality
    console.log('Add new plan');
  };

  const handleEditPlan = (id: number) => {
    // Implement edit plan functionality
    console.log('Edit plan', id);
  };

  const handleDeletePlan = (id: number) => {
    // Implement delete plan functionality
    console.log('Delete plan', id);
  };

  const handleToggleActive = (id: number) => {
    setPlans(plans.map(plan => 
      plan.id === id ? { ...plan, active: !plan.active } : plan
    ));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Plans</h2>
        <button
          onClick={handleAddPlan}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add Plan
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billing Cycle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td className="px-6 py-4 whitespace-nowrap">{plan.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${plan.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{plan.billingCycle}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc list-inside">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleToggleActive(plan.id)}
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      plan.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {plan.active ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleEditPlan(plan.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeletePlan(plan.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 size={18} />
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

export default PlanManagement;