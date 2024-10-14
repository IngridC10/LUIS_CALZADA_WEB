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
      className="w-full xs:h-[1200px] md:h-[1200px] xxl:h-[800px] bg-blue-950 flex items-center justify-center"
    >
      <div className="xs:justify-center xs:items-center flex xs:flex-col md:flex-col xxl:flex-row w-full max-w-7xl mx-auto gap-20">
        <div className="xs:w-[340px] md:w-[500px] xxl:w-1/2 flex justify-center items-center">
          <div className="xs:w-[420px] md:w-[500px] xxl:w-[800px] xs:h-[517px] md:h-[500px] xxl:h-[500px] flex flex-col justify-center items-center bg-gradient-light rounded-[30px] p-5 xs:text-[16px] md:text-[22px] xxl:text-[22px] leading-10 shadow-md text-justify">
            <p className="text-black">
              <span className="text-black">Bienvenidos</span> <br />
              <span className="text-blue-950 font-bold italic text-xl">
                LUCHO TRAVEL SERVICES
              </span>
              <br />
              Somos una empresa dedicada al transporte turístico de personal,
              full days, city tours, visitas educativas, entre otros. Contamos
              con unidades modernas, con conductores profesionales y con la más
              importante nuestra{" "}
              <span className="text-blue-950 font-bold text-xl">
                EXPERIENCIA {""}
              </span>
              adquirida a través del tiempo.
            </p>
          </div>
        </div>
        <div className="xs:w-full md:w-1/2 xxl:w-1/2 flex justify-center items-center">
          <Image
            src={TravelImage}
            alt="photo-travel"
            height={900}
            className={`h-[495px] ${
              isImageVisible ? "bounce-in" : "translate-y-20 opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
