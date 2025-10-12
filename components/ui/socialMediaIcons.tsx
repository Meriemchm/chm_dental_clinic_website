import { SocialMediaData } from "@/data/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface SocialMediaIconsProps {
  className?: string;
  size?:number;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  className = "",
  size=16,
}) => {
  return (
    <div className="flex gap-2">
      {SocialMediaData.map((item, index) => (
        <div
          key={index}
          className="rounded-full p-2 bg-white/10 backdrop-blur-md  "
        >
          <div className="rounded-full bg-white p-1 hover:scale-105 duration-200 ">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(className)}
            >
              <Image src={item.icon} alt={item.name} height={size} width={size} />
            </Link>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
