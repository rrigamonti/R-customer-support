import React from 'react';
import { ArrowRight } from 'lucide-react';
import ROICalculator from '../calculator/ROICalculator';
import { CalendlyButton } from '../ui/CalendlyButton';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 gradient-bg text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Customer service background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Multilingual Customer Support That Speaks Your Language
            </h1>
            <p className="text-xl text-blue-100">
              Empower your business with 24/7 multilingual customer support across all channels. 
              Connect with customers worldwide in their preferred language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <CalendlyButton className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Free Consultation
              </CalendlyButton>
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