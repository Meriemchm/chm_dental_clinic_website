"use client";
import React from "react";
import Image from "next/image";
import { AboutItems } from "@/data/data";
import Button from "../ui/button";
import { useGsapFade } from "@/hooks/useGsapFade";
import Link from "next/link";

const About = () => {
  const fadeleft = useGsapFade("left");
  const faderight = useGsapFade("right");
  return (
    <div className="flex md:flex-row flex-col-reverse gap-16 items-center justify-between md:gap-6">
      <div ref={fadeleft}>
        <Image
          src="/Images/about_us_picture_2.png"
          alt="about-us-pic"
          width={500}
          height={500}
          className="w-[400px] md:w-[500px] h-auto object-contain"
        />
      </div>

      <div ref={faderight} className="flex flex-col gap-4 max-w-lg">
        <p className="text-xl font-bold text-black">About Us</p>
        <h1 className="text-4xl mb-4 capitalize font-bold text-primary">
          15 yeras of expertise{" "}
          <span className="text-black">in dental care</span>
        </h1>
        <p className="md:text-base text-sm text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ad
          molestias consectetur tempore voluptatem? Ipsum fuga delectus unde
          ipsam quasi, earum vero blanditiis accusantium odit quae? Qui possimus
          molestiae blanditiis.
        </p>

        {AboutItems.map((item, index) => {
          return (
            <div key={index} className="flex gap-1">
              <Image
                src="/Icons/check.svg"
                alt="check-icon"
                height={20}
                width={20}
              />
              <p className="md:text-base text-sm text-neutral-500">
                {item.description}
              </p>
            </div>
          );
        })}

        <Link href="/about-us">
          <Button className="w-40 mt-4">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
