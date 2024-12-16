import React from 'react';
import { Users, Clock, TrendingUp, DollarSign } from 'lucide-react';

const metrics = [
  {
    icon: Clock,
    value: '< 1 min',
    label: 'Response Time',
    description: 'Average first response time'
  },
  {
    icon: Users,
    value: '95%',
    label: 'Customer Satisfaction',
    description: 'Based on post-interaction surveys'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Service Uptime',
    description: 'Guaranteed availability'
  },
  {
    icon: DollarSign,
    value: '40%',
    label: 'Cost Reduction',
    description: 'Average client savings'
  }
];

export function KeyMetrics() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg transform rotate-2 group-hover:rotate-3 transition-transform"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg group-hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className="h-7 w-7 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{metric.label}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}