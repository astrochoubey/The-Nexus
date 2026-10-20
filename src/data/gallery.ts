export type GalleryCategory = "ALL" | "SKY" | "TRAVEL" | "PEOPLE" | "DESK";

export interface GalleryItem {
  id: string;
  frameNumber: string; // e.g. "FRAME 014"
  exposure: string; // e.g. "1/250 · f/2.8 · ISO 400"
  category: "SKY" | "TRAVEL" | "PEOPLE" | "DESK";
  title: string;
  caption: string;
  handwrittenNote: string;
  date: string;
  location: string;
  rotation: number; // slight rotation in degrees (-3 to +3)
  tapePosition: "top" | "corners" | "diagonal";
  aspect: "square" | "landscape" | "portrait";
  svgType: 
    | "andromeda" 
    | "observatory" 
    | "desk_chalkboard" 
    | "muon_chamber" 
    | "radio_dish" 
    | "total_eclipse" 
    | "symposium" 
    | "high_altitude_camp" 
    | "orrery_brass" 
    | "supercomputer_rack" 
    | "caltech_arches" 
    | "lunar_crater";
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-01",
    frameNumber: "FRAME 001",
    exposure: "1/500 · f/1.8 · ISO 800",
    category: "SKY",
    title: "Andromeda M31 Core Exposure",
    caption: "Stacked 30-second sub-exposures capturing dust lanes and satellite dwarf galaxies M32 and NGC 205.",
    handwrittenNote: "Dust lanes visible even on 8\" mirror!",
    date: "OCT 14, 1974 / 2024",
    location: "Palomar Observatory Ridge, CA",
    rotation: -1.8,
    tapePosition: "top",
    aspect: "landscape",
    svgType: "andromeda"
  },
  {
    id: "gal-02",
    frameNumber: "FRAME 002",
    exposure: "1/125 · f/4.0 · ISO 200",
    category: "TRAVEL",
    title: "High-Altitude Dome at Twilight",
    caption: "The dome shutter cracks open as twilight fades into astronomical dark at 9,200 ft elevation.",
    handwrittenNote: "The dome gears sound like thunder.",
    date: "JUL 22, 2024",
    location: "Kitt Peak National Observatory, AZ",
    rotation: 1.5,
    tapePosition: "corners",
    aspect: "square",
    svgType: "observatory"
  },
  {
    id: "gal-03",
    frameNumber: "FRAME 003",
    exposure: "1/60 · f/2.8 · ISO 400",
    category: "DESK",
    title: "Chalkboard Tensor Derivations",
    caption: "Late evening session working out the Christoffel symbols for axisymmetric Kerr metrics under Boyer-Lindquist coordinates.",
    handwrittenNote: "Sign error on line 4 fixed at 3 AM",
    date: "NOV 03, 2024",
    location: "Theoretical Physics Study 204",
    rotation: -2.2,
    tapePosition: "diagonal",
    aspect: "portrait",
    svgType: "desk_chalkboard"
  },
  {
    id: "gal-04",
    frameNumber: "FRAME 004",
    exposure: "1/1000 · f/5.6 · ISO 100",
    category: "SKY",
    title: "Corona Streamers at Totality",
    caption: "Inner and outer solar corona streamers extending several solar radii into the blackened daytime sky.",
    handwrittenNote: "Diamond ring effect was unbelievable.",
    date: "APR 08, 2024",
    location: "Hill Country, Junction, TX",
    rotation: 2.1,
    tapePosition: "top",
    aspect: "square",
    svgType: "total_eclipse"
  },
  {
    id: "gal-05",
    frameNumber: "FRAME 005",
    exposure: "1/30 · f/2.0 · ISO 1600",
    category: "PEOPLE",
    title: "Colloquium Discussion at the Blackboard",
    caption: "Debating the cosmic shear power spectrum measurement errors with visiting faculty from Max Planck.",
    handwrittenNote: "Dr. Thorne said our error bars were honest.",
    date: "FEB 18, 2025",
    location: "Physics Commons Hearth Room",
    rotation: -1.2,
    tapePosition: "corners",
    aspect: "landscape",
    svgType: "symposium"
  },
  {
    id: "gal-06",
    frameNumber: "FRAME 006",
    exposure: "1/250 · f/8.0 · ISO 400",
    category: "TRAVEL",
    title: "High-Elevation Sierra Camp",
    caption: "Acclimatization camp prior to ascending the 14,000-ft plateau carrying transportable field spectrometers.",
    handwrittenNote: "Bortle 1: zodiacal light cast shadows!",
    date: "AUG 11, 2024",
    location: "Eastern Sierra Escarpment, CA",
    rotation: 1.9,
    tapePosition: "top",
    aspect: "landscape",
    svgType: "high_altitude_camp"
  },
  {
    id: "gal-07",
    frameNumber: "FRAME 007",
    exposure: "1/125 · f/5.6 · ISO 200",
    category: "SKY",
    title: "Deep-Space 25-Meter Parabolic Dish",
    caption: "Cryogenically cooled feed horn tracking 21cm neutral hydrogen emission from the Perseus-Pisces supercluster.",
    handwrittenNote: "S/N ratio peaked after midnight.",
    date: "SEP 05, 2024",
    location: "Owens Valley Radio Observatory, CA",
    rotation: -2.5,
    tapePosition: "diagonal",
    aspect: "portrait",
    svgType: "radio_dish"
  },
  {
    id: "gal-08",
    frameNumber: "FRAME 008",
    exposure: "1/15 · f/1.4 · ISO 800",
    category: "DESK",
    title: "Antique Heliocentric Brass Orrery",
    caption: "Precision 18th-century geared model calculating epicycles, conjunctions, and retrograde planetary loops.",
    handwrittenNote: "Mechanical poetry in brass and steel.",
    date: "DEC 12, 2024",
    location: "Special Collections Library",
    rotation: 0.8,
    tapePosition: "corners",
    aspect: "square",
    svgType: "orrery_brass"
  },
  {
    id: "gal-09",
    frameNumber: "FRAME 009",
    exposure: "1/60 · f/2.8 · ISO 400",
    category: "DESK",
    title: "Diffusion Cloud Chamber Tracks",
    caption: "Condensation trails formed by relativistic cosmic ray muons and energetic alpha particles in supersaturated alcohol vapor.",
    handwrittenNote: "Cosmic rays from a dying star million years ago.",
    date: "JAN 20, 2025",
    location: "Undergraduate Particle Lab",
    rotation: -1.7,
    tapePosition: "top",
    aspect: "square",
    svgType: "muon_chamber"
  },
  {
    id: "gal-10",
    frameNumber: "FRAME 010",
    exposure: "1/250 · f/4.0 · ISO 200",
    category: "DESK",
    title: "Liquid-Cooled GPU Compute Racks",
    caption: "Running 256-GPU parallel cluster jobs reducing a 512^3 particle cosmological simulation snapshot.",
    handwrittenNote: "Fans screaming at 80dB... bliss.",
    date: "MAR 02, 2025",
    location: "Campus High Performance Computing Facility",
    rotation: 2.3,
    tapePosition: "diagonal",
    aspect: "landscape",
    svgType: "supercomputer_rack"
  },
  {
    id: "gal-11",
    frameNumber: "FRAME 011",
    exposure: "1/500 · f/3.5 · ISO 100",
    category: "TRAVEL",
    title: "Romanesque Arches & Long Shadows",
    caption: "Morning light slanting through the historic colonnade between quantum mechanics lecture and the computing lab.",
    handwrittenNote: "Where Feynman once walked.",
    date: "MAY 19, 2024",
    location: "Physics Quadrangle, Pasadena, CA",
    rotation: -0.9,
    tapePosition: "corners",
    aspect: "portrait",
    svgType: "caltech_arches"
  },
  {
    id: "gal-12",
    frameNumber: "FRAME 012",
    exposure: "1/250 · f/11 · ISO 400",
    category: "SKY",
    title: "Tycho Crater Central Peak Shadow",
    caption: "High-contrast terminator grazing the rim of Tycho, throwing razor-sharp black shadows across the lunar regolith.",
    handwrittenNote: "Look at the ejecta rays across Mare Nubium!",
    date: "SEP 18, 2024",
    location: "Mt. Wilson Amateur Observation Deck",
    rotation: 1.4,
    tapePosition: "top",
    aspect: "square",
    svgType: "lunar_crater"
  }
];
