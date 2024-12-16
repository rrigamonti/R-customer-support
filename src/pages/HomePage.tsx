import React from 'react';
import Hero from '../components/sections/Hero';
import { KeyMetrics } from '../components/sections/KeyMetrics';
import Services from '../components/sections/Services';
import Benefits from '../components/sections/Benefits';
import AIIntegration from '../components/sections/AIIntegration';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <KeyMetrics />
      <Services />
      <Benefits />
      <AIIntegration />
      <Testimonials />
      <Contact />
    </main>
  );
}