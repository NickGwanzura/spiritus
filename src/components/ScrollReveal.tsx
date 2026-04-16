"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(
              "style",
              entry.target.getAttribute("style")?.replace("opacity: 0", "opacity: 1").replace("translateY(24px)", "translateY(0)") || ""
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(24px)";
      htmlEl.style.transition =
        "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
