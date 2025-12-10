"use client";
import { useGsapFade } from "@/hooks/gsap-animations";
import { useGsapCountUp } from "@/hooks/useGsapCountUp";
import Image from "next/image";

interface StatsCardsProps {
  stats: {
    value: string;
    label: string;
    image: string;
  }[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  const fadeUp = useGsapFade("up");
  const setCountRef = useGsapCountUp();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center mx-auto items-center gap-6 md:gap-10">
      {stats.map((stat, index) => {
        const stats_number = Number(stat.value);

        return (
          <div key={index} className="w-full hover:scale-105 duration-200">
            <div
              className="
          w-full flex flex-col gap-4 md:flex-row justify-center md:items-start items-center
          p-6 md:py-8
        "
              ref={(el) => {
                fadeUp(el, index);
              }}
            >
              <div className="bg-primary p-2 rounded-lg">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={18}
                  height={18}
                  className="h-auto w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex ">
                  <p
                    className="text-2xl font-semibold text-black"
                    ref={(el) => setCountRef(el, stats_number, index)}
                  >
                    {stat.value}
                  </p>
                  <p className="text-2xl font-semibold text-primary">+</p>
                </div>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
