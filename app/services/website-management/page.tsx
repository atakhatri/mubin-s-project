import Link from 'next/link';
import Bubbles from '../../../components/content/bubbles';

export default function WebsiteManagementPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-b dark:from-teal-900 from-teal-200/50 to-background-secondary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Website Management</h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            Let us handle the technical details so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="lead">
              We offer comprehensive website management services, including regular updates, security monitoring, and performance optimization to keep your site running smoothly.
            </p>
            
            <div className="bg-glass p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10 my-12">
              <Bubbles/>
              <h2 className="text-2xl font-semibold mb-4 text-primary">What We Offer</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Regular Updates & Maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> 24/7 Security Monitoring & Backups</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Performance Optimization</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Content Updates & Support</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary transition-transform duration-300 hover:scale-105">Get a Management Plan</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

