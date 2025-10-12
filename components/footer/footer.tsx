import React from "react";
import { Container } from "../ui/container";
import Image from "next/image";
import FooterColumn from "./footercolum";
import SocialMediaIcons from "../ui/socialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-white w-full p-5">
      <div className="bg-secondary w-full h-full rounded-lg">
        {" "}
        <Container className=" rounded-lg py-24">
          <div className="grid w-full grid-cols-1 md:grid-cols-3  border-b border-white/30 pb-10 gap-8">
            <div className="flex flex-col gap-4 items-start w-full ">
              <Image
                src="/Images/logo_2.png"
                alt="Logo"
                width={150}
                height={150}
              />
              <p className="text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                molestiae ab similique facilis architecto laboriosam.
              </p>
              <SocialMediaIcons className="filter brightness-0 " />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FooterColumn />{" "}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
