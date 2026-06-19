import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  CheckCircle,
  Briefcase,
  Layers,
  Award,
  Users2,
  Quote,
  Star,
  ArrowUpRight
} from "lucide-react";
import { personalInfo, services, projects, statistics, skillsOverview, clientTestimonials } from "../data";
import { ServiceCard } from "../components/ServiceCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProfileImage } from "../components/ProfileImage";
import { ProjectItem } from "../types";

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const latestServices = services.slice(0, 3);
  const latestProjects = projects.slice(0, 3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  // Stats badge icon mapper
  const getStatsIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "completed projects": return <Briefcase className="w-5 h-5 text-pprimary" />;
      case "client satisfaction": return <CheckCircle className="w-5 h-5 text-psecondary" />;
      case "years experience": return <Award className="w-5 h-5 text-paccent" />;
      default: return <Users2 className="w-5 h-5 text-pprimary" />;
    }
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* Immersive Animated Background Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-canvas top-10 left-1/4 animated-glow-1" />
        <div className="glow-canvas top-1/3 right-1/4 animated-glow-2" />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-pprimary/5 to-transparent pointer-events-none" />
        
        {/* Subtle decorative dot grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:py-32" id="hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Layer */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-pcard border border-pborder px-4 py-1.5 rounded-full text-xs font-bold text-pprimary"
            >
              <Sparkles className="w-4 h-4 text-psecondary animate-spin" />
              <span>Available for International Freelance / Remote Hires</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-44xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]\ mb-4"
            >
              MUHAMMAD{" "}
              <span className="bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent block mt-1">
                ASIF
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl font-extrabold text-paccent tracking-wide uppercase"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-sm text-pmuted leading-relaxed max-w-2xl"
            >
              {personalInfo.tagline} {personalInfo.aboutBrief}
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
              id="hero-cta-group"
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-pprimary to-psecondary text-white font-black text-xs text-center shadow-lg hover:shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                id="cta-hire-me"
              >
                <span>Hire Muhammad Asif</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-xl bg-pcard border border-pborder hover:bg-pborder text-ptext font-bold text-xs text-center hover:text-pprimary hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                id="cta-explore-portfolio"
              >
                <span>Explore Showcase</span>
                <ArrowUpRight className="w-4 h-4 text-psecondary" />
              </Link>
            </motion.div>

          </div>

          {/* Right Side: Reusable Profile Image with Floating Badges & Ambient Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
            id="hero-profile-graphic"
          >
            {/* Fully self-contained ProfileImage component */}
            <ProfileImage size="lg" />
          </motion.div>

        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section className="bg-pcard py-16 border-y border-pborder relative z-10" id="stats-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-pbg transition-colors duration-300"
              >
                <div className="p-3 rounded-xl bg-pbg border border-pborder shadow-sm">
                  {getStatsIcon(stat.label)}
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent leading-none mb-1">
                    {stat.value}{stat.suffix}
                  </h3>
                  <p className="text-[10px] uppercase font-bold text-pmuted tracking-widest">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10" id="services-highlights">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-black tracking-widest text-pprimary bg-pprimary/10 px-4 py-1.5 rounded-full">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            I Deliver End-To-End Digital Solutions
          </h2>
          <p className="text-xs text-pmuted leading-relaxed">
            Professional development, UI designing, desktop suites, and marketing retargeting workflows. Explore the service highlights below or view the full catalog page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} delay={idx * 0.1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold text-pprimary hover:text-psecondary hover:underline py-2"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. SKILLS OVERVIEW GRID */}
      <section className="bg-pcard py-20 border-y border-pborder relative z-10" id="skills-overview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro details */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-psecondary bg-psecondary/10 px-4 py-1.5 rounded-full">
                Stack & Frameworks
              </span>
              <h2 className="text-3xl font-black tracking-tight leading-tight">
                Crafting High-Speed Applications With Multi-Disciplinary Frameworks
              </h2>
              <p className="text-xs text-pmuted leading-relaxed">
                I study performance spikes and interface transitions to deliver the most robust digital tools. From Next.js server routers to Flutter SDK elements, my code is optimized to support massive user bases.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-2">
                {skillsOverview.soft.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] font-semibold text-ptext bg-pbg border border-pborder px-3 py-1.5 rounded-lg flex items-center space-x-1"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-paccent flex-shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right progress bars */}
            <div className="lg:col-span-7 space-y-6">
              {skillsOverview.technical.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold font-mono">
                    <span className="text-ptext">{skill.name}</span>
                    <span className="text-psecondary">{skill.level}%</span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full h-2.5 bg-pbg rounded-full overflow-hidden border border-pborder">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-pprimary to-psecondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. LATEST PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10" id="latest-projects">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-black tracking-widest text-paccent bg-paccent/10 px-4 py-1.5 rounded-full">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Our Latest Case Studies
          </h2>
          <p className="text-xs text-pmuted leading-relaxed">
            Take a look at real-world systems built to solve key organizational problems. Click each showcase to read its operational metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
              delay={idx * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs font-bold text-paccent hover:text-psecondary hover:underline py-2"
          >
            <span>View All Detailed Showcase Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section className="bg-pcard/50 py-20 border-y border-pborder relative overflow-hidden z-10" id="testimonials">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pprimary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-psecondary bg-psecondary/10 px-4 py-1.5 rounded-full">
              Global Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-ptext">
              Trusted By Clients World-Wide
            </h2>
            <p className="text-xs text-pmuted leading-relaxed">
              Read recommendations from CTOs, product managers, and business stakeholders highlighting our technical standards and agency-style project delivery.
            </p>
          </div>
        </div>

        {/* Smooth, high-performance auto-scrolling dynamic marquee */}
        <div className="marquee-container" id="marquee-slider-wrapper">
          {/* Edge fade overlays */}
          <div className="marquee-fade-left" />
          <div className="marquee-track py-4" id="testimonials-marquee-track">
            {/* Direct list multiplication to guarantee a seamless loop */}
            {[...clientTestimonials, ...clientTestimonials].map((testimonial, idx) => (
              <div 
                key={`${testimonial.id}-${idx}`}
                className="w-[300px] sm:w-[380px] bg-pcard border border-pborder rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:border-pprimary/50 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm relative group cursor-pointer"
              >
                {/* Visual quote indicator */}
                <Quote className="absolute right-6 top-6 w-10 h-10 text-pprimary/5 group-hover:text-pprimary/10 transition-colors pointer-events-none" />
                
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Feedback description text */}
                  <p className="subtitle-content text-xs sm:text-sm text-ptext font-medium leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client Avatar, Role */}
                <div className="flex items-center space-x-3 pt-6 border-t border-pborder/50 mt-6 font-sans">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border border-pborder object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-black text-ptext">{testimonial.name}</h4>
                    <p className="text-[10px] text-pmuted">
                      {testimonial.role} &middot; <span className="text-pprimary font-bold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="marquee-fade-right" />
        </div>
      </section>

      {/* 7. CALL TO ACTION CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10" id="cta-banner">
        <div className="relative overflow-hidden bg-gradient-to-r from-pprimary/90 to-psecondary/95 text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between text-left">
          
          {/* Backdrop spark effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl md:mr-8">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Ready to Expand Your Technical Boundaries?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-100/90 leading-relaxed">
              Schedule a comprehensive consultation session with Muhammad Asif today. Together, we'll map out a fully operational strategy for digital scaling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto mt-8 md:mt-0 flex-shrink-0">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-white text-black font-black text-xs text-center hover:bg-neutral-100 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-xl"
            >
              <span>Get In Touch Hub</span>
              <ArrowRight className="w-4 h-4 text-psecondary" />
            </Link>
          </div>

        </div>
      </section>

      {/* Interactive Case Study Detail Modal Wrapper */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="fixed top-12 bottom-12 left-4 right-4 md:left-auto md:right-auto md:w-[700px] bg-pcard p-6 md:p-10 rounded-2xl border border-pborder shadow-2xl z-50 overflow-y-auto"
              id="details-modal"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-psecondary bg-psecondary/10 px-3 py-1 rounded-full">
                    Case Study Specification
                  </span>
                  <h3 className="text-2xl font-black mt-2 text-ptext">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full bg-pbg border border-pborder hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <XIcon className="w-5 h-5" />
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

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-ptext">
                
                {/* Specs column */}
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

                {/* Info Column */}
                <div className="md:col-span-4 bg-pbg border border-pborder rounded-xl p-5 space-y-4">
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

              {/* Secondary actions footer inside modal */}
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

// Quick custom close icon to keep bundles light
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
