import { oswald } from "../utils/fonts";


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
export default FeatureCard;

interface FeatureCardProps {
  title: string;
  description: string;
}