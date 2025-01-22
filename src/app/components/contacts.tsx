import { Black_Ops_One, Oswald } from 'next/font/google';

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

const oswald = Oswald({
  subsets: ['latin'],
});

export default function Contacts() {
  return (
    <section className="bg-zinc-800 py-16 sm:py-24 px-4 sm:px-6" id="contact">
      <div className="container mx-auto">
        <h2
          className={`${blackopsone.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-red-500 mb-4`}
        >
          CONNECT WITH US
        </h2>
        <p
          className={`${oswald.className} text-center text-gray-300 mt-4 max-w-3xl mx-auto text-lg`}
        >
          Ready to start your boxing journey? Get in touch!
        </p>

        <div className="mt-12 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {/* Location Info */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Our Location
              </h3>
              <p className="text-gray-300">Firm and Fit Gymnasium Kikuyu</p>
              <a
                href="https://goo.gl/maps/UEMQnBTNzvSbuECi8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition duration-200 inline-flex items-center gap-2 mt-1"
              >
                <span>Muhuri Rd, Kenya</span>
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
                Training Hours
              </h3>
              <p className="text-gray-300">
                Monday - Friday: 6:00 AM - 9:00 PM
              </p>
              <p className="text-gray-300">Saturday: 7:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Sunday: 8:00 AM - 2:00 PM</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Contact Information
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+254715310205"
                  className="text-red-500 hover:text-red-400 transition duration-200 block"
                >
                  <span className="text-gray-300">Phone:</span> 0715 310205
                </a>
                <a
                  href="mailto:firmandfit254@gmail.com"
                  className="text-red-500 hover:text-red-400 transition duration-200 block"
                >
                  <span className="text-gray-300">Email:</span>{" "}
                  firmandfit254@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3
                className={`${oswald.className} text-xl font-semibold text-white mb-2`}
              >
                Social Media
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
                <a
                  href="https://facebook.com/FirmNFit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Firm N Fit Gymnasium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}