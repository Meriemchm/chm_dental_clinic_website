"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ContactFormData, contactSchema } from "@/schemas/contactSchema";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/button";
import toast from "react-hot-toast";
import { useGsapFade } from "@/hooks/gsap-animations";

const ContactForm = () => {
  const fadeleft = useGsapFade("left");

  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  {
    /*on submit */
  }

  const onSubmit = (data: ContactFormData) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setIsSending(false);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong.");
        setIsSending(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-white rounded-2xl space-y-4"
      ref={fadeleft}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Phone"
          name="phone"
          type="tel"
          register={register}
          error={errors.phone}
        />
      </div>
      <InputField
        label="Subject"
        name="subject"
        register={register}
        error={errors.subject}
      />

      <InputField
        label="Your Message"
        name="message"
        textarea
        register={register}
        error={errors.message}
      />

      <Button type="submit" disabled={isSending} className="mt-4">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
