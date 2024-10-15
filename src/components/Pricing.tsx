import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$15',
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
      name: 'Pro',
      price: '$30',
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
      name: 'Enterprise',
      price: '$60',
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold text-center text-indigo-600 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing