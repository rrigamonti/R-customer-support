import React, { useState } from 'react';
import { SavingsResult } from '../types';
import { EmailReportModal } from './EmailReportModal';
import { FileText } from 'lucide-react';

interface SavingsDisplayProps {
  savings: SavingsResult;
  inputs: any; // We'll use this for the report
}

export function SavingsDisplay({ savings, inputs }: SavingsDisplayProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleGetReport = () => {
    setIsModalOpen(true);
  };

  const handleEmailSubmit = (email: string) => {
    // Here you would typically send this to your backend
    console.log('Sending report to:', email, { savings, inputs });
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  return (
    <>
      <div className="space-y-4">
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            Thanks! Check your inbox for your detailed savings report.
          </div>
        )}
        
        <div className="bg-white/10 p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-blue-100">Monthly Savings</p>
            <p className="text-2xl font-bold text-white">£{savings.monthly.toLocaleString()}</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-blue-100">Annual Savings</p>
            <p className="text-2xl font-bold text-white">£{savings.annual.toLocaleString()}</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-blue-100">Cost Reduction</p>
            <p className="text-2xl font-bold text-white">{savings.percentage}%</p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-blue-100">Efficiency Score</p>
            <p className="text-2xl font-bold text-white">{savings.efficiency}%</p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-sm text-blue-100">ROI</p>
            <p className="text-2xl font-bold text-white">{savings.roi}%</p>
          </div>

          <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center">
            <button 
              onClick={handleGetReport}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Get Detailed Report</span>
            </button>
          </div>
        </div>

        <div className="text-sm text-blue-200 text-center">
          Get a comprehensive breakdown of your potential savings, including industry benchmarks and implementation timeline.
        </div>
      </div>

      <EmailReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEmailSubmit}
      />
    </>
  );
}