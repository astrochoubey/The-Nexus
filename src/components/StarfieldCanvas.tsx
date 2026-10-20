import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  alpha: number;
  phase: number;
  driftSpeedX: number;
  driftSpeedY: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isHidden = false;
    let mouseX = -9999;
    let mouseY = -9999;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Resize handling
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initStars();
    };
    window.addEventListener("resize", handleResize);

    const handleVisibility = () => {
      isHidden = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color palette for 70s space: warm white, peach, faint cyan/blue, amber
    const starColors = [
      "#FFFFFF",
      "#F0E6CB", // parchment white
      "#F2B48E", // peach
      "#5FA3E0", // title blue
      "#E9B93A", // mustard amber
      "#A89A82"  // taupe
    ];

    let stars: Star[] = [];

    const initStars = () => {
      const starCount = Math.floor((width * height) / 3200);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() < 0.85 ? Math.random() * 1.4 + 0.5 : Math.random() * 2.2 + 1.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          alpha: Math.random() * 0.7 + 0.3,
          phase: Math.random() * Math.PI * 2,
          driftSpeedX: (Math.random() - 0.5) * 0.15,
          driftSpeedY: (Math.random() - 0.5) * 0.15
        });
      }
    };

    initStars();

    let frame = 0;

    const render = () => {
      if (isHidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital ellipses (mission trajectory lines)
      ctx.save();
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = "rgba(95, 163, 224, 0.08)";
      ctx.setLineDash([4, 6]);

      // Ellipse 1 (Earth-Moon Hohmann transfer orbit)
      ctx.beginPath();
      ctx.ellipse(width * 0.65, height * 0.45, width * 0.45, height * 0.28, -Math.PI / 8, 0, Math.PI * 2);
      ctx.stroke();

      // Ellipse 2 (Lagrange L2 Halo Orbit)
      ctx.strokeStyle = "rgba(232, 96, 43, 0.07)";
      ctx.beginPath();
      ctx.ellipse(width * 0.35, height * 0.55, width * 0.55, height * 0.35, Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();

      // Ellipse 3 (deep space hyperbolic escape trajectory)
      ctx.strokeStyle = "rgba(228, 214, 174, 0.06)";
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.ellipse(width * 0.5, height * 0.5, width * 0.7, height * 0.4, 0.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Gravity well parameters
      const gravityRadius = 220;
      const gravityStrength = 0.65;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reducedMotion) {
          star.phase += star.twinkleSpeed;
          const currentAlpha = Math.sin(star.phase) * 0.35 + star.alpha;

          // Parallax / subtle drift
          star.baseX += star.driftSpeedX;
          star.baseY += star.driftSpeedY;

          // Wrap edges
          if (star.baseX < 0) star.baseX = width;
          if (star.baseX > width) star.baseX = 0;
          if (star.baseY < 0) star.baseY = height;
          if (star.baseY > height) star.baseY = 0;

          // Gravity well calculation toward mouse
          if (mouseX > 0 && mouseY > 0) {
            const dx = mouseX - star.baseX;
            const dy = mouseY - star.baseY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < gravityRadius && dist > 1) {
              const pull = (1 - dist / gravityRadius) * gravityStrength * (star.size * 0.8);
              star.x += (star.baseX + (dx / dist) * pull * 18 - star.x) * 0.1;
              star.y += (star.baseY + (dy / dist) * pull * 18 - star.y) * 0.1;
            } else {
              star.x += (star.baseX - star.x) * 0.08;
              star.y += (star.baseY - star.y) * 0.08;
            }
          } else {
            star.x += (star.baseX - star.x) * 0.08;
            star.y += (star.baseY - star.y) * 0.08;
          }

          ctx.fillStyle = star.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        } else {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // 4-point diffraction spike for prominent stars
        if (star.size > 2.0 && (!reducedMotion ? Math.sin(star.phase) > 0.4 : true)) {
          ctx.save();
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 0.4;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2.8, star.y);
          ctx.lineTo(star.x + star.size * 2.8, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2.8);
          ctx.lineTo(star.x, star.y + star.size * 2.8);
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1.0;

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0"
      aria-hidden="true"
    />
  );
}
