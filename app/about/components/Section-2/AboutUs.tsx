"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TravelImage from "@/images/TravelImage.jpg";

const AboutUs = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          // Desconectar el observer una vez que se haya activado
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Ajusta el threshold según cuándo quieres que se active
        rootMargin: "0px 0px -200px 0px", // Ajusta el margen para activar antes de que la sección esté completamente visible
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
      id="about"
      ref={sectionRef}
      className="w-full xs:h-[1200px] md:h-[1200px] xl:h-[800px] bg-blue-950 flex items-center justify-center"
    >
      <div className="xs:justify-center xs:items-center flex xs:flex-col md:flex-col lg:flex-row md:w-[1280px] xl:w-[1280px] mx-auto gap-20">
        <div className="flex-col xs:w-[340px] md:w-[500px] xl:w-1/2 flex justify-center  xs:items-center sm:items-center xl:items-start ">
          <h1 className="font-lilita text-white xs:text-[21px]  xl:text-[27px]">
            ¿QUIÉNES SOMOS?
          </h1>
          <div className="xs:w-[329px] md:w-[500px] mt-2 xl:w-[600px] xs:h-[517px] md:h-[500px] xl:h-[500px] flex flex-col justify-center items-center bg-gradient-light rounded-[30px] p-5 xs:text-[16px] xl:text-[22px] leading-10 shadow-md text-justify">
            <p className="text-black">
              <span className="text-black">Somos </span>
              <span className="text-blue-950 font-bold  xs:text-[18px] xl:text-xl">
                LUCHO TRAVEL SERVICES
              </span>
              <br />
              <br />
              Una empresa dedicada al transporte turístico de personal, full
              days, city tours, visitas educativas, entre otros. Contamos con
              unidades modernas, con conductores profesionales y con la más
              importante nuestra{" "}
              <span className="text-blue-950 font-bold text-xl">
                EXPERIENCIA {""}
              </span>
              adquirida a través del tiempo.
            </p>
          </div>
        </div>
        <div className="xs:w-full md:w-1/2 xl:w-1/2 flex justify-center items-center">
          <Image
            src={TravelImage}
            alt="photo-travel"
            height={900}
            className={`h-[490px] ${
              isImageVisible ? "bounce-in" : "translate-y-20 opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
