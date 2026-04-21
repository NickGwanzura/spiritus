"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  intervalMs?: number;
  fadeMs?: number;
};

export default function RotatingWord({
  words,
  intervalMs = 2600,
  fadeMs = 240,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, fadeMs);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs, fadeMs]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(0.18em)",
        transition: `opacity ${fadeMs}ms ease, transform ${fadeMs}ms ease`,
        willChange: "opacity, transform",
      }}
    >
      {words[idx]}
    </span>
  );
}
