import React from 'react';
import { MessageSquare, Clock, Globe2 } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80"
          alt="Contact support"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Our global team is ready to assist you 24/7 in multiple languages
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Clock className="h-8 w-8 text-blue-300 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-blue-100">Always available for you</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Globe2 className="h-8 w-8 text-blue-300 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">16+ Languages</h3>
            <p className="text-blue-100">Native language support</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <MessageSquare className="h-8 w-8 text-blue-300 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-blue-100">&lt; 1 minute response time</p>
          </div>
        </div>
      </div>
    </div>
  );
}