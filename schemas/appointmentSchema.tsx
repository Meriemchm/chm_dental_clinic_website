import z from "zod";

export const appointmentSchema = z.object({
  yourName: z.string().min(2, "Your name is required"),
  phone: z.string().min(6, "Phone number is required"),
  appointmentType: z.string().min(1, "Please select a type of appointment"),
  preferredDentist: z.string().min(1, "Please select a dentist"),
  preferredDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Please provide a valid date"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  notes: z.string().min(5, "Please enter at least 5 characters"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
