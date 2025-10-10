import React from "react";
import { Container } from "../../components/ui/container";
import Hero from "@/components/hero/hero";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-neutral-100">
        <Container className="py-24">
          <Hero />
        </Container>
      </div>
      {/*  <About />
    <Services /> */}
    </>
  );
};

export default Home;
