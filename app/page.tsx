import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import UrgencyBanner from "@/components/UrgencyBanner";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ValueProposition from "@/components/ValueProposition";
import FeaturesHighlights from "@/components/FeaturesHighlights";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'E-quil - Beat Burnout with AI-Powered Insights',
  description: 'Transform workplace data into actionable intelligence. E-quil identifies burnout risk before it impacts your organization, helping you retain top talent and build resilient, high-performing teams.',
  keywords: 'burnout prevention, employee well-being, AI analytics, HR technology, team resilience, workplace intelligence',
};

export default function Home(): JSX.Element {
  return (
    <>
      <UrgencyBanner />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* E-quil - AI-powered employee well-being and burnout prevention platform */}
        <Hero />
        <Problem />
        <Solution />
        <ValueProposition />
        <FeaturesHighlights />
        <ROICalculator />
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
