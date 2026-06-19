import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUp, 
  Search, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageSquare,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Megaphone
} from "lucide-react";
import { useTheme } from "../ThemeContext";
import { personalInfo, projects, services } from "../data";

// Type definitions for search results
interface SearchResult {
  id: string;
  title: string;
  type: "project" | "service";
  category: string;
  url: string;
}

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Scroll logic for Back to Top and Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrolled > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle Search Query filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const matchedServices: SearchResult[] = services
      .filter(s => s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query))
      .map(s => ({
        id: s.id,
        title: s.title,
        type: "service",
        category: s.category,
        url: `/services#${s.id}`
      }));

    const matchedProjects: SearchResult[] = projects
      .filter(p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.technologies.some(t => t.toLowerCase().includes(query)))
      .map(p => ({
        id: p.id,
        title: p.title,
        type: "project",
        category: p.category,
        url: `/projects?search=${p.id}`
      }));

    setSearchResults([...matchedServices, ...matchedProjects]);
  }, [searchQuery]);

  // Click outside search container to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchResultClick = (result: SearchResult) => {
    setSearchOpen(false);
    setSearchQuery("");
    
    if (result.type === "project") {
      navigate(`/projects?project=${result.id}`);
    } else {
      navigate(`/services#${result.id}`);
      // Scroll to that element smoothly
      setTimeout(() => {
        const el = document.getElementById(result.id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  // Retrieve matching Dynamic Lucide Icon
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe": return <Globe className="w-5 h-5 text-pprimary" />;
      case "Smartphone": return <Smartphone className="w-5 h-5 text-pprimary" />;
      case "Monitor": return <Monitor className="w-5 h-5 text-pprimary" />;
      case "Palette": return <Palette className="w-5 h-5 text-pprimary" />;
      case "Megaphone": return <Megaphone className="w-5 h-5 text-pprimary" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-pprimary" />;
      default: return <Globe className="w-5 h-5 text-pprimary" />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-pbg text-ptext select-none">
      
      {/* Dynamic Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-pprimary via-psecondary to-paccent"
        style={{ width: `${scrollProgress}%`, transition: "width 0.1s" }}
        id="scroll-progress-indicator"
      />

      {/* Modern Blurred Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-pbg/80 backdrop-blur-md border-b border-pborder transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent">
              {personalInfo.logoText}
            </span>
            <div className="w-2 h-2 rounded-full bg-paccent animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide hover:text-pprimary transition-colors duration-300 relative py-2 px-1 ${
                    isActive ? "text-pprimary" : "text-pmuted hover:text-ptext"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pprimary to-psecondary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action Utilities (Search, Theme Toggle, Mobile Trigger) */}
          <div className="flex items-center space-x-4">
            
            {/* Interactive Search Tool */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-full hover:bg-pborder transition-colors"
                aria-label="Search content"
                id="search-btn-trigger"
              >
                <Search className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-3 w-80 md:w-96 rounded-xl border border-pborder bg-pcard p-4 shadow-2xl z-50 text-ptext"
                    id="search-dropdown-container"
                  >
                    <div className="flex items-center border border-pborder rounded-lg px-3 py-2 bg-pbg">
                      <Search className="w-4 h-4 text-pmuted mr-2" />
                      <input
                        type="text"
                        placeholder="Search services or projects (e.g. Flutter, SEO)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-xs bg-transparent border-none outline-none focus:ring-0 text-ptext"
                        autoFocus
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery("")}>
                          <X className="w-4 h-4 text-pmuted hover:text-ptext" />
                        </button>
                      )}
                    </div>

                    {/* Results Container */}
                    <div className="mt-3 max-h-60 overflow-y-auto space-y-2">
                      {searchResults.length > 0 ? (
                        searchResults.map(result => (
                          <div
                            key={`${result.type}-${result.id}`}
                            onClick={() => handleSearchResultClick(result)}
                            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-pborder cursor-pointer transition-colors"
                          >
                            <div>
                              <p className="text-xs font-semibold">{result.title}</p>
                              <span className="text-[10px] uppercase font-bold tracking-widest text-psecondary">
                                {result.type} • {result.category}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-pmuted" />
                          </div>
                        ))
                      ) : searchQuery ? (
                        <p className="text-center text-xs text-pmuted py-4">No portfolio entries match your query.</p>
                      ) : (
                        <p className="text-center text-xs text-pmuted py-2">Start typing to search Projects & Services...</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dynamic Theme System toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-pborder transition-colors relative text-ptext"
              aria-label="Toggle theme mode"
              id="theme-mode-switch"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-indigo-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full hover:bg-pborder transition-colors text-ptext"
              aria-label="Open navigation menu"
              id="mobile-menu-trigger"
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>
        </div>
      </header>

      {/* Slide-out Mobile Header/Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Vertical Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-sm bg-pcard p-6 border-l border-pborder shadow-2xl z-50 flex flex-col justify-between"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-black bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent">
                    {personalInfo.logoText}
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-pborder transition-colors text-ptext"
                    id="mobile-drawer-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Vertical Links Stack */}
                <nav className="flex flex-col space-y-5" id="mobile-nav-stack">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-lg font-bold transition-colors py-2 px-3 rounded-lg flex items-center justify-between ${
                          isActive 
                            ? "bg-pprimary/10 text-pprimary" 
                            : "text-pmuted hover:text-ptext hover:bg-pborder"
                        }`
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Direct Info footer inside Mobile menu */}
              <div className="border-t border-pborder pt-6 mt-auto">
                <p className="text-xs text-pmuted mb-3">Get in Touch with Muhammad Asif</p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-semibold hover:text-pprimary flex items-center space-x-2 text-ptext mb-2 break-all"
                >
                  <Mail className="w-4 h-4 text-psecondary flex-shrink-0" />
                  <span>{personalInfo.email}</span>
                </a>
                <div className="flex items-center space-x-3 mt-4">
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-pbg hover:text-pprimary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-pbg hover:text-pprimary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-pbg hover:text-pprimary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-pbg hover:text-pprimary transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pages Payload Container */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Reusable Premium Footer */}
      <footer className="bg-pcard border-t border-pborder text-ptext relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12" id="footer-ggrid">
            
            {/* Column 1: Info and Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-black bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent">
                  {personalInfo.logoText}
                </span>
                <div className="w-2 h-2 rounded-full bg-paccent animate-pulse" />
              </Link>
              <p className="text-xs text-pmuted leading-relaxed">
                Full-stack developer engineering modern cloud systems, desktop client managers, Flutter mobile applications, and digital marketing strategies.
              </p>
              <div className="flex space-x-3.5 pt-2">
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-pborder hover:bg-pprimary/10 hover:border-pprimary hover:text-pprimary transition-all">
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-pborder hover:bg-pprimary/10 hover:border-pprimary hover:text-pprimary transition-all">
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-pborder hover:bg-pprimary/10 hover:border-pprimary hover:text-pprimary transition-all">
                  <Twitter className="w-4.5 h-4.5" />
                </a>
                <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-pborder hover:bg-pprimary/10 hover:border-pprimary hover:text-pprimary transition-all">
                  <Facebook className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-pprimary">Quick Links</h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-xs text-pmuted hover:text-pprimary transition-colors flex items-center space-x-1.5 py-0.5">
                      <ChevronRight className="w-3.5 h-3.5 text-psecondary" />
                      <span>{link.name} Navigation</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Custom Services Highlight Links */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-psecondary">Core Agency Services</h3>
              <ul className="space-y-2.5">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link to="/services" className="text-xs text-pmuted hover:text-psecondary transition-colors flex items-center space-x-1.5 py-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-paccent" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Location Contact Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-paccent">Contact Hub</h3>
              <div className="space-y-3 text-xs text-pmuted">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4.5 h-4.5 text-paccent flex-shrink-0 mt-0.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4.5 h-4.5 text-pprimary flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-pprimary break-all">{personalInfo.email}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4.5 h-4.5 text-psecondary flex-shrink-0" />
                  <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-psecondary font-semibold">Join Asif on WhatsApp</a>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright Divider */}
          <div className="border-t border-pborder mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-pmuted text-center">
            <p>© {new Date().getFullYear()} Muhammad Asif. All rights reserved. Created with high-contrast luxury UI standards.</p>
            <p className="mt-2 md:mt-0 bg-pbg border border-pborder px-3.5 py-1 rounded-full text-paccent font-bold tracking-wider">
              {personalInfo.title}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Indicator Back To Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-pprimary hover:bg-psecondary shadow-lg hover:shadow-xl transition-all z-40 text-white cursor-pointer group"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            
            {/* Concentric rotating percentage ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-neutral-800/10 fill-none"
                strokeWidth="2.5"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-white fill-none"
                strokeWidth="2.5"
                strokeDasharray="113"
                strokeDashoffset={113 - (113 * scrollProgress) / 100}
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button on bottom-left corner */}
      <div className="fixed bottom-6 left-6 z-50 group flex items-center" id="whatsapp-floating-parent">
        <a
          href={personalInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Backing Rings */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
          <span className="absolute -inset-2 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />
          
          <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
        </a>

        {/* Hover Tooltip */}
        <div className="absolute left-16 bg-pcard border border-pborder text-ptext text-[10px] sm:text-xs font-black py-2 px-3 rounded-lg shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>

    </div>
  );
};
