import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BackToTopButton from "../components/ui/back-to-top";
import { ThemeProvider } from "../components/providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TechSolutions | Professional IT Services",
  description:
    "Web development, security, SEO, CRM, and infrastructure solutions for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${poppins.variable} ${roboto.variable} font-sans bg-background text-text-primary`}
        >
          <div className="flex flex-col min-h-screen relative">
            {/* Emerald Radial Glow Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
              }}
            />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <BackToTopButton />
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
