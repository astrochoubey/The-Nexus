export interface Achievement {
  id: string;
  code: string;
  title: string;
  organisation: string;
  year: string;
  description: string;
  category: "AWARD" | "COMPETITION" | "LEADERSHIP" | "RESEARCH" | "ATHLETICS";
  hudTag: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "ach-01",
    code: "LOG_01 //",
    title: "3rd Prize — SkyQuest Aerospace Competition",
    organisation: "IIT Mandi // Xpecto'26 National Aerospace Conclave",
    year: "2026",
    description: "Awarded podium honor for high-fidelity rocket trajectory dynamics and guidance flight control modeling.",
    category: "COMPETITION",
    hudTag: "SKYQUEST_PODIUM_IIT"
  },
  {
    id: "ach-02",
    code: "LOG_02 //",
    title: "National Finalist (Top 25 Teams in India)",
    organisation: "Smart India Hackathon // ISRO Problem Statement",
    year: "2026",
    description: "Engineered illumination-robust lunar orbital imagery correspondence pipeline for multi-sensor Chandrayaan data.",
    category: "COMPETITION",
    hudTag: "SIH_TOP_25_ISRO"
  },
  {
    id: "ach-03",
    code: "LOG_03 //",
    title: "Vice President & Autonomy Research Lead",
    organisation: "Society for Aerospace & Space Technology (SAST) & Rover Innovation Team (RIT)",
    year: "2025–26",
    description: "Directing autonomous rover kinodynamic planning research (RRT*, Hybrid A*) and telemetry guidance stacks.",
    category: "LEADERSHIP",
    hudTag: "VP_AUTONOMY_RIT"
  },
  {
    id: "ach-04",
    code: "LOG_04 //",
    title: "Director — Event Horizon 2026 National Hackathon",
    organisation: "Event Horizon National Space-Tech Initiative",
    year: "2026",
    description: "Founded and led a nationwide aerospace and computational astrophysics hackathon convening 500+ student innovators.",
    category: "LEADERSHIP",
    hudTag: "FOUNDER_DIRECTOR_EH"
  },
  {
    id: "ach-05",
    code: "LOG_05 //",
    title: "TESS Exoplanet Transit Detection Framework",
    organisation: "ISRO Bharatiya Antariksh Hackathon",
    year: "2026",
    description: "Developed transit detection pipeline combining Transit Least Squares, Gaussian Process detrending, and Bayesian fitting.",
    category: "RESEARCH",
    hudTag: "ISRO_BAH_TRANSIT"
  },
  {
    id: "ach-06",
    code: "LOG_06 //",
    title: "Taekwondo Black Belt (Dan I) & National Gold Medalist",
    organisation: "Open National Championship // Sports Authority of India (SAI) Trainee",
    year: "2020",
    description: "Open National Gold Medalist in martial arts; instilled foundational endurance, discipline, and mental resilience.",
    category: "ATHLETICS",
    hudTag: "BLACK_BELT_DAN_I"
  }
];
