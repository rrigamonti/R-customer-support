import React from 'react';
import { Brain, Zap } from 'lucide-react';
import { CalendlyButton } from '../ui/CalendlyButton';

export function BenefitsHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
          alt="AI technology background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          The Future of Customer Support is Here
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Discover how our AI-enhanced support solutions outperform traditional methods while reducing costs and improving customer satisfaction
        </p>
        <CalendlyButton className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Schedule Free Consultation
        </CalendlyButton>
      </div>
    </div>
  );
}