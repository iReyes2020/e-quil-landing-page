"use client";

import { motion } from "framer-motion";

const Solution = () => {
  return (
    <section className="bg-brand-ocean text-brand-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight mb-8 leading-tight">
              The Proactive, Data-Driven Answer to Burnout.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed opacity-90">
              Our platform is the intelligent catalyst you&apos;ve been searching for. We transform the chaos of workplace data into a clear, predictive signal. By analyzing communication patterns, workload distribution, and collaboration trends, we give you the foresight to intervene <span className="font-semibold">before</span> burnout takes hold. It&apos;s not another wellness perk; it&apos;s a strategic tool for building a resilient, high-performing organization.
            </p>
          </motion.div>

          {/* Animated upward trending line visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <svg
              viewBox="0 0 400 200"
              className="w-full h-auto max-w-md mx-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid lines */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(248, 248, 248, 0.1)" strokeWidth="1" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(248, 248, 248, 0.1)" strokeWidth="1" />
              <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(248, 248, 248, 0.1)" strokeWidth="1" />

              {/* Upward trending line */}
              <motion.polyline
                points="20,140 80,120 140,90 200,70 260,50 340,30"
                fill="none"
                stroke="#00A896"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Data points */}
              {[20, 80, 140, 200, 260, 340].map((x, i) => {
                const yValues = [140, 120, 90, 70, 50, 30];
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={yValues[i]}
                    r="4"
                    fill="#00A896"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    viewport={{ once: true }}
                  />
                );
              })}

              {/* Labels */}
              <text x="20" y="170" fontSize="12" fill="rgba(248, 248, 248, 0.6)" textAnchor="middle">
                Before
              </text>
              <text x="340" y="170" fontSize="12" fill="rgba(248, 248, 248, 0.6)" textAnchor="middle">
                After
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
