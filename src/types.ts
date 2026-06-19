/**
 * Muhammad Asif - Portfolio Types Definition Schema
 */

export interface ServiceFeature {
  name: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "web" | "mobile" | "desktop" | "design" | "marketing" | "wordpress";
  iconName: string; // Dynamic Lucide Icon
  description: string;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: "web" | "mobile" | "desktop" | "design" | "marketing" | "wordpress";
  technologies: string[];
  image: string; // Thumbnail card image
  github?: string;
  demo?: string;
  // Case study rich info
  caseStudy: {
    client?: string;
    duration?: string;
    challenge: string;
    solution: string;
    results: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface StatisticItem {
  value: string;
  label: string;
  suffix: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}
