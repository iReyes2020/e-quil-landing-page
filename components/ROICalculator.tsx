"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROICalculator = () => {
  const [salary, setSalary] = useState<number>(80000);
  const [employees, setEmployees] = useState<number>(100);
  const [turnoverRate, setTurnoverRate] = useState<number>(15);
  const [results, setResults] = useState<{
    costOfTurnover: number;
    potentialSavings: number;
  } | null>(null);

  useEffect(() => {
    // Calculate cost of turnover (typically 50-200% of salary, using 100% as average)
    const costPerTurnover = salary * 1;
    const annualTurnover = (employees * turnoverRate) / 100;
    const costOfTurnover = costPerTurnover * annualTurnover;

    // Assume E-quil can reduce turnover by 30%
    const turnoverReduction = 0.3;
    const potentialSavings = costOfTurnover * turnoverReduction;

    setResults({
      costOfTurnover: Math.round(costOfTurnover),
      potentialSavings: Math.round(potentialSavings),
    });
  }, [salary, employees, turnoverRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="bg-brand-ocean py-16 md:py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight text-brand-white mb-4">
            See the Financial Impact of Preventing Burnout
          </h2>
          <p className="text-lg text-brand-white/80">
            Enter your company's details to see potential cost savings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-brand-white rounded-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Salary Input */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-brand-ocean">
                Average Employee Salary
              </label>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="px-4 py-3 border border-brand-ocean/20 rounded-lg focus:outline-none focus:border-brand-teal text-brand-ocean"
                min="20000"
                max="500000"
                step="5000"
              />
              <span className="text-sm text-brand-ocean/60">
                {formatCurrency(salary)}
              </span>
            </div>

            {/* Employees Input */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-brand-ocean">
                Number of Employees
              </label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="px-4 py-3 border border-brand-ocean/20 rounded-lg focus:outline-none focus:border-brand-teal text-brand-ocean"
                min="10"
                max="10000"
                step="10"
              />
              <span className="text-sm text-brand-ocean/60">{employees} people</span>
            </div>

            {/* Turnover Rate Input */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-brand-ocean">
                Annual Turnover Rate (%)
              </label>
              <input
                type="number"
                value={turnoverRate}
                onChange={(e) => setTurnoverRate(Number(e.target.value))}
                className="px-4 py-3 border border-brand-ocean/20 rounded-lg focus:outline-none focus:border-brand-teal text-brand-ocean"
                min="0"
                max="100"
                step="1"
              />
              <span className="text-sm text-brand-ocean/60">{turnoverRate}%</span>
            </div>
          </div>

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-brand-ocean/5 to-brand-teal/5 rounded-lg p-8 border border-brand-teal/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-brand-ocean/70 mb-2">
                    Estimated Annual Cost of Turnover
                  </p>
                  <p className="text-3xl md:text-4xl font-extrabold text-brand-ocean">
                    {formatCurrency(results.costOfTurnover)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-ocean/70 mb-2">
                    Potential Annual Savings with E-quil
                  </p>
                  <p className="text-3xl md:text-4xl font-extrabold text-brand-teal">
                    {formatCurrency(results.potentialSavings)}
                  </p>
                </div>
              </div>
              <p className="text-xs text-brand-ocean/60 mt-6 italic">
                *Based on 30% reduction in turnover through early burnout detection and intervention
              </p>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-brand-teal hover:bg-brand-teal/90 text-white transition-all">
              Request a Demo to See Your ROI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
