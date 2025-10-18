"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaRocket,
  FaArrowDown,
} from "react-icons/fa";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-background-secondary"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Planning Process
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transition-transform duration-1000 ease-out ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ transformOrigin: "top" }}
          ></div>
          {processSteps.map((step, i, arr) => (
            <React.Fragment key={step.title}>
              <div
                className={`relative flex items-center mb-12 transition-all duration-700 ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${isVisible ? i * 200 + 500 : 0}ms`,
                }}
              >
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  {i % 2 === 0 && (
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  )}
                  {i % 2 === 0 && (
                    <p className="text-text-secondary mt-1">{step.desc}</p>
                  )}
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bg-background-secondary p-2 rounded-full">
                  <div className="bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-8 md:pl-8">
                  {i % 2 !== 0 && (
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  )}
                  {i % 2 !== 0 && (
                    <p className="text-text-secondary mt-1">{step.desc}</p>
                  )}
                  <div className="md:hidden mt-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-text-secondary mt-1">{step.desc}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
