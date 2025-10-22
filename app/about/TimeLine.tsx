"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  {
    year: "2015",
    title: "The Genesis",
    description:
      "TechSolutions was founded with a mission to provide cutting-edge IT solutions for small and medium-sized businesses.",
  },
  {
    year: "2017",
    title: "First Major Project",
    description:
      "Landed our first enterprise-level client, successfully overhauling their entire digital infrastructure.",
  },
  {
    year: "2019",
    title: "Expanding Horizons",
    description:
      "Opened our second office and expanded our service offerings to include cloud computing and cybersecurity.",
  },
  {
    year: "2023",
    title: "Going Global",
    description:
      "Established a global presence, serving clients across three continents and continuing to grow our team.",
  },
];

const TimelineItem = ({ event, index }: { event: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? "50%" : "-50%", "0%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, x }}
      className={`relative flex items-center w-full mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div
          className={`p-6 rounded-lg border border-border-color bg-glass shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:-translate-y-1 ${
            index % 2 === 0 ? "md:ml-12" : "md:mr-12 md:text-right"
          }`}
        >
          <div className="text-primary font-bold text-xl mb-2">
            {event.year}
          </div>
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-text-secondary">{event.description}</p>
        </div>
      </div>
      {/* Connector */}
      <div className="hidden md:block w-12 h-0.5 bg-border-color"></div>
      {/* Central Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-secondary p-1 rounded-full z-10">
        <div className="bg-primary h-4 w-4 rounded-full ring-4 ring-background-secondary"></div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-text-primary mb-20">
            Our Journey Through Time
          </h2>
        </motion.div>
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border-color/30"></div>
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-teal-400"
            style={{ height: lineHeight }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
