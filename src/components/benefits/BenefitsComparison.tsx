import React from 'react';
import { Clock, Users, Brain, DollarSign, CheckCircle, XCircle } from 'lucide-react';

const comparisons = [
  {
    category: 'Training Time',
    traditional: {
      label: '4-6 weeks',
      description: 'Extensive training period required for new agents',
      cons: ['High turnover impact', 'Inconsistent quality', 'Resource intensive']
    },
    modern: {
      label: '1 week',
      description: 'AI assists new agents, reducing training time dramatically',
      pros: ['Rapid deployment', 'Consistent quality', 'Continuous learning']
    }
  },
  {
    category: 'Error Rate',
    traditional: {
      label: '15-20%',
      description: 'Human errors in data entry and information handling',
      cons: ['Manual process errors', 'Inconsistent responses', 'Quality control issues']
    },
    modern: {
      label: '< 2%',
      description: 'AI validation and automation minimize errors',
      pros: ['Automated validation', 'Standardized processes', 'Real-time monitoring']
    }
  },
  {
    category: 'Scalability',
    traditional: {
      label: 'Limited',
      description: 'Hiring and training bottlenecks',
      cons: ['Slow scaling', 'High costs', 'Resource constraints']
    },
    modern: {
      label: 'Unlimited',
      description: 'Instant scaling with AI support',
      pros: ['Instant capacity', 'Cost-effective', 'No bottlenecks']
    }
  }
];

export function BenefitsComparison() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Traditional vs AI-Enhanced Support</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our modern approach revolutionizes customer support
          </p>
        </div>
        
        <div className="space-y-12">
          {comparisons.map((comparison) => (
            <div key={comparison.category} className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Traditional Support</h3>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-red-700">{comparison.traditional.label}</p>
                  <p className="text-gray-700">{comparison.traditional.description}</p>
                  <ul className="space-y-2">
                    {comparison.traditional.cons.map((con) => (
                      <li key={con} className="flex items-center text-red-700">
                        <XCircle className="h-5 w-5 mr-2" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 mb-4">AI-Enhanced Support</h3>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-green-700">{comparison.modern.label}</p>
                  <p className="text-gray-700">{comparison.modern.description}</p>
                  <ul className="space-y-2">
                    {comparison.modern.pros.map((pro) => (
                      <li key={pro} className="flex items-center text-green-700">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}