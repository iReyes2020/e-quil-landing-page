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
      className="flex flex-col gap-6 p-8 bg-brand-white rounded-lg border border-brand-ocean/10 hover:border-brand-teal/30 hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-teal/10">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-brand-ocean">{title}</h3>
      <p className="text-brand-ocean/75 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

const AlertIcon = () => (
  <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 0a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H5v12h8V7zM19 7v12m0 0V9a2 2 0 00-2-2h-.5" />
  </svg>
);

const IntegrationIcon = () => (
  <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const FeaturesHighlights = () => {
  const features = [
    {
      icon: <AlertIcon />,
      title: "Real-Time Burnout Risk Alerts",
      description:
        "Our advanced AI analyzes anonymized data patterns to identify teams and individuals at high risk of burnout. Receive intelligent alerts that enable proactive intervention before critical issues emerge.",
    },
    {
      icon: <LightbulbIcon />,
      title: "Actionable Intervention Suggestions",
      description:
        "Move beyond raw data. Receive concrete, evidence-based recommendations tailored for managers and HR leaders to address root causes of workplace stress and improve team dynamics.",
    },
    {
      icon: <ChartIcon />,
      title: "Integrated Workload Analytics",
      description:
        "Gain objective insights into workload distribution, after-hours communication patterns, and collaboration trends. Finally, have the data-driven proof needed to address systemic overwork.",
    },
    {
      icon: <IntegrationIcon />,
      title: "Seamless HRIS & Comms Integration",
      description:
        "Effortlessly integrate with your existing tools including Slack, Microsoft Teams, and your HRIS platform. Consolidate data sources into a unified, actionable intelligence system.",
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
