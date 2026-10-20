export type ImpossibleStatus = "ACHIEVED" | "IN_PROGRESS" | "PENDING";
export type ImpossibleCategory = "RESEARCH" | "COMPUTATION" | "EXPEDITION" | "ACADEMIC" | "CREATIVE";

export interface ImpossibleItem {
  id: string; // T-001, T-002, etc.
  title: string;
  category: ImpossibleCategory;
  status: ImpossibleStatus;
  achievedDate?: string;
  notes: string;
}

export const impossibleData: ImpossibleItem[] = [
  {
    id: "T-001",
    title: "[PLACEHOLDER — Publish a solo first-author paper in ApJ / MNRAS]",
    category: "RESEARCH",
    status: "ACHIEVED",
    achievedDate: "OCT 2025",
    notes: "Completed octree Poisson solver algorithm for high-redshift dark matter halo simulations."
  },
  {
    id: "T-002",
    title: "[PLACEHOLDER — Run an exascale cosmological N-body simulation on 1,000+ GPUs]",
    category: "COMPUTATION",
    status: "IN_PROGRESS",
    notes: "Benchmarked MPI-CUDA halo exchange on 128 nodes; scaling up to Frontier supercomputing cluster."
  },
  {
    id: "T-003",
    title: "[PLACEHOLDER — Earn a competitive NSF Graduate Research Fellowship or Hertz Fellowship]",
    category: "ACADEMIC",
    status: "ACHIEVED",
    achievedDate: "MAR 2025",
    notes: "Proposal focused on relativistic kinetic theory and CMB polarization spectral distortions."
  },
  {
    id: "T-004",
    title: "[PLACEHOLDER — Present research at the International Astronomical Union General Assembly]",
    category: "RESEARCH",
    status: "IN_PROGRESS",
    notes: "Abstract submitted for special session on non-linear structure formation and BAO peaks."
  },
  {
    id: "T-005",
    title: "[PLACEHOLDER — Spend 14 nights conducting observations at Mauna Kea / Keck Observatory]",
    category: "EXPEDITION",
    status: "ACHIEVED",
    achievedDate: "JUL 2024",
    notes: "Spectroscopic calibration of distant quasar absorption spectra at altitude 13,796 ft."
  },
  {
    id: "T-006",
    title: "[PLACEHOLDER — Build an open-source differential geometry compiler with 1,000+ GitHub stars]",
    category: "COMPUTATION",
    status: "IN_PROGRESS",
    notes: "Symbolic tensor calculus engine in Rust with automatic LaTeX and Typst emission."
  },
  {
    id: "T-007",
    title: "[PLACEHOLDER — Visit CERN in Geneva and attend the European School of High-Energy Physics]",
    category: "EXPEDITION",
    status: "ACHIEVED",
    achievedDate: "AUG 2024",
    notes: "Toured the ATLAS detector cavern and attended lectures on dark matter candidate searches."
  },
  {
    id: "T-008",
    title: "[PLACEHOLDER — Complete the Putnam Mathematical Competition in the top 100 nationwide]",
    category: "ACADEMIC",
    status: "ACHIEVED",
    achievedDate: "DEC 2023",
    notes: "Official rank 84th out of 4,000+ university competitors across North America."
  },
  {
    id: "T-009",
    title: "[PLACEHOLDER — Successfully solo-climb a 14,000-foot peak carrying amateur astrophotography gear]",
    category: "EXPEDITION",
    status: "ACHIEVED",
    achievedDate: "JUN 2024",
    notes: "Mt. Whitney summit bivouac with 8-inch Schmidt-Cassegrain telescope under Class 1 Bortle skies."
  },
  {
    id: "T-010",
    title: "[PLACEHOLDER — Write and bind a 200-page introductory textbook on Numerical Relativity]",
    category: "CREATIVE",
    status: "IN_PROGRESS",
    notes: "Drafted first 6 chapters covering BSSN formulation, lapse slicing, and shift conditions."
  },
  {
    id: "T-011",
    title: "[PLACEHOLDER — Gain admission to a top Theoretical Physics PhD program (Princeton/Caltech/MIT)]",
    category: "ACADEMIC",
    status: "IN_PROGRESS",
    notes: "Applications prepared for autumn doctoral cohort; focusing on theoretical cosmology groups."
  },
  {
    id: "T-012",
    title: "[PLACEHOLDER — Develop a real-time web-based cosmic web visualizer rendering 10M particles at 60 FPS]",
    category: "COMPUTATION",
    status: "IN_PROGRESS",
    notes: "WebGPU compute shader prototype underway using octree point clouds and screen-space shadows."
  },
  {
    id: "T-013",
    title: "[PLACEHOLDER — Observe a total solar eclipse from the path of totality]",
    category: "EXPEDITION",
    status: "ACHIEVED",
    achievedDate: "APR 2024",
    notes: "4 minutes 28 seconds of totality in Junction, Texas; photographed solar corona streamers."
  },
  {
    id: "T-014",
    title: "[PLACEHOLDER — Derive an analytical solution for non-spherical gravitational collapse in higher dimensions]",
    category: "RESEARCH",
    status: "PENDING",
    notes: "Exploring Lovelock gravity generalizations and Myers-Perry black hole horizons."
  },
  {
    id: "T-015",
    title: "[PLACEHOLDER — Build a custom mechanical orrery from brass and walnut depicting Galilean moons]",
    category: "CREATIVE",
    status: "PENDING",
    notes: "Gear ratio blueprints drafted for resonance ratios 1:2:4 (Io, Europa, Ganymede)."
  },
  {
    id: "T-016",
    title: "[PLACEHOLDER — Conduct field research at the Atacama Large Millimeter Array (ALMA) in Chile]",
    category: "EXPEDITION",
    status: "PENDING",
    notes: "Chajnantor plateau proposal targeted for submillimeter dusty galaxy observations."
  },
  {
    id: "T-017",
    title: "[PLACEHOLDER — Design and fabricate a working cloud chamber detecting cosmic ray muons]",
    category: "CREATIVE",
    status: "ACHIEVED",
    achievedDate: "FEB 2023",
    notes: "Diffusion cloud chamber operating on isopropanol vapor and dry ice; recorded 18 muons/min."
  },
  {
    id: "T-018",
    title: "[PLACEHOLDER — Co-author a joint computational paper with an international research consortium]",
    category: "RESEARCH",
    status: "IN_PROGRESS",
    notes: "Collaborating with Euclid Consortium working group on weak gravitational lensing systematics."
  },
  {
    id: "T-019",
    title: "[PLACEHOLDER — Read all 10 volumes of the Landau & Lifshitz Course of Theoretical Physics]",
    category: "ACADEMIC",
    status: "IN_PROGRESS",
    notes: "Completed Mechanics, Classical Theory of Fields, Quantum Mechanics, and Statistical Physics."
  },
  {
    id: "T-020",
    title: "[PLACEHOLDER — Deliver a public planetarium lecture on dark matter to 500+ students and families]",
    category: "CREATIVE",
    status: "ACHIEVED",
    achievedDate: "NOV 2024",
    notes: "Full-dome interactive lecture 'Mapping the Invisible Architecture of the Universe'."
  }
];
