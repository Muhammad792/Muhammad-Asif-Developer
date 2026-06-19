import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Copy, 
  Check,
  AlertCircle
} from "lucide-react";
import { personalInfo } from "../data";

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Extract query string parameter to prefill Subject details (e.g. from service card CTAs)
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: decodeURIComponent(subjectParam) }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple Field Validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all fields before requesting delivery.");
      return;
    }

    setIsSubmitting(true);

    // Simulate Network communication delay
    setTimeout(() => {
      const newMessage: SavedMessage = {
        id: `msg-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString()
      };

      // Store locally so Muhammad Asif can observe customer targets in real session
      const existing = localStorage.getItem("portfolio-inbox");
      const list = existing ? JSON.parse(existing) : [];
      list.push(newMessage);
      localStorage.setItem("portfolio-inbox", JSON.stringify(list));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset Form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Clear success indicator after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  // Construct Custom WhatsApp link dynamically using entered state parameters
  const getDynamicWhatsAppLink = () => {
    const defaultText = `Hello Muhammad Asif, I would like to configure a consultation about my business digital requirements.`;
    const enteredText = formData.message.trim() 
      ? `Hello Asif, I'm ${formData.name}. ${formData.message}`
      : defaultText;
    return `https://wa.me/923000000000?text=${encodeURIComponent(enteredText)}`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Background radial overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="glow-canvas top-10 right-[10%] animated-glow-1" />
        <div className="glow-canvas bottom-24 left-[10%] animated-glow-2" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-pprimary/5 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Header summary */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] uppercase font-black tracking-widest text-pprimary bg-pprimary/10 px-4 py-1.5 rounded-full inline-block">
            Inquiry Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Let's Bring Your Concepts Internally To Life
          </h1>
          <p className="text-xs sm:text-sm text-pmuted leading-relaxed">
            Have a startup blueprint ready for takeoff or a physical checkout interface to migrate online? Use our dynamic form below to route a task description directly to my localized inbox, or ping my secure WhatsApp channel.
          </p>
        </div>

        {/* Form and info split blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Left Column: Info Cards & WhatsApp Trigger */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* 1. Quick Info Contact panel */}
            <div className="bg-pcard border border-pborder rounded-2xl p-6 space-y-6 shadow-md transition-shadow hover:shadow-lg">
              <h3 className="text-xs font-black uppercase tracking-wider text-pprimary pb-3 border-b border-pborder">
                Direct Communication Coordinates
              </h3>

              <div className="space-y-4.5">
                {/* Email Box */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-pbg border border-pborder text-pprimary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] uppercase font-extrabold text-pmuted">Email Inbox Address</p>
                    <div className="flex items-center space-x-2.5 mt-0.5">
                      <span className="text-xs font-semibold text-ptext break-all">{personalInfo.email}</span>
                      <button 
                        onClick={copyToClipboard}
                        className="p-1 rounded hover:bg-pborder text-pmuted hover:text-ptext transition-colors cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-pbg border border-pborder text-paccent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold text-pmuted">Global Desk Base</p>
                    <p className="text-xs font-semibold text-ptext mt-0.5">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Live Channel */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-pbg border border-pborder text-psecondary">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold text-pmuted">WhatsApp Response Time</p>
                    <p className="text-xs font-semibold text-ptext mt-0.5">Typical turnaround: &lt; 2 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. WhatsApp Instant Link Panel */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 text-left">
              <div className="flex items-center space-x-3.5 mb-3.5">
                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.004c4.368 0 7.926-3.558 7.93-7.93a7.897 7.897 0 0 0-2.333-5.618M7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c1.11-6.285 4.586-10.307 10.355-10.307 3.538 0 6.66 2.457 7.3 6.111.4 2.28-.426 4.854-2.11 6.136a6.58 6.58 0 0 1-3.648.983h-.014z"/>
                  </svg>
                </span>
                <h4 className="text-sm font-black text-emerald-400">Instant WhatsApp Launcher</h4>
              </div>
              <p className="text-xs text-pmuted leading-relaxed mb-4">
                Want to speak immediately? Click the launch shortcut below to pre-draft a secure consultation message on WhatsApp using your entered layout preferences.
              </p>
              <a
                href={getDynamicWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-2.5 bg-emerald-500 text-white rounded-xl text-xs font-black hover:bg-emerald-600 transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Launch Chat Draft</span>
              </a>
            </div>

            {/* Social handles list list */}
            <div className="flex items-center space-x-3 justify-start pt-2">
              <span className="text-[10px] text-pmuted uppercase font-bold mr-2">Digital Handles:</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-pborder hover:bg-pprimary/5 hover:text-pprimary transition-colors"><Github className="w-4 h-4" /></a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-pborder hover:bg-pprimary/5 hover:text-pprimary transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-pborder hover:bg-pprimary/5 hover:text-pprimary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-pborder hover:bg-pprimary/5 hover:text-pprimary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>

          </div>

          {/* Right Column: Contact Input Form */}
          <div className="lg:col-span-7 bg-pcard border border-pborder rounded-2xl p-6 sm:p-8 shadow-lg text-left relative">
            
            {/* Form Subject Label */}
            <h3 className="text-xs uppercase tracking-wider text-psecondary font-extrabold pb-3 border-b border-pborder mb-6">
              Write Task Parameters
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4.5" id="contact-routing-form">
              
              {/* Grid Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name" className="text-[10px] uppercase font-bold text-pmuted">Your Name / Corporation</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Clara Bennett"
                    className="w-full text-xs bg-pbg border border-pborder hover:border-pmuted focus:border-pprimary rounded-xl px-4 py-3 outline-none text-ptext transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-[10px] uppercase font-bold text-pmuted">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="clara@zenithhealth.com"
                    className="w-full text-xs bg-pbg border border-pborder hover:border-pmuted focus:border-pprimary rounded-xl px-4 py-3 outline-none text-ptext transition-all"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="subject" className="text-[10px] uppercase font-bold text-pmuted">Target Subject Topic</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry regarding core mobile Flutter client layout..."
                  className="w-full text-xs bg-pbg border border-pborder hover:border-pmuted focus:border-pprimary rounded-xl px-4 py-3 outline-none text-ptext transition-all"
                  required
                />
              </div>

              {/* Message block */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-[10px] uppercase font-bold text-pmuted">Project / Sprint parameters description</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please state timelines, hardware printer targets, or specific Google Ad objectives..."
                  className="w-full text-xs bg-pbg border border-pborder hover:border-pmuted focus:border-pprimary rounded-xl px-4 py-3 outline-none text-ptext transition-all resize-none"
                  required
                />
              </div>

              {errorMessage && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl flex items-center space-x-2">
                  <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit trigger button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl text-white font-black text-xs flex items-center justify-center space-x-2.5 transition-all cursor-pointer bg-gradient-to-r from-pprimary to-psecondary shadow-md hover:shadow-lg hover:brightness-110 ${
                  isSubmitting ? "opacity-75 pointer-events-none cursor-wait" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Routing Parameters to Database...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Task Message</span>
                  </>
                )}
              </button>

            </form>

            {/* Success toast overlay overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 flex items-start space-x-3 shadow-lg"
                  id="form-success-alert"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <h4 className="text-xs font-black">Message Successfully Dispatched!</h4>
                    <p className="text-[10.5px] mt-1 leading-normal text-neutral-400">
                      Thank you for submitting inquiry variables. Your values have been stored inside our localized console. I will respond to your email coordinates within 2 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Lahore Pakistan Map embed */}
        <div>
          <div className="text-left mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest text-paccent bg-paccent/10 px-4 py-1.5 rounded-full inline-block">
              Coordinates Area
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 text-ptext">
              Active Map Office Location
            </h2>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl border border-pborder overflow-hidden bg-pcard shadow-md">
            <iframe
              title="Muhammad Asif Dev Lahore Base Coordinate Map"
              src={personalInfo.mapEmbedUrl}
              className="w-full h-full border-none outline-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>

    </div>
  );
};
