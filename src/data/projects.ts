export interface Project {
  slug: string;
  codeLabel: string;
  tabTitle: string;
  title: string;
  status: "ACTIVE" | "COMPLETE";
  year: string;
  affiliation?: string;
  summary: string;
  color: string;
  accentColor: string;
  tabOffset: number;
  details: {
    whatItDoes: string;
    howItWorks: string;
    equations: string;
  };
  tech: string[];
  githubUrl: string;
  figureCaption: string;
  figureType: "fulton_valley" | "supernova_cosmo" | "tess_transit" | "rocket_peg" | "lunar_registration" | "rover_planning";
}

export const projectsData: Project[] = [
  {
    slug: "exoplanet-radius-valley",
    codeLabel: "CODE_001 //",
    tabTitle: "RADIUS VALLEY",
    title: "Exoplanet Radius Valley & Atmospheric Evolution Demographics",
    status: "COMPLETE",
    year: "2026",
    color: "#6E6B4E", // Olive
    accentColor: "#E9B93A",
    tabOffset: 10,
    summary: "Reproducible statistical inference pipeline characterizing the Fulton gap between super-Earths and sub-Neptunes across ~5,000 Kepler/K2/TESS planetary systems.",
    details: {
      whatItDoes: "Analyzes NASA Exoplanet Archive (PSCompPars) planetary demographics to empirically test atmospheric mass-loss mechanisms. Locates the bimodal radius valley separating stripped rocky super-Earth cores (R < 1.7 R_Earth) from volatile-rich sub-Neptunes.",
      howItWorks: "Fits multi-dimensional parametric models R_valley = f(P, F_inc, M_*, [Fe/H]) with robust Astroquery data retrieval. Compares the empirical slope dlogR/dlogP ≈ -0.15 against photoevaporation and core-powered mass loss, accounting for survey detection completeness and transit selection biases.",
      equations: "R_{valley}(P) = R_0 \\left(\\frac{P}{10\\text{ days}}\\right)^{m_P} \\left(\\frac{M_\\star}{M_\\odot}\\right)^{m_M}, \\quad m_P \\approx -0.15"
    },
    tech: ["Python", "Astropy", "Astroquery", "SciPy", "Matplotlib", "Statistical Modeling", "Bayesian MCMC"],
    githubUrl: "https://github.com/astrochoubey/exoplanet-radius-valley",
    figureCaption: "FIG. 01A — Planetary radius vs orbital period showing the Fulton Gap bimodal dip at ~1.8 Earth radii.",
    figureType: "fulton_valley"
  },
  {
    slug: "accelerating-universe-riess1998",
    codeLabel: "CODE_002 //",
    tabTitle: "ACCEL UNIVERSE",
    title: "Reproduction of the Accelerating Universe Result (Riess et al. 1998)",
    status: "COMPLETE",
    year: "2026",
    color: "#A89A82", // Taupe
    accentColor: "#E8602B",
    tabOffset: 22,
    summary: "End-to-end reproduction of the Nobel-prize-winning 1998 High-z Supernova Search Team cosmological acceleration discovery with full pytest validation suite.",
    details: {
      whatItDoes: "Reconstructs the Type Ia supernova expansion history, fitting Omega_M and Omega_Lambda from redshift-distance modulus observations. Proves cosmological constant dark energy acceleration at > 99% confidence.",
      howItWorks: "Implements nonlinear least-squares regression coupled to an adaptive Runge-Kutta numerical integrator solving the Friedmann geodesic luminosity distance. Includes a comprehensive pytest test suite validating luminosity distance integrals against standard benchmark tables.",
      equations: "d_L(z) = \\frac{c(1+z)}{H_0} \\int_0^z \\frac{dz'}{\\sqrt{\\Omega_{M}(1+z')^3 + \\Omega_k(1+z')^2 + \\Omega_\\Lambda}}"
    },
    tech: ["Python", "SciPy", "pytest", "NumPy", "Nonlinear Least Squares", "Cosmological ODEs", "Matplotlib"],
    githubUrl: "https://github.com/astrochoubey/accelerating-universe-riess1998",
    figureCaption: "FIG. 02B — Supernova distance modulus residuals (Delta mu vs redshift z) confirming positive cosmological acceleration.",
    figureType: "supernova_cosmo"
  },
  {
    slug: "tess-transit-detection",
    codeLabel: "CODE_003 //",
    tabTitle: "TESS TRANSIT",
    title: "Photometric Exoplanet Detection from TESS Light Curves",
    status: "COMPLETE",
    year: "2026",
    affiliation: "ISRO Bharatiya Antariksh Hackathon",
    color: "#7A8497", // Slate
    accentColor: "#5FA3E0",
    tabOffset: 34,
    summary: "Automated transit-detection framework for NASA TESS time-series photometry combining Transit Least Squares (TLS), Gaussian Process detrending, and Bayesian validation.",
    details: {
      whatItDoes: "Ingests raw 2-minute cadence TESS Target Pixel and Light Curve files, detrends stellar variability and instrumental systematics, and identifies candidate exoplanet transit dips with rigorous physical false-positive rejection.",
      howItWorks: "Applies Matérn 3/2 kernel Gaussian Process regression to isolate stellar flares and rotational spots. Runs Transit Least Squares (TLS) to search for limb-darkened transit shapes, followed by Bayesian MCMC parameter fitting for orbital period, impact parameter, and Rp/R*.",
      equations: "\\delta = \\left(\\frac{R_p}{R_\\star}\\right)^2, \\quad T_{dur} = \\frac{P}{\\pi} \\arcsin\\left(\\frac{R_\\star}{a} \\frac{\\sqrt{(1+k)^2 - b^2}}{\\sin i}\\right)"
    },
    tech: ["Lightkurve", "Astropy", "Transit Least Squares", "Gaussian Processes", "NumPy", "SciPy", "MCMC"],
    githubUrl: "https://github.com/astrochoubey/tess-transit-detection",
    figureCaption: "FIG. 03C — Phase-folded transit light curve with limb-darkened Mandel-Agol fit and GP stellar detrending.",
    figureType: "tess_transit"
  },
  {
    slug: "ignis-rocket-simulation",
    codeLabel: "CODE_004 //",
    tabTitle: "IGNIS ROCKET",
    title: "Ignis: Interactive Rocket Launch Simulation Platform",
    status: "ACTIVE",
    year: "2026",
    color: "#A8703A", // Caramel
    accentColor: "#F5A623",
    tabOffset: 46,
    summary: "Aerospace vehicle physics engine with modular guidance stack featuring Powered Explicit Guidance (PEG), pitch-and-roll steering, and PID attitude flight control.",
    details: {
      whatItDoes: "Simulates multistage launch vehicle dynamics from pad ignition to orbital insertion. Users design rocket stages, thrust-to-weight curves, and aerodynamic fairings, testing steering programs in sandbox or mission modes.",
      howItWorks: "Computes variable-mass rigid body dynamics with atmosphere density profiles (US Standard 1976). Integrates Powered Explicit Guidance (PEG) modeling thrust acceleration T/m(t) analytically to solve for optimal pitch angle theta(t) reaching targeted perigee/apogee.",
      equations: "\\dot{v} = \\frac{T(t)}{m(t)} - g(r) \\sin\\gamma - \\frac{D}{m(t)}, \\quad \\tan\\theta(t) = \\tan\\theta_0 - \\dot{\\theta}_0 t"
    },
    tech: ["Python", "Three.js", "React.js", "RK4 Numerical Solver", "Aerospace PEG", "PID Gimbal Control", "Cloudflare"],
    githubUrl: "https://github.com/astrochoubey/ignis-rocket-simulation",
    figureCaption: "FIG. 04D — Ascent trajectory, dynamic pressure (Max-Q), and Powered Explicit Guidance pitch angle steering profile.",
    figureType: "rocket_peg"
  },
  {
    slug: "lunar-image-registration",
    codeLabel: "CODE_005 //",
    tabTitle: "LUNAR VISION",
    title: "Adaptive Lunar Image Registration & Correspondence Pipeline",
    status: "COMPLETE",
    year: "2026",
    affiliation: "ISRO Problem Statement // Smart India Hackathon Finalist",
    color: "#8C9275", // Sage
    accentColor: "#E9B93A",
    tabOffset: 58,
    summary: "Illumination-robust cross-sensor correspondence engine for lunar imagery (OHRC, TMC-2, IIRS, LRO NAC) under extreme solar grazing shadows and relief.",
    details: {
      whatItDoes: "Aligns high-resolution orbital lunar imagery across differing sensor modalities, lighting angles, and incidence geometries where standard descriptor matchers fail due to crater rim shadow inversion.",
      howItWorks: "Generates multi-representation structural maps (CLAHE, gradient magnitude, phase congruency, Laplacian). Extracts keypoints via SuperPoint and LoFTR dense matching, passing matches through an adaptive model selector that escalates from affine to piecewise local TPS warping.",
      equations: "E(W) = \\sum_i \\|p_i - W(q_i)\\|^2 + \\lambda \\iint \\left[\\left(\\frac{\\partial^2 W}{\\partial x^2}\\right)^2 + 2\\left(\\frac{\\partial^2 W}{\\partial x\\partial y}\\right)^2 + \\left(\\frac{\\partial^2 W}{\\partial y^2}\\right)^2\\right] dx dy"
    },
    tech: ["Python", "OpenCV", "SuperPoint", "LoFTR", "RANSAC", "Phase Congruency", "Thin-Plate Splines"],
    githubUrl: "https://github.com/astrochoubey/lunar-image-registration",
    figureCaption: "FIG. 05E — Dual-sensor tie-point correspondence mesh over Chandrayaan OHRC crater rims with sub-pixel residual error.",
    figureType: "lunar_registration"
  },
  {
    slug: "rover-kinodynamic-planning",
    codeLabel: "CODE_006 //",
    tabTitle: "ROVER AUTONOMY",
    title: "Autonomous Rover Kinodynamic Trajectory Planner",
    status: "ACTIVE",
    year: "2026",
    affiliation: "Society for Aerospace & Space Technology (SAST) / RIT",
    color: "#3B3B3D", // Charcoal
    accentColor: "#F2B48E",
    tabOffset: 70,
    summary: "Kinodynamic motion planning framework (RRT*, Hybrid A*) for planetary exploration rovers traversing hazardous Martian/Lunar regolith topography.",
    details: {
      whatItDoes: "Plans time-optimal, collision-free traversals across 3D digital elevation models (DEMs). Accounts for non-holonomic Ackerman/rocker-bogie wheel kinematics, roll/pitch tipping thresholds, and wheel slippage in soft sand.",
      howItWorks: "Constructs state-space trees via Kinodynamic RRT* with Dubins path primitives. Evaluates dynamic vehicle stability margins from terrain slope gradient vectors and real-time obstacle elevation costmaps.",
      equations: "\\dot{x} = v \\cos\\theta, \\quad \\dot{y} = v \\sin\\theta, \\quad \\dot{\\theta} = \\frac{v}{L} \\tan\\phi, \\quad \\text{Cost} = \\int (w_1 + w_2 \\nabla z^2 + w_3 \\kappa^2) dt"
    },
    tech: ["Python", "C++", "ROS", "Open3D", "RRT*", "Hybrid A*", "Non-holonomic Dynamics"],
    githubUrl: "https://github.com/astrochoubey/rover-kinodynamic-planning",
    figureCaption: "FIG. 06F — Kinodynamic RRT* trajectory tree navigating crater topography with slip costmap overlay.",
    figureType: "rover_planning"
  }
];
