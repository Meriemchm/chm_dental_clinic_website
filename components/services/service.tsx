"use client";
import React from "react";
import { ServicesData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGsapFade } from "@/hooks/gsap-animations";

const Service = () => {
  const fadeup = useGsapFade("up");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-between">
      {ServicesData.map((item, index) => (
        <div
          key={index}
          className={cn(
            " flex flex-col items-start text-start gap-6 p-6 rounded-xl ",
            index === 1 ? "border-b-2 border-primary" : "border"
          )}
          ref={(el) => fadeup(el, index)}
        >
          <div className="bg-primary rounded-full p-2 md:p-4">
            <Image src={item.icon} alt={item.title} height={50} width={50} />
          </div>
          <h3 className="md:text-2xl text-xl text-black font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-neutral-500 text-sm md:text-base">
            {item.description}
          </p>
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-2  font-semibold",
              index === 1 ? "text-primary" : "text-black"
            )}
          >
            Learn More{" "}
            <Image
              src="/Icons/arrow.svg"
              alt="arrow"
              height={20}
              width={20}
              className={cn(
                "group-hover:translate-x-2 transform duration-200",
                index === 1 ? "text-primary" : "filter brightness-0"
              )}
            />{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Service;
