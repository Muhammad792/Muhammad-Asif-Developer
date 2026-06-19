import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight, FolderOpen } from "lucide-react";
import { ProjectItem } from "../types";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, delay = 0 }) => {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "web": return "from-blue-500/10 to-blue-500/5 text-blue-400 border-blue-500/20";
      case "mobile": return "from-purple-500/10 to-purple-500/5 text-purple-400 border-purple-500/20";
      case "desktop": return "from-cyan-500/10 to-cyan-500/5 text-cyan-400 border-cyan-500/20";
      case "design": return "from-pink-500/10 to-pink-500/5 text-pink-400 border-pink-500/20";
      case "marketing": return "from-emerald-500/10 to-emerald-500/5 text-emerald-400 border-emerald-500/20";
      case "wordpress": return "from-orange-500/10 to-orange-500/5 text-orange-400 border-orange-500/20";
      default: return "from-zinc-500/10 to-zinc-500/5 text-zinc-400 border-zinc-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-pcard rounded-2xl border border-pborder overflow-hidden hover:border-transparent select-none shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
      id={`project-card-${project.id}`}
    >
      
      {/* Dynamic border gradient border spacer */}
      <div className="absolute inset-0 bg-gradient-to-br from-pprimary/20 via-psecondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10" />

      <div>
        {/* Project Thumbnail Image Container */}
        <div className="relative overflow-hidden aspect-video bg-neutral-900 group-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
            referrerPolicy="no-referrer"
          />
          
          {/* Frosted Layer and Details hover button */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => onOpenDetails(project)}
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs flex items-center space-x-1.5 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-pprimary hover:text-white pointer-events-auto"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Study Case Study</span>
            </button>
          </div>

          {/* Quick Category Tag Overlay */}
          <span className={`absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border bg-pcard bg-opacity-95 backdrop-blur-sm shadow-md ${getCategoryTheme(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* Info Area */}
        <div className="p-6">
          {/* Tech tags list */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-[10px] font-mono font-medium text-pmuted bg-pbg border border-pborder px-2 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-mono text-pmuted bg-pbg px-1.5 py-0.5 rounded border border-pborder">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <h3 
            onClick={() => onOpenDetails(project)}
            className="text-lg font-extrabold tracking-tight mb-2 group-hover:text-pprimary cursor-pointer transition-colors"
          >
            {project.title}
          </h3>
          <p className="text-xs text-pmuted leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Utility Links */}
      <div className="px-6 pb-6 pt-4 border-t border-pborder/40 flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(project)}
          className="text-xs font-bold text-pprimary group-hover:text-psecondary hover:underline flex items-center space-x-1"
        >
          <span>View Specifications</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-pborder hover:bg-pprimary/10 hover:border-pprimary hover:text-pprimary transition-all"
              title="GitHub Code Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-pborder hover:bg-psecondary/10 hover:border-psecondary hover:text-psecondary transition-all"
              title="Live Application Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </motion.div>
  );
};
