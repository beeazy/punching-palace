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
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="container mx-auto flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 relative z-30">
        <h1
          className={`${blackopsone.className} text-5xl md:text-7xl font-bold tracking-wider text-white mb-6 animate-text-focus-in`}
        >
          TRAIN LIKE A<span className="block text-red-500">WARRIOR</span>
        </h1>
        <p
          className={`${oswald.className} text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 max-w-2xl text-gray-200 px-4`}
        >
          Welcome to{" "}
          <span className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-red-500 before:skew-y-2 before:rounded-full">
            The Punching Palace
          </span>
          —where champions rise. Train hard, fight smart, and become your best.
        </p>

        <div className="mt-12 flex flex-row gap-6 animate-slide-up">
          <button
            onClick={() => {
              document
                .getElementById("schedule")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition duration-200 ease-in-out"
          >
            START TRAINING
          </button>
          <button
            onClick={() => {
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-red-500 text-white py-3 px-6 rounded-md hover:bg-red-500/20 transition-all"
          >
            VIEW PROGRAMS
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500/20">
            <p className="text-base">⭐️ Trusted by 50+ Active Members</p>
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
          alt="Boxing Training"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          className="opacity-40"
        />
      </div>
    </section>
  );
}
