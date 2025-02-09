import Image from "next/image";
import { blackopsone, oswald } from "../../utils/fonts";
import { motion } from "framer-motion";

export const SuccessStories = () => {
  const stories = [
    {
      name: "James Mwangi",
      image: "/members/james.jpg",
      before: "/transformations/james-before.jpg",
      after: "/transformations/james-after.jpg",
      story:
        "Started as a complete beginner, now competing at national level. Lost 20kg and found my passion.",
      achievement: "National Amateur Boxing Championship Finalist",
      duration: "2 years of training",
    },
    // Add more success stories
  ];

  return (
    <section className="py-16 px-4 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`${blackopsone.className} text-4xl font-bold mb-4 text-red-500`}
          >
            SUCCESS STORIES
          </h2>
          <p
            className={`${oswald.className} text-gray-300 max-w-3xl mx-auto text-lg mb-12`}
          >
            Real people, real transformations. These warriors prove that with
            dedication, anything is possible. 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-700 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-square">
                  <Image
                    src={story.before}
                    alt={`${story.name} before`}
                    fill
                    className="object-cover rounded"
                  />
                  <div className="absolute top-2 left-2 bg-zinc-900/90 px-2 py-1 rounded text-xs text-white">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={story.after}
                    alt={`${story.name} after`}
                    fill
                    className="object-cover rounded"
                  />
                  <div className="absolute top-2 right-2 bg-red-500/90 px-2 py-1 rounded text-xs text-white">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`${oswald.className} text-xl font-bold text-white mb-2`}
                >
                  {story.name}
                </h3>
                <p className="text-gray-300 mb-4">{story.story}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-red-500">
                    <span className="mr-2">🏆</span>
                    {story.achievement}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="mr-2">⏱️</span>
                    {story.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
