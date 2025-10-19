"use client";

import {
  SiGooglecloud,
  SiCisco,
  SiVmware,
  SiDocker,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

const technologies = [
  { icon: SiGooglecloud, name: "Google Cloud" },
  { icon: SiCisco, name: "Cisco" },
  { icon: SiVmware, name: "VMware" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
];

export default function InfrastructureTechnologies() {
  return (
    <section className="py-16 sm:py-20">
      <AnimateOnScroll animationClass="animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Technologies We Utilize
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 text-text-secondary">
            {technologies.map((tech, i) => (
              <div
                key={tech.name}
                className="cursor-target group flex flex-col items-center gap-3 transition-all duration-300 hover:text-primary hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <tech.icon className="h-14 w-14" />
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
