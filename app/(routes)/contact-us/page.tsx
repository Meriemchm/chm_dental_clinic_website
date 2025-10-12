import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";
import ContactForm from "./components/contactForm";
import ContactInfo from "./components/contactInfo";

const ContactUsPage = () => {
  return (
    <div>
      <HearderTitle title="Contact Us" url="Contact Us" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          {" "}
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="uppercase text-black">Contact Us</p>

            <h2 className="md:text-4xl text-2xl font-bold text-center text-primary max-w-md">
              Get in Touch{" "} <span className="text-black ">with Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 py-24 ">
            <ContactForm />{" "}
            <ContactInfo />
          </div>
        </Container>{" "}
      </div>
    </div>
  );
};

export default ContactUsPage;
