import React from 'react';
import { Globe2, Clock, PhoneCall } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <Globe2 className="h-4 w-4 mr-2" />
              <span>16+ Languages Supported</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <PhoneCall className="h-4 w-4 mr-2" />
            <span>UK: +44748913207</span>
          </div>
        </div>
      </div>
    </div>
  );
}