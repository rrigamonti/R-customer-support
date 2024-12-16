import React from 'react';
import { Clock, Zap, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Multilingual Support',
    description: 'Round-the-clock support in over 30 languages',
    stat: '99.9%',
    statLabel: 'Availability',
  },
  {
    icon: Zap,
    title: 'Seamless Integration',
    description: 'Easy integration with your existing systems',
    stat: '<24h',
    statLabel: 'Setup Time',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Grow your support team as your business expands',
    stat: '200%',
    statLabel: 'Faster Scaling',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Reduce operational costs while improving quality',
    stat: '40%',
    statLabel: 'Cost Savings',
  },
];

export default function Benefits() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Services?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the advantages of partnering with a global leader
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-xl bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <benefit.icon className="h-8 w-8" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  {benefit.stat}
                </span>
                <span className="block text-sm text-gray-500">
                  {benefit.statLabel}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}