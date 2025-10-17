import Link from "next/link";
import Bubbles from "../../components/content/bubbles";

interface Service {
  title: string;
  description: string;
  href: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Web Development",
      description:
        "We build beautiful, fast, and easy-to-use websites tailored to your business.",
      href: "/services/web-development",
    },
    {
      title: "Website Management",
      description:
        "Let us handle the technical details so you can focus on your business.",
      href: "/services/website-management",
    },
    {
      title: "Security Consultancy",
      description:
        "Protect your business from online threats with expert security guidance.",
      href: "/services/security-consultancy",
    },
    {
      title: "IT Infrastructure Planning",
      description:
        "Build a strong and reliable technology foundation for your business.",
      href: "/services/it-infrastructure-planning",
    },
    {
      title: "SEO Services",
      description:
        "Help your website rank higher in search results and attract more customers.",
      href: "/services/seo-services",
    },
    {
      title: "CRM Integrations",
      description:
        "Connect your CRM with other tools to automate workflows and improve efficiency.",
      href: "/services/crm-integrations",
    },
  ];

  return (
    <div>
      {/* Page Header Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-32">
        <Bubbles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-text-secondary animate-fade-in-up animation-delay-200">
            Comprehensive IT solutions designed to meet your business needs.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up animation-delay-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="glow-on-hover bg-glass p-6 rounded-lg border border-border-color hover:border-primary"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex items-center justify-center bg-gradient-to-t from-teal-900 to-background-secondary min-h-[40vh] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Have a Project in Mind
            <span className="inline-block animate-bell-shake">?</span>
          </h2>
          <Link
            href="/contact"
            className="btn-primary animate-fade-in-up animation-delay-200"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
