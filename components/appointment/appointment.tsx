"use client";
import React from "react";
import { Container } from "../ui/container";
import AppointmentForm from "./appointmentForm";
import AppointmentInfo from "./appointmentInfo";
import { useGsapFade } from "@/hooks/gsap-animations";

const Appointment = () => {
  const fadeup = useGsapFade("up");
  return (
    <div className="min-h-screen bg-white">
      <Container className="pt-24">
        {" "}
        <div
          ref={fadeup}
          className="flex flex-col gap-4 items-start justify-start"
        >
          <p className="uppercase text-black">Book an Appointment</p>

          <h2 className="md:text-4xl text-2xl font-bold text-start text-primary max-w-md">
            Effortless Online Booking{" "}
            <span className="text-black ">for Your Dental Visit</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 py-24 gap-16 ">
          <AppointmentForm />
          <AppointmentInfo />
        </div>
      </Container>{" "}
    </div>
  );
};

export default Appointment;
