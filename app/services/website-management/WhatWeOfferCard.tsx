"use client";

import { useRef, useState, MouseEvent } from "react";
import Bubbles from "../../../components/content/bubbles";

export default function WhatWeOfferCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = (y / height - 0.5) * -15; // Tilt effect strength
    const rotateY = (x / width - 0.5) * 15;

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
      className="group relative bg-teal-900/50 p-8 rounded-xl shadow-lg transition-transform duration-200 ease-out will-change-transform my-12"
    >
      <div className="relative z-10">
        <Bubbles />
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          What We Offer
        </h2>
        <ul className="space-y-3 text-text-secondary">
          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">✓</span> Regular Updates &
            Maintenance
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">✓</span> 24/7 Security
            Monitoring & Backups
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">✓</span> Performance
            Optimization
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-3 mt-1">✓</span> Content Updates &
            Support
          </li>
        </ul>
      </div>
    </div>
  );
}
