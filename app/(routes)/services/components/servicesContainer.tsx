import Service from "@/components/services/service";
import { Container } from "@/components/ui/container";
import React from "react";

const ServicesContainer = () => {
  return (
    <div className="bg-white py-24">
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
