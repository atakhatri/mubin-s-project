"use client";

import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaRocket,
} from "react-icons/fa";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

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

export default function PlanningProcess() {
  return (
    <section className="py-16 sm:py-20 bg-background-secondary">
      <AnimateOnScroll animationClass="animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Planning Process
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 animate-line-draw-y"
              style={{ transformOrigin: "top" }}
            ></div>
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex items-center mb-12 animate-fade-in-up"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div
                  className={`cursor-target hidden md:block w-1/2 pr-8 text-right ${
                    i % 2 !== 0 ? "opacity-0" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-text-secondary mt-1">{step.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background-secondary p-2 rounded-full z-10">
                  <div className="cursor-target bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <div
                  className={`cursor-target w-full md:w-1/2 pl-8 md:pl-8 ${
                    i % 2 === 0 ? "md:opacity-0" : ""
                  }`}
                >
                  <div className="md:hidden mt-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-text-secondary mt-1">{step.desc}</p>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-text-secondary mt-1">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
