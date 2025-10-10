import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row lg:justify-between">
      {/* Texte */}
      <div className="flex flex-col items-center text-center gap-4 lg:items-start lg:text-left">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-primary">
          <span className="text-black">Your</span> Smile,{" "}
          <span className="text-black">Our</span> Passion
        </h1>

        <p className="text-sm md:text-base text-neutral-500 max-w-lg ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem reprehenderit officiis assumenda recusandae rerum
          maiores inventore voluptate eum, animi nam cum quaerat esse asperiores
          doloribus. Error atque dolorum odit soluta.
        </p>

        <Button className="mt-6 capitalize">
          {" "}
          <Link href="/services">Explore our services</Link>{" "}
        </Button>
      </div>

      {/* Image Hero */}
      <div className="relative">
        <div
          className="absolute rounded-full bg-primary 
                  w-72 h-72
                  top-10"
        ></div>
        <Image
          src="/Images/hero_picture.png"
          alt="hero-pic"
          height={400}
          width={400}
          className="relative z-1 w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
