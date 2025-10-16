"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-brand-ocean py-16 md:py-32 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-6 text-brand-white">
            Ready to Transform Burnout into Breakthrough?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-brand-white/80 mb-8 max-w-xl mx-auto"
        >
          Join leading organizations that are preventing burnout and building resilient teams with E-quil.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="px-8 py-3 text-lg font-semibold rounded-lg bg-brand-teal hover:bg-brand-teal/90 text-white transition-all"
        >
          See It In Action
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
