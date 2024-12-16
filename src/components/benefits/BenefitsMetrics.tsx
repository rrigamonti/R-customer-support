import React from 'react';
import { Clock, Users, DollarSign, TrendingUp } from 'lucide-react';

const metrics = [
  {
    icon: Clock,
    title: 'Response Time',
    traditional: '3+ minutes',
    modern: '< 1 minute',
    improvement: '85%'
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    traditional: '75%',
    modern: '95%',
    improvement: '27%'
  },
  {
    icon: DollarSign,
    title: 'Cost per Ticket',
    traditional: '£15',
    modern: '£5',
    improvement: '67%'
  },
  {
    icon: TrendingUp,
    title: 'Resolution Rate',
    traditional: '65%',
    modern: '92%',
    improvement: '42%'
  }
];

export function BenefitsMetrics() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Performance Metrics</h2>
          <p className="mt-4 text-xl text-gray-600">
            Measurable improvements across all key performance indicators
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.title} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <metric.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">{metric.title}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Traditional:</span>
                  <span className="text-red-600 font-semibold">{metric.traditional}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">AI-Enhanced:</span>
                  <span className="text-green-600 font-semibold">{metric.modern}</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Improvement</span>
                    <span className="text-lg font-bold text-blue-600">{metric.improvement}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}