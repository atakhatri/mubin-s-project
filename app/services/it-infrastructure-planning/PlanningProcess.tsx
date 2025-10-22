"use client";

import { useRef } from "react";
import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaRocket,
} from "react-icons/fa";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const processSteps = [
  {
    icon: FaClipboardList,
    title: "Assessment & Discovery",
    desc: "We analyze your current systems, workflows, and business goals to understand your unique requirements.",
  },
  {
    icon: FaDraftingCompass,
    title: "Strategic Design",
    desc: "We design a detailed architectural blueprint, selecting the right technologies for scalability, security, and performance.",
  },
  {
    icon: FaHardHat,
    title: "Implementation & Migration",
    desc: "Our team expertly deploys your new infrastructure with minimal disruption to your ongoing operations.",
  },
  {
    icon: FaRocket,
    title: "Optimization & Handover",
    desc: "We fine-tune the system for peak performance and provide comprehensive documentation and training for your team.",
  },
];

const ProcessStepItem = ({ step, index }: { step: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? "-50%" : "50%", "0%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, x }}
      className={`relative flex items-center w-full mb-16 last:mb-0 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="w-full md:w-1/2">
        <div
          className={`group cursor-target relative bg-glass p-6 rounded-lg border border-border-color shadow-lg transition-all duration-300 hover:border-primary/80 hover:shadow-primary/10 hover:-translate-y-1 ${
            index % 2 === 0 ? "md:mr-12" : "md:ml-12 md:text-right"
          }`}
        >
          <div className="flex items-start gap-4 md:block">
            <div className="md:hidden shrink-0">
              <step.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.desc}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Connector */}
      <div className="hidden md:block w-12 h-0.5 bg-border-color"></div>
    </motion.div>
  );
};

export default function PlanningProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20">
          Our Planning Process
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border-color/30" />
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary to-teal-400"
            style={{ height: lineHeight }}
          />

          {processSteps.map((step, i) => (
            <div key={step.title} className="relative">
              {/* Mobile view is handled inside ProcessStepItem now */}
              <div className="md:hidden">
                <ProcessStepItem step={step} index={0} />
              </div>
              {/* Desktop view */}
              <div className="hidden md:block">
                <ProcessStepItem step={step} index={i} />
              </div>
              {/* Central Icon (Desktop Only) */}
              <div className="hidden md:block">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-secondary p-1 rounded-full z-10">
                  <div className="cursor-target bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center ring-8 ring-background-secondary">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
