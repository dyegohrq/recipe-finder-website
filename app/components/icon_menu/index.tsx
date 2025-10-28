"use client";

import { useState } from "react";
import { MobileMenu } from "../mobile_menu";

export function Mobile_menu() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div>
        <div
          className=" bg-neutral-300 w-10 h-10 rounded-sm flex items-center justify-center cursor-pointer lg:hidden "
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <div className=" w-[18px] h-full flex flex-col items-center justify-center gap-[5px] relative">
            <div
              className={` bg-neutral-900 w-full h-0.5 rounded-lg transition-all duration-300 ease-in-out origin-center ${
                activeMenu ? "rotate-45 absolute" : "translate-y-0"
              } `}
            ></div>
            <div
              className={`bg-neutral-900 w-full h-0.5 rounded-lg transition-all duration-300 ease-in-out ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`bg-neutral-900 w-full h-0.5 rounded-lg transition-all duration-300 ease-in-out origin-center ${
                activeMenu ? "-rotate-45 absolute" : "translate-y-0"
              } `}
            ></div>
          </div>
          <MobileMenu activeMenu={activeMenu} />
    </div>
    </div>
  );
}
