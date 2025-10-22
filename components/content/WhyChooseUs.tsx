"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaHeart, FaAward, FaRocket } from "react-icons/fa";
import AnimateOnScroll from "../providers/AnimateOnScroll";

const whyUsItems = [
  {
    title: "Expert Team",
    desc: "Our certified professionals bring years of industry experience to solve your most complex challenges.",
    icon: FaUsers,
    image: "/why-us-team.svg",
  },
  {
    title: "Customer-Centric Approach",
    desc: "We prioritize your needs, ensuring solutions are tailored to your unique business goals.",
    icon: FaHeart,
    image: "/why-us-customer.svg",
  },
  {
    title: "Proven Results",
    desc: "Our track record of successful projects and satisfied clients speaks for itself.",
    icon: FaAward,
    image: "/why-us-results.svg",
  },
  {
    title: "Future-Proof Technology",
    desc: "We leverage the latest technologies to build scalable and resilient solutions for tomorrow.",
    icon: FaRocket,
    image: "/why-us-tech.svg",
  },
];

const WhyChooseUs = () => {
  const [activeWhyUsIndex, setActiveWhyUsIndex] = useState(0);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner with TechSolutions?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We are more than just a service provider; we are your dedicated
              partner in innovation and growth.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {whyUsItems.map((item, index) => (
                <button
                  key={item.title}
                  className={`cursor-target p-6 rounded-lg transition-all duration-300 border-2 w-full text-left ${
                    activeWhyUsIndex === index
                      ? "bg-background border-primary shadow-lg"
                      : "border-transparent hover:bg-background/50"
                  }`}
                  onClick={() => setActiveWhyUsIndex(index)}
                  onMouseEnter={() => setActiveWhyUsIndex(index)}
                  aria-expanded={activeWhyUsIndex === index}
                  aria-controls={`why-us-desc-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={`w-8 h-8 transition-colors shrink-0 ${
                        activeWhyUsIndex === index
                          ? "text-primary"
                          : "text-text-secondary"
                      }`}
                    />
                    <h3 className="font-semibold text-xl text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <AnimatePresence initial={false}>
                    {activeWhyUsIndex === index && (
                      <motion.p
                        id={`why-us-desc-${index}`}
                        className="text-text-secondary mt-3 pl-12 origin-top"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWhyUsIndex}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={whyUsItems[activeWhyUsIndex].image}
                    alt={whyUsItems[activeWhyUsIndex].title}
                    width={500}
                    height={400}
                    className="w-full h-full object-contain"
                    priority={activeWhyUsIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default WhyChooseUs;
