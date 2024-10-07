import React from "react";
import Image from "next/image";
import Whatsapp from "@/images/Whatsapp.png";
import Car from "@/images/Car.jpg";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className=" w-full   xs:h-[602px] md:h-[600px] xxl:h-[300px] flex flex-row justify-center items-center "
    >
      <div className=" xs:flex-col  md:flex-col  xxl:flex-row  xs:w-[360px]  md:w-[1280px] xxl:w-[1280px] mx-auto gap-20 flex ">
        <div className="  xs:p-3  xxl:p-0 m-auto   xs:w-[362px]  md:w-[755px] xxl:w-[800px] leading-10 text-justify">
          <p className="  xs:text-[16px] md:text-[22px]   xxl:text-[22px]">
            <span className="text-xl font-bold text-blue-950">CONTÁCTENOS</span>{" "}
            <br />
            Nos ponemos a su disposición en Lucho Travel Services, donde podrá
            cotizar su traslado, viaje u otro servicio, con la comodidad y
            garantīa que Ud. se merece. <br />
            <span>Consulta y Cotiza HOY</span>
          </p>

          <div className="flex">
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51941363231&text=Hola%20%2C%C2%BFTe%20gustar%C3%ADa%20programar%20un%20viaje%20o%20solicitar%20un%20presupuesto%3F%20"
              className="ml-2 text-darkBlueColor hover:underline"
            >
              <h3 className="font-bold     xs:text-[16px] md:text-[22px] xxl:text-xl cursor-pointer  hover:text-yellow-500 ">
                {" "}
                941363231
              </h3>
            </Link>

            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=51941363231&text=Hola%20%2C%C2%BFTe%20gustar%C3%ADa%20programar%20un%20viaje%20o%20solicitar%20un%20presupuesto%3F%20"
            >
              <Image
                src={Whatsapp}
                alt="whatsapp"
                width={28}
                height={28}
                className="ml-4"
              />
            </Link>
          </div>
        </div>

        <div className="w-[500px] flex  xs:justify-start md:justify-end  xxl:justify-end items-center">
          <Image src={Car} alt="car" width={200} height={200} />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
