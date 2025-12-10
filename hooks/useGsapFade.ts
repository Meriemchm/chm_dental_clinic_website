"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(direction: Direction = "up") {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      const distance = 100;
      const fromVars: Record<string, number> = {};

      switch (direction) {
        case "up":
          fromVars.y = distance;
          break;
        case "down":
          fromVars.y = -distance;
          break;
        case "left":
          fromVars.x = distance;
          break;
        case "right":
          fromVars.x = -distance;
          break;
      }

      refs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          ...fromVars,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      ScrollTrigger.refresh();
    }, document); 

    return () => ctx.revert();
  }, [direction, pathname]);

  const setRef = (el: HTMLElement | null, index?: number) => {
    if (index !== undefined) {
      refs.current[index] = el;
    } else {
      refs.current[0] = el;
    }
  };

  return setRef;
}
