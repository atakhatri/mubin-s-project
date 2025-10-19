"use client";

import { useRef, useState, MouseEvent } from "react";
import {
  FaShoppingCart,
  FaBuilding,
  FaBullhorn,
  FaPencilAlt,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";

const projectTypes = [
  {
    icon: FaShoppingCart,
    title: "E-commerce Stores",
    description: "Robust online stores with seamless checkout experiences.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Websites",
    description:
      "Professional websites to represent your brand and build credibility.",
  },
  {
    icon: FaCogs,
    title: "Web Applications",
    description:
      "Complex, data-driven applications with rich user interactivity.",
  },
  {
    icon: FaBullhorn,
    title: "Landing Pages",
    description: "High-converting pages to capture leads and drive marketing.",
  },
  {
    icon: FaPencilAlt,
    title: "Blogs & Portfolios",
    description:
      "Beautifully designed platforms to showcase your content or work.",
  },
  {
    icon: FaLightbulb,
    title: "Custom Solutions",
    description:
      "Unique, tailor-made web solutions for your specific business challenges.",
  },
];

function ProjectCard({ project }: { project: (typeof projectTypes)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -20; // -10 to 10 degrees
    const rotateY = (x / width - 0.5) * 20; // -10 to 10 degrees

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      "--spotlight-x": `${x}px`,
      "--spotlight-y": `${y}px`,
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
      className="cursor-target group relative bg-teal-900/50 p-8 rounded-xl shadow-lg transition-transform duration-200 ease-out will-change-transform"
    >
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <project.icon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
          <h3 className="text-2xl font-semibold">{project.title}</h3>
        </div>
        <p className="text-text-secondary">{project.description}</p>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:2000px]">
          {projectTypes.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
