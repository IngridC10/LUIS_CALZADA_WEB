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
      className="w-full bg-white xs:h-[624px] md:h-[600px] xxl:h-[300px] flex flex-row justify-center items-center"
    >
      <div className="xs:flex-col md:flex-col xxl:flex-row xs:w-[360px] md:w-[1280px] xxl:w-[1280px] mx-auto gap-20 flex">
        <div className="xs:p-3 xxl:p-0 xs:w-[362px] md:w-[755px] xxl:w-[800px] leading-10 text-justify">
          <p className="text-black xs:text-[16px] md:text-[22px] xxl:text-[22px]">
            <span className="font-bold text-blue-950">CONTÁCTENOS</span> <br />
            Nos ponemos a su disposición en Lucho Travel Services, donde podrá
            cotizar su traslado, viaje u otro servicio, con la comodidad y
            garantīa que Ud. se merece. <br />
            <span>Consulta y Cotiza HOY</span>
          </p>

          <div className="flex">
            <Link
              target="_blank"
              href="https://w.app/1yfSi6"
              className="ml-2 text-darkBlueColor hover:underline"
            >
              <h3 className="font-bold xs:text-[16px] md:text-[22px] xxl:text-xl cursor-pointer hover:text-yellow-500 ">
                941363231
              </h3>
            </Link>

            <Link target="_blank" href="https://w.app/1yfSi6">
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

        <div className="flex xs:justify-start md:justify-center xxl:justify-end items-center">
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
