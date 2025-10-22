import Link from "next/link";
import Bubbles from "../../../components/animated-bg/bubbles";
import CyberGlobe from "./CyberGlobe";
import PlanningProcess from "./PlanningProcess";
import InfrastructureServices from "./InfrastructureServices";
import InfrastructureTechnologies from "./InfrastructureTechnologies";
import TargetCursor from "../../../components/ui/targetcursor";

import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

export default function ItInfrastructurePlanningPage() {
  return (
    <div className="overflow-x-hidden">
      <TargetCursor />
      {/* Page Header */}
      <Bubbles />
      <section className="relative py-20 md:py-28 text-center">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
              IT Infrastructure Planning
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animation-delay-200">
              Architecting the Backbone of Your Digital Enterprise.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="cursor-target">
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
              <div className="cursor-target hidden md:block">
                <CyberGlobe />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Technologies Section */}
      <InfrastructureTechnologies />

      {/* Detailed Services Section */}
      <InfrastructureServices />

      {/* Our Approach Section */}
      <PlanningProcess />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-teal-900/70 to-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
              Ready to Build a Foundation for Growth?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Let's create an IT infrastructure that not only supports your
              business today but also empowers your success tomorrow.
            </p>
            <Link
              href="/contact"
              className="btn-primary cursor-target transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
            >
              Plan Your Infrastructure
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
