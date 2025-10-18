"use client";

import { useState, useEffect, useRef } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#94a3b8" }, // Using slate-400 for better visibility
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiVercel, name: "Vercel", color: "#94a3b8" }, // Using slate-400 for better visibility
];

export default function AnimatedTechStack() {
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Technologies We Master
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 text-text-secondary">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center gap-3 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${isVisible ? i * 100 : 0}ms` }}
            >
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                <tech.icon
                  className="h-12 w-12 text-text-secondary transition-colors duration-300 group-hover:text-[var(--tech-color)]"
                  style={{ "--tech-color": tech.color } as React.CSSProperties}
                />
              </div>
              <span className="font-semibold transition-colors duration-300 group-hover:text-primary">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
