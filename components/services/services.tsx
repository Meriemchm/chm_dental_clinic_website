"use client";
import React from "react";
import Service from "./service";
import { ServiceHeader } from "./service-header";

const Services = () => {
  return (
    <div className="flex flex-col gap-16">
      <ServiceHeader />

      {/*services*/}
      <Service />
    </div>
  );
};

export default Services;
