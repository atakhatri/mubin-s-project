"use client";

import { useState, useEffect, useRef } from "react";
import {
  SiGooglecloud,
  SiCisco,
  SiVmware,
  SiDocker,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

const technologies = [
  { icon: SiGooglecloud, name: "Google Cloud" },
  { icon: SiCisco, name: "Cisco" },
  { icon: SiVmware, name: "VMware" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
];

export default function InfrastructureTechnologies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Technologies We Utilize
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 text-text-secondary">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center gap-3 transition-all duration-500 hover:text-primary hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${isVisible ? i * 100 : 0}ms` }}
            >
              <tech.icon className="h-14 w-14" />
              <span className="font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
