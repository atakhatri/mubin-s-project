"use client";
import Link from "next/link";
import Bubbles from "../components/content/bubbles";
import Image from "next/image";
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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-32 overflow-hidden">
        <Bubbles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Professional IT Solutions for Your Business
          </h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            We build secure, scalable, and high-performance technology solutions
            that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Why Partner with TechSolutions?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We are more than just a service provider; we are your dedicated
              partner in innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {whyUsItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                    activeWhyUsIndex === index
                      ? "bg-background-secondary border-primary shadow-lg"
                      : "border-transparent hover:bg-background-secondary/50"
                  }`}
                  onClick={() => setActiveWhyUsIndex(index)}
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
            <div className="relative w-[400px] h-[400px] mx-auto">
              {whyUsItems.map((item, index) => (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className={`absolute inset-0 max-w-full h-auto rounded-xl shadow-lg transition-all duration-500 ease-in-out ${
                    activeWhyUsIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  style={{
                    transitionDelay:
                      activeWhyUsIndex === index ? "200ms" : "0ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            {[
              {
                title: "Web Development",
                desc: "We build beautiful, fast, and easy-to-use websites tailored to your business needs and objectives.",
                href: "/services/web-development",
                icon: FaCode,
              },
              {
                title: "Security Consultancy",
                desc: "Protect your business from emerging online threats with our expert security guidance and strategies.",
                href: "/services/security-consultancy",
                icon: FaShieldAlt,
              },
              {
                title: "SEO Services",
                desc: "Improve your website's visibility and rank higher in search results to attract more organic customers.",
                href: "/services/seo-services",
                icon: FaChartLine,
              },
              {
                title: "Website Management",
                desc: "Let us handle the technical details and maintenance so you can focus on growing your business.",
                href: "/services/website-management",
                icon: FaTasks,
              },
              {
                title: "IT Infrastructure",
                desc: "Build a strong, scalable, and reliable technology foundation for your business's future.",
                href: "/services/it-infrastructure-planning",
                icon: FaSitemap,
              },
              {
                title: "CRM Integrations",
                desc: "Seamlessly connect your CRM with other tools to automate workflows and boost overall efficiency.",
                href: "/services/crm-integrations",
                icon: FaUsersCog,
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="glow-on-hover bg-glass p-8 rounded-lg border border-border-color hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <s.icon className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold text-primary">
                    {s.title}
                  </h3>
                </div>
                <p className="text-text-secondary">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="flex items-center justify-center bg-gradient-to-t from-teal-900 to-background-secondary min-h-[40vh] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Business
            <span className="inline-block animate-bell-shake">?</span>
          </h2>
          <Link
            href="/contact"
            className="btn-primary animate-fade-in-up animation-delay-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
