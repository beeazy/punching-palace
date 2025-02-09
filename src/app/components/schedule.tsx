import { blackopsone, oswald } from "../utils/fonts";


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
            TRAINING HOURS
          </h2>

          <div className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-zinc-800/50 rounded-lg p-8 sm:p-12 text-center border border-zinc-700 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                <span className="text-4xl">⏰</span>
              </div>
            </div>

            <h3
              className={`${oswald.className} text-xl sm:text-2xl font-semibold text-white mb-8`}
            >
              Come Train With Us
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="space-y-4">
                <h4 className={`${oswald.className} text-lg text-red-500`}>
                  Weekdays
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Morning: 6:00 AM - 10:00 AM</p>
                  <p>Evening: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className={`${oswald.className} text-lg text-red-500`}>
                  Weekends
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Saturday: 7:00 AM - 6:00 PM</p>
                  <p>Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transform hover:scale-105 transition duration-200 ease-in-out w-full sm:w-auto"
              >
                Book Your First Class
              </button>
              <a
                href="https://wa.me/254770561906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors duration-200 flex items-center gap-2"
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
                Ask About Classes
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}