"use client";
import Link from "next/link";
import Bubbles from "./bubbles";
import Testimonials from "../components/content/Testimonials";

export default function Home() {
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
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-md transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
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
                desc: "Beautiful, fast, and responsive websites",
                href: "/services/web-development",
              },
              {
                title: "Security Consultancy",
                desc: "Protect your business from cyber threats",
                href: "/services/security-consultancy",
              },
              {
                title: "SEO Services",
                desc: "Boost your online visibility",
                href: "/services/seo-services",
              },
              {
                title: "Website Management",
                desc: "Keep your site secure and updated",
                href: "/services/website-management",
              },
              {
                title: "IT Infrastructure",
                desc: "Reliable tech foundation",
                href: "/services/it-infrastructure-planning",
              },
              {
                title: "CRM Integrations",
                desc: "Streamline customer workflows",
                href: "/services/crm-integrations",
              },
            ].map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="glow-on-hover bg-glass p-6 rounded-lg border border-border-color hover:border-primary"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {s.title}
                </h3>
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
