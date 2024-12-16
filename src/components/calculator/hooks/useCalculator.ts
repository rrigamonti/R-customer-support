import { useState, useEffect } from 'react';
import { CalculatorInputs, SavingsResult } from '../types';
import { INDUSTRIES, RESPONSE_TIMES } from '../constants';

const DEFAULT_INPUTS: CalculatorInputs = {
  monthlyVolume: 1000,
  languages: 2,
  coverage: 12,
  currentCost: 10000,
  responseTime: 15,
  industryType: 'E-commerce',
};

export function useCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);
  const [savings, setSavings] = useState<SavingsResult>({
    monthly: 0,
    annual: 0,
    percentage: 0,
    efficiency: 0,
    roi: 0,
  });

  useEffect(() => {
    const calculateCosts = () => {
      const industry = INDUSTRIES.find(i => i.name === inputs.industryType);
      const responseTime = RESPONSE_TIMES.find(r => r.value === inputs.responseTime);
      
      if (!industry || !responseTime) return;

      const baseRate = industry.baseRate;
      const languageMultiplier = 1 + (inputs.languages - 1) * 0.15;
      const coverageMultiplier = inputs.coverage === 24 ? 1.2 : 1;
      const complexityMultiplier = industry.complexityFactor;
      const responseTimeMultiplier = responseTime.multiplier;
      
      const ourMonthlyCost = 
        inputs.monthlyVolume * 
        baseRate * 
        languageMultiplier * 
        coverageMultiplier *
        complexityMultiplier *
        responseTimeMultiplier;
      
      const monthlySavings = inputs.currentCost - ourMonthlyCost;
      const annualSavings = monthlySavings * 12;
      const savingsPercentage = (monthlySavings / inputs.currentCost) * 100;
      const efficiency = (inputs.monthlyVolume / ourMonthlyCost) * 100;
      const roi = (annualSavings / ourMonthlyCost) * 100;

      setSavings({
        monthly: Math.round(monthlySavings),
        annual: Math.round(annualSavings),
        percentage: Math.round(savingsPercentage),
        efficiency: Math.round(efficiency),
        roi: Math.round(roi),
      });
    };

    calculateCosts();
  }, [inputs]);

  return { inputs, setInputs, savings };
}