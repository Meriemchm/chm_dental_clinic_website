"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpItem = {
  el: HTMLSpanElement;
  value: number;
};

export function useGsapCountUp() {
  const items = useRef<CountUpItem[]>([]);

  useLayoutEffect(() => {
    if (items.current.length === 0) return;

    const ctx = gsap.context(() => {
      items.current.forEach(({ el, value }) => {
        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const setRef = (el: HTMLSpanElement | null, value: number, index: number) => {
    if (el) {
      items.current[index] = { el, value };
    }
  };

  return setRef;
}
