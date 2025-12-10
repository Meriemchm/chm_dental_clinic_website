"use client";
import Image from "next/image";
import React from "react";
import { useGsapFade } from "@/hooks/useGsapFade";
import { HeroLeft } from "./hero-left";

const Hero = () => {
  const faderight = useGsapFade("right");
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-6  lg:justify-between  ">
      {/* Texte */}
      <div className="order-2 lg:order-1">
        <HeroLeft />
      </div>

      {/* Image Hero */}
      <div ref={faderight} className="order-1 lg:order-2 ">
        <Image
          src="/Images/hero_1.svg"
          alt="hero-pic"
          height={500}
          width={500}
          className="w-auto h-auto "
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
