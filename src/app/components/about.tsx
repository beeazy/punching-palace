import React from "react";
import { blackopsone, oswald } from "../utils/fonts";

export default function About() {
  return (
    <section
      className="bg-zinc-900 py-24 px-6 relative overflow-hidden"
      id="about"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/logo.png')] opacity-10" />

      <div className="container mx-auto relative z-10">
        <h2
          className={`${blackopsone.className} text-4xl sm:text-5xl font-bold text-center text-red-500 mb-4`}
        >
          THE REAL DEAL
        </h2>
        <p
          className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
        >
          At Punching Palace, we're about real boxing, real community, and real
          results. Coach Elly Owino brings years of ring experience to help you
          become your strongest self. 💪
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon="🥊"
            title="Real Boxing Knowledge"
            description="Learn from someone who's been in the ring. Coach Owino knows what works because he's lived it."
          />
          <FeatureCard
            icon="💪"
            title="No Ego Zone"
            description="Leave your attitude at the door. Here, we're all family working to get better together."
          />
          <FeatureCard
            icon="🌟"
            title="Champion Mindset"
            description="Whether you want to compete or get fit, we'll push you to be your absolute best."
          />
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
          <div className="flex flex-col items-center text-center">
            <img
              src="/ian.png"
              alt="Boxing Member"
              className="w-20 h-20 rounded-full mb-4 border-2 border-red-500"
            />
            <p className="text-lg text-gray-300 italic mb-4">
              "Coach Elly Owino... let's say he's like a father to me, and a
              really great mentor."
            </p>
            <p className="text-red-500 font-semibold">
              - Ian Mutele
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="bg-zinc-800/50 p-8 rounded-lg text-center transform hover:scale-105 transition duration-200 ease-in-out border border-zinc-700 hover:border-red-500/50 hover:shadow-lg">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className={`${oswald.className} text-xl font-semibold text-white mb-4`}>
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);
