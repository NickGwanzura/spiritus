"use client";

import { useEffect, useRef } from "react";

export default function HeroPattern() {
  const rootRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const spot = spotRef.current;
    const glow = glowRef.current;
    if (!root || !spot || !glow) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let inView = true;
    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(root);

    const apply = (xPct: number, yPct: number) => {
      const spotMask = `radial-gradient(circle 260px at ${xPct}% ${yPct}%, #000 0%, transparent 70%)`;
      spot.style.maskImage = spotMask;
      spot.style.webkitMaskImage = spotMask;
      glow.style.background = `radial-gradient(circle 480px at ${xPct}% ${yPct}%, var(--glow-color), transparent 65%)`;
    };

    const onMove = (e: PointerEvent) => {
      if (!inView) return;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        apply(x, y);
        spot.style.opacity = "0.55";
        glow.style.opacity = "1";
      });
    };

    const onLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      apply(50, 35);
      spot.style.opacity = "0.22";
      glow.style.opacity = "0.6";
    };

    onLeave();

    window.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="hero-pattern"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, #000 0%, transparent 80%)",
        }}
      />

      <div
        ref={spotRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--accent) 1.2px, transparent 0)",
          backgroundSize: "24px 24px",
          opacity: 0.22,
          transition: "opacity 0.3s ease",
          willChange: "mask-image",
        }}
      />

      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          transition: "opacity 0.3s ease",
          willChange: "background",
        }}
      />
    </div>
  );
}
