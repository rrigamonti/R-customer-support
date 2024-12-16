import React from 'react';
import { LucideIcon, HelpCircle } from 'lucide-react';

interface CalculatorInputProps {
  label: string;
  icon: LucideIcon;
  children: React.ReactNode;
  tooltip?: string;
}

export function CalculatorInput({ label, icon: Icon, children, tooltip }: CalculatorInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2 flex items-center">
        {label}
        {tooltip && (
          <div className="relative group ml-2">
            <HelpCircle className="h-4 w-4 text-blue-200 cursor-help" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 pointer-events-none">
              {tooltip}
            </div>
          </div>
        )}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        {children}
      </div>
    </div>
  );
}