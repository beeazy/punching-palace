import { oswald } from "../utils/fonts";

export const VideoSection3 = () => {
  const videos = [
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
  ];

  const gridClassName =
    videos.length === 1
      ? "max-w-4xl mx-auto"
      : videos.length === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-8" // Two videos
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"; // Three or more videos

  return (
    <section className="py-16 px-4 bg-zinc-800/30" id="gallery">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${oswald.className} text-4xl font-bold mb-4`}>
            Step Into Our Ring
          </h2>
          <p
            className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg mb-12`}
          >
            Experience the raw energy of Punching Palace. See how we're shaping
            champions and building a community that fights together. 🥊
          </p>
        </div>

        <div className={gridClassName}>
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              videoId={video.videoId}
              description={video.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center space-y-6">
          <a
            href="https://chat.whatsapp.com/JXVR4pXZ460Be8BjKoCBUi"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${oswald.className} 
              group
              bg-zinc-700 
              hover:bg-zinc-800 
              text-white 
              px-8 
              py-4 
              rounded-xl
              shadow-lg
              hover:shadow-xl
              transition-all 
              duration-300 
              inline-flex 
              items-center 
              gap-2
              text-lg
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="17.5"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>{" "}
            Join Our Boxing Community
          </a>
          <p
            className={`
            ${oswald.className} 
            text-gray-400 
            text-base
            max-w-md 
            mx-auto
          `}
          >
            Get access to exclusive content, training tips, and community in our
            WhatsApp group.
          </p>
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
  <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div className="aspect-video bg-zinc-800 relative">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="p-6">
      <h3 className={`${oswald.className} text-xl mb-2`}>{title}</h3>
      <p className={`${oswald.className} text-gray-400 text-sm`}>{description}</p>
    </div>
  </div>
);

export default VideoSection3;
