"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TileLayout from "./TileLayout";
import { info } from "./utils";

const FirstTile = () => {
  const [selectedInfo, setSelectedInfo] = useState(info[0]);

  return (
    <TileLayout>
      {
        <div className=" ">
          <div className="relative bg-[#171717] rounded-[23px] flex h-[62px] p-[6px] justify-between ml-[17px] md:ml-[10px] md:mr-[10px] lg:mr-[41px]  nav-tile-shadow">
            {info.map((item) => (
              <div
                key={item.heading}
                onClick={() => setSelectedInfo(item)}
                className={`relative rounded-[16px] flex items-center justify-center w-[33%] ${
                  selectedInfo.heading === item.heading
                    ? "text-white"
                    : "text-[#A3ADB2] "
                } cursor-pointer transition-all duration-300 ease-in-out`}
              >
                <div className="montserrat-alternates-regular relative z-20 md:text-xs lg:text-base">
                  {" "}
                  {item.heading}
                </div>

                {selectedInfo.heading === item.heading && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-[16px] bg-[#28292F] nav-shadow z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div
            className="max-h-[235px] overflow-y-scroll mt-[35px]  text-[#969696] md:ml-[10px] lg:ml-[17px] md:pr-[20px]   lg:pr-[41px] lg:text-base   md:text-sm font-jakarta"
            dangerouslySetInnerHTML={{ __html: selectedInfo.text }}
          />
        </div>
      }
    </TileLayout>
  );
};

export default FirstTile;
