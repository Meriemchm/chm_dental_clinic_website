"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import { useGsapFade } from "@/hooks/gsap-animations";

const Hero = () => {
  const fadeleft = useGsapFade("left");
  const faderight = useGsapFade("right");
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:justify-between ">
      {/* Texte */}
      <div
        ref={fadeleft}
        className="flex flex-col items-center text-center gap-10 lg:items-start lg:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl max-w-xl font-bold text-primary flex flex-wrap items-center gap-2">
          <span className="text-black">Your</span> Smile,{" "}
          <span className="text-black">Our</span>
          <span className="flex items-center gap-2">
            Passion
            <Image
              src="/Icons/draw-line.svg"
              alt="draw-line"
              height={50}
              width={50}
              className="w-auto h-auto object-contain"
            />
          </span>
        </h1>

        <p className="text-sm md:text-base text-neutral-500 max-w-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem reprehenderit officiis assumenda recusandae rerum
          maiores inventore voluptate eum, animi nam cum quaerat esse asperiores
          doloribus. Error atque dolorum odit soluta.
        </p>

        <Button className="capitalize">
          {" "}
          <Link href="/services">Explore our services</Link>{" "}
        </Button>
      </div>

      {/* Image Hero */}
      <div ref={faderight} className="relative bg-[#f1f8ff]">
        <Image
          src="/Images/hero__2.png"
          alt="hero-pic"
          height={500}
          width={800}
          className="relative z-1 w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
