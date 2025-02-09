import { oswald } from "../utils/fonts";


const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="bg-zinc-800/70 p-6 sm:p-8 rounded-lg text-center transform hover:scale-105 transition duration-200 ease-in-out border border-zinc-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5 backdrop-blur-sm">
    <div className="mb-4">
      <div className="w-12 h-12 mx-auto bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
        <span className="text-2xl">🥊</span>
      </div>
    </div>
    <h3
      className={`${oswald.className} text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4`}
    >
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
      {description}
    </p>
    <div className="mt-4 w-12 h-1 bg-red-500/20 mx-auto rounded-full" />
  </div>
);
export default FeatureCard;

interface FeatureCardProps {
  title: string;
  description: string;
}