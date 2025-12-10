"use client";
import Service from "@/components/services/service";
import { Container } from "@/components/ui/container";
import { useGsapFade } from "@/hooks/useGsapFade";
import React from "react";

const ServicesContainer = () => {
  const fadeup = useGsapFade("up");
  return (
    <div ref={fadeup} className="bg-white pt-24">
      <Container>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="uppercase text-black">Our Services</p>

          <h2 className="md:text-5xl text-3xl font-bold text-center text-primary max-w-md">
            What We Offer{" "}
            <span className="text-black ">For your best smile</span>
          </h2>
        </div>
        <div className="py-24">
          <Service />
        </div>
      </Container>
    </div>
  );
};

export default ServicesContainer;
