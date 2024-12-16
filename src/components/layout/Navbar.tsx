import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones } from 'lucide-react';
import Logo from './Logo';
import { CalendlyButton } from '../ui/CalendlyButton';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/why-us" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Why Us
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/benefits" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Benefits
            </Link>
            <Link 
              to="/testimonials" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <CalendlyButton className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Free Consultation
          </CalendlyButton>
        </div>
      </div>
    </nav>
  );
}