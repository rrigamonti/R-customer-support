import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'TechCorp International',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'The multilingual support has transformed our customer service. Our satisfaction rates have increased by 45% since partnering with them.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Global Retail Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'Their 24/7 support capability has allowed us to expand into new markets with confidence. The integration was seamless.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Customer Experience Manager',
    company: 'E-commerce Plus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'The AI-enhanced support system has dramatically reduced our response times while maintaining high-quality customer interactions.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Head of Support',
    company: 'Tech Innovations Ltd',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    content: 'We\'ve seen a 60% reduction in support costs while improving our customer satisfaction scores. The AI integration is remarkable.',
    rating: 5
  }
];

export function TestimonialsList() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}