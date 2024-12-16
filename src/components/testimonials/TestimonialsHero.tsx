import React from 'react';
import { Star } from 'lucide-react';

export function TestimonialsHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          What Our Clients Say
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Discover why leading companies trust us with their customer support needs
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">16+</div>
            <div className="text-blue-200">Languages</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-blue-200">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}