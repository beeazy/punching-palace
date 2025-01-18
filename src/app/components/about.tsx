import React from 'react';
import { Black_Ops_One, Oswald } from 'next/font/google';

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

const oswald = Oswald({
  subsets: ['latin'],
});

export default function About() {
  return (
    <section className="bg-zinc-900 py-24 px-6" id="about">
      <div className="container mx-auto">
        <h2 className={`${blackopsone.className} text-4xl sm:text-5xl font-bold text-center text-red-500 mb-4`}>
          THE PALACE DIFFERENCE
        </h2>
        <p className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}>
          At Punching Palace Boxing Camp, we forge champions through discipline, dedication, and world-class training.
          Our facility combines traditional boxing wisdom with modern training techniques.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
  );
}

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-zinc-800 p-8 rounded-lg text-center transform hover:scale-105 transition duration-200 ease-in-out border border-zinc-700 hover:border-red-500">
    <h3 className={`${oswald.className} text-xl font-semibold text-white mb-4`}>{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);