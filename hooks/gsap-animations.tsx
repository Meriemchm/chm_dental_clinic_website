"use client";

import { useRef,useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useGsapTextSplit() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // Split en caractères
      const split = new SplitText(textRef.current, { type: "chars" });

      // Animation GSAP
      gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out",
      });

      return () => {
        split.revert(); // restaure le texte normal
      };
    },
    { scope: textRef }
  );

  return textRef;
}

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(direction: Direction = "up") {
  // ✅ Peut contenir un seul élément ou plusieurs
  const refs = useRef<(HTMLElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (!refs.current.length) return;

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

    // ✅ Animation sur tous les éléments
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

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [direction, pathname]);

  // ✅ Fonction pour attacher chaque ref individuellement
  const setRef = (el: HTMLElement | null, index?: number) => {
    if (index !== undefined) {
      refs.current[index] = el;
    } else {
      refs.current[0] = el;
    }
  };

  return setRef;
}
