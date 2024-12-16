import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essential',
    price: 'Custom',
    description: 'Perfect for small businesses',
    features: [
      'Email & Chat Support',
      '8/5 Coverage',
      '2 Languages',
      'Basic AI Integration',
      '48h Response Time'
    ]
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing companies',
    features: [
      'Email, Chat & Voice Support',
      '24/7 Coverage',
      '5 Languages',
      'Advanced AI Integration',
      '24h Response Time',
      'Dedicated Team'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Full Omnichannel Support',
      '24/7 Coverage',
      'Unlimited Languages',
      'Custom AI Solutions',
      'Priority Response',
      'Dedicated Team',
      'Custom Integration'
    ]
  }
];

export function ServicePricing() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Flexible Plans</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}