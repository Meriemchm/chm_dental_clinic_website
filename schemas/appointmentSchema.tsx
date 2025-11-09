import z from "zod";

export const appointmentSchema = z.object({
  yourName: z.string().min(2, "Your name is required"),
  phone: z.string().min(6, "Phone number is required"),
  appointmentType: z.string().min(1, "Please select a type of appointment"),
  preferredDentist: z.string().min(1, "Please select a dentist"),
  preferredDate: z.string().refine((val) => {
    const day = new Date(val).getDay();
    console.log(val); // 0 = sunday, 5 = friday
    return day !== 5; // close friday
  }, "The clinic is closed on Friday"),
  preferredTime: z.string().refine((val) => {
    const [, minute] = val.split(":").map(Number);
    return minute === 0 || minute === 30; // only 00 ou 30
  }, "Please select a time rounded to 00 or 30 minutes"),
  notes: z.string().min(5, "Please enter at least 5 characters"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
