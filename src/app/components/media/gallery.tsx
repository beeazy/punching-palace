import { useState } from "react";
import { blackopsone, oswald } from "../../utils/fonts";
import { motion } from "framer-motion";

const urlEndpoint = "https://ik.imagekit.io/zbt3fl83rg/";

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos", icon: "📸" },
    { id: "training", name: "Training", icon: "🥊" },
    { id: "events", name: "Events", icon: "🏆" },
    { id: "members", name: "Members", icon: "👥" },
  ];

  const images = [
    {
      src: urlEndpoint + "palace/PunchingPalace18.jpeg",
      category: "members",
      title: "Back in the day",
      date: "Throwback",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace19.jpeg",
      category: "members",
      title: "Back in the day",
      date: "Throwback",
    },

    {
      src: urlEndpoint + "palace/PunchingPalace1.jpeg",
      category: "members",
      title: "Back in the day",
      date: "Throwback",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace2.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace3.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace4.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace5.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace6.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace7.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace8.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace9.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace10.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace11.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace12.jpeg",
      category: "training",
      title: "Light Sparring Session",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace13.jpeg",
      category: "events",
      title: "Nairobi Novices Championship",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace14.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace15.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace16.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
    {
      src: urlEndpoint + "palace/PunchingPalace17.jpeg",
      category: "members",
      title: "The Team",
      date: "2025",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section
      className="py-16 px-4 bg-zinc-800 relative overflow-hidden"
      id="gallery"
    >
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 bg-center" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`${blackopsone.className} pt-12 text-4xl font-bold mb-4 text-red-500`}
          >
            THE FAMILY ALBUM
          </h2>
          <p
            className={`${oswald.className} text-gray-300 max-w-3xl mx-auto text-lg mb-8`}
          >
            Moments captured in the ring and beyond. This is our boxing family.
            📸
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  ${oswald.className}
                  px-6 py-2 rounded-full text-sm
                  transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-red-500 text-white"
                      : "bg-zinc-700/50 text-gray-300 hover:bg-zinc-700"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {category.icon} {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-900"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`${oswald.className} text-white text-lg`}>
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
