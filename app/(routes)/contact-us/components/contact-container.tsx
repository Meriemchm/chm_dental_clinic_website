import { Container } from "@/components/ui/container";
import React from "react";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import { useGsapFade } from "@/hooks/useGsapFade";

export const ContactContainer = () => {
  const fadeup = useGsapFade("up");
  return (
    <div className="h-full bg-white">
      <Container className="py-24">
        {" "}
        <div
          ref={fadeup}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <p className="uppercase text-black">Contact Us</p>

          <h2 className="md:text-4xl text-2xl font-bold text-center text-primary max-w-md">
            Get in Touch <span className="text-black ">with Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 py-24 gap-12 md:gap-6 ">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>{" "}
    </div>
  );
};
