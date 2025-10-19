"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animationClass: string;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimateOnScroll({
  children,
  animationClass,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`${className || ""} ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
