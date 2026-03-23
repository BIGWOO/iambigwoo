"use client";

import { useEffect } from "react";
import { initSmoothScroll, destroySmoothScroll } from "@/lib/gsap";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, []);

  return <>{children}</>;
}
