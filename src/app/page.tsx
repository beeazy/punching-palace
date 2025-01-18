"use client";

import Head from "next/head";
import Image from "next/image";
import { Black_Ops_One, Oswald } from "next/font/google";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./components/hero";
import About from "./components/about";
import Programs from "./components/programs";
import Schedule from "./components/schedule";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import MobileBottomNav from "./components/bottomnav";
import MobileAppBar from "./components/MobileAppBar";

const blackopsone = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Punching Palace Boxing Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 text-white min-h-screen">
        <MobileAppBar
          onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
          isScrolled={isScrolled}
        />

        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-black shadow-lg" : "bg-transparent"
          } hidden lg:block`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16 sm:h-20">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.jpg"
                  alt="Punching Palace Logo"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <span
                  className={`${blackopsone.className} text-xl sm:text-2xl text-red-500`}
                >
                  PUNCHING PALACE
                </span>
              </div>

              <button
                className="lg:hidden text-white p-2 hover:bg-red-500/10 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="hidden lg:flex space-x-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#programs">Programs</NavLink>
                <NavLink href="#schedule">Schedule</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>

            {/* Mobile Navigation - Improved animation and spacing */}
            {isMenuOpen && (
              <div className="lg:hidden absolute w-full left-0 top-full backdrop-blur-lg bg-black/90 border-t border-zinc-800">
                <div className="flex flex-col py-4">
                  <MobileNavLink
                    href="#home"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </MobileNavLink>
                  <MobileNavLink
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </MobileNavLink>
                  <MobileNavLink
                    href="#programs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Programs
                  </MobileNavLink>
                  <MobileNavLink
                    href="#schedule"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule
                  </MobileNavLink>
                  <MobileNavLink
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        {isMobile && <div className="h-16" />}

        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <About />

        {/* Programs Section */}
        <Programs />

        {/* Schedule Section */}
        <Schedule />

        {/* Contact Section */}
        <Contacts />

        {/* Footer */}
        {!isMobile && <Footer />}

        <MobileBottomNav />

        {isMobile && <div className="h-16" />}
      </main>
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-lg`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-lg block py-2`}
  >
    {children}
  </a>
);
