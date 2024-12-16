import React from 'react';
import { Users, Globe2, Clock, DollarSign, Building2, Timer } from 'lucide-react';
import { useCalculator } from './hooks/useCalculator';
import { CalculatorInput } from './components/CalculatorInput';
import { SavingsDisplay } from './components/SavingsDisplay';
import { INDUSTRIES, RESPONSE_TIMES } from './constants';

export default function ROICalculator() {
  const { inputs, setInputs, savings } = useCalculator();

  const handleInputChange = (field: string, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/10 p-4 rounded-lg mb-6">
        <h3 className="text-white font-semibold mb-2">Support Time Calculator</h3>
        <p className="text-blue-100 text-sm">
          Calculate potential savings by letting us handle all your customer interactions:
        </p>
        <ul className="text-blue-100 text-sm list-disc ml-4 mt-2">
          <li>Pre-sale inquiries and consultation</li>
          <li>Post-sale support and issue resolution</li>
          <li>Order tracking and status updates</li>
          <li>Technical support and troubleshooting</li>
          <li>Customer feedback and satisfaction surveys</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CalculatorInput 
          label="Monthly Support Volume" 
          icon={Users}
          tooltip="Total number of customer interactions per month (emails, calls, chats)"
        >
          <input
            type="number"
            value={inputs.monthlyVolume}
            onChange={(e) => handleInputChange('monthlyVolume', parseInt(e.target.value) || 0)}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 1000"
          />
        </CalculatorInput>

        <CalculatorInput 
          label="Languages Needed" 
          icon={Globe2}
          tooltip="Number of languages required for customer support"
        >
          <input
            type="number"
            value={inputs.languages}
            onChange={(e) => handleInputChange('languages', parseInt(e.target.value) || 1)}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 2"
            min="1"
          />
        </CalculatorInput>

        <CalculatorInput 
          label="Hours of Coverage" 
          icon={Clock}
          tooltip="Daily support coverage hours needed"
        >
          <select
            value={inputs.coverage}
            onChange={(e) => handleInputChange('coverage', parseInt(e.target.value))}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value={12}>12 Hours</option>
            <option value={24}>24 Hours</option>
          </select>
        </CalculatorInput>

        <CalculatorInput 
          label="Current Monthly Cost" 
          icon={DollarSign}
          tooltip="Your current monthly spending on customer support"
        >
          <input
            type="number"
            value={inputs.currentCost}
            onChange={(e) => handleInputChange('currentCost', parseInt(e.target.value) || 0)}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., 10000"
          />
        </CalculatorInput>

        <CalculatorInput 
          label="Industry" 
          icon={Building2}
          tooltip="Your business sector (affects complexity and handling time)"
        >
          <select
            value={inputs.industryType}
            onChange={(e) => handleInputChange('industryType', e.target.value)}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            {INDUSTRIES.map((industry) => (
              <option key={industry.name} value={industry.name}>
                {industry.name}
              </option>
            ))}
          </select>
        </CalculatorInput>

        <CalculatorInput 
          label="Response Time Target" 
          icon={Timer}
          tooltip="Maximum response time for customer inquiries"
        >
          <select
            value={inputs.responseTime}
            onChange={(e) => handleInputChange('responseTime', parseInt(e.target.value))}
            className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          >
            {RESPONSE_TIMES.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </CalculatorInput>
      </div>

      <SavingsDisplay savings={savings} inputs={inputs} />
    </div>
  );
}