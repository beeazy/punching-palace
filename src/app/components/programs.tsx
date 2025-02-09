import { blackopsone, oswald } from '../utils/fonts';
import FeatureCard from './feature_card';
import Image from "next/image";

export default function Programs() {
    return (
      <section
        className="bg-zinc-800 py-24 px-6 relative overflow-hidden"
        id="programs"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/boxing-pattern.png')] opacity-5" />

        <div className="container mx-auto relative z-10">
          <h2
            className={`${blackopsone.className} text-4xl sm:text-5xl font-bold text-center text-red-500 mb-4`}
          >
            GET IN THE RING
          </h2>
          <p
            className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
          >
            From total beginners to seasoned fighters, we've got a spot for you.
            Come see what you're made of! 🥊
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProgramCard
              title="BEGINNER BOXING"
              price=""
              features={[
                "Learn proper technique",
                "Build conditioning",
                "Join the family",
                "No experience needed",
              ]}
              image="/boxer.png"
            />
            <ProgramCard
              title="FIGHTER TRAINING"
              price=""
              features={[
                "Advanced technique",
                "Sparring sessions",
                "Competition prep",
                "Personal attention",
              ]}
              image="/boxing-ring.png"
              featured={true}
            />
            <ProgramCard
              title="GET FIT BOXING"
              price=""
              features={[
                "High-intensity workouts",
                "Learn real boxing",
                "Burn fat & build muscle",
                "All fitness levels",
              ]}
              image="/boxing.png"
            />
          </div>
        </div>
      </section>
    );
}

const ProgramCard = ({
  title,
  price,
  features,
  image,
  featured,
}: {
  title: string;
  price: string;
  features: string[];
  image: string;
  featured?: boolean;
}) => (
  <div
    className={`
    relative overflow-hidden rounded-lg
    ${featured ? "border-2 border-red-500" : "border border-zinc-700"}
    transform hover:scale-105 transition duration-300
  `}
  >
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "contain" }}
        className="brightness-75"
      />
    </div>
    <div className="p-6 bg-zinc-900/95">
      <h3 className={`${oswald.className} text-xl font-bold text-white mb-2`}>
        {title}
      </h3>
      <p className="text-red-500 font-semibold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="mr-2">👊</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);