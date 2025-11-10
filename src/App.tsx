import { useState, useEffect } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
import { Menu, X } from "lucide-react";
import faviconImage from 'figma:asset/7d4a521428c31495244b4f72864dfcf44774cd68.png';

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark",
    );
  }, [theme]);

  useEffect(() => {
    // Set favicon dynamically
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-zinc-950 text-white"
          : "bg-white text-zinc-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          theme === "dark" ? "bg-zinc-950/80" : "bg-white/80"
        } backdrop-blur-lg border-b ${
          theme === "dark"
            ? "border-zinc-800"
            : "border-zinc-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl tracking-tight"
          >
            Portfolio
            <span
              className={
                theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-600"
              }
            >
              .
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
            >
              Contact
            </button>
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 hover:${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"} rounded-lg transition-colors`}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              theme === "dark" ? "bg-zinc-900" : "bg-zinc-50"
            } border-t ${
              theme === "dark"
                ? "border-zinc-800"
                : "border-zinc-200"
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left py-2 transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left py-2 transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className={`text-left py-2 transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left py-2 transition-colors hover:${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Home theme={theme} scrollToSection={scrollToSection} />
        <About theme={theme} />
        <Achievements theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}