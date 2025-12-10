import { FooterData } from "@/data/data";
import React from "react";
import Image from "next/image";
import { useGsapFade } from "@/hooks/gsap-animations";

const AppointmentInfo = () => {
  const faderight_1 = useGsapFade("right");
  const faderight_2 = useGsapFade("right");
  return (
    <div className="flex flex-col space-y-4  ">
      <div ref={faderight_1} className="bg-primary rounded-xl p-5">
        {FooterData.slice(2).map((items, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <h3 className="text-white font-semibold text-lg border-b">
              {items.title}
            </h3>

            <div className="flex flex-col gap-2">
              {items.details?.map((item, i) => (
                <div
                  key={i}
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        ref={faderight_2}
        className="flex space-x-6 rounded-xl p-5 border border-neutral-200 items-center justify-start"
      >
        <div className="rounded-full bg-primary/10 p-4">
          <Image
            src="/Icons/phone.svg"
            alt="phone"
            height={25}
            width={25}
            className="w-5 h-5 md:h-auto md:w-auto"
          />
        </div>

        <div className="flex flex-col">
          <p className=" capitalize text-neutral-500 ">
            your smile, our priority
          </p>
          <p className="md:text-2xl text-lg font-bold">24/7 Emergency</p>
          <p className="text-neutral-400 pt-2">+213 500 00 00 00</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;
