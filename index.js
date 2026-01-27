function skipIntro() {
  const overlay = document.getElementById("crawl-overlay");
  const mainSite = document.getElementById("main-site");

  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    mainSite.classList.add("visible");
    document.body.style.overflow = "auto";
  }, 1500);
}

// Auto-skip or transition after animation
document.addEventListener("DOMContentLoaded", () => {
  // Prevent scrolling during intro
  document.body.style.overflow = "hidden";

  // Set a timeout to automatically fade out the intro after 45 seconds (crawl duration)
  // Or users can click skip.
  setTimeout(() => {
    const overlay = document.getElementById("crawl-overlay");
    if (overlay.style.display !== "none") {
      skipIntro();
    }
  }, 45000);
});

// Adding a little interactive tilt to cards for that premium feel
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});
