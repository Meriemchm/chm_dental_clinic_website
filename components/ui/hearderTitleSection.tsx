"use client";
import { useGsapFade } from "@/hooks/useGsapFade";
import React from "react";

interface hearderTitleProps {
  title: string;
  url: string;
}

const HearderTitle: React.FC<hearderTitleProps> = ({ title, url }) => {
  const fadeup = useGsapFade("up");
  return (
    <div
      ref={fadeup}
      className="flex flex-col w-full items-center text-center  justify-center p-24 bg-neutral-100 "
    >
      <h1 className="md:text-5xl text-2xl capitalize text-black font-semibold my-12 ">
        {title}
      </h1>
      <p className="text-sm md:text-base capitalize text-neutral-500">
        Home / {url}
      </p>
    </div>
  );
};

export default HearderTitle;
