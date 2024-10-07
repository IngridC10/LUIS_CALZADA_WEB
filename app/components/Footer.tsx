import React from "react";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/images/whatsapp.png";
const Footer = () => {
  return (
    <div className=" bg-gradient-light w-full  flex items-center justify-center h-20 ">
      <p className=" flex gap-40 text-center items-center xs:text-[14px]  md:text-[20px]  xxl:text-[20px] font-thin">
        Lucho Travel Services © 2024 | Todos los derechos reservados
      </p>
      <div>
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=51941363231&text=Hola%20%2C%C2%BFTe%20gustar%C3%ADa%20programar%20un%20viaje%20o%20solicitar%20un%20presupuesto%3F%20"
        >
          <Image
            src={Whatsapp}
            alt="whatsapp"
            width={75}
            height={28}
            className="ml-10 fixed   xs:bottom-20 md:bottom-10 xxl:bottom-10      xs:right-64 md:right-8 xxl:right-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
