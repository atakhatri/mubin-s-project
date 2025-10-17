import Link from 'next/link';
import Bubbles from '../../components/content/bubbles'

export default function AboutPage() {
  const projects = [
    { title: "Corporate Network Overhaul", desc: "Complete redesign of enterprise network infrastructure.", category: "IT Infrastructure" },
    { title: "E-commerce SEO Boost", desc: "Achieved #1 rankings and 200% organic traffic increase.", category: "SEO Services" },
    { title: "Healthcare CRM Integration", desc: "Reduced administrative overhead by 30%.", category: "CRM Integrations" },
  ];

  return (
    <div>
      {/* Page Header Section */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-32">
        <Bubbles/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">About TechSolutions</h1>
          <p className="text-xl text-text-secondary mb-6 animate-fade-in-up animation-delay-200">
            We are a team of passionate IT professionals dedicated to delivering cutting-edge technology solutions that drive business success.
          </p>
          <p className="text-lg text-text-secondary/80 animate-fade-in-up animation-delay-400">
            Our mission is to empower businesses with secure, scalable, and innovative technology that solves real-world problems.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-gray-400">Explore our recent projects and success stories.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            {projects.map((proj, i) => (
              <div key={i} className="glow-on-hover bg-glass p-6 rounded-lg border border-border-color flex flex-col">
                <div className="flex-grow">
                  <span className="text-xs px-2 py-1 bg-background-tertiary text-text-secondary rounded-full">{proj.category}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2 text-primary">{proj.title}</h3>
                  <p className="text-text-secondary">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-t from-teal-900 to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-text-secondary">The principles that guide our work and our team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-200">
            {[
              { title: "Security First", desc: "Enterprise-grade security in every solution" },
              { title: "Performance Driven", desc: "Optimized for speed and reliability" },
              { title: "Client Focused", desc: "Your success is our priority" }
            ].map((item, i) => (
              <div key={i} className="glow-on-hover bg-glass p-6 rounded-lg border border-border-color">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}