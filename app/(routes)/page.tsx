import React from "react";
import { Container } from "../../components/ui/container";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Appointment from "@/components/appointment/appointment";
import { Banner } from "@/components/banner/banner";
import StatsSection from "@/components/stats-section/stats-section";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="h-full bg-[linear-gradient(to_bottom,var(--fourthary)_0%,var(--fourthary)_50%,white_50%,white_100%)]
                  lg:bg-[linear-gradient(to_right,white_0%,white_50%,var(--fourthary)_50%,var(--fourthary)_100%)]"
      >
        <Container className="py-24">
          <Hero />
        </Container>
      </div>

      <StatsSection />

      <div className="h-full bg-white">
        <Container className="py-24">
          <About />{" "}
        </Container>{" "}
      </div>

      <div className="h-full bg-neutral-50">
        <Container className="py-24">
          <Services />
        </Container>{" "}
      </div>

      <Appointment />
    </div>
  );
};

export default Home;
