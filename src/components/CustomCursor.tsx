"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
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
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          background: "var(--blue-bright)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.1s, width 0.2s, height 0.2s, background 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1px solid rgba(61,107,255,0.4)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.12s ease-out, width 0.25s, height 0.25s, border-color 0.2s",
        }}
      />
    </>
  );
}
