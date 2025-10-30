"use client";

import Button from "@/components/ui/button";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/selectField";
import {
  AppointmentTypeData,
  PreferredDentistData,
} from "@/components/data/data";
import {
  AppointmentFormData,
  appointmentSchema,
} from "@/schemas/appointmentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = (data: AppointmentFormData) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white rounded-2xl space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Your Name"
          name="yourName"
          register={register}
          error={errors.yourName}
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          label="Type of Appointment"
          name="appointmentType"
          options={AppointmentTypeData}
          register={register}
          error={errors.appointmentType}
        />
        <SelectField
          label="Preferred Dentist"
          name="preferredDentist"
          options={PreferredDentistData}
          register={register}
          error={errors.preferredDentist}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Preferred Date"
          name="preferredDate"
          type="date"
          register={register}
          error={errors.preferredDate}
        />
        <InputField
          label="Preferred Time"
          name="preferredTime"
          type="time"
          register={register}
          error={errors.preferredTime}
        />
      </div>
      <InputField
        label="Notes"
        name="notes"
        textarea
        register={register}
        error={errors.notes}
      />
      <Button className="mt-5">Book an Appointment</Button>
    </form>
  );
};

export default AppointmentForm;
