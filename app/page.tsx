"use client";
import Link from "next/link";
import Bubbles from "../components/content/bubbles";
import Image from "next/image";
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-green-500 rounded-full"></div>
              <ul className="space-y-6 text-lg">
                {[
                  {
                    title: "Expert Team",
                    desc: "Our certified professionals bring years of industry experience to solve your most complex challenges.",
                  },
                  {
                    title: "Customer-Centric Approach",
                    desc: "We prioritize your needs, ensuring solutions are tailored to your unique business goals.",
                  },
                  {
                    title: "Proven Results",
                    desc: "Our track record of successful projects and satisfied clients speaks for itself.",
                  },
                  {
                    title: "Future-Proof Technology",
                    desc: "We leverage the latest technologies to build scalable and resilient solutions for tomorrow.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <h3 className="font-semibold text-xl text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-secondary mt-8 inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/why-us.svg"
                alt="Illustration of a team working on a project"
                width={450}
                height={350}
                className="max-w-full h-auto shadow-lg animate-fade-in-up rounded-xl"
              />
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
