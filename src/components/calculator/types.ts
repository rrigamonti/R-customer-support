export interface CalculatorInputs {
  monthlyVolume: number;
  languages: number;
  coverage: number;
  currentCost: number;
  responseTime: number;
  industryType: string;
}

export interface SavingsResult {
  monthly: number;
  annual: number;
  percentage: number;
  efficiency: number;
  roi: number;
}

export interface IndustryRate {
  name: string;
  baseRate: number;
  complexityFactor: number;
}