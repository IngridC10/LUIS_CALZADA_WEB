import React from "react";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/images/Whatsapp.png";
const Footer = () => {
  return (
    <div className=" bg-gradient-light w-full  flex items-center justify-center h-20 ">
      <div className="    xs:w-[400px]  lg:w-[600px]">
        <p className=" text-black flex gap-40 text-center justify-center  items-center xs:text-[14px]  xl:text-[20px] font-thin">
          Lucho Travel Services © 2024 | Todos los derechos reservados
        </p>
      </div>
      <div>
        <Link target="_blank" href="https://w.app/1yfSi6">
          <Image
            src={Whatsapp}
            alt="whatsapp"
            // width={75}
            // height={28}
            className="  xs:w-14 xl:w-[75px]    ml-10 fixed   xs:bottom-20 md:bottom-10 xl:bottom-10      xs:right-4  xl:right-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
