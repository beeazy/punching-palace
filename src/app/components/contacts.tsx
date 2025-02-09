import { blackopsone, oswald } from "../utils/fonts";


export default function Contacts() {
  return (
    <section
      className="bg-zinc-800 py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      id="contact"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto relative z-10">
        <h2
          className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
        >
          JOIN THE FAMILY
        </h2>
        <p
          className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
        >
          Ready to start your boxing journey? Hit us up! 👊
        </p>

        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {/* Location Info */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Find Us Here
              </h3>
              <p className="text-gray-300">Firm and Fit Gymnasium Kikuyu</p>
              <a
                href="https://goo.gl/maps/UEMQnBTNzvSbuECi8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition duration-200 inline-flex items-center gap-2 mt-1"
              >
                <span>Along Muhuri Road</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Get in Touch
              </h3>
              <div className="flex flex-col space-y-3 items-center sm:items-start">
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Call Coach Elly Owino</span>
                </a>
                <a
                  href="https://wa.me/254770561906"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Follow Our Journey
              </h3>
              <div className="flex flex-col space-y-3 items-center sm:items-start">
                <a
                  href="https://instagram.com/firmandfit254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@firmandfit254</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative w-full h-[300px] sm:h-full rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
            <iframe
              title="Firm and Fit Gymnasium Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7600770817424!2d36.6666667!3d-1.2500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b4a66696dd1%3A0x1c5e3e5b1d36c117!2sFirm%20and%20Fit%20Gymnasium%20Kikuyu!5e0!3m2!1sen!2ske!4v1625764283456!5m2!1sen!2ske"
              className="absolute inset-0 w-full h-full filter contrast-75 hover:contrast-100 transition-all duration-300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}