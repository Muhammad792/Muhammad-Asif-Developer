import { 
  ServiceItem, 
  ProjectItem, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  TestimonialItem,
  StatisticItem 
} from "./types";

export const personalInfo = {
  name: "Muhammad Asif",
  title: "Full Stack Developer & Digital Solutions Expert",
  logoText: "Asif.Dev",
  tagline: "I Build Modern Websites, Mobile Apps, Desktop Applications and Digital Experiences.",
  aboutBrief: "Muhammad Asif is a passionate technology enthusiast specializing in Website Development, Mobile App Development, Desktop Application Development, Graphic Designing, Digital Marketing, and WordPress Development. Dedicated to creating high-quality digital solutions that help businesses grow and succeed online.",
  aboutDetailed: "With over 6 years of professional experience in full-stack software development and digital strategy, I help early-stage ventures and established brands create high-impact, beautifully engineered native applications and secure web interfaces. I marry clean, pixel-perfect layout architecture with robust desktop, cloud, mobile and CMS infrastructures. From conceptual wireframes to high-performance database tuning and high-conversion target marketing, I deliver end-to-end digital mastery designed to streamline operations and catalyze online growth.",
  email: "alasifalikhichi792@gmail.com",
  phone: "+92 3004950376", // placeholder or general format
  whatsapp: "https://wa.me/923424386792", // Replaceable standard link
  location: "okara, Pakistan (Available for Global Remote Workspace)",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108841.22158933458!2d74.30825310000001!3d31.520369599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904cedc17b5db%3A0x70d592f69dc8a688!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718712345678!5m2!1sen!2s",
  cvUrl: "#", // Simulate download or generate document preview
  socials: {
    github: "https://github.com/Muhammad792",
    linkedin: "https://www.linkedin.com/in/muhammad-asif-486388328/",
    twitter: "https://x.com/Muhamma45849269",
    facebook: "https://www.facebook.com/alasifalikhichi792",
    whatsapp: "https://wa.me/923424386792"
  }
};

export const statistics: StatisticItem[] = [
  { value: "150", label: "Completed Projects", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
  { value: "6", label: "Years Experience", suffix: "+" },
  { value: "45", label: "Global Partners", suffix: "+" }
];

export const skillsOverview = {
  technical: [
    { name: "React / React Router / Next.js", level: 95 },
    { name: "Node.js / Express / REST APIs", level: 90 },
    { name: "Flutter / iOS & Android SDKs", level: 85 },
    { name: "Desktop C# .NET / WPF / C++", level: 80 },
    { name: "SQL Databases / PostgreSQL / Firebase", level: 88 },
    { name: "WordPress / Custom Elementor Theme Crafting", level: 95 },
    { name: "Adobe Palette (Photoshop, Illustrator, Figma)", level: 88 },
    { name: "Digital Advertising (Meta, Google, SEO Optimization)", level: 85 }
  ],
  soft: [
    "Technical Architecture Design",
    "On-Time Sprint Delivery",
    "Agile Collaboration",
    "Client consultations & User-Experience Advocacy",
    "Analytical Troubleshooting",
    "Brand Translation & Visual Semantics"
  ]
};

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    category: "web",
    iconName: "Globe",
    description: "Crafting highly responsive websites tailored to engage visitors, establish authority, and streamline customer journeys.",
    features: [
      "Responsive Business Websites",
      "Dynamic Portfolios & Resumes",
      "Robust E-commerce Platforms",
      "High-Conversion Landing Pages",
      "Custom Enterprise Web Applications"
    ],
    startingPrice: "$300",
    deliveryTime: "5 - 10 Days"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    category: "mobile",
    iconName: "Smartphone",
    description: "Building fast, reliable cross-platform mobile apps using Flutter and native engines to capture modern phone audiences.",
    features: [
      "Custom Android Applications",
      "Fluid iOS Native Applications",
      "Cross-Platform Flutter Integrations",
      "Mobile API & Secure Data Syncing",
      "Push Notifications & Camera Controls"
    ],
    startingPrice: "$800",
    deliveryTime: "15 - 25 Days"
  },
  {
    id: "desktop-dev",
    title: "Desktop App Development",
    category: "desktop",
    iconName: "Monitor",
    description: "Engineering secure, offline-capable Windows applications to optimize organizational speed and power on-premise workflows.",
    features: [
      "Bespoke Windows Software (.NET / C#)",
      "Internal Franchise Management Platforms",
      "Real-time Inventory Control Tools",
      "Advanced POS Software & Invoice Engines",
      "Local Database Syncing & Hardware Interfaces"
    ],
    startingPrice: "$500",
    deliveryTime: "10 - 20 Days"
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    category: "design",
    iconName: "Palette",
    description: "Delivering stunning visual statements, cohesive logos, and comprehensive vector-brand guidelines.",
    features: [
      "Contemporary Logo Guidelines",
      "Social Media Post Collections",
      "Interactive Branding Kits",
      "Vector Flyers & Posters",
      "Print-ready Stationery & Business Cards"
    ],
    startingPrice: "$100",
    deliveryTime: "3 - 5 Days"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "marketing",
    iconName: "Megaphone",
    description: "Driving commercial scale, optimizing multi-channel ad spend, and positioning products on Google page search outputs.",
    features: [
      "Complete Social Media Marketing Setup",
      "Meta Ads Management (Facebook & Instagram)",
      "Premium Google Search & Display Campaigns",
      "Technical Search Engine Optimization (SEO)",
      "High-Engage Organic Content Marketing"
    ],
    startingPrice: "$200",
    deliveryTime: "Monthly Retainer"
  },
  {
    id: "wordpress-dev",
    title: "WordPress Development",
    category: "wordpress",
    iconName: "Cpu",
    description: "Leveraging rich CMS capabilities to construct beautiful, fast drag-and-drop themes with secure customization.",
    features: [
      "Interactive Business Showcases",
      "Automated WooCommerce Web Stores",
      "Figma to Custom Elementor Layouts",
      "Secured Core Custom Extensions",
      "Page Speed & Database Tuning"
    ],
    startingPrice: "$150",
    deliveryTime: "4 - 7 Days"
  }
];

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Nexus - SaaS Business Hub",
    description: "Next-generation full-stack customer relationship manager and service analytic platform styled with rich slate backgrounds.",
    category: "web",
    technologies: ["React.js", "React Router", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    image: "https://picsum.photos/seed/nexus/800/600",
    github: "https://github.com/Muhammad792/nexus-saas-platform",
    demo: "https://nexus-saas-demo.example.com",
    caseStudy: {
      client: "Nexus Solutions Ltd",
      duration: "3 Months",
      challenge: "The client needed a responsive client portal capable of parsing bulk sales analytics without bottlenecking client-side browsers.",
      solution: "Engineered an API pipeline caching calculations backend-side and mapping output fields using lightweight memoized custom charts.",
      results: "Improved page speeds by 64% and helped the client onboard 12 brand-new B2B partners in its first three weeks."
    }
  },
  {
    id: "proj-2",
    title: "ZenTracker - Health Companion App",
    description: "Cross-platform mobile application compiled through Flutter showcasing active health-stats and offline meditation loops.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase Auth", "SQLite", "Local Notifications", "Framer Motion"],
    image: "https://picsum.photos/seed/zentracker/800/600",
    github: "https://github.com/Muhammad792/zentracker-mobile-app",
    demo: "https://zentracker-app.example.com",
    caseStudy: {
      client: "Zenith Health Inc.",
      duration: "2 Months",
      challenge: "Providing zero-lag bio-syncing trackers that operate reliably even during offline mountain treks with low battery usage.",
      solution: "Initialized lightweight SQLite cache arrays syncing lazy payload headers background-side to Firebase whenever Wi-Fi returns.",
      results: "Reached 50,000+ app store installations across iOS and Android with a solid 4.8 user store rating."
    }
  },
  {
    id: "proj-3",
    title: "AeroPOS - Point-of-Sale Client",
    description: "Windows desktop application for real-time inventory control, barcode reading, multi-printer outputs, and secure daily logs.",
    category: "desktop",
    technologies: ["C# .NET", "WPF", "SQLite", "System.Drawing", "Hardware Adapters"],
    image: "https://picsum.photos/seed/aeropos/800/600",
    github: "https://github.com/Muhammad792/aeropos-desktop-pos",
    demo: "https://aeropos-desktop.example.com",
    caseStudy: {
      client: "Aero Warehouses Group",
      duration: "1.5 Months",
      challenge: "Standard POS suites were slow to query 100,000+ stock units and would freeze up when printers lost communication.",
      solution: "Wrote high-speed C# async index queries using decoupled background printer buffers to process payments even when devices go cold.",
      results: "Enabled three major warehouses to process checkout queues twice as fast, avoiding terminal bottlenecks."
    }
  },
  {
    id: "proj-4",
    title: "Verv Branding - Luxury Identity Kit",
    description: "Complete vector design visual strategy featuring custom typography palettes, dynamic branding packages, and modern vector guidelines.",
    category: "design",
    technologies: ["Figma", "Adobe Illustrator", "Vector Mechanics", "Layout Grid Sizing"],
    image: "https://picsum.photos/seed/verv/800/600",
    github: "https://github.com/Muhammad792/verv-brand-designs",
    demo: "https://verv-branding.example.com",
    caseStudy: {
      client: "Verv Fragrances London",
      duration: "3 Weeks",
      challenge: "A premium luxury perfume collection needed to pivot into a younger, digital-first aesthetic without sacrificing their legacy elegance.",
      solution: "Sculpted minimalist, geometric logos paired with a warm twilight slate layout system and dynamic high-contrast guidelines.",
      results: "Received consistent client praise for brand guidelines clarity and generated an immediate 40% rise in digital engagement."
    }
  },
  {
    id: "proj-5",
    title: "PulseMeta - Lead Conversion Funnel",
    description: "Multi-channel advertising optimization campaign routing highly qualified prospects through automated custom landing hubs.",
    category: "marketing",
    technologies: ["Meta Pixel", "Google Ads Engine", "High-Conversion Copywriting", "Technical SEO Auditing", "A/B Testing"],
    image: "https://picsum.photos/seed/pulsemeta/800/600",
    github: "https://github.com/Muhammad792/pulsemeta-marketing",
    demo: "https://pulsemeta-funnel.example.com",
    caseStudy: {
      client: "Spark FinTech",
      duration: "1 Month",
      challenge: "Under-performing leads with high acquisition cost of $48 per subscriber due to low relevance and general audience targets.",
      solution: "Redesigned ad funnel targeting specific pain points, deploying Meta Pixel split tests, and configuring a tailored landing experience.",
      results: "Slashed lead acquisition cost down to $18 per subscriber, while boosting overall conversions by 280%."
    }
  },
  {
    id: "proj-6",
    title: "DuskStore - Custom WooCommerce Theme",
    description: "A fast WordPress WooCommerce build designed via precision Elementor configurations, lightweight layout schemas, and speed tunings.",
    category: "wordpress",
    technologies: ["WordPress CMS", "PHP", "WooCommerce", "Elementor Pro", "WP-Rocket Speed Optimization"],
    image: "https://picsum.photos/seed/duskstore/800/600",
    github: "https://github.com/Muhammad792/duskstore-woocommerce",
    demo: "https://duskstore-wordpress.example.com",
    caseStudy: {
      client: "Dusk Apparel",
      duration: "10 Days",
      challenge: "The client's existing store loaded slowly (7.8s), causing high checkout bounce rates and sluggish mobile interactions.",
      solution: "Restructured the database schema, trimmed unneeded scripts, installed dynamic image caching, and tailored an Elementor grid framework.",
      results: "Brought load times down to 1.5s, lifting e-commerce mobile checkouts by an outstanding 44%."
    }
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Developer & Digital Solutions Architect",
    company: "Apex Tech Agency",
    period: "2023 - Present",
    description: "Orchestrate multi-disciplinary sprints building full-stack web platforms, mobile Flutter applications, and digital blueprints. Serve as lead engineer consulting clients on system scaling, performance optimization, and premium user experience patterns.",
    skills: ["Full Stack Architecture", "Team Mentorship", "React/Next.js Ecosystem", "Database Architecture"]
  },
  {
    id: "exp-2",
    role: "Full Stack Software Engineer",
    company: "ByteCraft Studio",
    period: "2021 - 2023",
    description: "Developed and optimized client-facing software applications. Designed secure desktop POS frameworks, customized WordPress engines for multi-tenant e-commerce hubs, and coordinated high-conversion meta retargeting ad campaigns.",
    skills: ["C# WPF Applications", "WordPress WooCommerce", "Node.js", "Digital Strategy Tuning"]
  },
  {
    id: "exp-3",
    role: "Creative Developer (Freelance)",
    company: "Self-Employed (Top-Rated Fiverr / Upwork Elite)",
    period: "2020 - 2021",
    description: "Dispatched direct custom-tailored websites and digital marketing schemes for international startups. Designed company brand identities, flyers, logos, and translated web designs from pure Figma structures into pixel-perfect code.",
    skills: ["Figma Design", "React Custom Components", "Landing Optimizations", "Client Success Delivery"]
  }
];

export const educationTimeline: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Sciences & Technology (NUST)",
    period: "2016 - 2020",
    description: "Graduated with honors. Developed rigorous foundations in Data Structures, Object-Oriented Systems, Software Architecture Design Patterns, and Database Management Systems."
  },
  {
    id: "edu-2",
    degree: "Advanced Software Engineering Certificate",
    institution: "Meta Software Engineering Specialization",
    period: "2021",
    description: "Immersive program targeting performance-oriented front-end system development, secure React architectures, and professional API designs."
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    year: "2024"
  },
  {
    id: "cert-2",
    title: "Professional Scrum Master (PSM I)",
    issuer: "Scrum.org",
    year: "2023"
  },
  {
    id: "cert-3",
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    year: "2022"
  },
  {
    id: "cert-4",
    title: "WordPress VIP Developer Certification",
    issuer: "WordPress Guild",
    year: "2021"
  }
];

export const clientTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Jonathan Vance",
    role: "Chief Technology Officer",
    company: "Nexus Solutions Ltd",
    avatar: "https://picsum.photos/seed/jonathan/150/150",
    rating: 5,
    content: "Muhammad Asif is a rare engineering strategist who delivers absolute premium quality. He took our complex bulk analytical requirements and mapped out an elegant React web client that operates with high-speed precision. Outstanding Website Development work!"
  },
  {
    id: "test-2",
    name: "Clara Bennett",
    role: "VP of Product Development",
    company: "Zenith Health Inc.",
    avatar: "https://picsum.photos/seed/clara/150/150",
    rating: 5,
    content: "Our fitness community fell in love with ZenTracker's seamless offline navigation. Asif built our Flutter application with state-of-the-art responsiveness. Mobile App Development has never looked so high-end."
  },
  {
    id: "test-3",
    name: "Marcus Thorne",
    role: "Founder & Creative Director",
    company: "Verv Fragrances London",
    avatar: "https://picsum.photos/seed/marcus/150/150",
    rating: 5,
    content: "Asif brought unmatched graphic sophistication and technical expertise to Verv's digital transformation. His exceptional Graphic Designing skills helped our premium brand double its social media leads!"
  },
  {
    id: "test-4",
    name: "Amara Sterling",
    role: "E-commerce Operations Manager",
    company: "NovaTrend Group",
    avatar: "https://picsum.photos/seed/amara/150/150",
    rating: 5,
    content: "We hired Muhammad Asif for our major WordPress Development project, converting our obsolete storefront into a super fast WooCommerce machine. Deliveries are quick, and our checkout bounce rate decreased by 45%!"
  },
  {
    id: "test-5",
    name: "Haris Munir",
    role: "Managing Director",
    company: "Standard POS Distributing",
    avatar: "https://picsum.photos/seed/haris/150/150",
    rating: 5,
    content: "Absolute master class in Desktop Application Development. Asif engineered our bespoke Windows software with lightning-fast local SQLite storage. It is secure, robust, and running smoothly across 14 franchises."
  },
  {
    id: "test-6",
    name: "Elena Rostova",
    role: "Director of Digital Acquisition",
    company: "Zenith-Marketing Inc.",
    avatar: "https://picsum.photos/seed/elena/150/150",
    rating: 5,
    content: "Asif's Digital Marketing campaigns changed our lead-gen numbers completely. His A/B testing tactics, Meta Pixel integrations, and Google ad structures reduced our advertising acquisition costs from $48 down to $18 per lead."
  },
  {
    id: "test-7",
    name: "Tariq Al-Jamil",
    role: "CEO",
    company: "Sahara Real Estate",
    avatar: "https://picsum.photos/seed/tariq/150/150",
    rating: 5,
    content: "The custom Elementor theme optimization Asif executed on our database was outstanding. Professional WordPress Development, crystal clear communication, and incredible layout aesthetics."
  },
  {
    id: "test-8",
    name: "Fiona Gallagher",
    role: "Brand Relations Director",
    company: "Apex Fashion Hub",
    avatar: "https://picsum.photos/seed/fiona/150/150",
    rating: 5,
    content: "Muhammad Asif brings the perfect cohesion of digital intelligence and brand mechanics. His double delivery of a custom high-performance Web Solutions portal and premium Brand Identity kits was completely flawless!"
  }
];
