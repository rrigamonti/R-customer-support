import React from 'react';
import { Headphones } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform"></div>
        <div className="relative bg-white p-2 rounded-lg transform group-hover:scale-105 transition-transform">
          <Headphones className="h-6 w-6 text-blue-600" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-xl font-bold gradient-text">Raga</span>
          <span className="text-xl font-bold text-blue-600">Support</span>
        </div>
        <span className="text-xs text-gray-500">A RagaMarketing Company</span>
      </div>
    </div>
  );
}