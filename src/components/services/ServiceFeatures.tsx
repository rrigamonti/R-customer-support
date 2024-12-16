import React from 'react';
import { Brain, Zap, Globe2, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Enhanced Support',
    description: 'Our AI systems work alongside human agents to provide faster, more accurate support while maintaining the personal touch.'
  },
  {
    icon: Globe2,
    title: 'Global Language Coverage',
    description: 'Native speakers provide support in 16+ languages, ensuring clear communication and cultural understanding.'
  },
  {
    icon: Zap,
    title: 'Instant Resolution',
    description: 'Advanced routing and AI-powered solutions enable quick resolution of customer inquiries.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures protect all customer interactions and data.'
  }
];

export function ServiceFeatures() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            What sets our services apart
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}