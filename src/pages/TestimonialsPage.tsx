import React from 'react';
import { TestimonialsHero } from '../components/testimonials/TestimonialsHero';
import { TestimonialsList } from '../components/testimonials/TestimonialsList';
import { TestimonialsStats } from '../components/testimonials/TestimonialsStats';
import { TestimonialsCTA } from '../components/testimonials/TestimonialsCTA';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <TestimonialsHero />
      <TestimonialsList />
      <TestimonialsStats />
      <TestimonialsCTA />
    </div>
  );
}