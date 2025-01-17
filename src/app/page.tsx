"use client";

import Head from "next/head";
import Image from "next/image";
import { Black_Ops_One, Oswald } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const blackopsone = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Punching Palace Boxing Club</title>
      </Head>
      <main className="bg-zinc-900 text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black bg-opacity-95 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16 sm:h-20">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.jpg"
                  alt="Punching Palace Logo"
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span
                  className={`${blackopsone.className} text-xl sm:text-2xl text-red-500`}
                >
                  PUNCHING PALACE
                </span>
              </div>

              <button
                className="lg:hidden text-white p-2"
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

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden pb-6 absolute w-full left-0 bg-black bg-opacity-95">
                <div className="flex flex-col space-y-4 px-4">
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

        {/* Hero Section */}
        <section className="relative min-h-screen pt-16">
          <div className="absolute inset-0 bg-black bg-opacity-100 z-1"></div>
          <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 relative z-20">
            {/* Large Logo in Hero Section */}
            {/* <div className="mb-8 sm:mb-12">
              <Image
                src="/logo.png"
                alt="Punching Palace Logo"
                width={150}
                height={150}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
              <p className={`${oswald.className} text-base sm:text-lg mt-4 text-gray-300`}>
                PUNCHING OUR WAY TO THE TOP!
              </p>
            </div> */}

            <h1
              className={`${blackopsone.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white mb-4 sm:mb-6`}
            >
              PUNCHING OUR
              <span className="block text-red-500">WAY TO THE TOP!</span>
            </h1>
            <p
              className={`${oswald.className} text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 max-w-2xl text-gray-200 px-4`}
            >
              Transform your fitness journey and embrace a healthier lifestyle
              with our exclusive programs.
            </p>
            <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
              <button
                onClick={() => {
                  document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out"
              >
                START TRAINING
              </button>
              <button
                // navigate to href="#programs"
                onClick={() => {
                  document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out"
              >
                VIEW PROGRAMS
              </button>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/hero-image.jpg"
              alt="Boxer"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-zinc-900 py-16 sm:py-24 px-4 sm:px-6" id="about">
          <div className="container mx-auto">
            <h2
              className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
            >
              THE PALACE DIFFERENCE
            </h2>
            <p
              className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg px-4`}
            >
              At Punching Palace Boxing Club, we forge champions through
              discipline, dedication, and world-class training. Our facility
              combines traditional boxing wisdom with modern training
              techniques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 px-4">
              <FeatureCard
                title="Elite Coaching"
                description="Train with professional coaches who have competed at the highest levels."
              />
              <FeatureCard
                title="Premium Facility"
                description="State-of-the-art equipment and multiple training areas designed for optimal results."
              />
              <FeatureCard
                title="All Skill Levels"
                description="Structured programs for beginners to advanced fighters."
              />
              <FeatureCard
                title="Champion Mindset"
                description="Mental conditioning and strategy development for complete fighter development."
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-zinc-800 py-24 px-6" id="programs">
          <div className="container mx-auto">
            <h2
              className={`${blackopsone.className} text-4xl sm:text-5xl font-bold text-center text-red-500 mb-4`}
            >
              OUR PROGRAMS
            </h2>
            <p
              className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
            >
              We offer a variety of programs tailored to all skill levels.
              Whether you're a beginner or an experienced fighter, we have
              something for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <FeatureCard
                title="Beginner Boxing"
                description="Learn the basics of boxing with our beginner-friendly program."
              />
              <FeatureCard
                title="Advanced Boxing"
                description="Take your skills to the next level with our advanced training sessions."
              />
              <FeatureCard
                title="Youth Boxing"
                description="Programs designed specifically for young aspiring boxers."
              />
              <FeatureCard
                title="Fitness Boxing"
                description="Get in shape with our high-intensity fitness boxing classes."
              />
              <FeatureCard
                title="Personal Training"
                description="One-on-one training sessions with our expert coaches."
              />
              <FeatureCard
                title="Competition Training"
                description="Prepare for your next fight with our competition-focused training."
              />
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section
          className="bg-zinc-900 py-16 sm:py-24 px-4 sm:px-6"
          id="schedule"
        >
          <div className="container mx-auto">
            <h2
              className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
            >
              CLASS SCHEDULE
            </h2>

            <div className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-zinc-800 rounded-lg p-8 sm:p-12 text-center border border-zinc-700">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3
                className={`${oswald.className} text-xl sm:text-2xl font-semibold text-white mb-4`}
              >
                New Year Schedule Coming Soon!
              </h3>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-6">
                We're updating our class schedule to serve you better. Stay
                tuned for our new and improved training times!
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <button
                  // navigate to href="#contact"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transform hover:scale-105 transition duration-200 ease-in-out w-full sm:w-auto"
                >
                  Get Notified
                </button>
                <a
                  href="#contact"
                  className="text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold text-lg"
                >
                  Contact Us for Updates
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}

        {/* Contact Section */}
        <section
          className="bg-zinc-800 py-16 sm:py-24 px-4 sm:px-6"
          id="contact"
        >
          <div className="container mx-auto">
            <h2
              className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
            >
              CONNECT WITH US
            </h2>
            <p
              className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
            >
              Ready to start your boxing journey? Get in touch!
            </p>

            <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
              {/* Location Info */}
              <div className="text-center sm:text-left space-y-6">
                <div>
                  <h3
                    className={`${oswald.className} text-xl font-semibold text-white mb-2`}
                  >
                    Our Location
                  </h3>
                  <p className="text-gray-300">Firm and Fit Gymnasium Kikuyu</p>
                  <a
                    href="https://goo.gl/maps/UEMQnBTNzvSbuECi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition duration-200 inline-flex items-center gap-2 mt-1"
                  >
                    <span>Kikuyu, Kenya</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <h3
                    className={`${oswald.className} text-xl font-semibold text-white mb-2`}
                  >
                    Training Hours
                  </h3>
                  <p className="text-gray-300">
                    Monday - Friday: 6:00 AM - 9:00 PM
                  </p>
                  <p className="text-gray-300">Saturday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center sm:text-left space-y-6">
                <div>
                  <h3
                    className={`${oswald.className} text-xl font-semibold text-white mb-2`}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+254715310205"
                      className="text-red-500 hover:text-red-400 transition duration-200 block"
                    >
                      <span className="text-gray-300">Phone:</span> 0715 310205
                    </a>
                    <a
                      href="mailto:firmandfit254@gmail.com"
                      className="text-red-500 hover:text-red-400 transition duration-200 block"
                    >
                      <span className="text-gray-300">Email:</span>{" "}
                      firmandfit254@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3
                    className={`${oswald.className} text-xl font-semibold text-white mb-2`}
                  >
                    Social Media
                  </h3>
                  <a
                    href="https://instagram.com/firmandfit254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>@firmandfit254</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-6 sm:py-8 text-center px-4">
          <div
            className={`${blackopsone.className} text-lg sm:text-xl text-red-500 mb-4`}
          >
            PUNCHING PALACE BOXING CLUB
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
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

interface FeatureCardProps {
  title: string;
  description: string;
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

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-zinc-800 p-6 sm:p-8 rounded-lg text-center transform hover:scale-105 transition duration-200 ease-in-out border border-zinc-700 hover:border-red-500">
    <h3
      className={`${oswald.className} text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4`}
    >
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);
