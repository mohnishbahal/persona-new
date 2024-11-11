import React from 'react';
import { HeroSection } from './landing/HeroSection';
import { PreviewSection } from './landing/PreviewSection';
import { FeatureSection } from './landing/FeatureSection';
import { UseCasesSection } from './landing/UseCasesSection';
import { TestimonialsSection } from './landing/TestimonialsSection';
import { CTASection } from './landing/CTASection';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      <PreviewSection />
      <FeatureSection />
      <UseCasesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}