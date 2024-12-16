import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function Card({ 
  icon: Icon, 
  title, 
  description, 
  className = '',
  children 
}: CardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors ${className}`}>
      <div className="flex items-start space-x-4">
        {Icon && (
          <div className="bg-blue-600/20 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-blue-200">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}