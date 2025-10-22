"use client";
import { useState } from "react";
import Link from "next/link";
import Bubbles from "../../../components/animated-bg/bubbles";
import TargetCursor from "../../../components/ui/targetcursor";
import AnimatedHeadline from "./AnimatedHeadline";
import {
  FaSearch,
  FaWrench,
  FaLink,
  FaPen,
  FaChartBar,
  FaLightbulb,
  FaUsers,
  FaBullseye,
} from "react-icons/fa";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

const floatingIcons = [FaLink, FaChartBar, FaSearch, FaPen, FaWrench];

const headerContent = {
  phrases: [
    "Dominate Search Rankings with Our SEO Services",
    "Drive Organic Growth with Our SEO Services",
    "Boost Your Revenue with Our SEO Services",
  ],
  subtitle:
    "Attract qualified leads and increase your revenue with our data-driven SEO strategies.",
  cta: "Get Your Free SEO Audit",
};

const services = [
  {
    icon: FaSearch,
    title: "Keyword Research & Strategy",
    description:
      "We identify high-value keywords to target the right audience and drive relevant traffic.",
  },
  {
    icon: FaWrench,
    title: "On-Page & Technical SEO",
    description:
      "Optimizing your site's structure, content, and code for search engine crawlers and users.",
  },
  {
    icon: FaLink,
    title: "Link Building",
    description:
      "Building high-quality backlinks to establish your site's authority and improve rankings.",
  },
  {
    icon: FaPen,
    title: "Content Marketing",
    description:
      "Creating valuable content that attracts, engages, and converts your target audience.",
  },
];

const whyUsItems = [
  {
    icon: FaChartBar,
    title: "Data-Driven Approach",
    description:
      "We use advanced analytics to make informed decisions and track what's working, ensuring your strategy is always optimized for performance.",
  },
  {
    icon: FaLightbulb,
    title: "Transparent Reporting",
    description:
      "You'll receive regular, easy-to-understand reports on your campaign's progress, so you're always in the loop on your SEO performance.",
  },
  {
    icon: FaBullseye,
    title: "Focus on ROI",
    description:
      "Our ultimate goal is to deliver a significant return on your investment. We focus on metrics that matter to your bottom line.",
  },
];

export default function SeoServicesPage() {
  const [activeWhyUsIndex, setActiveWhyUsIndex] = useState(0);

  return (
    <div className="bg-background-secondary text-text-primary overflow-x-hidden">
      <TargetCursor />
      {/* Page Header Section */}
      <Bubbles />
      <Bubbles />
      <Bubbles />
      <section className="relative py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {floatingIcons.map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-primary/15 animate-float"
              style={{
                width: `${2 + i * 1.5}rem`,
                height: `${2 + i * 1.5}rem`,
                top: `${10 + i * 18}%`,
                left: `${10 + (i % 2) * 70 + Math.random() * 10}%`,
                animationDuration: `${10 + i * 2}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <AnimatedHeadline
              phrases={headerContent.phrases}
              suffix=""
              className="text-4xl md:text-6xl font-bold mb-6 min-h-[100px] md:min-h-[150px]"
            />
            <p className="text-xl text-text-secondary mb-8 animation-delay-200">
              {headerContent.subtitle}
            </p>
            <div className="animation-delay-400">
              <Link
                href="/contact"
                className="btn-primary cursor-target transition-transform duration-300 hover:scale-105"
              >
                {headerContent.cta}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* What We Offer Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Comprehensive SEO Solutions
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto animation-delay-200">
                We cover every angle of search engine optimization to ensure
                your website not only ranks, but also converts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="cursor-target group relative overflow-hidden rounded-lg border border-border-color bg-glass p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-br from-primary to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <service.icon className="mx-auto mb-4 h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto animation-delay-200">
                Our approach is different. We focus on sustainable growth and
                measurable results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                {whyUsItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`cursor-target p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
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
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="relative h-96 animation-delay-600">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-teal-500 rounded-lg transform -rotate-3"></div>
                <div className="relative h-full bg-background-primary rounded-lg p-8 flex flex-col justify-center items-center text-center shadow-2xl">
                  <FaUsers className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold">Your Growth Partner</h3>
                  <p className="text-text-secondary mt-2">
                    We work as an extension of your team, dedicated to your
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
