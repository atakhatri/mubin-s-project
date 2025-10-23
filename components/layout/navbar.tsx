"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FC } from "react";
import Image from "next/image";
import { useEffect } from "react";
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  // { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const MenuIcon: FC<{ open: boolean }> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 p-2 md:p-4 bg-transparent">
      <nav
        className={`bg-black rounded-xl border border-border-color shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-4xl mx-auto" : "max-w-7xl mx-auto"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="cursor-target flex items-center gap-2 text-3xl font-bold text-primary transition-all duration-200 hover:scale-105 hover:opacity-90"
              >
                <Image
                  src="/logo.svg"
                  alt="TechSolutions Logo"
                  width={60}
                  height={40}
                />
                <span>TechSolutions</span>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`cursor-target nav-link-underline transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-primary font-semibold nav-link-active"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex md:hidden">
              <button
                className="cursor-target text-text-secondary hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <MenuIcon open={mobileMenuOpen} />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-slide-down">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`cursor-target nav-link-underline block px-3 py-2 rounded-md transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-text-secondary hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between px-3 py-2"></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
