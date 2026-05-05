"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoadHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const selector = ".reveal-stagger:not(.is-visible), .reveal:not(.is-visible)";
    const targets = document.querySelectorAll<HTMLElement>(selector);

    if (reduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 0px 0px" }
    );
    targets.forEach((el) => io.observe(el));

    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal-stagger:not(.is-visible), .reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
