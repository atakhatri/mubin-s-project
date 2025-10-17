import Link from 'next/link';
import Bubbles from '../../../components/content/bubbles';

export default function SeoServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-b dark:from-teal-900 from-teal-200/50 to-background-secondary py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">SEO Services</h1>
          <p className="text-xl text-text-secondary mb-8 animate-fade-in-up animation-delay-200">
            Help your website rank higher in search results and attract more customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
            <p className="lead">
              Our data-driven SEO strategies are designed to increase your organic traffic, improve keyword rankings, and boost your online visibility.
            </p>
            
            <div className="bg-glass p-6 rounded-lg border border-border-color transition-all duration-300 hover:border-primary/80 hover:shadow-2xl hover:shadow-primary/10 my-12">
              <Bubbles/>
              <h2 className="text-2xl font-semibold mb-4 text-primary">What We Offer</h2>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> On-Page & Technical SEO</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Keyword Research & Strategy</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Link Building</li>
                <li className="flex items-start"><span className="text-primary mr-3 mt-1">✓</span> Content Marketing for SEO</li>
              </ul>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary transition-transform duration-300 hover:scale-105">Boost Your Ranking</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
