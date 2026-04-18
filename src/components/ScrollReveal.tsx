"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  as = "div",
  className = "",
  style,
  delay = 0,
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (delay) {
              window.setTimeout(() => target.classList.add("is-visible"), delay);
            } else {
              target.classList.add("is-visible");
            }
            io.unobserve(target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
