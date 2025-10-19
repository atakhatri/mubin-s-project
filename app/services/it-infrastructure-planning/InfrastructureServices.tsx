import {
  FaNetworkWired,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaHdd,
  FaRoute,
} from "react-icons/fa";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

const services = [
  {
    icon: FaNetworkWired,
    title: "Network Design & Architecture",
    description:
      "Designing robust, high-speed, and secure network infrastructures, including LAN, WAN, and Wi-Fi solutions.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Hybrid Solutions",
    description:
      "Strategizing and implementing cloud migrations, hybrid environments, and cloud-native infrastructure on AWS, Azure, or GCP.",
  },
  {
    icon: FaDatabase,
    title: "Data Center Modernization",
    description:
      "Upgrading and optimizing your data center for improved performance, efficiency, and scalability.",
  },
  {
    icon: FaShieldAlt,
    title: "Infrastructure Security",
    description:
      "Implementing multi-layered security protocols, firewalls, and access controls to protect your core infrastructure.",
  },
  {
    icon: FaHdd,
    title: "Storage & Backup Solutions",
    description:
      "Designing and deploying resilient data storage, backup, and disaster recovery plans to ensure business continuity.",
  },
  {
    icon: FaRoute,
    title: "Scalability & Performance Audits",
    description:
      "Analyzing your current infrastructure to identify bottlenecks and create a roadmap for future growth and performance.",
  },
];

export default function InfrastructureServices() {
  return (
    <section className="py-16 sm:py-20">
      <AnimateOnScroll animationClass="animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Infrastructure Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="cursor-target group relative bg-background-secondary p-8 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150 group-hover:scale-100 rounded-full blur-3xl"></div>
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
