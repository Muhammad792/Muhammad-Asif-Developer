import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Layers, Briefcase, Award, Zap, Smile } from "lucide-react";
import { services } from "../data";
import { ServiceCard } from "../components/ServiceCard";

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { hash } = useLocation();

  // Scroll to target service if anchor ID is present in the URL
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  const categories = [
    { value: "all", label: "All Agencies Services" },
    { value: "development", label: "Development (Web, Mobile, Desktop)" },
    { value: "design", label: "Creative & Brand Design" },
    { value: "marketing", label: "Social Scale & SEO Strategy" }
  ];

  const filteredServices = services.filter((service) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "development") {
      return service.category === "web" || service.category === "mobile" || service.category === "desktop" || service.category === "wordpress";
    }
    return service.category === activeFilter;
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-canvas top-10 left-[10%] animated-glow-1" />
        <div className="glow-canvas bottom-10 right-[10%] animated-glow-2" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-pprimary/5 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section Headline */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase font-black tracking-widest text-pprimary bg-pprimary/10 px-4 py-1.5 rounded-full inline-block">
            Our Agency Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Comprehensive Tech Products Built for Global Scale
          </h1>
          <p className="text-xs sm:text-sm text-pmuted leading-relaxed">
            I customize fast transactional web routes, responsive cross-platform Flutter applications, secure WPF local point-of-sales systems, cohesive brand design suites, and performance audit marketing tactics. Match your organizational goals with our custom offerings.
          </p>
        </div>

        {/* Filter Toolbar selection */}
        <div className="flex flex-wrap items-center gap-2 mb-12" id="services-filter-tabbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-3 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                activeFilter === cat.value
                  ? "bg-pprimary text-white border-transparent shadow-lg shadow-pprimary/15 scale-[1.02]"
                  : "bg-pcard text-pmuted border-pborder hover:border-pmuted hover:text-ptext"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Services grid with filter */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-full-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
              >
                <ServiceCard service={service} delay={0.05} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust banner inside services pages */}
        <div className="mt-28 bg-pcard border border-pborder rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left shadow-lg">
          
          <div className="space-y-3">
            <div className="p-3 bg-pbg border border-pborder rounded-xl w-12 h-12 flex items-center justify-center">
              <Zap className="w-5 h-5 text-pprimary" />
            </div>
            <h3 className="text-sm font-black text-ptext">100% Performance Driven</h3>
            <p className="text-xs text-pmuted leading-relaxed">
              Every system built features lazy rendering, optimized asset pipeline delivery, and absolute minimal third-party scripts.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-pbg border border-pborder rounded-xl w-12 h-12 flex items-center justify-center">
              <Smile className="w-5 h-5 text-psecondary" />
            </div>
            <h3 className="text-sm font-black text-ptext">Cohesive Brand Identity</h3>
            <p className="text-xs text-pmuted leading-relaxed">
              Whether you need automated WordPress plugins or Vector logos, we coordinate visual palettes to maximize product authority.
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-pbg border border-pborder rounded-xl w-12 h-12 flex items-center justify-center">
              <Layers className="w-5 h-5 text-paccent" />
            </div>
            <h3 className="text-sm font-black text-ptext">Fully Transacting Backends</h3>
            <p className="text-xs text-pmuted leading-relaxed">
              We write rest handlers, relational index queries, local SQL sync targets, and webhook routes with premium secure token encryptions.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
