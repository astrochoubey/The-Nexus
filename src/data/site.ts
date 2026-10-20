export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface SiteConfig {
  ownerName: string;
  callsign: string;
  affiliation: string;
  phone: string;
  email: string;
  orcid: string;
  eyebrow: string;
  mainTitle: string;
  subTitle: string;
  location: string;
  coordinates: string;
  stationId: string;
  researchInterests: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
    score?: string;
    coursework: string[];
  }[];
  bio: {
    lead: string;
    paragraphs: string[];
    handwrittenNote: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  socials: SocialLink[];
  missionFooter: string;
}

export const siteData: SiteConfig = {
  ownerName: "PRACHI CHOUBEY",
  callsign: "ASTRO-CHOUBEY",
  affiliation: "Computer Science & AI (B.Tech.) · Physics, Math & Chemistry (B.Sc.)",
  phone: "+91 9693662269",
  email: "prachichoubey.thenexusphysics@gmail.com",
  orcid: "0009-0008-0481-3021",
  eyebrow: "PRACHI CHOUBEY PRESENTS",
  mainTitle: "THE NEXUS",
  subTitle: "CS & AI + PHYSICS // COMPUTATIONAL ASTROPHYSICS & THEORETICAL COSMOLOGY",
  location: "Sonipat, Haryana, India",
  coordinates: "LAT 28°59'44\"N · LON 77°01'11\"E",
  stationId: "STN_MISSION_CONTROL_IN",
  researchInterests: [
    "Inflation of the Universe",
    "Exoplanet Demographics & Sub-Neptune Radius Valley",
    "Computational & Theoretical Cosmology",
    "Orbital & Gravitational Dynamics"
  ],
  education: [
    {
      degree: "B.Tech. in Computer Science & Artificial Intelligence",
      institution: "Newton School of Technology, Rishihood University",
      year: "Expected 2029",
      score: "CGPA: 7.50 / 10",
      coursework: [
        "Probability & Statistics",
        "Calculus",
        "Combinatorics",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Computational Problem Solving with Python"
      ]
    },
    {
      degree: "B.Sc. in Physics, Mathematics & Chemistry (Dual Degree)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      year: "Expected 2029",
      coursework: [
        "Classical Mechanics",
        "Electromagnetism",
        "Multivariable Calculus",
        "Differential Equations"
      ]
    }
  ],
  bio: {
    lead: "Computational researcher and dual-degree scholar in Computer Science & AI (B.Tech.) and Physics (B.Sc.), specializing in computational and theoretical astrophysics.",
    paragraphs: [
      "I combine rigorous physical modeling with advanced statistical estimation and Machine Learning techniques. My research includes developing population-scale inference pipelines for NASA exoplanet catalogs, Bayesian transit detection on TESS light curves, and test-driven cosmological solvers for dark energy expansion.",
      "Dedicated to translating complex mathematical and physical principles into verified, high-performance scientific codebases with pytest, Astropy, SciPy, and Lightkurve. Working across orbital mechanics, inflation models, and illumination-robust lunar computer vision."
    ],
    handwrittenNote: "Translating cosmic equations into verified codebases ✦"
  },
  skills: [
    {
      category: "SCIENTIFIC COMPUTING & LIBRARIES",
      items: ["Python", "NumPy", "SciPy", "Matplotlib", "Astropy", "Astroquery", "Lightkurve", "pytest"]
    },
    {
      category: "METHODS & APPLIED MATHEMATICS",
      items: ["Numerical Integration (ODEs, RK4)", "Nonlinear Regression", "Bayesian Inference", "Transit Photometry & Time-Series", "Image Registration", "Robust Fitting (RANSAC)", "Feature Descriptors"]
    },
    {
      category: "TOOLS & SOFTWARE ENGINEERING",
      items: ["Git", "Linux", "Jupyter", "LaTeX", "Open3D", "Three.js", "React.js", "Cloudflare"]
    }
  ],
  socials: [
    {
      label: "GITHUB",
      url: "https://github.com/astrochoubey",
      icon: "github",
      handle: "@astrochoubey"
    },
    {
      label: "LINKEDIN",
      url: "https://linkedin.com/in/prachi-choubeyyy",
      icon: "linkedin",
      handle: "in/prachi-choubeyyy"
    },
    {
      label: "EMAIL",
      url: "mailto:prachichoubey.thenexusphysics@gmail.com",
      icon: "mail",
      handle: "prachichoubey.thenexusphysics@gmail.com"
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0009-0008-0481-3021",
      icon: "book-open",
      handle: "0009-0008-0481-3021"
    }
  ],
  missionFooter: "PRACHI CHOUBEY // THE NEXUS PHYSICS // COMPUTATIONAL ASTROPHYSICS ARCHIVE"
};
