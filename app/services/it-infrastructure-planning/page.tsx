import Link from "next/link";
import React from "react";
import Bubbles from "../../../components/content/bubbles";
import CyberGlobe from "./CyberGlobe";
import PlanningProcess from "./PlanningProcess";
import InfrastructureServices from "./InfrastructureServices";
import InfrastructureTechnologies from "./InfrastructureTechnologies";
import {
  FaArrowDown,
  FaDraftingCompass,
  FaHardHat,
  FaRocket,
  FaClipboardList,
} from "react-icons/fa";

export default function ItInfrastructurePlanningPage() {
  return (
    <div>
      {/* Page Header */}
      <Bubbles />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          IT Infrastructure Planning
        </h1>
        <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
          Architecting the Backbone of Your Digital Enterprise.
        </p>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4">
                Building for Tomorrow's Demands
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                A well-designed IT infrastructure is the critical foundation
                that supports your entire business operation. It's not just
                about servers and cables; it's about creating a resilient,
                scalable, and secure environment that enables innovation and
                growth.
              </p>
              <p className="text-lg text-text-secondary">
                We partner with you to design and implement an infrastructure
                strategy that aligns with your business objectives, ensuring
                your technology can keep pace with your ambition.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <CyberGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <InfrastructureTechnologies />

      {/* Detailed Services Section */}
      <InfrastructureServices />

      {/* Our Approach Section */}
      <PlanningProcess />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-teal-900/70 to-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Foundation for Growth?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's create an IT infrastructure that not only supports your
            business today but also empowers your success tomorrow.
          </p>
          <Link
            href="/contact"
            className="btn-primary transition-transform duration-300 hover:scale-105"
          >
            Plan Your Infrastructure
          </Link>
        </div>
      </section>
    </div>
  );
}
