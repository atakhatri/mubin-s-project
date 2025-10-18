"use client";

import { useRef, useState, MouseEvent } from "react";
import {
  FaSyncAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaHeartbeat,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: FaSyncAlt,
    title: "Core & Plugin Updates",
    description:
      "We keep your website's core, themes, and plugins up-to-date to ensure compatibility and security.",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Backups",
    description:
      "Proactive security monitoring, malware scanning, and regular off-site backups to protect your digital asset.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance Tuning",
    description:
      "Continuous performance tuning, image optimization, and caching strategies to ensure your site is fast.",
  },
  {
    icon: FaHeartbeat,
    title: "Uptime Monitoring",
    description:
      "24/7 uptime monitoring to ensure your website is always online and accessible to your visitors.",
  },
  {
    icon: FaFileAlt,
    title: "Content Updates",
    description:
      "Assistance with content updates, blog posts, and other minor changes to keep your site fresh.",
  },
  {
    icon: FaChartLine,
    title: "Monthly Reporting",
    description:
      "Receive detailed monthly reports on your site's health, performance, and the work we've completed.",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -20;
    const rotateY = (x / width - 0.5) * 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style as React.CSSProperties}
      className="group relative bg-teal-900/50 p-8 rounded-xl shadow-lg transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <service.icon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
          <h3 className="text-2xl font-semibold">{service.title}</h3>
        </div>
        <p className="text-text-secondary">{service.description}</p>
      </div>
    </div>
  );
}

export default function ManagementServices() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:2000px]">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
