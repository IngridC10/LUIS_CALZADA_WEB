"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Whatsapp from "@/images/Whatsapp.png";
import Car from "@/images/Car.png";
import Link from "next/link";

const ContactUs = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);

          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -200px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-white xs:h-[624px] md:h-[600px] xl:h-[300px] flex flex-row justify-center items-center"
    >
      <div className="xs:flex-col md:flex-col xl:flex-row xs:w-[360px] md:w-[1280px] xl:w-[1280px] mx-auto xs:gap-0 xl:gap-20 flex items-center">
        <div className="xs:p-3 xl:p-0 xs:w-[362px] md:w-[755px] xl:w-[800px] leading-10 text-justify">
          <p className="text-black xs:text-[16px]  xl:text-[22px]">
            {/* <div className="w-36 h-9   "> */}
            <span className=" xs:text-[21px]  xl:text-[27px] font-bold font-lilita  text-blue-950">
              CONTÁCTENOS
            </span>
            {/* </div> */}
            <br />
            Nos ponemos a su disposición en Lucho Travel Services, donde podrá
            cotizar su traslado, viaje u otro servicio, con la comodidad y
            garantīa que Ud. se merece. <br />
            <span>Consulta y Cotiza HOY</span>
          </p>

          <div className="flex items-center">
            <Link
              href="https://wa.link/7mq9za"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" px-4 py-2 font-bold rounded-lg text-black bg-white border border-darkBlueColor  hover:bg-blue-900 hover:text-white cursor-pointer xs:text-[16px] md:text-[22px] xl:text-xl">
                941363231
              </button>
            </Link>

            <Link target="_blank" href="https://wa.link/7mq9za">
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

        <div className="flex xs:justify-start md:justify-center xl:justify-end items-center">
          <Image
            src={Car}
            alt="car"
            width={200}
            height={200}
            className={isImageVisible ? "zoom-in-slide" : "opacity-0"}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
