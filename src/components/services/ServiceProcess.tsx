import React from 'react';
import { MessageSquare, Users, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Contact',
    description: 'Customer inquiry is received and automatically categorized'
  },
  {
    icon: Settings,
    title: 'AI Analysis',
    description: 'AI system analyzes content and routes to appropriate team'
  },
  {
    icon: Users,
    title: 'Expert Handling',
    description: 'Skilled agents provide personalized solutions'
  },
  {
    icon: CheckCircle,
    title: 'Resolution',
    description: 'Issue resolved and satisfaction confirmed'
  }
];

export function ServiceProcess() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
          <p className="mt-4 text-xl text-gray-600">
            How we handle your customer support needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-100 transform translate-y-8"></div>
              )}
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}