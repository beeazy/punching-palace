import { Black_Ops_One, Oswald } from 'next/font/google';
import FeatureCard from './feature_card';

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

const oswald = Oswald({
  subsets: ['latin'],
});

export default function Programs() {
    return (
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
    );
}