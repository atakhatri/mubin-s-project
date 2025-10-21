import Link from "next/link";
import {
  FaCode,
  FaShieldAlt,
  FaTasks,
  FaSitemap,
  FaChartLine,
  FaUsersCog,
} from "react-icons/fa";

const services = [
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
];

export default function ServicesGrid() {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
      {services.map((s) => (
        <div
          key={s.title}
          className="cursor-target group relative bg-glass border border-border-color rounded-lg p-6 flex flex-col items-start hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col flex-grow">
            <s.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-12" />
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-text-secondary mb-6 flex-grow">{s.desc}</p>
            <Link
              href={s.href}
              className="cursor-target mt-auto font-semibold text-primary inline-block transition-transform duration-300 hover:translate-x-1"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
