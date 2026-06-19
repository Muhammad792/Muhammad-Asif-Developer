import React from "react";
import { motion } from "motion/react";
import { Cpu, Code, ShieldCheck, Zap } from "lucide-react";
// Import the generated image asset directly
import asifProfileImg from "../assets/images/muhammad_asif_profile_1781848053320.jpg";

interface ProfileImageProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable Premium Profile Image component for Muhammad Asif's Portfolio.
 * Consolidates the image path to a single location and decorates with agency-level glow & floating chips.
 */
export const ProfileImage: React.FC<ProfileImageProps> = ({ className = "", size = "md" }) => {
  // Sizing definitions
  const sizeClasses = {
    sm: "w-48 h-48 md:w-56 md:h-56",
    md: "w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]",
    lg: "w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`} id="profile-image-wrapper">
      {/* Back glow light effects */}
      <div className="absolute w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-pprimary/20 via-psecondary/10 to-paccent/20 blur-3xl opacity-80 animate-pulse pointer-events-none" />

      {/* Modern Rotating Outer Ring decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[106%] h-[106%] rounded-full border border-dashed border-pprimary/30 p-1 pointer-events-none"
      />
      
      {/* Hexagonal / Circular stylized double outline */}
      <div className="absolute inset-0 rounded-full border-2 border-psecondary/20 p-2 pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.02, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-1.5 rounded-full border border-paccent/30 pointer-events-none" 
      />

      {/* Main glass-like card image container */}
      <div 
        className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-pcard shadow-2xl backdrop-blur-sm bg-pcard/50 flex items-center justify-center`}
        id="profile-image-container"
      >
        <img
          src={"./WhatsApp Image 2026-06-19 at 11.11.34 AM.jpeg"}
          alt="Muhammad Asif Portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 select-none"
          id="profile-image-core"
        />

        {/* Ambient overlay vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Interactive Badge Or Core Technology Chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 -right-2 md:-right-6 bg-pcard/80 border border-pborder backdrop-blur-md px-3.5 py-1.5 rounded-2xl flex items-center gap-2 shadow-lg z-10"
        id="profile-chip-1"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-ptext">Available to Hire</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 -left-3 md:-left-8 bg-pcard/95 border border-pprimary/30 backdrop-blur-md p-2.5 rounded-2xl flex items-center justify-center shadow-lg z-10 text-pprimary"
        title="Full Stack Software Architecture"
        id="profile-chip-2"
      >
        <Code className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-pcard/95 border border-psecondary/30 backdrop-blur-md p-2.5 rounded-2xl flex items-center justify-center shadow-lg z-10 text-psecondary"
        title="Mobile Developer & Digital Strategy"
        id="profile-chip-3"
      >
        <Cpu className="w-5 h-5" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-4 -right-1 md:-right-4 bg-pcard/95 border border-paccent/30 backdrop-blur-md p-2.5 rounded-2xl flex items-center justify-center shadow-lg z-10 text-paccent"
        title="Secure Certified Solution Deliverer"
        id="profile-chip-4"
      >
        <ShieldCheck className="w-5 h-5" />
      </motion.div>
    </div>
  );
};
