import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AstroPage from "./pages/AstroPage";
import WritingPage from "./pages/WritingPage";
import ImpossiblePage from "./pages/ImpossiblePage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppShell() {
  const location = useLocation();
  const isDarkAcademia = location.pathname === "/writing";

  return (
    <div className={`min-h-screen flex flex-col ${isDarkAcademia ? "theme-dark-academia" : ""}`}>
      {/* Sticky Top Navigation */}
      <Navigation isDarkAcademia={isDarkAcademia} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<AstroPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/impossible" element={<ImpossiblePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Mission Control Footer */}
      <Footer isDarkAcademia={isDarkAcademia} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
