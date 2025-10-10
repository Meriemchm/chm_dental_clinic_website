import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";
import ServicesContainer from "./components/servicesContainer";
import { Container } from "@/components/ui/container";

const ServicesPage = () => {
  return (
    <div>
      <HearderTitle title="Services" url="services" />

      <ServicesContainer />
    </div>
  );
};

export default ServicesPage;
