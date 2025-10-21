"use client";
import Link from "next/link";
import TargetCursor from "../components/ui/targetcursor";
import Image from "next/image";
import ServicesGrid from "../components/content/ServicesGrid";
import AnimateOnScroll from "../components/providers/AnimateOnScroll";
import Testimonials from "../components/content/Testimonials";
import { useState } from "react";
import {
  FaCode,
  FaShieldAlt,
  FaTasks,
  FaSitemap,
  FaChartLine,
  FaUsersCog,
  FaUsers,
  FaHeart,
  FaAward,
  FaRocket,
} from "react-icons/fa";

const whyUsItems = [
  {
    title: "Expert Team",
    desc: "Our certified professionals bring years of industry experience to solve your most complex challenges.",
    icon: FaUsers,
    image: "/why-us-team.svg",
  },
  {
    title: "Customer-Centric Approach",
    desc: "We prioritize your needs, ensuring solutions are tailored to your unique business goals.",
    icon: FaHeart,
    image: "/why-us-customer.svg",
  },
  {
    title: "Proven Results",
    desc: "Our track record of successful projects and satisfied clients speaks for itself.",
    icon: FaAward,
    image: "/why-us-results.svg",
  },
  {
    title: "Future-Proof Technology",
    desc: "We leverage the latest technologies to build scalable and resilient solutions for tomorrow.",
    icon: FaRocket,
    image: "/why-us-tech.svg",
  },
];

export default function Home() {
  const [activeWhyUsIndex, setActiveWhyUsIndex] = useState(0);

  return (
    <>
      <TargetCursor />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 m-auto max-w-2xl"
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
            Professional IT Solutions for Your Business
          </h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            We build secure, scalable, and high-performance technology solutions
            that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/services" className="btn-primary cursor-target">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary cursor-target">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll animationClass="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
                Why Partner with TechSolutions?
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                We are more than just a service provider; we are your dedicated
                partner in innovation and growth.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animationClass="animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                {whyUsItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`cursor-target p-6 rounded-lg transition-all duration-300 border-2 ${
                      activeWhyUsIndex === index
                        ? "bg-background border-primary shadow-lg"
                        : "border-transparent hover:bg-background/50"
                    }`}
                    onClick={() => setActiveWhyUsIndex(index)}
                    onMouseEnter={() => setActiveWhyUsIndex(index)}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        className={`w-8 h-8 transition-colors ${
                          activeWhyUsIndex === index
                            ? "text-primary"
                            : "text-text-secondary"
                        }`}
                      />
                      <h3 className="font-semibold text-xl text-text-primary">
                        {item.title}
                      </h3>
                    </div>
                    {activeWhyUsIndex === index && (
                      <p className="text-text-secondary mt-3 pl-12 animate-fade-in-up">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="relative h-96 animate-fade-in animation-delay-600">
                {whyUsItems.map((item, index) => (
                  <Image
                    key={item.title}
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={400}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                      activeWhyUsIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll
            animationClass="animate-fade-in-up"
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <ServicesGrid />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimateOnScroll animationClass="animate-fade-in-up">
        <Testimonials />
      </AnimateOnScroll>

      {/* CTA Section */}
      <section className="flex items-center justify-center bg-gradient-to-t from-teal-900 to-background-secondary min-h-[40vh] py-20">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
              Ready to Transform Your Business
              <span className="inline-block animate-bell-shake">?</span>
            </h2>
            <Link
              href="/contact"
              className="btn-primary cursor-target animate-fade-in-up animation-delay-200"
            >
              Start Your Project
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
