import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border-color footer-glow bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section: Page Links */}
        <div className="flex flex-col items-center md:items-start gap-4 py-12">
          <h2 className="text-2xl font-semibold text-text-primary">
            Quick Links
          </h2>
          <Link
            href="/"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            About
          </Link>
          <Link
            href="/services"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Contact
          </Link>
        </div>

        {/* Center Section: Logo and Socials */}
        <div className="relative flex flex-col items-center justify-center gap-8">
          <Link
            href="/"
            className="cursor-target relative flex items-center justify-center text-3xl font-bold text-primary transition-all duration-200 hover:scale-105"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              width={160}
              height={160}
              className="absolute inset-0 m-auto opacity-30"
            />
            <span className="relative z-10">TechSolutions</span>
          </Link>
          <div className="flex space-x-6 bg-primary/10 p-3 rounded-full border-2 animate-border-spin">
            <Link
              href="https://github.com/atakhatri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="cursor-target h-6 w-6 text-primary transition-all duration-300 hover:text-white hover:scale-125" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ata-khatri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="cursor-target h-6 w-6 text-primary transition-all duration-300 hover:text-white hover:scale-125" />
            </Link>
            <Link
              href="https://x.com/KhatriAta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaTwitter className="cursor-target h-6 w-6 text-primary transition-all duration-300 hover:text-white hover:scale-125" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100089441212445"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="cursor-target h-6 w-6 text-primary transition-all duration-300 hover:text-white hover:scale-125" />
            </Link>
          </div>
        </div>

        {/* Right Section: Legal and Contact */}
        <div className="flex flex-col items-center md:items-end gap-4 py-12 bg-gradient-to-r from-background-secondary to-background-tertiary/50">
          <h2 className="text-2xl font-semibold text-text-primary">Legal</h2>
          <Link
            href="/privacy-policy"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Privacy Policy
          </Link>
          <Link
            href="/security"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Security
          </Link>
          <Link
            href="/terms"
            className="cursor-target nav-link-underline text-text-secondary hover:text-primary transition-colors text-base"
          >
            Terms & Conditions
          </Link>

          <hr className="w-full border-border-color my-2" />
          <a
            href="mailto:contact@techsolutions.com"
            className="cursor-target text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            contact@techsolutions.com
          </a>
          <p className="text-text-secondary/75 mt-4 text-xs">
            © {new Date().getFullYear()} TechSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
