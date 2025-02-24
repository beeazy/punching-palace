"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
import { blackopsone, oswald } from "./utils/fonts";
import { VideoSection } from "./components/media/videosection";
import { TeamSection } from "./components/media/team";
import { GallerySection } from "./components/media/gallery";
import { SuccessStories } from "./components/media/success-stories";
import Script from "next/script";

// You can keep the schema.org JSON-LD script in your layout or page component
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Punching Palace Boxing Club",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Muhuri Road",
    addressLocality: "Kikuyu",
    addressRegion: "Nairobi",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-1.2500000",
    longitude: "36.6666667",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:00",
      closes: "21:00",
    },
  ],
};

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

  const handleSmoothScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Punching Palace Boxing Club | Professional Boxing Training in Kikuyu
        </title>
      </Head>
      <main className="relative">
        <MobileAppBar
          onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
          isScrolled={isScrolled}
        />

        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-black/95 shadow-red-900/20 shadow-lg"
              : "bg-transparent"
          } hidden lg:block border-b border-red-900/20`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16 sm:h-20">
              <div className="flex items-center space-x-3">
                <Link
                  href="#home"
                  scroll={false}
                  onClick={() => handleSmoothScroll("#home")}
                >
                  <div className="relative">
                    <Image
                      src="/logo.jpg"
                      alt="Punching Palace Logo"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full border-2 border-red-500 shadow-lg shadow-red-500/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  </div>
                </Link>
                <div className="flex flex-col">
                  <span
                    className={`${blackopsone.className} text-2xl text-red-500 leading-none`}
                  >
                    PUNCHING PALACE
                  </span>
                  <span className="text-xs text-zinc-400">
                    Punching Our Way to the Top Since 2020
                  </span>
                </div>
              </div>

              <button
                className="lg:hidden text-white p-2 hover:bg-red-500/10 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="hidden lg:flex space-x-8">
                <NavLink href="#home" onClick={handleSmoothScroll}>
                  The Gym
                </NavLink>
                <NavLink href="#about" onClick={handleSmoothScroll}>
                  Our Story
                </NavLink>
                <NavLink href="#programs" onClick={handleSmoothScroll}>
                  Train With Us
                </NavLink>
                <NavLink href="#schedule" onClick={handleSmoothScroll}>
                  When to Come
                </NavLink>
                <NavLink href="#gallery" onClick={handleSmoothScroll}>
                  The Family
                </NavLink>
                <NavLink href="#contact" onClick={handleSmoothScroll}>
                  Hit Us Up
                </NavLink>
              </div>
            </div>

            {isMenuOpen && (
              <div className="lg:hidden absolute w-full left-0 top-full backdrop-blur-lg bg-black/90 border-t border-zinc-800">
                <div className="flex flex-col py-4">
                  <MobileNavLink href="#home" onClick={handleSmoothScroll}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="#about" onClick={handleSmoothScroll}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="#programs" onClick={handleSmoothScroll}>
                    Programs
                  </MobileNavLink>
                  <MobileNavLink href="#schedule" onClick={handleSmoothScroll}>
                    Schedule
                  </MobileNavLink>
                  <MobileNavLink href="#contact" onClick={handleSmoothScroll}>
                    Contact
                  </MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        {isMobile && <div className="h-16" />}

        <Hero />
        <About />
        <Programs />
        <Schedule />
        {/* <TeamSection /> */}
        <GallerySection />
        <VideoSection />

        {/* <SuccessStories /> */}
        <Contacts />
        {!isMobile && <Footer />}
        <MobileBottomNav />
        {isMobile && <div className="h-16" />}
      </main>
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (href: string) => void;
}

interface MobileNavLinkProps extends NavLinkProps {}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link
    href={href}
    scroll={false}
    onClick={(e) => {
      e.preventDefault();
      onClick(href);
    }}
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-lg relative group`}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full" />
  </Link>
);

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <Link
    href={href}
    scroll={false}
    onClick={(e) => {
      e.preventDefault();
      onClick(href);
    }}
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-xl block py-3 px-6 border-b border-zinc-800/50`}
  >
    {children}
  </Link>
);
