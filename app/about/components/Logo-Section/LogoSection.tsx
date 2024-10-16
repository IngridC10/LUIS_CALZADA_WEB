"use client";
import React from "react";
import Image from "next/image";
import LogoCar from "@/images/LogoCar.png";

const LogoSection = () => {
  return (
    <div className="logo-section bg-white flex flex-col items-center xs:h-[300px]  xxl:h-[330px] justify-center m-auto">
      <Image
        src={LogoCar}
        alt="logo"
        width={240}
        height={150}
        className="xs:w-[189px] md:w-[220px] xxl:w-[240px] xs:mt-12"
      />
    </div>
  );
};

export default LogoSection;
