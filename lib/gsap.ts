"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/**
 * Integration Contract（鐵律）：
 * - GSAP ScrollTrigger：scroll timeline / pin / scrub
 * - Lenis：scroll source（慣性、smooth）
 * - Framer Motion：hover / enter / exit / 頁面轉場
 *
 * 整合規則：
 * 1. Lenis 事件驅動 ScrollTrigger 更新
 * 2. GSAP ticker 接管 Lenis RAF
 * 3. 關閉 GSAP 的 lag smoothing
 */
export function initSmoothScroll(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    autoRaf: false,
  });

  // Lenis scroll event drives ScrollTrigger update
  lenisInstance.on("scroll", ScrollTrigger.update);

  // GSAP ticker takes over Lenis RAF
  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000);
  });

  // Disable GSAP lag smoothing for consistent scroll behavior
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export { gsap, ScrollTrigger };
