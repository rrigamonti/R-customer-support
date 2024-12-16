import React from 'react';
import { Phone, Mail, MessageSquare, MessageCircle, Box, Network } from 'lucide-react';

// ... services array remains the same ...

export default function Services() {
  return (
    <div className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern office background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}