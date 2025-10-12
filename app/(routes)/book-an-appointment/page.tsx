import React from "react";
import HearderTitle from "@/components/ui/hearderTitleSection";
import Appointment from "@/components/appointment/appointment";

const BookAnAppointmentPage = () => {
  return (
    <div>
      <HearderTitle title="Book an Appointment" url="Book an Appointment" />
      <Appointment />
    </div>
  );
};

export default BookAnAppointmentPage;
