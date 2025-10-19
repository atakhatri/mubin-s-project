"use client";

import Link from "next/link";
import Bubbles from "../../components/content/bubbles";
import ServicesGrid from "../../components/content/ServicesGrid";
import AnimateOnScroll from "../../components/providers/AnimateOnScroll";
import TargetCursor from "../../components/ui/targetcursor";
import {
  FaCode,
  FaShieldAlt,
  FaTasks,
  FaSitemap,
  FaChartLine,
  FaUsersCog,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Web Development",
      description:
        "We build beautiful, fast, and easy-to-use websites tailored to your business.",
      href: "/services/web-development",
      icon: FaCode,
    },
    {
      title: "Website Management",
      description:
        "Let us handle the technical details so you can focus on your business.",
      href: "/services/website-management",
      icon: FaTasks,
    },
    {
      title: "Security Consultancy",
      description:
        "Protect your business from online threats with expert security guidance.",
      href: "/services/security-consultancy",
      icon: FaShieldAlt,
    },
    {
      title: "IT Infrastructure Planning",
      description:
        "Build a strong and reliable technology foundation for your business.",
      href: "/services/it-infrastructure-planning",
      icon: FaSitemap,
    },
    {
      title: "SEO Services",
      description:
        "Help your website rank higher in search results and attract more customers.",
      href: "/services/seo-services",
      icon: FaChartLine,
    },
    {
      title: "CRM Integrations",
      description:
        "Connect your CRM with other tools to automate workflows and improve efficiency.",
      href: "/services/crm-integrations",
      icon: FaUsersCog,
    },
  ];

  return (
    <div>
      <TargetCursor />
      {/* Page Header Section */}
      <Bubbles />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-l from-teal-700 via-teal-500 to-green-500 text-transparent bg-clip-text">
          Our Services
        </h1>
        <p className="text-xl text-text-secondary animate-fade-in-up animation-delay-200">
          Comprehensive IT solutions designed to meet your business needs.
        </p>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll
          animationClass="animate-fade-in-up"
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        </AnimateOnScroll>

        <ServicesGrid />
      </div>

      <section className="flex items-center justify-center bg-gradient-to-t from-teal-900 to-background-secondary min-h-[40vh] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Have a Project in Mind
            <span className="inline-block animate-bell-shake">?</span>
          </h2>
          <Link
            href="/contact"
            className="btn-primary cursor-target animate-fade-in-up animation-delay-200"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
