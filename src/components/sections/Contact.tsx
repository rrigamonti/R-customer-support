import React from 'react';
import { Clock, Globe2, PhoneCall, MapPin } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';
import { LanguageGrid } from '../ui/LanguageGrid';
import { ContactInfo } from '../ui/ContactInfo';

export default function Contact() {
  return (
    <div className="bg-white py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Previous content remains the same until ContactInfo */}
          
          <ContactInfo
            icon={PhoneCall}
            title="Direct Contact"
            content={[
              'UK: +44748913207',
              'support@ragasupport.com'
            ]}
          />
          <ContactInfo
            icon={MapPin}
            title="Location"
            content={[
              '88 Standalane',
              'Kincardine',
              'United Kingdom'
            ]}
          />
        </div>
      </div>
    </div>
  );
}