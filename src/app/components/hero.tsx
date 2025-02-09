import React, { useEffect, useState } from "react";
import Image from "next/image";
import { blackopsone, oswald } from "../utils/fonts";

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-900"
    >
      <div className="absolute inset-0 z-10 bg-[url('/grain.png')] opacity-30 mix-blend-overlay" />

      <div className="absolute inset-0 z-20">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-red-500/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 relative z-30">
        <h1
          className={`${blackopsone.className} text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold tracking-wider text-white mb-4 sm:mb-6 animate-text-focus-in`}
        >
          TRAIN LIKE A
          <span className="block text-red-500 animate-text-glow">WARRIOR</span>
        </h1>
        <p
          className={`${oswald.className} text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 max-w-2xl text-gray-200 px-4`}
        >
          Join the family at Punching Palace. Whether you're here to fight or
          get fit, Coach Owino's got your back! 👊
        </p>

        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row animate-slide-up">
          <button
            onClick={() => {
              document
                .getElementById("schedule")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out hover:shadow-lg hover:shadow-red-500/20"
          >
            GET STARTED 👊
          </button>
          <button
            onClick={() => {
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-white/50 hover:border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out backdrop-blur-sm"
          >
            SEE THE WORKOUTS
          </button>
        </div>

        <div className="absolute bottom-32 left-4 animate-float opacity-75 hover:opacity-100 transition-opacity">
          <div className="bg-black/80 backdrop-blur-lg px-4 py-2 rounded-full border border-red-500/20">
            <p className="text-sm">⭐️ 50+ Active Members</p>
          </div>
        </div>
        <div className="absolute bottom-48 right-4 animate-float opacity-75 hover:opacity-100 transition-opacity delay-100">
          <div className="bg-black/80 backdrop-blur-lg px-4 py-2 rounded-full border border-red-500/20">
            <p className="text-sm">🏆 Champions</p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Boxing Training at Punching Palace"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          className="opacity-50 scale-110 animate-ken-burns"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <svg
          className="w-6 h-6 text-white opacity-75 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
