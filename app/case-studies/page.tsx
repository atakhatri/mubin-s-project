"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, Fragment } from "react";
import Bubbles from "../../components/animated-bg/bubbles";
import AnimateOnScroll from "../../components/providers/AnimateOnScroll";
import { FaSearch, FaTag, FaCalendarAlt, FaUser } from "react-icons/fa";
import TargetCursor from "../../components/ui/targetcursor";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    slug: "ecommerce-revamp-for-retail-giant",
    title: "E-commerce Platform Revamp for a Retail Giant",
    category: "Web Development",
    author: "Mubin Ansari",
    date: "2023-09-18",
    image: "/earth-map.jpg",
    excerpt:
      "Overhauled a legacy e-commerce system, resulting in a 40% increase in conversion rates and a 60% improvement in page load times.",
    featured: true,
  },
  {
    slug: "cybersecurity-overhaul-for-financial-institution",
    title: "Cybersecurity Overhaul for a Financial Institution",
    category: "Cybersecurity",
    author: "Jane Doe",
    date: "2023-08-22",
    image: "/cybersecurity.jpg",
    excerpt:
      "Implemented a multi-layered security strategy, successfully defending against all simulated and real-world threats since implementation.",
  },
  {
    slug: "crm-implementation-for-saas-company",
    title: "CRM Implementation for a Growing SaaS Company",
    category: "CRM Solutions",
    author: "John Smith",
    date: "2023-07-10",
    image: "/crm.jpg",
    excerpt:
      "Deployed a custom CRM solution that streamlined sales and support workflows, improving customer satisfaction by 30%.",
  },
  {
    slug: "it-infrastructure-for-startup",
    title: "Scalable IT Infrastructure for a Tech Startup",
    category: "IT Infrastructure",
    author: "Mubin Ansari",
    date: "2023-06-01",
    image: "/infrastructure.jpg",
    excerpt:
      "Designed and deployed a cloud-native infrastructure that supports rapid scaling, reducing operational costs by 25%.",
  },
];

const categories = [
  "All",
  "Web Development",
  "Cybersecurity",
  "CRM Solutions",
  "IT Infrastructure",
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredStudy = useMemo(() => caseStudies.find((p) => p.featured), []);

  const filteredStudies = useMemo(() => {
    return caseStudies
      .filter((p) => !p.featured)
      .filter((study) => {
        const categoryMatch =
          activeCategory === "All" || study.category === activeCategory;
        const searchMatch =
          searchTerm === "" ||
          study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      });
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-background text-text-primary">
      {/* Header Section */}
      <TargetCursor />
      <Bubbles />
      <AnimateOnScroll
        animationClass="animate-fade-in-up"
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
          Our Work in Action
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          Discover how we've transformed businesses with our innovative
          technology solutions.
        </p>
      </AnimateOnScroll>

      {/* Main Content & Filters */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {/* Filters and Search */}
          <AnimateOnScroll
            animationClass="animate-fade-in-up"
            className="mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-target px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? "bg-teal-600 text-background"
                      : "bg-teal-900/40 hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="cursor-target relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-glass border border-border-color rounded-full py-2 pl-10 pr-4 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
            </div>
          </AnimateOnScroll>

          {/* Case Studies Grid */}
          <AnimateOnScroll animationClass="animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Study */}
              {featuredStudy && (
                <Link
                  href={`/case-studies/${featuredStudy.slug}`}
                  className="cursor-target lg:col-span-3 group block bg-glass rounded-xl border border-border-color overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={featuredStudy.image}
                        alt={featuredStudy.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2 self-start">
                        Featured Case Study
                      </span>
                      <h2 className="text-2xl font-bold mb-2">
                        {featuredStudy.title}
                      </h2>
                      <p className="text-text-secondary mb-4">
                        {featuredStudy.excerpt}
                      </p>
                      <div className="text-sm text-text-secondary flex items-center gap-4">
                        <span className="flex items-center gap-2">
                          <FaTag /> {featuredStudy.category}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt /> {featuredStudy.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              <AnimatePresence>
                {/* Other Studies */}
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="cursor-target group block bg-glass rounded-xl border border-border-color overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 h-full"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {study.category}
                        </span>
                        <h3 className="font-bold text-lg">{study.title}</h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* No Results Found */}
              {filteredStudies.length === 0 && (
                <div className="lg:col-span-3 text-center py-16">
                  <h3 className="text-2xl font-semibold mb-2">
                    No Case Studies Found
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex items-center justify-center bg-gradient-to-t from-teal-900 to-background-secondary min-h-[40vh] py-20 mt-16">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-l from-teal-700 via-teal-500 to-green-500 text-transparent bg-clip-text">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals. Our
              team is ready to build a solution that drives results.
            </p>
            <Link
              href="/contact"
              className="btn-primary cursor-target transition-transform duration-300 hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
