import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-6 w-6" />
              <span className="text-blue-200">Global Support Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Multilingual Customer Support That Speaks Your Language
            </h1>
            <p className="text-xl text-blue-100">
              Empower your business with 24/7 multilingual customer support across all channels. 
              Connect with customers worldwide in their preferred language.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-colors">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
              alt="Customer support team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}