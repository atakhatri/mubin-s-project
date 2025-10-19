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
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${roboto.variable} font-sans bg-background text-text-primary`}
      >
        <ThemeProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
