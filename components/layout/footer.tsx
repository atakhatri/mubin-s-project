import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="relative inline-block">
            <Image
              src="/logo.svg"
              alt="logo"
              width={96}
              height={96}
              className="absolute -top-8 -left-4 h-24 w-24 text-background-tertiary opacity-20 hidden md:block"
              aria-hidden="true"
            />
            <Link href="/" className="relative flex items-center gap-2 text-2xl font-bold text-primary transition-all duration-200 hover:scale-105 hover:opacity-90">
              <span>TechSolutions</span>
            </Link>
            <p className="text-text-secondary mt-2 text-sm">© {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex space-x-6 text-sm">
            <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="text-text-secondary hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex space-x-8">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-6 w-6 text-text-secondary transition-all duration-300 hover:text-white hover:scale-110" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-6 w-6 text-text-secondary transition-all duration-300 hover:text-[#0A66C2] hover:scale-110" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="h-6 w-6 text-text-secondary transition-all duration-300 hover:text-[#1DA1F2] hover:scale-110" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="h-6 w-6 text-text-secondary transition-all duration-300 hover:text-[#1877F2] hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}