// components/MobileAppBar.tsx
import { Menu, Search, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { blackopsone } from "../utils/fonts";


interface MobileAppBarProps {
  onMenuClick: () => void;
  isScrolled: boolean;
}

export default function MobileAppBar({ onMenuClick, isScrolled }: MobileAppBarProps) {
  const [showShare, setShowShare] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join the Boxing Family at Punching Palace 🥊",
          text: "Come train with us at Punching Palace Boxing Club - where champions are made! 💪",
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowShare(true);
      setTimeout(() => setShowShare(false), 2000);
    }
  };

  return (
    <div
      className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 shadow-red-900/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Status Bar Area */}
      <div className="h-safe-area-inset-top bg-black/50 backdrop-blur-md" />

      {/* App Bar Content */}
      <div className="px-4 h-16 flex items-center justify-between bg-black/50 backdrop-blur-md border-b border-red-900/20">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/logo.jpg"
              alt="Punching Palace Logo"
              width={36}
              height={36}
              className="rounded-full border border-red-500/50"
            />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <h1
              className={`${blackopsone.className} text-xl text-red-500 leading-none`}
            >
              PUNCHING PALACE
            </h1>
            <span className="text-[10px] text-zinc-400">
              Punching Our Way to the Top Since 2020
            </span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 hover:bg-red-500/10 rounded-full transition-colors"
            aria-label="Share"
          >
            <Share2 size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Share feedback tooltip */}
      {showShare && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-full text-sm shadow-lg animate-fade-in border border-red-500/20 backdrop-blur-sm">
          Sharing not supported on this device
        </div>
      )}
    </div>
  );
}