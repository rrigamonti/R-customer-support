import React from 'react';
import { Phone, Mail, MessageSquare, MessageCircle, Bot, Headphones } from 'lucide-react';

const categories = [
  {
    icon: Phone,
    title: 'Voice Support',
    description: 'AI-enhanced voice support with natural language processing for seamless phone interactions in multiple languages.',
    features: ['Automated call routing', 'Voice recognition', 'Sentiment analysis']
  },
  {
    icon: Mail,
    title: 'Email Management',
    description: 'Intelligent email handling with automated categorization and priority assignment.',
    features: ['Smart categorization', '24h response time', 'Template management']
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Real-time chat support with AI-powered response suggestions and language translation.',
    features: ['Instant responses', 'Multi-language support', 'Chat analytics']
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Advanced chatbots that handle routine inquiries and seamlessly escalate to human agents when needed.',
    features: ['24/7 availability', 'Learning capability', 'Human handoff']
  },
  {
    icon: MessageCircle,
    title: 'Social Media',
    description: 'Comprehensive social media monitoring and engagement across all major platforms.',
    features: ['Multi-platform support', 'Response tracking', 'Sentiment monitoring']
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Specialized technical support with detailed problem resolution and documentation.',
    features: ['Knowledge base', 'Ticket tracking', 'Solution library']
  }
];

export function ServiceCategories() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Service Categories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive support solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}