export const INDUSTRIES = [
  { name: 'E-commerce', baseRate: 2.5, complexityFactor: 1.0 },
  { name: 'Technology', baseRate: 2.8, complexityFactor: 1.2 },
  { name: 'Healthcare', baseRate: 3.0, complexityFactor: 1.3 },
  { name: 'Financial Services', baseRate: 3.2, complexityFactor: 1.4 },
  { name: 'Travel & Hospitality', baseRate: 2.6, complexityFactor: 1.1 },
  { name: 'Manufacturing', baseRate: 2.4, complexityFactor: 0.9 },
  { name: 'Retail', baseRate: 2.3, complexityFactor: 0.95 },
  { name: 'Telecommunications', baseRate: 2.9, complexityFactor: 1.25 },
  { name: 'Insurance', baseRate: 3.1, complexityFactor: 1.35 },
  { name: 'Education', baseRate: 2.2, complexityFactor: 0.85 },
  { name: 'Real Estate', baseRate: 2.4, complexityFactor: 0.9 },
  { name: 'Logistics & Supply Chain', baseRate: 2.7, complexityFactor: 1.15 },
  { name: 'Automotive', baseRate: 2.6, complexityFactor: 1.1 },
  { name: 'Energy & Utilities', baseRate: 2.8, complexityFactor: 1.2 },
  { name: 'Media & Entertainment', baseRate: 2.5, complexityFactor: 1.0 },
  { name: 'Professional Services', baseRate: 2.7, complexityFactor: 1.15 }
] as const;

export const RESPONSE_TIMES = [
  { value: 5, label: '< 5 minutes', multiplier: 1.2 },
  { value: 15, label: '< 15 minutes', multiplier: 1.1 },
  { value: 30, label: '< 30 minutes', multiplier: 1.0 },
  { value: 60, label: '< 1 hour', multiplier: 0.9 },
] as const;