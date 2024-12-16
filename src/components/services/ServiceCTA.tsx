import React from 'react';
import { CalendlyButton } from '../ui/CalendlyButton';

export function ServiceCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Customer Support?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join the companies who have revolutionized their customer experience with our AI-enhanced, multilingual support solutions.
        </p>
        <CalendlyButton className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Schedule Free Consultation
        </CalendlyButton>
      </div>
    </div>
  );
}