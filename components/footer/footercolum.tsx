import { FooterData } from "@/data/data";
import React from "react";

interface FooterColumnProps {
  showFirstColumn?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  showFirstColumn = true,
}) => {
  return (
    <>
      {FooterData.map((items, index) => {
        if (index === 0 && !showFirstColumn) return null;
        return (
          <div key={index} className="flex flex-col gap-4 w-full">
            <h3 className="text-white font-semibold text-lg">{items.title}</h3>

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
        );
      })}
    </>
  );
};

export default FooterColumn;
