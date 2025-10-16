"use client";

import { motion } from "framer-motion";

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
      className="flex flex-col gap-4 p-6 bg-white rounded-lg border border-brand-ocean/10 hover:border-brand-teal/30 transition-all"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="font-bold text-lg text-brand-ocean">{title}</h3>
      <p className="text-brand-ocean/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ValueProposition = () => {
  const benefits = [
    {
      icon: "🔮",
      title: "Predictive Power, Not Reactive Pain",
      description:
        "Go from lagging indicators to leading insights. Proactively identify burnout risk in real-time.",
    },
    {
      icon: "🛡️",
      title: "Strategic Advantage, Not Fluffy Perks",
      description:
        "Build a resilient workforce that becomes your ultimate competitive weapon. Attract and retain top talent.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration, Not Fragmented Tools",
      description:
        "A single, scalable platform that integrates with your existing HR tech stack. No more integration headaches.",
    },
    {
      icon: "📊",
      title: "Confident Leadership, Not Guesswork",
      description:
        "Walk into every leadership meeting with the objective data and clear ROI to prove your impact.",
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
