import Image from "next/image";
import { blackopsone, oswald } from "../../utils/fonts";
import { motion } from "framer-motion";

export const TeamSection = () => {
  const team: any = [
    // {
    //   name: "Coach Owino",
    //   role: "Head Coach",
    //   image: "/coach-elly.jpg",
    //   bio: "15+ years of boxing experience. Former national champion. Dedicated to building champions and changing lives through boxing.",
    //   achievements: [
    //     "National Champion 2010",
    //     "Certified Boxing Coach",
    //     "Trained 3 Amateur Champions",
    //   ],
    //   instagram: "",
    // },
    // Add more team members
    
  ];

  return (
    <section
      className="py-16 px-4 bg-zinc-900 relative overflow-hidden"
      id="team"
    >
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`${blackopsone.className} text-4xl font-bold mb-4 text-red-500`}
          >
            MEET THE TEAM
          </h2>
          <p
            className={`${oswald.className} text-gray-300 max-w-3xl mx-auto text-lg mb-12`}
          >
            The dedicated coaches who'll push you to your limits and beyond.
            Your success is our mission. 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member: any, index: any) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-700 hover:border-red-500/20 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`${oswald.className} text-xl font-bold text-white mb-1`}
                >
                  {member.name}
                </h3>
                <p className="text-red-500 text-sm mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="space-y-2">
                  {member.achievements.map((achievement: any, i: any) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <span className="mr-2">🏆</span>
                      {achievement}
                    </div>
                  ))}
                </div>
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors mt-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
