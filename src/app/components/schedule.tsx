import { Black_Ops_One, Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ['latin'],
});

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Schedule() {
    return (
        <section
          className="bg-zinc-900 py-16 sm:py-24 px-4 sm:px-6"
          id="schedule"
        >
          <div className="container mx-auto">
            <h2
              className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
            >
              CLASS SCHEDULE
            </h2>

            <div className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-zinc-800 rounded-lg p-8 sm:p-12 text-center border border-zinc-700">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3
                className={`${oswald.className} text-xl sm:text-2xl font-semibold text-white mb-4`}
              >
                New Year Schedule Coming Soon!
              </h3>

              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-6">
                We're updating our class schedule to serve you better. Stay
                tuned for our new and improved training times!
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <button
                  // navigate to href="#contact"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transform hover:scale-105 transition duration-200 ease-in-out w-full sm:w-auto"
                >
                  Get Notified
                </button>
                <a
                  href="#contact"
                  className="text-red-500 hover:text-red-400 transition-colors duration-200 font-semibold text-lg"
                >
                  Contact Us for Updates
                </a>
              </div>
            </div>
          </div>
        </section>
    )
}