import React, { useState } from 'react';
import { Plus, Edit2, Trash2, DollarSign, Users, Check } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
}

const SubscriptionPlans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: 1,
      name: 'Basic',
      price: 15,
      billingCycle: 'monthly',
      features: [
        'Project management for up to 5 active projects',
        'Basic financial tracking',
        'Client management (up to 10 clients)',
        'Email support',
        'Website builder (1 website)',
        'Social media integration (2 platforms)',
        '5GB cloud storage',
      ],
    },
    {
      id: 2,
      name: 'Pro',
      price: 30,
      billingCycle: 'monthly',
      features: [
        'Unlimited active projects',
        'Advanced financial tools and reporting',
        'Unlimited client management',
        'Priority email and chat support',
        'Website builder (3 websites)',
        'Social media integration (all major platforms)',
        'Marketing and promotion tools',
        'Funnel builder (3 funnels)',
        '50GB cloud storage',
        'Collaboration tools',
      ],
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 60,
      billingCycle: 'monthly',
      features: [
        'All Pro features',
        '24/7 priority support',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics and insights',
        'Unlimited websites',
        'Unlimited funnels',
        'White-label options',
        '500GB cloud storage',
        'Team collaboration features',
      ],
    },
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

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Plans</h2>
        <button
          onClick={handleAddPlan}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New Plan
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold text-center text-indigo-600 mb-6">
              ${plan.price}<span className="text-base font-normal text-gray-600">/{plan.billingCycle}</span>
            </p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check size={20} className="text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end space-x-2">
              <button onClick={() => handleEditPlan(plan.id)} className="text-blue-500 hover:text-blue-700">
                <Edit2 size={20} />
              </button>
              <button onClick={() => handleDeletePlan(plan.id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;