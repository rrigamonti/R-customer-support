import React from 'react';
import { Shield, Globe2, Clock, Award, Users, Headphones, CheckCircle, Building2, Zap, TrendingUp, Brain, Heart } from 'lucide-react';
import { CalendlyButton } from '../components/ui/CalendlyButton';

// ... rest of the imports and component code ...

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-purple-900">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        {/* ... other hero section code ... */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose RagaSupport?
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Experience the perfect blend of human expertise and AI innovation in customer support
            </p>
            <CalendlyButton className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Free Consultation
            </CalendlyButton>
          </div>
        </div>
      </div>

      {/* ... rest of the component code ... */}

      {/* Call to Action */}
      <div className="bg-white/10 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the companies who have revolutionized their customer experience with our AI-enhanced, multilingual support solutions.
          </p>
          <CalendlyButton className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started with a Free Consultation
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
}