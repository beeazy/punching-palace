import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punching Palace Boxing Club | Professional Boxing Training in Kikuyu",
  description:
    "Elite boxing training in Kikuyu, Nairobi. Join our professional boxing classes, get fit with expert coaches, and learn proper technique. First class free!",
  keywords:
    "boxing club Kikuyu, boxing training Nairobi, boxing classes, boxing gym, fitness boxing, boxing coaches Kenya",
  metadataBase: new URL("https://punching-palace.vercel.app"),
  openGraph: {
    type: "website",
    title: "Punching Palace Boxing Club | Professional Boxing Training",
    description:
      "Elite boxing training in Kikuyu. Join our professional classes today!",
    images: "/twitter-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punching Palace Boxing Club",
    description: "Elite boxing training in Kikuyu, Nairobi",
    images: "/twitter-image.jpg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#DC2626",
  other: {
    language: "en",
    "geo.region": "KE-30",
    "geo.placename": "Kikuyu, Nairobi",
    "geo.position": "-1.2500000;36.6666667",
    ICBM: "-1.2500000, 36.6666667",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
