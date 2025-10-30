import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";
import ServicesContainer from "./components/servicesContainer";
import Appointment from "@/components/appointment/appointment";

const ServicesPage = () => {
  return (
    <div>
      <HearderTitle title="Services" url="services" />

      <ServicesContainer />
      <Appointment />
    </div>
  );
};

export default ServicesPage;
