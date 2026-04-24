"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hasPointer, setHasPointer] = useState(false);
  const isHovering = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setHasPointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setHasPointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hasPointer) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let moving = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!moving) {
        moving = true;
        raf = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + "px";
        cursorRef.current.style.top = my + "px";
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }

      const dx = mx - rx;
      const dy = my - ry;
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        raf = requestAnimationFrame(animate);
      } else {
        moving = false;
      }
    };

    const hoverables =
      'a, button, [role="button"], input, textarea, select, label, .service-card, .sector-card, .qcard, .nav-link, .footer-link, .theme-toggle';

    const setHover = (hovering: boolean) => {
      if (isHovering.current === hovering) return;
      isHovering.current = hovering;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${hovering ? 2.5 : 1})`;
        cursorRef.current.style.opacity = hovering ? "0.5" : "1";
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`;
        ringRef.current.style.borderColor = hovering ? "var(--accent)" : "var(--accent-muted)";
        ringRef.current.style.opacity = hovering ? "0.6" : "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverables)) setHover(true);
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverables)) setHover(false);
    };

    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [hasPointer]);

  if (!hasPointer) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          background: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.18s cubic-bezier(0.22,1,0.36,1), width 0.2s, height 0.2s, background 0.2s, opacity 0.2s",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1px solid var(--accent-muted)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.25s cubic-bezier(0.22,1,0.36,1), width 0.25s, height 0.25s, border-color 0.2s, opacity 0.2s",
        }}
      />
    </>
  );
}
