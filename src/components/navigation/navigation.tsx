import { NavigationProps } from "./navigation.types";
import React from "react";

// Utility: Animate scroll and highlight section
function scrollToSectionWithEffect(
  id: string,
  setActiveSection: (s: string) => void
) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 32; // Offset artırıldı
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);

    el.classList.add("focus-animate-section");
    setTimeout(() => {
      el.classList.remove("focus-animate-section");
    }, 700);
  }
}

const Navigation: React.FC<NavigationProps> = ({
  data,
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/img/logo.webp`}
          alt="Logo"
          className="h-12"
        />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {data.navigation.map((item: string, index: number) => (
            <a
              key={index}
              className={`text-gray-300 hover:text-white transition-colors duration-300 relative group ${
                activeSection === item.toLowerCase() ? "text-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSectionWithEffect(item.toLowerCase(), setActiveSection);
              }}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
                  activeSection === item.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>
        {/* Mobile menu button */}
        
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {data.navigation.map((item: string, index: number) => (
              <a
                key={index}
                className={`text-gray-300 hover:text-white py-2 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-white font-bold"
                    : ""
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSectionWithEffect(
                    item.toLowerCase(),
                    setActiveSection
                  );
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;

// Animasyon için global CSS ekleyin (örnek):
// .focus-animate-section { transition: box-shadow 0.7s; box-shadow: 0 0 0 4px #a78bfa; }
