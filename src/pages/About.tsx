import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Download, 
  Sparkles, 
  ChevronRight, 
  CheckCircle,
  FileText,
  MousePointerClick,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";
import { personalInfo, experienceTimeline, educationTimeline, certifications, skillsOverview } from "../data";
import { ProfileImage } from "../components/ProfileImage";

export const About: React.FC = () => {
  const [showCVModal, setShowCVModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  // Local handler to simulate highly visual Resume printing
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* Background visual helpers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-canvas top-1/4 right-[5%] animated-glow-1" />
        <div className="glow-canvas bottom-24 left-[5%] animated-glow-2" />
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-psecondary/5 to-transparent pointer-events-none" />
        {/* Decorative dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Split Screen Premium About Page Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" id="about-hero-grid">
          
          {/* Left Side: About Details & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-[10px] uppercase font-black tracking-widest text-psecondary bg-psecondary/10 px-4 py-1.5 rounded-full inline-block">
              About the Developer
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-ptext">
              About <span className="bg-gradient-to-r from-pprimary via-psecondary to-paccent bg-clip-text text-transparent">Muhammad Asif</span>
            </h1>

            <p className="text-sm font-extrabold text-paccent tracking-wide uppercase">
              {personalInfo.title}
            </p>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-pmuted leading-relaxed">
                {personalInfo.aboutBrief}
              </p>
              <p className="text-xs sm:text-sm text-pmuted leading-relaxed">
                {personalInfo.aboutDetailed}
              </p>
            </div>

            {/* Quick Contact Specs inside Left frame */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-pborder my-4">
              <div>
                <span className="text-[9px] text-pmuted uppercase font-extrabold tracking-wider">Email Inquiry</span>
                <p className="text-xs font-semibold text-ptext break-all mt-0.5">{personalInfo.email}</p>
              </div>
              <div>
                <span className="text-[9px] text-pmuted uppercase font-extrabold tracking-wider">Freelance Desk</span>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Accepting Worldwide Roles</span>
                </p>
              </div>
            </div>

            {/* Resume / CV Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => setShowCVModal(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-pprimary to-psecondary text-white font-black text-xs text-center hover:shadow-xl hover:brightness-110 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="view-cv-button"
              >
                <FileText className="w-4 h-4" />
                <span>View Digital Interactive CV</span>
              </button>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3.5 rounded-xl bg-pcard border border-pborder hover:bg-pborder text-ptext font-bold text-xs text-center hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                id="email-inquiry-button"
              >
                <span>Direct Email Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Personal Image inside Reusable component with local decoration */}
          <div className="lg:col-span-5 flex justify-center items-center relative" id="about-profile-graphic">
            {/* Pulsing visual circles in behind frame */}
            <div className="absolute w-72 h-72 rounded-full border border-pborder/30 animate-pulse pointer-events-none" />
            
            {/* The multi-layered profile picture container */}
            <ProfileImage size="md" />
          </div>

        </div>

        {/* Tab-driven Career Journey (Education & Experience) */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-pborder pb-6 mb-12">
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-paccent bg-paccent/10 px-4 py-1.5 rounded-full">
                Track Records
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 text-ptext text-left">
                Education & Experience Journey
              </h2>
            </div>

            {/* Tabs Trigger Switch */}
            <div className="inline-flex rounded-xl p-1 bg-pcard border border-pborder mt-6 sm:mt-0">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-lg text-xs font-extrabold flex items-center space-x-2 transition-all ${
                  activeTab === "experience" 
                    ? "bg-pprimary text-white shadow" 
                    : "text-pmuted hover:text-ptext"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Professional Experience</span>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-5 py-2.5 rounded-lg text-xs font-extrabold flex items-center space-x-2 transition-all ${
                  activeTab === "education" 
                    ? "bg-psecondary text-white shadow" 
                    : "text-pmuted hover:text-ptext"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Edu Background</span>
              </button>
            </div>
          </div>

          <div className="relative max-w-4xl mr-auto text-left">
            {/* Center Timeline Spine */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-pborder" />

            <AnimatePresence mode="wait">
              {activeTab === "experience" ? (
                <motion.div
                  key="experience-timeline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {experienceTimeline.map((item, index) => (
                    <div key={item.id} className="relative pl-12 group">
                      
                      {/* Timeline Dot Indicator */}
                      <div className="absolute left-2 top-1.5 w-4.5 h-4.5 rounded-full bg-pbg border-2 border-pprimary group-hover:bg-pprimary transition-colors z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-pprimary group-hover:bg-white" />
                      </div>

                      <div className="bg-pcard border border-pborder group-hover:border-pprimary/30 rounded-2xl p-6 sm:p-8 transition-all shadow hover:shadow-xl relative overflow-hidden">
                        <span className="text-[10px] font-bold font-mono text-pprimary bg-pprimary/5 px-3 py-1 rounded-full border border-pprimary/10 absolute top-6 right-6">
                          {item.period}
                        </span>

                        <h3 className="text-lg font-black text-ptext mb-1 group-hover:text-pprimary transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs font-bold text-psecondary mb-4">{item.company}</p>
                        
                        <p className="text-xs text-pmuted leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Timeline skills list tag */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="bg-pbg px-2.5 py-1 rounded border border-pborder font-mono text-[9px] text-ptext">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="education-timeline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  {educationTimeline.map((item) => (
                    <div key={item.id} className="relative pl-12 group">
                      
                      {/* Timeline Dot Indicator */}
                      <div className="absolute left-2 top-1.5 w-4.5 h-4.5 rounded-full bg-pbg border-2 border-psecondary group-hover:bg-psecondary transition-colors z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-psecondary group-hover:bg-white" />
                      </div>

                      <div className="bg-pcard border border-pborder group-hover:border-psecondary/30 rounded-2xl p-6 sm:p-8 transition-all shadow hover:shadow-xl relative overflow-hidden">
                        <span className="text-[10px] font-bold font-mono text-psecondary bg-psecondary/5 px-3 py-1 rounded-full border border-psecondary/10 absolute top-6 right-6">
                          {item.period}
                        </span>

                        <h3 className="text-lg font-black text-ptext mb-1 group-hover:text-psecondary transition-colors">
                          {item.degree}
                        </h3>
                        <p className="text-xs font-bold text-pprimary mb-4">{item.institution}</p>
                        
                        <p className="text-xs text-pmuted leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Certifications Section Grid */}
        <div>
          <div className="text-left mb-12">
            <span className="text-[10px] uppercase font-black tracking-widest text-paccent bg-paccent/10 px-4 py-1.5 rounded-full inline-block">
              Qualified Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 text-ptext">
              Professional Verifications & Badges
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-pcard p-6 rounded-2xl border border-pborder hover:border-paccent/30 transition-all text-left group flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-pbg border border-pborder rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-paccent/5 group-hover:border-paccent/20 transition-all">
                    <Award className="w-5 h-5 text-paccent" />
                  </div>
                  <h3 className="text-xs font-black text-ptext leading-tight group-hover:text-paccent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-pmuted mt-1">{cert.issuer}</p>
                </div>
                
                <span className="text-[9px] font-mono font-bold text-paccent bg-paccent/5 border border-paccent/10 rounded px-2 py-0.5 mt-4 self-start">
                  Year {cert.year} Approved
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive CV Resume Generator Modal */}
      <AnimatePresence>
        {showCVModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCVModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 print:hidden"
            />

            {/* Resume visual modal sheet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="fixed top-6 bottom-6 left-4 right-4 md:left-[10%] md:right-[10%] lg:left-[20%] lg:right-[20%] bg-white text-black p-6 sm:p-10 rounded-2xl shadow-2xl z-50 overflow-y-auto print:absolute print:inset-0 print:bg-white print:text-black print:p-0 print:shadow-none print:w-full select-text"
              id="printable-cv-modal"
            >
              {/* Controls bar inside CV modal */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-8 print:hidden">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-indigo-600 animate-pulse" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Interactive Resume Card</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <button
                    onClick={handlePrintResume}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] flex items-center space-x-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Print or Save PDF</span>
                  </button>
                  <button
                    onClick={() => setShowCVModal(false)}
                    className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>

              {/* PRINTABLE AREA */}
              <div className="space-y-8 text-left font-sans text-neutral-800">
                {/* CV Header */}
                <div className="border-b-2 border-indigo-600 pb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <div>
                    <h2 className="text-3xl font-black text-black tracking-tight">{personalInfo.name}</h2>
                    <p className="text-sm font-bold text-indigo-700 mt-1 uppercase tracking-wide">{personalInfo.title}</p>
                    <p className="text-xs text-neutral-500 mt-2 flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                      <span>{personalInfo.location}</span>
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 space-y-1 text-xs text-neutral-500 sm:text-right">
                    <p className="font-semibold text-black">Contact Channel:</p>
                    <p>{personalInfo.email}</p>
                    <p>Github: github.com/MuhammadAsifDev</p>
                  </div>
                </div>

                {/* Tagline Box */}
                <div className="bg-neutral-50 border-l-4 border-indigo-600 p-4">
                  <p className="text-xs leading-relaxed italic text-neutral-700">
                    "{personalInfo.tagline} {personalInfo.aboutBrief}"
                  </p>
                </div>

                {/* Qualifications split */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Column (Timeline Specs) */}
                  <div className="md:col-span-8 space-y-8">
                    {/* Experience section */}
                    <div>
                      <h4 className="border-b border-neutral-300 pb-2 text-xs font-black uppercase text-black tracking-widest mb-4">Professional Roles</h4>
                      <div className="space-y-6">
                        {experienceTimeline.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between items-start text-xs font-bold">
                              <h5 className="text-black text-sm">{exp.role}</h5>
                              <span className="text-indigo-600 font-mono font-medium">{exp.period}</span>
                            </div>
                            <p className="text-xs text-indigo-500 font-semibold">{exp.company}</p>
                            <p className="text-[11px] text-neutral-600 leading-relaxed pr-2">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education section */}
                    <div>
                      <h4 className="border-b border-neutral-300 pb-2 text-xs font-black uppercase text-black tracking-widest mb-4">Education Timeline</h4>
                      <div className="space-y-6">
                        {educationTimeline.map((edu) => (
                          <div key={edu.id} className="space-y-1">
                            <div className="flex justify-between items-start text-xs font-bold">
                              <h5 className="text-black text-sm">{edu.degree}</h5>
                              <span className="text-indigo-600 font-mono font-medium">{edu.period}</span>
                            </div>
                            <p className="text-xs text-indigo-500 font-semibold">{edu.institution}</p>
                            <p className="text-[11px] text-neutral-600 leading-relaxed">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Skills & Certifications) */}
                  <div className="md:col-span-4 space-y-8">
                    {/* Expertise list */}
                    <div>
                      <h4 className="border-b border-neutral-300 pb-2 text-xs font-black uppercase text-black tracking-widest mb-4">Key Hard Skills</h4>
                      <ul className="space-y-2">
                        {skillsOverview.technical.map((tech, idx) => (
                          <li key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-neutral-700 font-medium">{tech.name.split("/")[0]}</span>
                            <span className="text-indigo-600 font-semibold text-[10px]">{tech.level}%</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications lists */}
                    <div>
                      <h4 className="border-b border-neutral-300 pb-2 text-xs font-black uppercase text-black tracking-widest mb-4">Certifications APPROVED</h4>
                      <ul className="space-y-3 pb-4">
                        {certifications.map((cert) => (
                          <li key={cert.id} className="text-xs">
                            <p className="font-extrabold text-neutral-800 leading-tight">{cert.title}</p>
                            <p className="text-[10px] text-neutral-500 mt-0.5">{cert.issuer} &middot; {cert.year}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Footer disclaimer inside Resume */}
                <div className="border-t border-neutral-200 pt-6 text-center text-[10px] text-neutral-400">
                  <p>Certified Portfolio CV for {personalInfo.name} &middot; Verified via active integrations</p>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};
