import FooterColumn from "@/components/footer/footercolum";
import SocialMediaIcons from "@/components/ui/socialMediaIcons";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-primary rounded-xl flex flex-col p-10 items-start justify-center space-y-12 text-lg md:text-xl">
      <FooterColumn showFirstColumn={false} />

      <div>
        <p className="font-semibold text-white text-xl md:text-lg pb-4">
          Stay Connected
        </p>
        <SocialMediaIcons size={24} />
      </div>
    </div>
  );
};

export default ContactInfo;
