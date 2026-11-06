export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Vision' | 'Cloud & Full Stack' | 'Startup & Community';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  award?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'Hackathons & Contests' | 'Research & Papers' | 'Leadership & Experience' | 'Inter-IIT Challenges';
  description: string;
  highlight: string;
  badge: string;
  rankBadge: string;
  iconType: 'trophy' | 'rocket' | 'award' | 'cloud' | 'briefcase';
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  badge: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ayush Kumar",
    title: "AI/ML Developer & AWS Student Builder Group Leader",
    institution: "Amity University Patna",
    degree: "B.Tech in Computer Science & Engineering (Specialization in AI & Machine Learning)",
    email: "ayushdham405@gmail.com",
    github: "https://github.com/Ayushkumar2212",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-cb221207/",
    twitter: "https://twitter.com",
    awsProfile: "https://aws.amazon.com/developer/community",
    summary: "AWS Intern, AWS Student Builder Group & Campus Leader, Core Team Member at AWS User Group Bihar, and HackerRank Campus Ambassador. 8+ hackathon and national podium winner including Techphilia 9.0 (1st Place), Internal Smart India Hackathon (SIH'26), BIT Sindri UXATHON, NCICIR-2026 Paper Presenter, and Inter-IIT Vittarth 2.0 Qualifier.",
    avatar: "/assets/aistudio/Ayush_Photo_d280ad26.jpeg",
  },

  highlights: [
    { label: "AWS Industry Experience", value: "Intern @ AWS", subtext: "Amazon Web Services" },
    { label: "Community Leadership", value: "AWS Group Lead", subtext: "Campus Lead & UG Bihar" },
    { label: "Hackathon Track Record", value: "8+ Podiums", subtext: "1st Techphilia, SIH'26 3rd" },
    { label: "Developer Advocacy", value: "HackerRank Lead", subtext: "Campus Ambassador" },
  ],

  leadershipRoles: [
    {
      role: "Internship at AWS",
      organization: "Amazon Web Services (AWS)",
      period: "2024 - 2025",
      badge: "Industry Experience",
      description: "Hands-on engineering internship contributing to cloud architectures, AWS serverless workflows, and scalable service implementations.",
    },
    {
      role: "AWS Student Builder Group Leader",
      organization: "Amazon Web Services (AWS) Developer Community",
      period: "2024 - Present",
      badge: "Regional Leadership",
      description: "Spearheading AWS cloud builder community initiatives, delivering technical bootcamps on AWS Bedrock & Amplify, and mentoring 1,500+ student developers across universities.",
    },
    {
      role: "AWS Student Builder Campus Leader",
      organization: "Amity University Patna Chapter",
      period: "2023 - Present",
      badge: "Campus Head",
      description: "Leading the institutional campus cloud community, organizing hands-on builder immersion labs, hackathons, and certifications.",
    },
    {
      role: "Core Team Member",
      organization: "AWS User Group Team Bihar",
      period: "2023 - Present",
      badge: "State-Level Core Team",
      description: "Co-organizing state-wide cloud meetups, developer community days, and architectural deep dives with industry cloud specialists.",
    },
    {
      role: "HackerRank Campus Ambassador",
      organization: "HackerRank",
      period: "2023 - Present",
      badge: "Campus Ambassador",
      description: "Driving competitive coding culture, algorithmic workshops, and problem-solving hackathons across collegiate batches.",
    },
  ],

  projects: [
    {
      id: "safescript-ai",
      title: "SafeScript AI",
      tagline: "Integrated Healthcare Safety Platform & NCICIR-2026 Published Paper",
      category: "Cloud & Full Stack" as const,
      award: "NCICIR-2026 Paper & 3rd Prize",
      description: "An intelligent healthcare safety ecosystem bridging patients, clinics, hospitals, and pharmacies with automated drug contraindication analysis and dosage verification.",
      longDescription: "SafeScript AI eliminates lethal prescription errors by analyzing medication graphs in real time. Presented and published as a research paper at the National Conference on Intelligent Computing, Innovation & Resilience (NCICIR-2026) at ISM Patna. Built with AWS Bedrock foundation models, FHIR-compliant ingestion, and role-based pharmacist validation.",
      image: "/src/assets/images/project_safescript_ai_1793953457641.jpg",
      tags: ["AWS Bedrock", "FastAPI", "React", "TypeScript", "PostgreSQL", "FHIR", "Tailwind CSS"],
      metrics: [
        { label: "Interactions Audited", value: "12,000+" },
        { label: "Response Latency", value: "< 140ms" },
        { label: "Audit Precision", value: "99.4%" },
      ],
      architecture: [
        "Patient EHR Ingestion via secure HL7/FHIR compliant endpoints",
        "Compound Graph Analysis with AWS Bedrock foundation models",
        "Role-based clinical portal with pharmacist dispensing validation",
        "Hosted with zero-downtime serverless architecture on AWS",
      ],
      githubUrl: "https://github.com/Ayushkumar2212",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "ayurved-vision",
      title: "AyurVed",
      tagline: "Vision-Guided Real-Time Biomedical Waste Segregator",
      category: "AI & Vision" as const,
      award: "IIT Kharagpur Top 10 Finalist",
      description: "Real-time edge computer vision platform classifying hazardous hospital biomedical waste into designated regulatory bins to prevent hospital contamination.",
      longDescription: "Developed for national innovation hackathons and honored as a Top 10 Finalist at IIT Kharagpur FUGACITY, AyurVed uses lightweight YOLO object detection combined with an OpenCV processing pipeline to classify syringes, infectious PPE, ampoules, and general municipal waste at 24+ FPS on edge hardware, streaming metrics to a central monitoring dashboard.",
      image: "/src/assets/images/project_ayurved_vision_1793953460248.jpg",
      tags: ["Python", "OpenCV", "YOLOv8", "FastAPI", "Docker", "AWS S3", "Edge AI"],
      metrics: [
        { label: "Inference Speed", value: "24 FPS" },
        { label: "Detection Accuracy", value: "96.8%" },
        { label: "National Stage", value: "Top 10 Finalist" },
      ],
      architecture: [
        "High-speed RTSP camera stream frame extraction via OpenCV",
        "Custom-quantized YOLOv8 tensor weights for hazardous items",
        "FastAPI microservice triggering bin solenoid relays",
        "AWS S3 audit logging for environmental regulatory compliance",
      ],
      githubUrl: "https://github.com/Ayushkumar2212",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "ai-kiosk-civic",
      title: "AI Kiosk (Civic Grievance)",
      tagline: "OSINT & Vision Pipeline for Prioritized Municipal Action",
      category: "AI & Vision" as const,
      award: "Internal SIH'26 3rd Position",
      description: "Multi-modal intelligence pipeline ingesting citizen reports, social media grievances, and civic images to prioritize urgent municipal dispatch tickets.",
      longDescription: "Recognized with 3rd Position at the Internal Smart India Hackathon (SIH'26). By applying Gemini multimodal vision to verify road hazards, water main bursts, and electrical dangers alongside NLP sentiment and OSINT triangulation, it eliminates 82% of duplicate reports and auto-routes emergencies to field officers.",
      image: "/src/assets/images/project_ai_kiosk_1793953459918.jpg",
      tags: ["Gemini API", "LangChain", "Next.js", "Python", "OSINT", "Mapbox", "AWS Lambda"],
      metrics: [
        { label: "Duplicate Reduction", value: "82%" },
        { label: "Dispatch Triage Time", value: "< 2 mins" },
        { label: "Grievances Processed", value: "4,500+" },
      ],
      architecture: [
        "Multimodal classification of citizen hazard photographs",
        "OSINT spatial geo-clustering to group identical neighborhood complaints",
        "Automated priority scoring matrix based on civic risk severity",
        "Interactive dispatch command map with real-time field routing",
      ],
      githubUrl: "https://github.com/Ayushkumar2212",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "prompt2pixel",
      title: "Prompt2Pixel",
      tagline: "Flagship GenAI Hackathon & Pan-University AWS Initiative",
      category: "Startup & Community" as const,
      award: "AWS Global Builder Initiative",
      description: "Premier Generative AI hackathon and cloud immersion summit spearheaded as AWS Student Builder Group Leader across collegiate campuses.",
      longDescription: "Conceptualized and executed as the flagship developer builder initiative at Amity University Patna in collaboration with AWS communities. Over 1,500 students participated in intensive hands-on cloud labs, building real-world generative AI and agentic applications on AWS Bedrock, Amplify, and serverless architectures.",
      image: "/src/assets/images/project_prompt2pixel_1793953459740.jpg",
      tags: ["AWS Amplify", "AWS Bedrock", "Community Leadership", "Event Architecture", "Mentorship"],
      metrics: [
        { label: "Student Participants", value: "1,500+" },
        { label: "Projects Submitted", value: "120+" },
        { label: "Campuses Reached", value: "5 Universities" },
      ],
      architecture: [
        "Curated multi-track challenge matrix (Healthcare, Civic Tech, DevTools)",
        "Automated project submission portal deployed via AWS Amplify",
        "Hands-on architectural bootcamps on AWS Bedrock foundation models",
        "Direct industry jury evaluation and cloud voucher distributions",
      ],
      githubUrl: "https://github.com/Ayushkumar2212",
      liveUrl: "#",
      featured: true,
    },
  ],

  skillCategories: [
    {
      name: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "AWS Amplify", level: "Production", experience: "2+ yrs", description: "Full-stack web deployment, CI/CD pipelines, auth, and hosting" },
        { name: "AWS Bedrock", level: "Advanced", experience: "1.5 yrs", description: "Deploying Claude, Titan, and custom generative AI agent pipelines" },
        { name: "AWS Lambda & S3", level: "Production", experience: "2+ yrs", description: "Event-driven serverless backends and secure object storage" },
        { name: "AWS EC2 & IAM", level: "Intermediate", experience: "2 yrs", description: "Cloud compute provisioning, VPC networking, and security policies" },
        { name: "Docker & Linux", level: "Proficient", experience: "2+ yrs", description: "Containerized deployment, multi-stage builds, bash scripting" },
      ],
    },
    {
      name: "AI / ML & Vision",
      icon: "Cpu",
      skills: [
        { name: "Python & FastAPI", level: "Expert", experience: "3+ yrs", description: "High-performance async APIs, mathematical modeling, data pipelines" },
        { name: "OpenCV & YOLOv8", level: "Advanced", experience: "2+ yrs", description: "Real-time edge object detection, segmentation, video stream analysis" },
        { name: "Gemini API & LLMs", level: "Advanced", experience: "1.5 yrs", description: "Multimodal prompts, structured JSON extraction, tool calling" },
        { name: "LangChain & Agents", level: "Proficient", experience: "1.5 yrs", description: "Chained retrieval-augmented generation (RAG) and tool-enabled agents" },
        { name: "Scikit-Learn & PyTorch", level: "Proficient", experience: "2 yrs", description: "Classical classification, regression, and deep neural network fine-tuning" },
      ],
    },
    {
      name: "Full Stack Development",
      icon: "Code",
      skills: [
        { name: "React & Next.js", level: "Expert", experience: "3+ yrs", description: "Modern component architecture, server components, hooks, high FPS UI" },
        { name: "TypeScript", level: "Advanced", experience: "2.5 yrs", description: "Strict static typing, interfaces, generic state management" },
        { name: "Tailwind CSS", level: "Expert", experience: "3 yrs", description: "Design systems, responsive grid layouts, custom dark/light themes" },
        { name: "Node.js & Express", level: "Proficient", experience: "2+ yrs", description: "RESTful API engineering, middleware auth, backend microservices" },
        { name: "Firebase & Supabase", level: "Proficient", experience: "2 yrs", description: "Realtime databases, authentication, security rules" },
      ],
    },
  ],

  achievements: [
    {
      id: "techphilia-winner",
      title: "Winner (1st Place): Techphilia 9.0 Hackathon",
      organization: "Amity University Patna",
      year: "2026",
      category: "Hackathons & Contests" as const,
      description: "Secured 1st Place overall champion trophy among dozens of collegiate engineering teams, designing and deploying an end-to-end AI platform within 24 hours.",
      highlight: "1st Place Winner Trophy",
      badge: "Techphilia 9.0 Champion",
      rankBadge: "1st Position",
      iconType: "trophy" as const,
    },
    {
      id: "sih-2026",
      title: "3rd Position: Internal Smart India Hackathon (SIH'26)",
      organization: "Ministry of Education / Internal Screening",
      year: "2026",
      category: "Hackathons & Contests" as const,
      description: "Ranked 3rd in the competitive internal screening round for Smart India Hackathon (SIH'26), tackling large-scale municipal intelligence and civic dispatch automation.",
      highlight: "3rd Position Podium",
      badge: "SIH'26 Finalist",
      rankBadge: "3rd Position",
      iconType: "trophy" as const,
    },
    {
      id: "uxathon-bit-sindri",
      title: "3rd Position: UXATHON, Tech Mahotsav'26",
      organization: "HnCC, BIT Sindri",
      year: "2026",
      category: "Hackathons & Contests" as const,
      description: "Awarded 3rd Position at BIT Sindri's premier design & full-stack hackathon for high visual aesthetics, intuitive user flow, and accessibility-first architecture.",
      highlight: "3rd Position Podium",
      badge: "BIT Sindri UXATHON",
      rankBadge: "3rd Position",
      iconType: "trophy" as const,
    },
    {
      id: "technova-hackathon",
      title: "3rd Position: Technova Hackathon (Aagman)",
      organization: "Impact Group of Colleges",
      year: "2026",
      category: "Hackathons & Contests" as const,
      description: "Secured 3rd Position in the Aagman Inter-College Competition for innovative computer vision and rapid software deployment.",
      highlight: "3rd Position Podium",
      badge: "Technova Inter-College",
      rankBadge: "3rd Position",
      iconType: "trophy" as const,
    },
    {
      id: "ncicir-paper-presenter",
      title: "3rd Position & Paper Presenter: NCICIR-2026",
      organization: "ISM Patna (Conference: NCICIR-2026)",
      year: "2026",
      category: "Research & Papers" as const,
      description: "Awarded 3rd Position and delivered oral paper presentation at the National Conference on Intelligent Computing, Innovation & Resilience (NCICIR-2026) for research paper on 'SafeScript AI: Clinical Prescription Intelligence'.",
      highlight: "Research Paper & 3rd Prize",
      badge: "NCICIR-2026 Presenter",
      rankBadge: "3rd Position & Paper",
      iconType: "award" as const,
    },
    {
      id: "efos-skillup-india",
      title: "4th Position: EFOS Skill Up India Hackathon",
      organization: "EFOS National Talent Assessment",
      year: "2024",
      category: "Hackathons & Contests" as const,
      description: "Achieved 4th Position nationwide across 10,000+ contending developers in algorithmic architecture, system scalability, and cloud microservices.",
      highlight: "4th Position Nationwide",
      badge: "EFOS All-India Rank 4",
      rankBadge: "4th Position",
      iconType: "award" as const,
    },
    {
      id: "et-ai-semifinalist",
      title: "Semi-Finalist: ET-AI Hackathon 2026",
      organization: "The Economic Times Digital",
      year: "2026",
      category: "Hackathons & Contests" as const,
      description: "Advanced to Semi-Finalist stage in the flagship national artificial intelligence challenge by ET Digital, developing enterprise AI reasoning pipelines.",
      highlight: "National Semi-Finalist",
      badge: "ET-AI Semi-Finalist",
      rankBadge: "Semi-Finalist",
      iconType: "rocket" as const,
    },
    {
      id: "vittarth-inter-iit",
      title: "Round 2 Qualifier: Vittarth 2.0 (Inter-IIT Challenge)",
      organization: "IIT Roorkee, IIT Kharagpur, IIT Delhi, IIT Bombay & IIT Guwahati",
      year: "2025 - 2026",
      category: "Inter-IIT Challenges" as const,
      description: "Qualified for Round 2 in the prestigious Inter-IIT Finance & Economics Challenge jointly organized across 5 premier Indian Institutes of Technology.",
      highlight: "Inter-IIT Round 2 Qualifier",
      badge: "Inter-IIT Vittarth 2.0",
      rankBadge: "Round 2 Qualifier",
      iconType: "award" as const,
    },
    {
      id: "iit-kgp-fugacity",
      title: "Top 10 Finalist: IIT Kharagpur FUGACITY",
      organization: "Indian Institute of Technology, Kharagpur",
      year: "2024",
      category: "Inter-IIT Challenges" as const,
      description: "Selected among top innovators nationwide for 'AyurVed'—an edge computer vision biomedical waste segregation apparatus solving hospital contamination in a high-intensity 36-hour sprint.",
      highlight: "Top 10 National Finalist",
      badge: "IIT Kharagpur Finalist",
      rankBadge: "Top 10 Finalist",
      iconType: "trophy" as const,
    },
  ],
};
