// components/MobileBottomNav.tsx
import { Home, Dumbbell, Film, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { oswald } from "../utils/fonts";

export default function MobileBottomNav() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Add scroll spy for active section
    const handleScroll = () => {
      const sections = ["home", "programs", "gallery", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isMobile) return null;

  const navItems = [
    {
      icon: <Home size={24} />,
      label: "Home",
      href: "#home",
      id: "home",
    },
    {
      icon: <Dumbbell size={24} />,
      label: "Programs",
      href: "#programs",
      id: "programs",
    },
    {
      icon: <Film size={24} />,
      label: "Gallery",
      href: "#gallery",
      id: "gallery",
    },
    {
      icon: <PhoneCall size={24} />,
      label: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent -top-8" />

      {/* Navigation content */}
      <div className="relative z-10">
        <div className="flex justify-around items-center h-16 bg-black/95 border-t border-zinc-800/50 backdrop-blur-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`
                flex flex-col items-center justify-center w-full h-full
                ${activeSection === item.id ? "text-red-500" : "text-gray-400"}
                transition-all duration-200 active:scale-95
                relative
              `}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <span className="absolute -top-0.5 left-1/2 w-12 h-0.5 bg-red-500 -translate-x-1/2 rounded-full" />
              )}

              {/* Icon */}
              <span
                className={`
                transform transition-transform duration-200
                ${activeSection === item.id ? "scale-110" : "scale-100"}
              `}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                className={`
                ${oswald.className} 
                text-xs 
                mt-1
                transition-opacity duration-200
                ${activeSection === item.id ? "opacity-100" : "opacity-70"}
              `}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Safe area padding for modern mobile browsers */}
      <div className="h-safe-area-inset-bottom bg-black relative z-10" />
    </nav>
  );
}