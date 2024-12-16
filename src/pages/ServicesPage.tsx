import React from 'react';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceCategories } from '../components/services/ServiceCategories';
import { ServiceFeatures } from '../components/services/ServiceFeatures';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServicePricing } from '../components/services/ServicePricing';
import { ServiceCTA } from '../components/services/ServiceCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServiceCategories />
      <ServiceFeatures />
      <ServiceProcess />
      <ServicePricing />
      <ServiceCTA />
    </div>
  );
}