import React from 'react';
import { BenefitsHero } from '../components/benefits/BenefitsHero';
import { BenefitsComparison } from '../components/benefits/BenefitsComparison';
import { BenefitsMetrics } from '../components/benefits/BenefitsMetrics';
import { BenefitsCTA } from '../components/benefits/BenefitsCTA';

export default function BenefitsPage() {
  return (
    <div className="min-h-screen">
      <BenefitsHero />
      <BenefitsComparison />
      <BenefitsMetrics />
      <BenefitsCTA />
    </div>
  );
}