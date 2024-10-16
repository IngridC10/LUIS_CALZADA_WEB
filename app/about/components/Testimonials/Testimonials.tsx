"use client";
import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "María Pérez",
    message:
      "Excelente servicio, el transporte fue puntual y cómodo. ¡Recomiendo mucho a Lucho Travel Services!",
    location: "Lima, Perú",
  },
  {
    name: "Juan Torres",
    message:
      "Tuve una experiencia increíble en el city tour. Los conductores son muy profesionales y amables.",
    location: "Ica, Perú",
  },
  {
    name: "Ana Gómez",
    message:
      "Mis viajes a reuniones de trabajo siempre son agradables gracias a Lucho Travel Services. ¡Gracias por la confianza!",
    location: "Lima, Perú",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeInClass, setFadeInClass] = useState("fade-in-right");
  const [activeButton, setActiveButton] = useState<"next" | "prev" | null>(
    null
  ); // Estado para manejar el botón activo
  const startX = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInClass(""); // Remueve la clase para reiniciar la animación
    }, 2000); // Duración de la animación
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [fadeInClass]);

  const handleNext = () => {
    setActiveButton("next"); // Cambiar el botón activo
    setFadeInClass("fade-in-right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveButton("prev"); // Cambiar el botón activo
    setFadeInClass("fade-in-right");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const moveX = e.touches[0].clientX - startX.current;
    if (moveX > 50) {
      handlePrev();
      startX.current = e.touches[0].clientX;
    } else if (moveX < -50) {
      handleNext();
      startX.current = e.touches[0].clientX;
    }
  };

  return (
    <section className="xs:p-2 xl:p-0 xs:h-[910px] sm:h-[773px] md:h-[774px] xl:h-[447px] items-center justify-center w-full py-20 bg-gradient-background text-white xs:flex-col md:flex-col xl:flex-row flex">
      <div className="xs:flex-col md:flex-col xl:flex-row xl:w-[1280px] mx-auto gap-20 flex">
        <div className="flex-1 text-center ">
          <h2 className="xs:m-3 md:m-0 xl:m-0 xs:text-[21px]  xl:text-[27px]  xs:text-center   md:text-start  xl:text-start font-bold font-lilita  mb-8">
            TESTIMONIOS DE NUESTROS CLIENTES
          </h2>
          <div
            className="flex justify-center items-center mb-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => (startX.current = e.clientX)}
            onMouseMove={(e) => {
              if (startX.current) {
                const moveX = e.clientX - startX.current;
                if (moveX > 50) {
                  handlePrev();
                  startX.current = 0;
                } else if (moveX < -50) {
                  handleNext();
                  startX.current = 0;
                }
              }
            }}
            onMouseUp={() => (startX.current = 0)}
          >
            <button
              onClick={handlePrev}
              className={`text-lg px-4 py-2 rounded-full mr-3 w-[50px] h-[50px] ${
                activeButton === "prev" ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              {"<"}
            </button>
            <div
              className={`bg-gradient-light p-6 rounded-lg shadow-md text-black xs:h-[300px] mt-[23px] md:h-[190px] xl:h-[190px] xs:w-[226px] md:w-[550px] xl:w-[550px] flex flex-col justify-center ${fadeInClass}`}
            >
              <p className="text-lg ">
                &quot;{testimonials[currentIndex].message}&quot;
              </p>
              <h3 className="mt-4 text-lg ">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-lg text-black ">
                {testimonials[currentIndex].location}
              </p>
            </div>
            <button
              onClick={handleNext}
              className={`text-lg px-4 py-2 rounded-full ml-3 w-[50px] h-[50px] ${
                activeButton === "next" ? "bg-blue-900" : "bg-gray-300"
              }`}
            >
              {">"}
            </button>
          </div>
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 text-left">
          <h1 className=" text-white  xs:text-[18px] md:text-[27px] xs:ml-2 xl:ml-0 xl:text-[27px] font-bold">
            ¿Por qué elegirnos?
          </h1>
          <ul className=" text-white leading-10 xs:text-[16px] xs:p-3 xl:p-0 xl:text-[23px]">
            <li>☉ Experiencias personalizadas en cada viaje.</li>
            <li>☉ Conductores capacitados y amables.</li>
            <li>☉ Vehículos seguros y confiables.</li>
            <li>☉ Flexibilidad en las reservas.</li>
            <li>☉ Precios competitivos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
