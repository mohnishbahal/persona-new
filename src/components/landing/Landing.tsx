import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { PreviewSection } from './PreviewSection';
import { FeatureSection } from './FeatureSection';
import { UseCasesSection } from './UseCasesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';

export default function Landing() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PreviewSection />
        <FeatureSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}