'use client';
import { useState, useEffect } from 'react';
import TestimonialCard from './testimonial-card';

interface Testimonial {
  text: string;
  author: string;
  company: string;
}

const testimonialsData: Testimonial[] = [
  {
    text: "TechSolutions exceeded our expectations with their expertise in web development and security.",
    author: "John Davis",
    company: "InnovateCorp"
  },
  {
    text: "Their SEO services helped us rank #1 on Google within 3 months!",
    author: "Sarah Johnson",
    company: "GrowthTech"
  },
  {
    text: "The custom CRM they built for us has revolutionized our workflow and customer management.",
    author: "Michael Chen",
    company: "Synergy Solutions"
  },
  {
    text: "A truly reliable partner for all our IT infrastructure needs. Downtime is a thing of the past.",
    author: "Emily Rodriguez",
    company: "Quantum Leap Inc."
  },
  {
    text: "From concept to launch, the web development process was seamless and professional.",
    author: "David Lee",
    company: "NextGen Enterprises"
  },
  {
    text: "Their security audit was incredibly thorough and gave us peace of mind. Highly recommended.",
    author: "Jessica Williams",
    company: "SecureNet"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 2) % testimonialsData.length);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex - 2 + testimonialsData.length) % testimonialsData.length);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 15000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayedTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length]
  ];

  return (
    <section className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 sm:mb-0">Client Testimonials</h2>
          <div className="flex gap-2">
            <button onClick={handlePrev} aria-label="Previous testimonials" className="p-2 rounded-full bg-background-tertiary/50 hover:bg-background-tertiary/80 transition-colors duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} aria-label="Next testimonials" className="p-2 rounded-full bg-background-tertiary/50 hover:bg-background-tertiary/80 transition-colors duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {displayedTestimonials.map((t, i) => (
            <div key={`${currentIndex}-${i}`}><TestimonialCard {...t} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}