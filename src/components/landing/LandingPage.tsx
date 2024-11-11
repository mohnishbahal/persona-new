import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureSection } from './FeatureSection';
import { PreviewSection } from './PreviewSection';
import { CTASection } from './CTASection';
import { UseCasesSection } from './UseCasesSection';
import { TestimonialsSection } from './TestimonialsSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <HeroSection />
      <PreviewSection />
      <FeatureSection />
      <UseCasesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}