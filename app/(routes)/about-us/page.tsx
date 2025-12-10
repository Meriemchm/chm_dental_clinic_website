import About from "@/components/about/about";
import Appointment from "@/components/appointment/appointment";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="overflow-hidden">
      <HearderTitle title="About Us" url="About Us" />

      <div className="h-full bg-white">
        <Container className="py-24">
          <About />{" "}
        </Container>{" "}
      </div>
      <Appointment />
    </div>
  );
};

export default AboutUsPage;
