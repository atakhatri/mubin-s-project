import Link from "next/link";
import Bubbles from "../../../components/content/bubbles";
import SecurityServices from "./SecurityServices";
import TargetCursor from "../../../components/ui/targetcursor";

import {
  FaShieldAlt,
  FaSearch,
  FaExclamationTriangle,
  FaTasks,
  FaSyncAlt,
  FaVirus,
  FaFish,
  FaServer,
  FaUserLock,
  FaNetworkWired,
  FaCodeBranch,
} from "react-icons/fa";
import Image from "next/image";
import AnimateOnScroll from "../../../components/providers/AnimateOnScroll";

export default function SecurityConsultancyPage() {
  return (
    <div>
      <TargetCursor />
      {/* Page Header */}
      <Bubbles />
      <section className="relative py-20 md:py-28 text-center">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-tl from-teal-700 via-green-200 to-teal-300 bg-clip-text text-transparent">
              Security Consultancy
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animation-delay-200">
              Fortifying Your Digital Frontier Against Tomorrow's Threats.
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
                  The Digital Threat is Real. Are You Prepared?
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  In today's interconnected world, a single vulnerability can
                  compromise your entire operation. We provide the strategic
                  insight and technical expertise to identify risks, assess
                  threats, and implement robust security measures that protect
                  your data, reputation, and bottom line.
                </p>
                <p className="text-lg text-text-secondary">
                  Don't leave your security to chance. Our consultants work as
                  an extension of your team to build a resilient, proactive
                  defense posture tailored to your unique business environment.
                </p>
              </div>
              <div className="cursor-target relative aspect-square rounded-full overflow-hidden shadow-lg bg-teal-900/30 flex items-center justify-center">
                <FaShieldAlt className="text-primary/50 text-9xl animate-pulse" />
                <Image
                  src="/security-shield-overlay.svg"
                  alt="Security Shield"
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-contain opacity-20"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Detailed Services Section */}
      <SecurityServices />

      {/* Threats We Mitigate Section */}
      <section className="py-16 sm:py-20 bg-background">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Threats We Mitigate
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {[
                { icon: FaVirus, name: "Malware & Ransomware" },
                { icon: FaFish, name: "Phishing Attacks" },
                { icon: FaServer, name: "DDoS Attacks" },
                { icon: FaUserLock, name: "Insider Threats" },
                { icon: FaNetworkWired, name: "Network Intrusion" },
              ].map((threat) => (
                <div
                  key={threat.name}
                  className="cursor-target group flex flex-col items-center p-4"
                >
                  <div className="relative p-6 bg-background-secondary rounded-full border-2 border-border-color transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_15px] group-hover:shadow-primary/50">
                    <threat.icon className="h-10 w-10 text-text-secondary transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <p className="mt-4 font-semibold text-sm text-text-secondary transition-colors duration-300 group-hover:text-primary">
                    {threat.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 bg-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Strategic Approach
            </h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border-color -translate-y-1/2 hidden md:block"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 animate-line-draw"></div>
              {[
                {
                  icon: FaSearch,
                  title: "Assess & Identify",
                  desc: "We begin with a comprehensive audit of your digital infrastructure to uncover potential vulnerabilities.",
                },
                {
                  icon: FaExclamationTriangle,
                  title: "Analyze & Prioritize",
                  desc: "Our experts analyze findings, ranking threats by severity and potential impact to focus on what matters most.",
                },
                {
                  icon: FaTasks,
                  title: "Implement & Remediate",
                  desc: "We deploy robust security controls, patch systems, and configure defenses to neutralize identified threats.",
                },
                {
                  icon: FaSyncAlt,
                  title: "Monitor & Adapt",
                  desc: "Security is an ongoing process. We continuously monitor your systems and adapt your defenses to evolving threats.",
                },
              ].map((step, i) => (
                <div
                  key={step.title}
                  className="cursor-target relative flex flex-col items-center text-center p-6 bg-background rounded-lg border-2 border-border-color z-10"
                >
                  <div className="absolute -top-6 bg-primary h-12 w-12 rounded-full flex items-center justify-center border-4 border-background-secondary">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-teal-900/70 to-background-secondary">
        <AnimateOnScroll animationClass="animate-fade-in-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
              Don't Wait for a Breach to Happen.
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              A single incident can cost you more than just money—it can damage
              your reputation for years. Proactive security is the best defense.
              Let's build a resilient security posture for your business today.
            </p>
            <Link
              href="/contact"
              className="btn-primary cursor-target transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-400"
            >
              Get a Free Security Consultation
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
