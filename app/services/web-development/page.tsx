import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaPalette,
  FaShoppingCart,
  FaCogs,
  FaTachometerAlt,
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Web Development Services | TechSolutions",
  description:
    "Expert web development services for creating beautiful, fast, and secure websites tailored to your business needs.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 animate-fade-in-up">
            Web Development
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Crafting beautiful, high-performance websites that drive growth and
            engage your audience.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">From Concept to Reality</h2>
            <p className="text-lg text-text-secondary mb-6">
              At TechSolutions, we believe a website is more than just code.
              It's the digital face of your brand and a powerful tool for
              growth. Our team of expert developers and designers work
              collaboratively to build web experiences that are not only
              visually stunning but also fast, secure, and user-friendly.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in-up animation-delay-200">
            <Image
              src="https://picsum.photos/seed/webdev/1200/800"
              alt="Web Development Process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {[
              { icon: FaSearch, title: "Discovery" },
              { icon: FaDraftingCompass, title: "Design" },
              { icon: FaCode, title: "Development" },
              { icon: FaRocket, title: "Deployment" },
              { icon: FaHeadset, title: "Support" },
            ].map((step, i) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="bg-glass border-2 border-primary rounded-full p-4 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We Master
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-text-secondary">
            {[
              { icon: SiReact, name: "React" },
              { icon: SiNextdotjs, name: "Next.js" },
              { icon: SiNodedotjs, name: "Node.js" },
              { icon: SiTypescript, name: "TypeScript" },
              { icon: SiTailwindcss, name: "Tailwind CSS" },
              { icon: SiVercel, name: "Vercel" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 hover:text-primary"
              >
                <tech.icon className="h-12 w-12" />
                <span className="font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-teal-900/50 to-background-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Vision?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your web project to life.
          </p>
          <Link
            href="/contact"
            className="btn-primary transition-transform duration-300 hover:scale-105"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
