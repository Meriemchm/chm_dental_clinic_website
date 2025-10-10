import React from "react";
import Button from "../ui/button";

import  Service  from "./service";

const Services = () => {
  return (
    <div className="flex flex-col gap-16 my-20">
      <div className="flex w-full items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-4">
          <p className="uppercase text-black">Our Services</p>

          <h2 className="md:text-5xl text-3xl font-bold text-primary max-w-md">
            What We Offer{" "}
            <span className="text-black ">For your best smile</span>
          </h2>
        </div>

        <Button className="text-sm md:text-base">Explore All Services</Button>
      </div>
      {/*services*/}
      <Service />;
    </div>
  );
};

export default Services;
