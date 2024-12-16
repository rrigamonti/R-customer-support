import React from 'react';
import { Headphones, Globe2, Clock } from 'lucide-react';
import { CalendlyButton } from '../ui/CalendlyButton';

export function ServiceHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
          alt="Customer support background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Comprehensive Support Solutions
          </h1>
          <p className="text-xl text-blue-100 mb-12">
            From voice to digital, we provide seamless multilingual support across all channels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Globe2 className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-blue-100">Support in 16+ languages</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-blue-100">Round-the-clock assistance</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Headphones className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Omnichannel Support</h3>
              <p className="text-blue-100">Voice, email, chat & more</p>
            </div>
          </div>
          <CalendlyButton className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Free Consultation
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
}