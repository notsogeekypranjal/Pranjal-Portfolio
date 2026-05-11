export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pranjal-portfolio.vercel.app";

export const siteConfig = {
  name: "Pranjal Mishra",
  headline: "MERN, full-stack, and ML systems for real-world impact.",
  title: "Computer Science Student",
  roles: [
    "MERN Stack Developer",
    "Machine Learning Engineer",
    "Full-Stack Developer",
  ] as const,
  location: "New Delhi, India",
  email: "pranjal6306mishra@gmail.com",
  linkedin: "https://linkedin.com/in/pranjal-mishra06",
  github: "https://github.com/notsogeekypranjal",
  summary:
    "Computer Science undergraduate specializing in MERN stack development and machine learning, with hands-on experience at DRDO building and optimizing high-performance classification models. Proven ability to design end-to-end data pipelines and deploy AI-driven solutions, demonstrated through projects like KrishiBodh—an award-winning agriculture platform ranked Top 4 among 1000+ teams. Passionate about leveraging AI and scalable systems to solve real-world problems in high-impact domains.",
  targetRoles: [
    "Software Engineering Intern",
    "MERN Stack Developer Intern",
    "Machine Learning Intern",
    "AI Engineer Intern",
  ] as const,
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Maharaja Agrasen Institute of Technology",
    period: "August 2023 – May 2027",
    location: "New Delhi, India",
  },
  resumePath: "/PranjalMishraResume.pdf",
} as const;

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Machine Learning Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    period: "June 2025 – July 2025",
    location: "New Delhi, India",
    highlights: [
      "Built and optimized Logistic Regression and Neural Network classification models.",
      "Improved model accuracy from 94% to 96%.",
      "Designed end-to-end preprocessing and feature engineering pipelines.",
      "Used Python, NumPy, Pandas, and scikit-learn.",
      "Evaluated models using precision, recall, F1-score, and cross-validation.",
      "Collaborated with senior research scientists.",
    ],
  },
];

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: ProjectItem[] = [
  {
    title: "KrishiBodh",
    subtitle: "AI-Driven Smart Agriculture Advisory Platform",
    description: [
      "Full-stack AI-powered agriculture advisory platform.",
      "Machine learning-based crop recommendation.",
      "Real-time weather and market price APIs.",
      "Intelligent crop planning and yield optimization.",
      "Ranked Top 4 out of 1000+ teams.",
      "Presented at the India AI Summit.",
    ],
    tags: ["MERN", "ML", "APIs", "Full-stack"],
  },
  {
    title: "Network Traffic Classifier",
    subtitle: "TOR vs Non-TOR classification",
    description: [
      "Deep learning-based TOR vs Non-TOR traffic classification.",
      "Neural networks with attention mechanisms.",
      "Improved accuracy from 94% to 96%.",
      "Evaluated using confusion matrix and classification metrics.",
    ],
    tags: ["Deep Learning", "Python", "Neural Networks"],
  },
  {
    title: "DevConnect",
    subtitle: "Developer Social Networking Platform",
    description: [
      "Full-stack social network for developers.",
      "Project sharing and technical blogs.",
      "REST APIs for authentication and post management.",
      "Secure authentication workflows.",
    ],
    tags: ["Node.js", "Express", "REST", "Auth"],
  },
];

export const skills = {
  languages: ["Java", "C++", "Python", "JavaScript"],
  core: ["Data Structures", "Object-Oriented Programming", "REST APIs"],
  frontend: ["React"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "SQL", "Firebase"],
  ml: ["NumPy", "Pandas", "scikit-learn"],
} as const;

export const softSkills = [
  "Leadership",
  "Collaboration",
  "Problem Solving",
  "Communication",
  "Creativity",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
] as const;

export const achievements = [
  "Top 4 out of 1000+ teams in IBM-evaluated AI Innovation Challenge.",
  "Selected for presentation at India AI Summit.",
  "Finalist (2×) at NSUT Ideathon.",
  "Runner-Up at HackCodex Hackathon.",
] as const;

export type CodingProfile = {
  label: string;
  href: string;
  description: string;
};

export const codingProfiles: CodingProfile[] = [
  {
    label: "GitHub",
    href: siteConfig.github,
    description: "Projects, contributions, and code samples.",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Experience, education, and professional updates.",
  },
];
