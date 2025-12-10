"use client";
import React from "react";
import Button from "../ui/button";

import Service from "./service";
import { useGsapFade } from "@/hooks/useGsapFade";
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
