"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Bubbles from "../../../components/animated-bg/bubbles";
import AnimatedHeadline from "../seo-services/AnimatedHeadline";
import TargetCursor from "../../../components/ui/targetcursor";
import {
  FaHubspot,
  FaSalesforce,
  FaLink,
  FaSyncAlt,
  FaChartBar,
  FaCode,
  FaCogs,
  FaUsers,
  FaBullseye,
  FaLightbulb,
} from "react-icons/fa";
import { SiZendesk, SiMailchimp, SiShopify } from "react-icons/si";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

const floatingIcons = [FaHubspot, FaSalesforce, FaLink, FaSyncAlt, FaChartBar];

const headerContent = {
  phrases: [
    "Unify Your Business Data with Seamless Integrations",
    "Automate Your Workflows with Seamless Integrations",
    "Supercharge Your CRM with Seamless Integrations",
  ],
  suffix: "",
  subtitle:
    "Connect your CRM to the tools you use every day. Eliminate data silos, automate tasks, and create a single source of truth for your customer data.",
  cta: "Get a Free Integration Quote",
};

const integrationServices = [
  {
    icon: FaCode,
    title: "Custom API Development",
    description:
      "We build bespoke API connections to link your CRM with any third-party application, no matter how unique.",
  },
  {
    icon: FaCogs,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks between your CRM and other platforms like email marketing, accounting, and project management.",
  },
  {
    icon: FaSyncAlt,
    title: "Data Synchronization",
    description:
      "Ensure data consistency across all your platforms with real-time, two-way data synchronization.",
  },
  {
    icon: FaChartBar,
    title: "Analytics & Reporting",
    description:
      "Consolidate data from various sources into your CRM for a complete view of your business performance.",
  },
];

const whyIntegrateItems = [
  {
    icon: FaLightbulb,
    title: "Eliminate Data Silos",
    description:
      "Create a single source of truth by ensuring all your departments are working with the same, up-to-date customer information.",
  },
  {
    icon: FaBullseye,
    title: "Increase Productivity",
    description:
      "Automate manual data entry and repetitive tasks, freeing up your team to focus on high-value activities like selling and customer support.",
  },
  {
    icon: FaUsers,
    title: "Enhance Customer View",
    description:
      "Gain a 360-degree view of your customers by combining sales, marketing, and support data in one central location.",
  },
];

const popularIntegrations = [
  { name: "Salesforce", icon: FaSalesforce },
  { name: "HubSpot", icon: FaHubspot },
  { name: "Zendesk", icon: SiZendesk },
  { name: "Mailchimp", icon: SiMailchimp },
  { name: "Shopify", icon: SiShopify },
];

export default function CrmIntegrationsPage() {
  const [activeWhyUsIndex, setActiveWhyUsIndex] = useState(0);

  return (
    <div>
      <TargetCursor />
      {/* Page Header */}
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
              suffix={headerContent.suffix}
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

      {/* What We Offer Section */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our CRM Integration Services
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto animation-delay-200">
                We connect your systems to create a powerful, unified ecosystem
                that drives efficiency and growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationServices.map((service, index) => (
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

      {/* Why Integrate Section */}
      <section className="py-20">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Integrate Your CRM?
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto animation-delay-200">
                Unlock the true potential of your customer data and streamline
                your operations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                {whyIntegrateItems.map((item, index) => (
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
                <Image
                  src="/crm-integration.svg"
                  alt="CRM Integration Graphic"
                  width={400}
                  height={400}
                  className=" object-contain border rounded-xl"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Popular Platforms Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-teal-900 to-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Popular Platforms We Integrate
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {popularIntegrations.map((platform, i) => (
                <div
                  key={platform.name}
                  className="cursor-target group flex flex-col items-center gap-3 text-center"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <platform.icon className="h-16 w-16 text-text-secondary transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  <span className="font-semibold text-text-secondary transition-colors duration-300 group-hover:text-primary">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
