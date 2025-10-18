import Link from "next/link";
import ManagementServices from "./ManagementServices";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaFileContract,
  FaRocket,
  FaSyncAlt,
  FaTachometerAlt,
  FaTasks,
} from "react-icons/fa";
import Bubbles from "../../../components/content/bubbles";
import Image from "next/image";

export default function WebsiteManagementPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-b dark:from-teal-900 from-teal-200/50 to-background-secondary py-20 md:py-32">
        <Bubbles />
        <Bubbles />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Website Management
          </h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            Let us handle the technical details so you can focus on your
            business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in-right">
              <Image
                src="https://picsum.photos/seed/webmanage/1200/800"
                alt="Website Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-4">
                Peace of Mind for Your Digital Presence
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                Your website is a critical asset. Our management services ensure
                it remains secure, fast, and up-to-date, so you can focus on
                what you do best: running your business.
              </p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <FaShieldAlt className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Proactive Security:</strong> 24/7 monitoring and
                    backups to protect against threats.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaTachometerAlt className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Peak Performance:</strong> Continuous optimization
                    for speed and reliability.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaSyncAlt className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Always Current:</strong> Regular updates for
                    software, plugins, and content.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <ManagementServices />

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Management Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: FaFileContract, title: "Onboarding & Audit" },
              { icon: FaTasks, title: "Initial Optimization" },
              { icon: FaClipboardCheck, title: "Ongoing Care" },
              { icon: FaRocket, title: "Growth & Reporting" },
            ].map((step) => (
              <div
                key={step.title}
                className="group flex flex-col items-center p-4 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative bg-primary/10 border-2 border-primary rounded-full p-6 mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:border-primary-dark group-hover:shadow-[0_0_20px_4px] group-hover:shadow-primary/50">
                  <step.icon className="h-10 w-10 text-primary transition-all duration-300 group-hover:text-white group-hover:rotate-[360deg]" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-teal-900/50 to-background-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a Hands-Off Website Experience?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can keep your website secure, fast, and
            up-to-date.
          </p>
          <Link
            href="/contact"
            className="btn-primary transition-transform duration-300 hover:scale-105"
          >
            Get a Management Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
