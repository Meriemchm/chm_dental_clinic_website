import Link from "next/link";

export const NavbarItems = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "about us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "services",
    link: "/services",
  },
  {
    id: 4,
    name: "contact us",
    link: "/contact-us",
  },
];

export const AboutItems = [
  {
    id: 1,
    description: "Premium Dental Services You can Trust",
  },
  {
    id: 2,
    description: "Award-Winning Expert in Dental Care",
  },
  {
    id: 3,
    description: "Dedicated Experts Behind Every Smile",
  },
];

export const ServicesData = [
  {
    id: 3,
    title: "Dental Implants",
    description:
      "Restore your smile with durable and natural-looking dental implants, providing a permanent solution for missing teeth.",
    icon: "/Icons/implants-teeth.svg",
  },
  {
    id: 2,
    title: "General Dentistry",
    description:
      "Comprehensive dental care for maintaining optimal oral health, including routine check-ups, cleanings, and preventive treatments.",
    icon: "/Icons/tooth-dental.svg",
  },
  {
    id: 1,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with our professional teeth whitening services, designed to remove stains and discoloration for a radiant look.",
    icon: "/Icons/tooth-teeth.svg",
  },
];

export const FooterData = [
  {
    id: 1,
    title: "Company",
    details: [
      { content: <Link href="/about-us">About Us</Link> },
      { content: <Link href="/contact-us">Contact Us</Link> },
    ],
  },
  {
    id: 2,
    title: "Contact Info",
    details: [
      { content: <p>+231 500 00 00 00</p> },
      { content: <p>example@name.com</p> },
      { content: <p>123 Example St, City, Country</p> },
    ],
  },

  {
    id: 3,
    title: "Clinic Hours",
    details: [
      {
        content: (
          <div className="flex justify-between flex-grow col-span-2">
            <p>Saturday to Thursday</p>
            <p className="text-sm">08:00 - 22:00</p>
          </div>
        ),
      },
      {
        content: (
          <div className="flex justify-between col-span-2">
            <p>Saturday</p> <p className="text-sm">11:00 - 22:00</p>
          </div>
        ),
      },
      {
        content: (
          <div className="flex justify-between col-span-2">
            <p>Friday </p>
            <p className="text-sm">Closed</p>
          </div>
        ),
      },
    ],
  },
];

export const SocialMediaData = [
  {
    id: 1,
    name: "Facebook",
    icon: "/Icons/Facebook.svg",
    link: "",
  },

  {
    id: 2,

    name: "Instagram",
    icon: "/Icons/Instagram.svg",

    link: "",
  },
  {
    id: 3,

    name: "LinkedIn",
    icon: "/Icons/LinkedIn.svg",

    link: "",
  },
];

export const AppointmentTypeData = [
  { value: "dental checkup", label: "Dental Checkup" },
  { value: "teeth cleaning", label: "Teeth Cleaning" },
  { value: "teeth whitening", label: "Teeth Whitening" },
];

export const PreferredDentistData = [
  { value: "Ahmed Sadiki", label: "Dr. Ahmed Sadiki" },
  { value: "Ines Abdallah", label: "Dr. Ines Abdallah" },
];


