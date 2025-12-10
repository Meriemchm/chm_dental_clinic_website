"use client";
import HearderTitle from "@/components/ui/hearderTitleSection";
import React from "react";
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
