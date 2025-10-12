import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

