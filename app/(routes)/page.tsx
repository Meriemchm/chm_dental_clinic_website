import React from "react";
import { Container } from "../../components/ui/container";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Services from "@/components/services/services";
import Appointment from "@/components/appointment/appointment";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen bg-neutral-100">
        <Container className="py-24">
          <Hero />
        </Container>
      </div>

      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <About />{" "}
        </Container>{" "}
      </div>

      <div className="min-h-screen bg-neutral-100">
        <Container className="py-24">
          <Services />
        </Container>{" "}
      </div>

      <Appointment />
    </div>
  );
};

export default Home;
