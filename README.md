# THE NEXUS // Computational Cosmology & Theoretical Physics Archive
> "Space in the 70s": Retro NASA Mission-Control, Archival Physical Files & Dark Academia Portfolio

A bespoke, responsive personal portfolio for a Computer Science + Physics double major conducting research in computational cosmology, relativistic astrophysics, and N-body simulations.

---

## ✦ Key Aesthetic Systems & Visual Architecture
1. **70s NASA & Mission Control**: Warm parchment paper (`#E4D6AE`), hairline crosshairs (`+`), coordinates, chamfered HUD frames, dot-grid glyphs, segmented telemetry progress bars, and high-impact title lettering (blue fill with peach drop-shadow).
2. **"The Archive" (Physical File Folders)**: Desktop features an accordion of vertical file folders with staggered notched tabs stepping down left-to-right (`CODE_001 //` through `CODE_006 //`). Pulls forward into an archival paper dossier with mathematical governing equations and halftone cosmological plots. Collapses into tactile stacked tabs on mobile.
3. **The Divergent Page — Dark Academia (`/writing`)**: Centered deckled vellum sheet atop an antique forest green leather desk (`#141D17`) with candlelight vignette, wax-seal motifs (`Ω`), astronomical astrolabes, Latin colophons, marginalia annotations, and interactive leather-bound book spines that tilt on hover.
4. **"The Sky Was Never The Limit" (`/impossible`)**: Retro-NASA mission checklist with 20 items (`T-001` to `T-020`), category filter chips, and data-driven status stamps (`ACHIEVED // OCT 2025`).
5. **Visual Reconnaissance (`/gallery`)**: 12 taped polaroids and overlapping framed panels with camera telemetry (`FRAME 014 · 1/250 · f/2.8`), interactive lightbox with arrow key navigation, and a live `VINTAGE / RAW` color-grading toggle.
6. **Lost in Space (`404`)**: Chunky amber lettering on a speckled cosmic void with a navigation computer re-engagement trigger.

---

## 🛠 Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Routing**: React Router (`HashRouter` for zero-configuration GitHub Pages & static hosting)
- **Styling**: Vanilla CSS custom properties (`:root`) + Tailwind CSS utilities
- **Typography**: Google Fonts (`Syncopate`, `Michroma`, `Righteous`, `Lilita One`, `Inter Tight`, `Space Mono`, `Caveat`, `Cormorant Garamond`, `EB Garamond`)
- **Graphics**: 100% self-contained vector SVGs, procedural canvas starfields (gravity well drifting towards cursor), CSS halftone screens, and paper noise filters. No external image hot-linking.

---

## 📁 Pure Data Architecture (`/src/data/*.ts`)
All user-editable content is strictly decoupled from UI components. Edit the files in `src/data/` to update your portfolio without modifying any React code:

| Data File | What It Controls | Key Fields to Edit |
| :--- | :--- | :--- |
| `src/data/site.ts` | Persona, bio, coordinates, callsign, skills, social links, footer | `ownerName`, `subTitle`, `bio.lead`, `bio.paragraphs`, `skills`, `socials` |
| `src/data/projects.ts` | 6 Archive file folders & technical dossiers | `codeLabel`, `title`, `status`, `summary`, `details.whatItDoes`, `details.equations`, `tech`, `githubUrl` |
| `src/data/achievements.ts` | Honors & Logistics mission log in Mars Exploration tee style | `title`, `organisation`, `year`, `description`, `hudTag` |
| `src/data/writing.ts` | Dark Academia treatises, manuscripts, book spines, and honors | `title`, `type`, `blurb`, `date`, `status`, `shelf` ("desk" \| "shelf"), `distinctionsData` |
| `src/data/impossible.ts` | 20 Impossible List checklist items & categories | `id` ("T-001"), `title`, `category`, `status` ("ACHIEVED" \| "IN_PROGRESS" \| "PENDING"), `notes` |
| `src/data/gallery.ts` | 12 photographic frames, camera telemetry & handwritten notes | `frameNumber`, `exposure`, `title`, `caption`, `handwrittenNote`, `location`, `svgType` |

---

## 🖼 How to Swap Placeholder Artwork with Real Images

All placeholders are generated with high-contrast SVGs and canvas graphics in `src/components/RetroGraphics.tsx`. To substitute your own photographs:

1. Place your real image files in the `/public` folder:
   - Example: `/public/photos/andromeda.jpg`
   - Example: `/public/photos/portrait.jpg`
2. Update the reference in `src/data/gallery.ts` or `src/data/site.ts`:
   ```ts
   // In src/data/gallery.ts:
   export interface GalleryItem {
     ...
     imageSrc?: string; // Add your image path: "/photos/my-telescope.jpg"
   }
   ```
3. In `src/components/RetroGraphics.tsx` or `src/pages/GalleryPage.tsx`:
   - If `item.imageSrc` is provided, render `<img src={item.imageSrc} className="w-full h-full object-cover vintage-grade" alt={item.title} />`.
   - Otherwise, the fallback vector illustration is automatically displayed!

---

## 🎨 How to Customize Theme Tokens

Theme colors are defined in `src/index.css` under `:root` and `.theme-dark-academia`:

```css
:root {
  /* 70s NASA & Archival Paper Palette */
  --paper: #E4D6AE;          /* Warm parchment background */
  --paper-light: #F0E6CB;    /* Cream panel highlight */
  --ink: #3A2F33;            /* Deep vintage print charcoal/ink */
  --space-black: #0A0C10;    /* Deep space void */
  --nasa-orange: #E8602B;    /* Mission control warning orange */
  --title-blue: #5FA3E0;     /* 70s TV title blue */
  --peach: #F2B48E;          /* Title drop-shadow peach */
  --mustard: #E9B93A;        /* Active navigation & badge amber */

  /* Project File Folder Tones (Grid Daily style) */
  --olive: #6E6B4E;
  --taupe: #A89A82;
  --slate: #7A8497;
  --caramel: #A8703A;
  --sage: #8C9275;
}

/* Dark Academia Study Palette (active on /writing) */
.theme-dark-academia {
  --vellum: #EADFC2;         /* Aged manuscript paper */
  --vellum-aged: #CDB88A;    /* Outer folio margin tone */
  --ink: #2A1B12;            /* Sepia calligraphy ink */
  --oxblood: #5E1B1E;        /* Wax seal & header crimson */
  --forest: #1E2B23;         /* Dark leather desk backdrop */
  --brass: #A9823F;          /* Antique brass rules & fleurons */
}
```

---

## 🚀 Deployment

### Option A: Deploy to GitHub Pages
Because the application uses `HashRouter` (`/#/writing`, `/#/gallery`), it works out of the box on GitHub Pages without requiring server-side redirect rules:

1. In `vite.config.js`, set `base`:
   ```js
   export default defineConfig({
     base: "./",
     plugins: [react(), tailwindcss()],
   });
   ```
2. Build the static bundle:
   ```bash
   npm run build
   ```
3. Deploy the resulting `/dist` directory to your `gh-pages` branch.

### Option B: Deploy to Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy!

---

## 🧪 Local Development
```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Production build test
npm run build
```
