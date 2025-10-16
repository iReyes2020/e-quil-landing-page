"use client";

import { motion } from "framer-motion";

const FeatureCard = ({
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
      className="flex flex-col gap-4 p-8 bg-brand-white rounded-lg border border-brand-ocean/10 hover:shadow-lg transition-all"
    >
      <div className="text-5xl">{icon}</div>
      <h3 className="font-bold text-xl text-brand-ocean">{title}</h3>
      <p className="text-brand-ocean/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const FeaturesHighlights = () => {
  const features = [
    {
      icon: "🚨",
      title: "Real-Time Burnout Risk Alerts",
      description:
        "Our AI analyzes anonymized data to flag teams and individuals at high risk, so you can intervene with targeted support before it's too late.",
    },
    {
      icon: "💡",
      title: "Actionable Intervention Suggestions",
      description:
        "Move beyond data. Get concrete, evidence-based recommendations for managers and HR leaders to address the root causes of stress.",
    },
    {
      icon: "📈",
      title: "Integrated Workload Analytics",
      description:
        "See objective data on workload distribution and after-hours communication. Finally, have the proof you need to address systemic overwork.",
    },
    {
      icon: "🔌",
      title: "Seamless HRIS & Comms Integration",
      description:
        "Connects with your existing tools (like Slack, Teams, and your HRIS) to provide a holistic view without manual data entry.",
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
            Powerful Features Built for Impact
          </h2>
          <p className="text-lg text-brand-ocean/70 max-w-2xl mx-auto">
            Everything you need to prevent burnout and build a thriving organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlights;
