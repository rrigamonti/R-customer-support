import React from 'react';
import { Phone, Mail, MessageSquare, MessageCircle, Box, Network } from 'lucide-react';

const services = [
  {
    icon: Phone,
    title: 'Voice Support',
    description: 'Inbound and outbound call center services with native speakers',
  },
  {
    icon: Mail,
    title: 'Email Management',
    description: 'Professional email support with quick response times',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Real-time chat support for instant customer assistance',
  },
  {
    icon: MessageCircle,
    title: 'Text/SMS Support',
    description: 'Mobile-first support through text messaging',
  },
  {
    icon: Box,
    title: 'Order Tracking',
    description: 'Real-time order tracking and status updates',
  },
  {
    icon: Network,
    title: 'Warehouse Integration',
    description: 'Seamless connectivity with your warehouse systems',
  },
];

export default function Services() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive Support Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to deliver exceptional customer support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}