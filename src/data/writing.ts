export interface WritingItem {
  id: string;
  slug: string;
  romanNumeral: string;
  title: string;
  type: "essay" | "paper" | "notes" | "blog" | "fiction" | "review";
  blurb: string;
  date: string;
  year: string;
  status: "IN PROGRESS" | "UNDER REVIEW" | "PUBLISHED" | "ARCHIVED" | "COMPLETED";
  shelf: "desk" | "shelf"; // "desk" = WORKS UPON THE DESK, "shelf" = THE SHELF
  readingTime: string;
  linkText: string;
  linkUrl: string;
  marginaliaNote?: string;
  bookSpineColor?: string;
}

export interface Distinction {
  roman: string;
  title: string;
  conferrer: string;
  year: string;
  folioNote: string;
}

export const writingData: WritingItem[] = [
  // WORKS UPON THE DESK (In Progress)
  {
    id: "write-01",
    slug: "on-the-geometry-of-gravitational-horizons",
    romanNumeral: "I",
    title: "On the Foliation and Penrose Diagrams of Dynamical Horizons",
    type: "paper",
    blurb: "A rigorous mathematical exposition on Cauchy surfaces, trapped surfaces, and event horizon topology during non-axisymmetric black hole mergers.",
    date: "Autumn 2025",
    year: "2025",
    status: "IN PROGRESS",
    shelf: "desk",
    readingTime: "24 min read",
    linkText: "Folio Draft [PDF]",
    linkUrl: "#",
    marginaliaNote: "Re-check null geodesics near r=2M Cauchy horizon!"
  },
  {
    id: "write-02",
    slug: "algorithms-against-the-void",
    romanNumeral: "II",
    title: "Algorithms Against the Void: Solvers for Relativistic Hydrodynamics",
    type: "essay",
    blurb: "Reflections on computational complexity, Godunov-type finite-volume schemes, and how discrete arithmetic models continuous curved manifolds.",
    date: "Late Summer 2025",
    year: "2025",
    status: "UNDER REVIEW",
    shelf: "desk",
    readingTime: "16 min read",
    linkText: "Examine Monograph",
    linkUrl: "#",
    marginaliaNote: "Riemann solvers require positivity limiter."
  },
  {
    id: "write-03",
    slug: "cosmological-constant-historical-notes",
    romanNumeral: "III",
    title: "The Ghost in the Tensor: Notes on Einstein's Greatest Blunder",
    type: "notes",
    blurb: "Archival margin commentary tracing the cosmological constant from 1917 static cosmologies to vacuum expectation energy discrepancies in quantum electrodynamics.",
    date: "Spring 2025",
    year: "2025",
    status: "IN PROGRESS",
    shelf: "desk",
    readingTime: "12 min read",
    linkText: "Peruse Ledger",
    linkUrl: "#",
    marginaliaNote: "120 orders of magnitude difference remains unresolved."
  },

  // THE SHELF (Completed Works)
  {
    id: "write-04",
    slug: "symplectics-and-celestial-spheres",
    romanNumeral: "IV",
    title: "Symplectics & The Celestial Spheres: Preserving Hamiltonian Invariants",
    type: "paper",
    blurb: "Why phase space volume preservation matters over gigayear timescales in N-body cosmological integrations, contrasting Runge-Kutta with symplectic splitting.",
    date: "Winter 2024",
    year: "2024",
    status: "PUBLISHED",
    shelf: "shelf",
    readingTime: "19 min read",
    linkText: "Read in Proceedings",
    linkUrl: "#",
    bookSpineColor: "#5E1B1E" // Oxblood
  },
  {
    id: "write-05",
    slug: "the-first-recombination",
    romanNumeral: "V",
    title: "When the Universe Turned Transparent: The Recombination Epoch",
    type: "essay",
    blurb: "A lyrical scientific narrative recounting the 380,000 years before photon decoupling, the Saha ionization equation, and the lingering glow of the CMB.",
    date: "Autumn 2024",
    year: "2024",
    status: "PUBLISHED",
    shelf: "shelf",
    readingTime: "14 min read",
    linkText: "Ex Libris Archive",
    linkUrl: "#",
    bookSpineColor: "#1E2B23" // Forest
  },
  {
    id: "write-06",
    slug: "chandrasekhar-and-the-limit",
    romanNumeral: "VI",
    title: "Degeneracy at Sea: Subrahmanyan Chandrasekhar's 1930 Voyage",
    type: "review",
    blurb: "Historical critique of Chandrasekhar's handwritten calculations aboard the SS Pilsna combining special relativity with Fermi-Dirac relativistic electron degenerate gas.",
    date: "Summer 2024",
    year: "2024",
    status: "PUBLISHED",
    shelf: "shelf",
    readingTime: "11 min read",
    linkText: "View Review",
    linkUrl: "#",
    bookSpineColor: "#A9823F" // Brass
  },
  {
    id: "write-07",
    slug: "discrete-differential-forms-spacetime",
    romanNumeral: "VII",
    title: "Cartan's Moving Frames on the Lattice: Discrete Differential Forms",
    type: "notes",
    blurb: "Pedagogical derivation of Regge calculus, exterior derivatives on simplicial complexes, and simplicial gravity formulations for computational physics.",
    date: "Spring 2024",
    year: "2024",
    status: "ARCHIVED",
    shelf: "shelf",
    readingTime: "22 min read",
    linkText: "Bound Notes",
    linkUrl: "#",
    bookSpineColor: "#3A2A1A" // Dark leather
  },
  {
    id: "write-08",
    slug: "whispers-of-the-early-singularity",
    romanNumeral: "VIII",
    title: "Whispers of the Primordial Singularity: A Short Speculative Dialog",
    type: "fiction",
    blurb: "A Galilean dialogue set in an antique observatory tower between an observational astronomer and an analytical cosmologist regarding the arrow of time.",
    date: "Winter 2023",
    year: "2023",
    status: "COMPLETED",
    shelf: "shelf",
    readingTime: "9 min read",
    linkText: "Read Tractate",
    linkUrl: "#",
    bookSpineColor: "#4A1B28" // Plum
  }
];

export const distinctionsData: Distinction[] = [
  {
    roman: "I",
    title: "SkyQuest Aerospace Competition Laureate (3rd Prize)",
    conferrer: "Indian Institute of Technology (IIT) Mandi // Xpecto'26",
    year: "MMXXVI (2026)",
    folioNote: "Podium recognition for rocket trajectory physics and Powered Explicit Guidance simulation."
  },
  {
    roman: "II",
    title: "National Finalist (Top 25 Teams across India)",
    conferrer: "Smart India Hackathon // ISRO Problem Statement",
    year: "MMXXVI (2026)",
    folioNote: "Engineered illumination-robust lunar cross-sensor correspondence framework."
  },
  {
    roman: "III",
    title: "Vice President & Autonomy Research Lead",
    conferrer: "Society for Aerospace & Space Technology (SAST) & Rover Innovation Team",
    year: "MMXXV–XXVI (2025–26)",
    folioNote: "Leading space robotics rover kinodynamic path planning and autonomous navigation."
  },
  {
    roman: "IV",
    title: "Founder & Director, Event Horizon 2026",
    conferrer: "National Space Technology Initiative",
    year: "MMXXVI (2026)",
    folioNote: "Founded and spearheaded national aerospace and computational astrophysics conclave with 500+ participants."
  },
  {
    roman: "V",
    title: "Open National Gold Medalist & Taekwondo Dan I Black Belt",
    conferrer: "Sports Authority of India (SAI) Trainee // National Championship",
    year: "MMXX (2020)",
    folioNote: "National Champion in martial arts; foundation of intense mental stamina and physical precision."
  }
];
