"use client";

import { motion } from "framer-motion";

const CheckmarkIcon = () => (
  <svg className="w-6 h-6 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const BenefitCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 p-8 bg-white rounded-lg border border-brand-ocean/10 hover:border-brand-teal/30 hover:shadow-lg transition-all"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-teal/10">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-brand-ocean">{title}</h3>
      <p className="text-brand-ocean/75 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

const ValueProposition = () => {
  const benefits = [
    {
      icon: <CheckmarkIcon />,
      title: "Predictive Power, Not Reactive Pain",
      description:
        "Transition from lagging indicators to real-time leading insights. Identify burnout risk before it impacts your organization, enabling proactive intervention strategies.",
    },
    {
      icon: <CheckmarkIcon />,
      title: "Strategic Advantage, Not Fluffy Perks",
      description:
        "Build a resilient, high-performing workforce that becomes your competitive advantage. Attract and retain top talent through data-driven well-being initiatives.",
    },
    {
      icon: <CheckmarkIcon />,
      title: "Seamless Integration, Not Fragmented Tools",
      description:
        "A unified, scalable platform that integrates seamlessly with your existing HR technology stack. Eliminate integration complexity and data silos.",
    },
    {
      icon: <CheckmarkIcon />,
      title: "Confident Leadership, Not Guesswork",
      description:
        "Enter every leadership meeting armed with objective data and clear ROI metrics. Make evidence-based decisions that demonstrate measurable impact on organizational health.",
    },
  ];

  return (
    <section className="bg-brand-white py-16 md:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight text-brand-ocean mb-4">
            Why E-quil Stands Apart
          </h2>
          <p className="text-lg text-brand-ocean/70 max-w-2xl mx-auto">
            Four core benefits that transform how you lead
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
