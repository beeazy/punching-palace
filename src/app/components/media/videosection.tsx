import { useState } from "react";
import { blackopsone, oswald } from "../../utils/fonts";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";

export const VideoSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Training", icon: "🥊" },
    { name: "Fights", icon: "🏆" },
    { name: "Behind Scenes", icon: "📸" },
  ];

  const videos = {
    training: [
      //   {
      //     title: "Inside The Palace",
      //     videoId: "xV7-_tSZdEQ",
      //     description:
      //       "Take a peek at what goes down in our training sessions. Raw, real boxing.",
      //   },
      //   {
      //     title: "Morning Drills",
      //     videoId: "VS73thfxYZI",
      //     description: "Early morning work. This is where champions are made.",
      //   },
      // Add more training videos
      // place holder videos youtube
      {
        title: "Morning Drills",
        videoId: "placeholder-video-id-1",
        description: "Description for placeholder video 1",
      },
      {
        title: "Training Session",
        videoId: "placeholder-video-id-2",
        description: "Description for placeholder video 2",
      },
    ],
    fights: [
      {
        title: "National Novices",
        videoId: "fight-video-id",
        description: "Highlights from our fighters' biggest moments.",
      },
      // Add more fight videos
    ],
    behindScenes: [
      {
        title: "Coach Spotlight",
        videoId: "xV7-_tSZdEQ",
        description:
          "Meet our head coach and learn about his training philosophy",
      },
      {
        title: "Documentary: Guts Over Glory",
        videoId: "VS73thfxYZI",
        description:
          "Follow the journey of Ian Mutele showing us the importance of being motivated and pushing yourself beyond the ordinary.",
      },
    ],
  };

  return (
    <section
      className="py-16 px-4 bg-zinc-800/30 relative overflow-hidden"
      id="videos"
    >
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`${blackopsone.className} text-4xl font-bold mb-4 text-red-500`}
          >
            INSIDE THE RING
          </h2>
          <p
            className={`${oswald.className} text-gray-300 max-w-3xl mx-auto text-lg mb-12`}
          >
            From training sessions to fight nights, witness the journey of our
            fighters. This is where legends are made. 🥊
          </p>
        </div>

        <TabGroup onChange={setActiveTab}>
          <TabList className="flex space-x-2 rounded-xl bg-zinc-900/50 p-1 max-w-md mx-auto mb-8">
            {tabs.map((tab, index) => (
              <Tab
                key={tab.name}
                className={({ selected }) => `
                  w-full rounded-lg py-2.5 text-sm font-medium leading-5
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none
                  ${
                    selected
                      ? "bg-red-500 text-white shadow"
                      : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
                  }
                `}
              >
                <span className="flex items-center justify-center gap-2">
                  {tab.icon} {tab.name}
                </span>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.training.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <VideoCard {...video} />
                  </motion.div>
                ))}
              </div>
            </TabPanel>
            {/* Similar panels for fights and behind scenes */}
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.fights.map((video, index) => (
                  <VideoCard key={index} {...video} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.behindScenes.map((video, index) => (
                  <VideoCard key={index} {...video} />
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>

        {/* WhatsApp Community Link */}
        <div className="mt-12 text-center">
          <a
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${oswald.className} 
              inline-flex items-center gap-2 
              bg-green-600 hover:bg-green-700 
              text-white font-bold py-3 px-6 
              rounded-md transform hover:scale-105 
              transition duration-200 ease-in-out
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            Join Our Boxing Community
          </a>
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({
  title,
  videoId,
  description,
}: {
  title: string;
  videoId: string;
  description: string;
}) => (
  <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-red-500/20 group">
    <div className="aspect-video bg-zinc-800 relative overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="p-6">
      <h3
        className={`${oswald.className} text-xl mb-2 text-white group-hover:text-red-500 transition-colors`}
      >
        {title}
      </h3>
      <p className={`${oswald.className} text-gray-400 text-sm`}>
        {description}
      </p>
    </div>
  </div>
);
