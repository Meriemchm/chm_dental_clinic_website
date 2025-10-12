import About from "@/components/about/about";
import Appointment from "@/components/appointment/appointment";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <HearderTitle title="About Us" url="About Us" />

      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <About />{" "}
        </Container>{" "}
      </div>
      <Appointment />
    </div>
  );
};

export default AboutUsPage;
