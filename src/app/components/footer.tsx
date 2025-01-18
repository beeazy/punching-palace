import React from 'react';
import { Black_Ops_One } from 'next/font/google';

const blackopsone = Black_Ops_One({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className="bg-black py-6 sm:py-8 text-center px-4">
      <div className={`${blackopsone.className} text-lg sm:text-xl text-red-500 mb-4`}>
        PUNCHING PALACE BOXING CLUB
      </div>
      <p className="text-gray-500 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}