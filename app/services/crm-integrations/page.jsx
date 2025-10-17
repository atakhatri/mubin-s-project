import Link from 'next/link';
import Bubbles from '../../../components/content/bubbles';


export default function CrmIntegrationsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-b dark:from-teal-900 from-teal-200/50 to-background-secondary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">CRM Integrations</h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            Connect your CRM with other tools to automate workflows and improve efficiency.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="lead">
              We streamline your customer workflows by integrating your CRM with essential business tools, ensuring seamless data flow and enhanced productivity.
            </p>
            
            <div className="bg-glass p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10 my-12">
              <Bubbles/>
              <h2 className="text-2xl font-semibold mb-4 text-primary">What We Offer</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Custom API Integrations</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Workflow Automation</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Data Synchronization Solutions</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Integration with Sales, Marketing, and Support Tools</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary transition-transform duration-300 hover:scale-105">Streamline Your Workflows</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
