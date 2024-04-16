import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-blue-100 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] w-full before:absolute before:transform top-96 before:w-[1500px] before:h-[1px] before:bg-gradient-to-r before:from-[#11244f] before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}></span>
      ))}
    </>
  );
};
