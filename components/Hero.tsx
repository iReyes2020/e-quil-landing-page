"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import config from "@/config";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-ocean via-brand-ocean/95 to-brand-ocean flex items-center justify-center px-8 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <Logo size="lg" />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="font-extrabold text-5xl lg:text-7xl tracking-tight text-brand-white mb-6 leading-tight">
            Stop Fighting Fires. Start Building Resilience.
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg lg:text-xl text-brand-white/90 leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            The AI-powered platform that gives you the predictive insights to stop burnout before it starts, retain your top performers, and build a legendary, high-performing team.
          </p>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base lg:text-lg text-brand-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Transform fragmented workplace data into clear, actionable intelligence. By analyzing communication patterns, workload distribution, and collaboration trends in real-time, E-quil empowers you to identify burnout risk before it impacts your organization. Make data-driven decisions that protect your people and strengthen your bottom line.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
        >
          <button className="btn bg-brand-teal border-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all">
            See It In Action
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-brand-white/70 italic"
        >
          No-obligation, 15-minute personalized demo.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
