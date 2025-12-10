"use client";
import Button from "../ui/button";
import Link from "next/link";
import { useGsapFade } from "@/hooks/gsap-animations";
import Image from "next/image";

export const HeroLeft = () => {
  const fadeleft = useGsapFade("left");
  return (
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        reprehenderit officiis assumenda recusandae rerum maiores inventore
        voluptate eum, animi nam cum quaerat esse asperiores doloribus. Error
        atque dolorum odit soluta.
      </p>
      <Link href="/services">
        <Button className="capitalize"> Explore our services </Button>
      </Link>
    </div>
  );
};
