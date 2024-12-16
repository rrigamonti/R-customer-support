import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function CalendlyButton({ className = '', children }: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/rrigamonti', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center space-x-2 ${className}`}
    >
      <Calendar className="h-5 w-5" />
      <span>{children || 'Schedule Demo'}</span>
    </button>
  );
}