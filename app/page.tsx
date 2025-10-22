"use client";
import Link from "next/link";
import TargetCursor from "../components/ui/targetcursor";
import ServicesGrid from "../components/content/ServicesGrid";
import AnimateOnScroll from "../components/providers/AnimateOnScroll";
import Testimonials from "../components/content/Testimonials";
import WhyChooseUs from "@/components/content/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
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
      <WhyChooseUs />

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
    </div>
  );
}
