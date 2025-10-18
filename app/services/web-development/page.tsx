import { type Metadata } from "next";
import {
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import Introduction from "./Introduction";
import AnimatedTechStack from "./AnimatedTechStack";
import Bubbles from "../../../components/content/bubbles";
import WhatWeBuild from "./WhatWeBuild";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services | TechSolutions",
  description:
    "Expert web development services for creating beautiful, fast, and secure websites tailored to your business needs.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-28 text-center">
        <Bubbles />
        <Bubbles />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-up">
            Web Development
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Crafting beautiful, high-performance websites that drive growth and
            engage your audience.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Introduction />

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {[
              {
                icon: FaSearch,
                title: "Discovery",
                description:
                  "We dive deep to understand your goals and audience.",
              },
              {
                icon: FaDraftingCompass,
                title: "Design",
                description:
                  "Crafting intuitive and beautiful user interfaces.",
              },
              {
                icon: FaCode,
                title: "Development",
                description: "Building your vision with clean, efficient code.",
              },
              {
                icon: FaRocket,
                title: "Deployment",
                description:
                  "Launching your site on a secure, scalable platform.",
              },
              {
                icon: FaHeadset,
                title: "Support",
                description: "Providing ongoing maintenance and assistance.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="group flex flex-col items-center p-4 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative bg-primary/10 border-2 border-primary rounded-full p-4 mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:border-primary-dark group-hover:shadow-[0_0_20px_4px] group-hover:shadow-primary/50">
                  <step.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white group-hover:rotate-[360deg]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <AnimatedTechStack />

      {/* What We Build Section */}
      <WhatWeBuild />

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-teal-900/50 to-background-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your web project to life.
          </p>
          <Link
            href="/contact"
            className="btn-primary transition-transform duration-300 hover:scale-105"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
