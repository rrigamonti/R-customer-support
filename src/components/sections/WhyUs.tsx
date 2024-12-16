import React from 'react';
import { Shield, Globe2, Clock, Award, Users, Headphones, CheckCircle, Building2, Zap, TrendingUp, Brain, Heart } from 'lucide-react';
import { CalendlyButton } from '../ui/CalendlyButton';

const reasons = [
  {
    icon: Shield,
    title: 'Global Excellence',
    description: 'Delivering world-class support with international quality standards'
  },
  {
    icon: Globe2,
    title: '16+ Languages',
    description: 'Native speakers providing authentic communication in every major language'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support ensuring your customers are never left waiting'
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Specialized knowledge across multiple sectors and industries'
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Assigned support specialists who understand your business'
  },
  {
    icon: Headphones,
    title: 'Omnichannel Support',
    description: 'Seamless integration across all communication channels'
  }
];

export default function WhyUs() {
  return (
    <div className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose RagaSupport?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Experience the difference of truly global, AI-enhanced customer support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-blue-200">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}