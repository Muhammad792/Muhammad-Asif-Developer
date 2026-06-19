import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Palette, 
  Megaphone, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Calendar 
} from "lucide-react";
import { ServiceItem } from "../types";

export const ServiceCard: React.FC<{ service: ServiceItem; delay?: number }> = ({ service, delay = 0 }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe": return <Globe className="w-8 h-8 text-pprimary" />;
      case "Smartphone": return <Smartphone className="w-8 h-8 text-psecondary" />;
      case "Monitor": return <Monitor className="w-8 h-8 text-paccent" />;
      case "Palette": return <Palette className="w-8 h-8 text-pprimary" />;
      case "Megaphone": return <Megaphone className="w-8 h-8 text-psecondary" />;
      case "Cpu": return <Cpu className="w-8 h-8 text-paccent" />;
      default: return <Globe className="w-8 h-8 text-pprimary" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "web": return "group-hover:text-pprimary group-hover:border-pprimary/30";
      case "mobile": return "group-hover:text-psecondary group-hover:border-psecondary/30";
      case "desktop": return "group-hover:text-paccent group-hover:border-paccent/30";
      case "design": return "group-hover:text-pprimary group-hover:border-pprimary/30";
      case "marketing": return "group-hover:text-psecondary group-hover:border-psecondary/30";
      case "wordpress": return "group-hover:text-paccent group-hover:border-paccent/30";
      default: return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden bg-pcard border border-pborder hover:border-transparent rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-md hover:shadow-2xl transition-all duration-300`}
      id={`service-${service.id}`}
    >
      
      {/* Decorative colored glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pprimary/5 via-psecondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-pprimary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Header Icon & Category Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="p-3.5 rounded-xl bg-pbg border border-pborder group-hover:border-transparent group-hover:bg-pcard transition-all shadow-sm">
            {getIcon(service.iconName)}
          </div>
          <span className="text-[10px] tracking-widest uppercase font-bold text-pmuted bg-pbg px-3 py-1 rounded-full border border-pborder group-hover:border-transparent">
            {service.category}
          </span>
        </div>

        {/* Content Section */}
        <h3 className="text-xl font-extrabold tracking-tight mb-3 group-hover:text-pprimary transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-xs text-pmuted leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs text-pmuted">
              <CheckCircle2 className="w-4 h-4 text-paccent flex-shrink-0 mr-2 mt-0.5" />
              <span className="leading-tight text-ptext">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing and Action trigger */}
      <div className="border-t border-pborder pt-6 mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-pmuted font-bold">Starting From</p>
            <p className="text-2xl font-black bg-gradient-to-r from-pprimary to-psecondary bg-clip-text text-transparent">
              {service.startingPrice}
            </p>
          </div>
          <div className="flex items-center text-xs text-pmuted font-semibold">
            <Calendar className="w-3.5 h-3.5 mr-1 text-psecondary" />
            <span>{service.deliveryTime}</span>
          </div>
        </div>

        <Link
          to={`/contact?subject=Inquiry about ${encodeURIComponent(service.title)}`}
          className="w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 bg-pbg group-hover:bg-gradient-to-r group-hover:from-pprimary group-hover:to-psecondary group-hover:text-white border border-pborder group-hover:border-transparent transition-all duration-300 shadow-sm"
        >
          <span>Choose {service.title}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>

    </motion.div>
  );
};
