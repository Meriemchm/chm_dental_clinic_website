import { FooterData } from "@/Data/data";
import React from "react";

const FooterColumn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {FooterData.map((items, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-lg">{items.title}</h3>

          <div className="flex flex-col gap-2">
            {items.details &&
              items.details.map((item, index) => (
                <div
                  key={index}
                  className="text-neutral-200 hover:text-white transition-colors"
                >
                  {item.content}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterColumn;
