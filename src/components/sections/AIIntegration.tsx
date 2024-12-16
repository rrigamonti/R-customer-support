import React from 'react';
import { Brain, Zap, BarChart, MessageSquare, Phone, Clock, Bot, Shield } from 'lucide-react';

const metrics = [
  { label: 'Response Time Improvement', value: '65%', description: 'Faster customer inquiries handling' },
  { label: 'Customer Satisfaction', value: '94%', description: 'Average satisfaction score' },
  { label: 'Cost Reduction', value: '40%', description: 'Reduced operational costs' },
  { label: 'Resolution Rate', value: '85%', description: 'First-contact resolution' }
];

const aiFeatures = [
  {
    icon: Bot,
    title: 'AI-Powered Voice Support',
    description: 'Advanced voice recognition and natural language processing for seamless phone interactions, supporting multiple languages and accents.'
  },
  {
    icon: MessageSquare,
    title: 'Smart Routing & Prioritization',
    description: 'AI algorithms analyze incoming requests to route them to the most qualified agents while prioritizing urgent matters.'
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    description: 'Machine learning models predict customer needs and potential issues before they arise, enabling proactive support.'
  },
  {
    icon: Shield,
    title: 'Enhanced Quality Assurance',
    description: 'AI-driven monitoring ensures consistent service quality across all channels and languages.'
  }
];

export default function AIIntegration() {
  return (
    <div className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            AI-Enhanced Customer Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge artificial intelligence to deliver faster, smarter, and more personalized customer experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiFeatures.map((feature) => (
            <div key={feature.title} className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}