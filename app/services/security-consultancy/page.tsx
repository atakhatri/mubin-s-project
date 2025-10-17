import Link from 'next/link';
import Bubbles from '../../../components/content/bubbles';

export default function SecurityConsultancyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-teal-900 to-background-secondary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Security Consultancy</h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            Protect your business from online threats with expert security guidance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="lead">
              We identify vulnerabilities, assess risks, and implement robust security strategies to safeguard your digital assets.
            </p>
            
            <div className="bg-glass p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10 my-12">
              <Bubbles/>
              <h2 className="text-2xl font-semibold mb-4 text-primary">What We Offer</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Vulnerability Assessment & Penetration Testing</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Security Audits & Compliance (GDPR, HIPAA)</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Incident Response & Forensics</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Employee Security Training</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary transition-transform duration-300 hover:scale-105">Secure Your Business</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
