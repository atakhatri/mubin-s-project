import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies | TechSolutions",
  description:
    "Explore our successful projects and see how we've helped our clients achieve their goals.",
};

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Revamp for a Retail Giant",
    category: "Web Development",
    description:
      "Overhauled a legacy e-commerce system, resulting in a 40% increase in conversion rates and a 60% improvement in page load times.",
  },
  {
    id: 2,
    title: "Cybersecurity Overhaul for a Financial Institution",
    category: "Cybersecurity",
    description:
      "Implemented a multi-layered security strategy, successfully defending against all simulated and real-world threats since implementation.",
  },
  {
    id: 3,
    title: "CRM Implementation for a Growing SaaS Company",
    category: "CRM Solutions",
    description:
      "Deployed a custom CRM solution that streamlined sales and support workflows, improving customer satisfaction by 30%.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
          Our Work in Action
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
          Discover how we've transformed businesses with our innovative
          technology solutions.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-background-secondary rounded-lg shadow-lg p-6 group transition-all duration-300 hover:shadow-primary/20 hover:scale-105"
          >
            <p className="text-sm font-semibold text-primary mb-2">
              {study.category}
            </p>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              {study.title}
            </h2>
            <p className="text-text-secondary">{study.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
