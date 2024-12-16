import React from 'react';
import { Mail, X, CheckCircle } from 'lucide-react';

interface EmailReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export function EmailReportModal({ isOpen, onClose, onSubmit }: EmailReportModalProps) {
  const [email, setEmail] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Get Your Detailed Report</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm text-blue-700">
            This report includes a detailed analysis of your potential savings when outsourcing your entire customer support operations to RagaSupport.
          </p>
        </div>

        <div className="text-gray-600 mb-4">
          <p className="mb-2">Your comprehensive report includes:</p>
          <ul className="space-y-2">
            {[
              'Detailed cost breakdown for pre and post-sale support',
              'Response time optimization analysis',
              'Multilingual support cost calculations',
              'Industry-specific recommendations',
              'Implementation timeline and milestones',
              'Additional cost-saving opportunities'
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Me the Report
          </button>
          <p className="text-xs text-gray-500 text-center">
            We'll never share your email with anyone else.
          </p>
        </form>
      </div>
    </div>
  );
}