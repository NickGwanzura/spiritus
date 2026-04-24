"use client";

import { useEffect } from "react";

export default function PageLoadHandler() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.body.classList.remove("page-loading");
      return;
    }
    document.body.classList.remove("page-loading");
    document.body.classList.add("page-loaded");
  }, []);
  return null;
}
