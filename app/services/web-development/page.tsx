"use client";

import { type Metadata } from "next";
import {
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaRocket,
  FaHeadset,
  FaHtml5,
  FaJs,
  FaCss3,
} from "react-icons/fa";
import Introduction from "./Introduction";
import LogoLoop from "./AnimatedTechStack";
import Bubbles from "../../../components/animated-bg/bubbles";
import WhatWeBuild from "./WhatWeBuild";
import Link from "next/link";
import TargetCursor from "../../../components/ui/targetcursor";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

// Technology logos data
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <FaHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    node: <FaJs />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <FaRocket />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <FaCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <TargetCursor />
      <div className="bg-background text-text-primary">
        <Bubbles />
        {/* Hero Section */}

        <section className="relative py-20 md:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
              Web Development
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Crafting beautiful, high-performance websites that drive growth
              and engage your audience.
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
                  description:
                    "Building your vision with clean, efficient code.",
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
                  className="cursor-target group flex flex-col items-center p-4 transition-all duration-300 hover:-translate-y-2"
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
        <section className="py-16 sm:py-20 mr-100 ml-100">
          <div className="container mx-auto px-4">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={70}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology partners"
            />
          </div>
        </section>

        {/* What We Build Section */}
        <WhatWeBuild />

        {/* CTA Section */}
        <section className="bg-gradient-to-t from-teal-900/50 to-background-secondary py-20">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
                Ready to Build Your Vision?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Let's discuss how we can bring your web project to life.
              </p>
              <Link
                href="/contact"
                className="btn-primary cursor-target transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
              >
                Get a Free Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
    </>
  );
}
