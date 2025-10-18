"use client";

import {
  FaBug,
  FaClipboardList,
  FaUserSecret,
  FaChalkboardTeacher,
  FaFileContract,
  FaFirstAid,
} from "react-icons/fa";

const services = [
  {
    icon: FaBug,
    title: "Vulnerability Assessment",
    description:
      "We conduct deep scans and manual reviews to identify and analyze security weaknesses in your networks, applications, and systems before attackers can exploit them.",
  },
  {
    icon: FaUserSecret,
    title: "Penetration Testing",
    description:
      "Our ethical hackers simulate real-world cyberattacks to test the strength of your defenses, identify exploitable pathways, and validate your incident response capabilities.",
  },
  {
    icon: FaFileContract,
    title: "Compliance & Audits",
    description:
      "Navigating complex regulations is challenging. We ensure your business meets industry standards like GDPR, HIPAA, and PCI-DSS with thorough audits and gap analysis.",
  },
  {
    icon: FaFirstAid,
    title: "Incident Response",
    description:
      "In the event of a breach, time is critical. Our team provides rapid response and forensic analysis to contain threats, minimize damage, and recover quickly.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Employee Training",
    description:
      "Your team is your first line of defense. We provide engaging training to help them recognize and prevent phishing, social engineering, and other common cyber threats.",
  },
  {
    icon: FaClipboardList,
    title: "Security Policy Development",
    description:
      "We help you craft robust, clear, and actionable security policies that establish a strong security culture and provide clear guidance for your entire organization.",
  },
];

export default function SecurityServices() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Core Security Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-background-secondary p-8 rounded-xl shadow-lg overflow-hidden border border-border-color transition-all duration-300 hover:border-primary hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-scanner"></div>
              <service.icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
