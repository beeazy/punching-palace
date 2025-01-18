import React from 'react';
import Image from 'next/image';
import { Black_Ops_One, Oswald } from 'next/font/google';

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

const oswald = Oswald({
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section id='home' className="relative min-h-screen">
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
              
              <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 relative z-20">
                {/* Large Logo in Hero Section */}
    
                <h1
                  className={`${blackopsone.className} text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold tracking-wider text-white mb-4 sm:mb-6`}
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
                      document
                        .getElementById("schedule")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out"
                  >
                    START TRAINING
                  </button>
                  <button
                    // navigate to href="#programs"
                    onClick={() => {
                      document
                        .getElementById("programs")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out"
                  >
                    VIEW PROGRAMS
                  </button>
                </div>
              </div>
    
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/hero-image.jpg"
                  alt="Boxer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  priority
                  className="opacity-50"
                />
              </div>
    
              {/* Scroll indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </section>
  );
}
