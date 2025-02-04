// components/MobileBottomNav.tsx
import { Home, Info, Calendar, PhoneCall, Dumbbell, Film } from "lucide-react";
import { useEffect, useState } from "react";
import { oswald } from "../utils/fonts";

export default function MobileBottomNav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!isMobile) return null;

  const navItems = [
    { icon: <Home size={24} />, label: 'Home', href: '#home' },
    // { icon: <Info size={24} />, label: 'About', href: '#about' },
    { icon: <Dumbbell size={24} />, label: 'Programs', href: '#programs' },
    // { icon: <Calendar size={24} />, label: 'Schedule', href: '#schedule' },
    // gallery section
    { icon: <Film size={24} />, label: 'Gallery', href: '#gallery' },
    { icon: <PhoneCall size={24} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 border-t border-zinc-800 z-50 backdrop-blur-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-red-500 active:text-red-600 transition-colors duration-200"
          >
            {item.icon}
            <span className={`${oswald.className} text-xs mt-1`}>{item.label}</span>
          </a>
        ))}
      </div>
      {/* Add safe area padding for modern mobile browsers */}
      <div className="h-safe-area-inset-bottom bg-black" />
    </nav>
  );
}