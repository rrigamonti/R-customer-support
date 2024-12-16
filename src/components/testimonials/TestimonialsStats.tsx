import React from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    label: 'Average Improvement',
    value: '45%',
    description: 'in customer satisfaction'
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '< 1min',
    description: 'average first response'
  },
  {
    icon: Users,
    label: 'Customer Retention',
    value: '95%',
    description: 'client retention rate'
  },
  {
    icon: DollarSign,
    label: 'Cost Reduction',
    value: '40%',
    description: 'in support costs'
  }
];

export function TestimonialsStats() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Real Results</h2>
          <p className="mt-4 text-xl text-gray-600">
            Measurable improvements our clients experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}