"use client";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";
import { useGsapFade } from "@/hooks/useGsapFade";
import { ContactContainer } from "./components/contact-container";

const ContactUsPage = () => {
  return (
    <div className="overflow-hidden">
      <HearderTitle title="Contact Us" url="Contact Us" />
      <ContactContainer />
    </div>
  );
};

export default ContactUsPage;
