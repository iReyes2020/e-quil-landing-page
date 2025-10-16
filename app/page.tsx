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
  title: 'FeNAgO - Agentic AI SaaS Platform Template',
  description: 'The complete platform for building agentic AI-powered SaaS products—ideal for students, developers, startups, and entrepreneurs looking to innovate rapidly. In the near future, every traditional SaaS application will inevitably be surpassed by an Agentic SaaS solution, redefining the competitive landscape.',
  keywords: 'agentic AI, SaaS template, AI platform, DrLee, AI development, FeNAgO, AI startup',
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
