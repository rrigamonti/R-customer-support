import React from 'react';
import { Clock, Zap, TrendingUp, DollarSign } from 'lucide-react';

// ... benefits array remains the same ...

export default function Benefits() {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
          alt="Business analytics background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}