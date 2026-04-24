"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 40, suffix: "+", label: "Platforms in production" },
  { num: 12, suffix: "+", label: "Industries served" },
  { num: 4, suffix: "", label: "Payment rails integrated" },
  { num: 100, suffix: "%", label: "Client retention" },
];

function AnimatedNumber({
  target,
  suffix,
  animate,
}: {
  target: number;
  suffix: string;
  animate: boolean;
}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1200;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [animate, target]);

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 40,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        color: "var(--fg)",
        lineHeight: 1,
        marginBottom: 10,
      }}
    >
      {value}
      <span style={{ color: "var(--accent)" }}>{suffix}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="stats-inner reveal-stagger"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 56px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="stat-item reveal-child"
            style={{
              padding: "40px 28px",
              borderRight:
                i < stats.length - 1 ? "1px solid var(--border)" : "none",
              ...(i === 0 ? { paddingLeft: 0 } : {}),
            }}
          >
            <AnimatedNumber
              target={stat.num}
              suffix={stat.suffix}
              animate={animate}
            />
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--fg-subtle)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
