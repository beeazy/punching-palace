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
          title: 'Punching Palace Boxing Club',
          text: 'Check out Punching Palace Boxing Club!',
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
    <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      {/* Status Bar Area */}
      <div className="h-safe-area-inset-top bg-black/50 backdrop-blur-md" />
      
      {/* App Bar Content */}
      <div className="px-4 h-16 flex items-center justify-between bg-black/50 backdrop-blur-md">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Punching Palace Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className={`${blackopsone.className} text-xl text-red-500`}>
            PUNCHING PALACE
          </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Share"
          >
            <Share2 size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Share feedback tooltip */}
      {showShare && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full text-sm shadow-lg animate-fade-in">
          Sharing not supported on this device
        </div>
      )}
    </div>
  );
}