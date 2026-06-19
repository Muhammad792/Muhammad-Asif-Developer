import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, Eye, Github, FolderGit2, X, AlertTriangle } from "lucide-react";
import { projects } from "../data";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectItem } from "../types";

export const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Link parameter queries for modular deep linking (e.g. on direct search result clicks)
  useEffect(() => {
    const projectParam = searchParams.get("project");
    const searchParam = searchParams.get("search");

    if (projectParam) {
      const match = projects.find(p => p.id === projectParam);
      if (match) setSelectedProject(match);
    }

    if (searchParam) {
      // If search query is pre-passed
      const matchProject = projects.find(p => p.id === searchParam);
      if (matchProject) {
        setSelectedProject(matchProject);
      } else {
        setSearchQuery(searchParam);
      }
    }
  }, [searchParams]);

  const categories = [
    { value: "all", label: "All Cases" },
    { value: "web", label: "Web Frameworks" },
    { value: "mobile", label: "Mobile Apps (Flutter)" },
    { value: "desktop", label: "Desktop Software" },
    { value: "design", label: "Creative & Vector" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "wordpress", label: "WordPress CMS" }
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Clear project params quietly
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("project");
    newParams.delete("search");
    setSearchParams(newParams);
  };

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("project", project.id);
    setSearchParams(newParams);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-canvas top-1/4 left-[5%] animated-glow-1" />
        <div className="glow-canvas bottom-10 right-[5%] animated-glow-2" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-paccent/5 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Page Headline */}
        <div className="text-left max-w-3xl mb-12 space-y-4">
          <span className="text-[10px] uppercase font-black tracking-widest text-paccent bg-paccent/10 px-4 py-1.5 rounded-full inline-block">
            Showcase Archives
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Portfolio Showcase
          </h1>
          <p className="text-xs sm:text-sm text-pmuted leading-relaxed">
            Review detailed case metrics representing real-world organizational platforms. Search tags, filter by architectural layouts, and explore the exact challenge, solution, and business metrics for each build.
          </p>
        </div>

        {/* Search and Filters panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12" id="projects-controls-dashboard">
          
          {/* Search Input block */}
          <div className="lg:col-span-4 relative flex items-center">
            <input
              type="text"
              placeholder="Search by keywords or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-pcard border border-pborder hover:border-pmuted focus:border-pprimary rounded-xl px-11 py-3.5 outline-none tracking-wide text-ptext transition-all"
            />
            <Search className="w-4 h-4 text-pmuted absolute left-4.5" />
            
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4.5 hover:text-red-500 text-pmuted transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Desktop Categories Toolbar */}
          <div className="lg:col-span-8 flex flex-wrap gap-2 justify-start lg:justify-end" id="projects-categories-toolbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4.5 py-3 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-paccent text-white border-transparent shadow shadow-paccent/10"
                    : "bg-pcard text-pmuted border-pborder hover:border-pmuted hover:text-ptext"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid-archive"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                >
                  <ProjectCard 
                    project={project} 
                    onOpenDetails={handleOpenProject}
                    delay={0.05} 
                  />
                </motion.div>
              ))
            ) : (
              <motion.div 
                layout
                className="col-span-full py-16 bg-pcard border border-pborder rounded-2xl flex flex-col items-center justify-center space-y-4 max-w-xl mx-auto"
                id="no-results-panel"
              >
                <div className="p-4 bg-pbg border border-pborder rounded-full text-yellow-500 animate-bounce">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-black text-ptext">No Cases Match Your Query</h3>
                <p className="text-xs text-pmuted text-center max-w-md leading-relaxed px-4">
                  We currently do not have entries matching state parameters. Please try resetting your search keyword or switching categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-5 py-2.5 bg-pbg border border-pborder hover:border-pprimary text-xs font-bold text-ptext hover:text-pprimary rounded-xl transition-colors"
                >
                  Reset Parameters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Detail Modal (Duplicated layout reference matching global design specs) */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            
            {/* Modal Sheet container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="fixed top-12 bottom-12 left-4 right-4 md:left-auto md:right-auto md:w-[700px] bg-pcard p-6 md:p-10 rounded-2xl border border-pborder shadow-2xl z-50 overflow-y-auto text-left"
              id="projects-modal-container"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-psecondary bg-psecondary/10 px-3 py-1 rounded-full">
                    Case Study Specification
                  </span>
                  <h3 className="text-2xl font-black mt-2 text-ptext">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-full bg-pbg border border-pborder hover:bg-red-500/10 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cover Screenshot */}
              <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Specs outline grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-ptext mb-4">
                
                {/* Text column */}
                <div className="md:col-span-8 space-y-5">
                  <div>
                    <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-pprimary mb-1">Challenge Statement</h4>
                    <p className="text-pmuted leading-relaxed">{selectedProject.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-psecondary mb-1">Our Engineered Solution</h4>
                    <p className="text-pmuted leading-relaxed">{selectedProject.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-paccent mb-1">Tangible Business Performance Results</h4>
                    <p className="text-pmuted leading-relaxed">{selectedProject.caseStudy.results}</p>
                  </div>
                </div>

                {/* Properties list */}
                <div className="md:col-span-4 bg-pbg border border-pborder rounded-xl p-5 space-y-4 h-fit">
                  <div>
                    <h5 className="font-black text-[9px] uppercase tracking-widest text-pmuted">Client Partner</h5>
                    <p className="font-semibold text-ptext mt-0.5">{selectedProject.caseStudy.client || "Global Startup"}</p>
                  </div>
                  <div>
                    <h5 className="font-black text-[9px] uppercase tracking-widest text-pmuted">Sprint Duration</h5>
                    <p className="font-semibold text-ptext mt-0.5">{selectedProject.caseStudy.duration || "4 Weeks"}</p>
                  </div>
                  <div>
                    <h5 className="font-black text-[9px] uppercase tracking-widest text-pmuted">Core Technologies</h5>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedProject.technologies.map((t, idx) => (
                        <span key={idx} className="bg-pcard px-2 py-1 border border-pborder rounded font-mono text-[9px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action buttons inside modal sheet */}
              <div className="border-t border-pborder/60 mt-8 pt-6 flex items-center justify-between">
                <p className="text-[10px] text-pmuted font-bold uppercase tracking-wider">Review Project Details</p>
                <div className="flex space-x-3.5">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold border border-pborder hover:text-pprimary text-ptext rounded-xl bg-pbg hover:border-pprimary transition-colors"
                    >
                      Repository Source
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-black bg-gradient-to-r from-pprimary to-psecondary text-white rounded-xl transition-all hover:brightness-115"
                    >
                      Launch Live App
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};
