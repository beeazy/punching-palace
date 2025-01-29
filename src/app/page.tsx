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
import VideoSection from "./components/videosection";

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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="language" content="en" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Punching Palace Boxing Club | Professional Boxing Training in Kikuyu"
        />
        <meta
          name="description"
          content="Elite boxing training in Kikuyu, Nairobi. Join our professional boxing classes, get fit with expert coaches, and learn proper technique. First class free!"
        />
        <meta
          name="keywords"
          content="boxing club Kikuyu, boxing training Nairobi, boxing classes, boxing gym, fitness boxing, boxing coaches Kenya"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://punching-palace.vercel.app" />
        <meta
          property="og:title"
          content="Punching Palace Boxing Club | Professional Boxing Training"
        />
        <meta
          property="og:description"
          content="Elite boxing training in Kikuyu. Join our professional classes today!"
        />
        <meta
          property="og:image"
          content="https://punching-palace.vercel.app/twitter-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://punching-palace.vercel.app" />
        <meta name="twitter:title" content="Punching Palace Boxing Club" />
        <meta
          name="twitter:description"
          content="Elite boxing training in Kikuyu, Nairobi"
        />
        <meta
          name="twitter:image"
          content="https://punching-palace.vercel.app/twitter-image.jpg"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "06:00",
                closes: "21:00",
              },
            ],
          })}
        </script>

        {/* Geographic Tags */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Kikuyu, Nairobi" />
        <meta name="geo.position" content="-1.2500000;36.6666667" />
        <meta name="ICBM" content="-1.2500000, 36.6666667" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#DC2626" />
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
                <Link
                  href="#home"
                  scroll={false}
                  onClick={() => handleSmoothScroll("#home")}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Punching Palace Logo"
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                  />
                </Link>
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
                <NavLink href="#home" onClick={handleSmoothScroll}>
                  Home
                </NavLink>
                <NavLink href="#about" onClick={handleSmoothScroll}>
                  About
                </NavLink>
                <NavLink href="#programs" onClick={handleSmoothScroll}>
                  Programs
                </NavLink>
                <NavLink href="#schedule" onClick={handleSmoothScroll}>
                  Schedule
                </NavLink>
                <NavLink href="#contact" onClick={handleSmoothScroll}>
                  Contact
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
        <VideoSection />
        <Schedule />
        <Contacts />
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
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-lg`}
  >
    {children}
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
    className={`${oswald.className} text-gray-300 hover:text-red-500 transition duration-200 text-lg block py-2`}
  >
    {children}
  </Link>
);
