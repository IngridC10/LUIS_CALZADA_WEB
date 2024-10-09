"use client";
import React, { useState, useRef } from "react";

const testimonials = [
  {
    name: "María Pérez",
    message:
      "Excelente servicio, el transporte fue puntual y cómodo. ¡Recomiendo mucho Lucho Travel Services!",
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
  const startX = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
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
    <section className="xs:p-2 xxl:p-0 xs:h-[910px] sm:h-[755px] md:h-[641px] xxl:h-[447px] items-center w-full py-20 bg-gradient-background text-white xs:flex-col md:flex-col xxl:flex-row flex">
      <div className="xs:flex-col md:flex-col xxl:flex-row max-w-7xl mx-auto gap-20 flex">
        <div className="flex-1 text-center ">
          <h2 className="xs:m-3 md:m-0 xxl:m-0 xs:text-[18px] md:text-[22px] xxl:text-[27px] text-start font-bold mb-8">
            Testimonios de Nuestros Clientes
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
              className="text-lg px-4 py-2 bg-gray-300 rounded-full mr-3 w-[50px] h-[50px]"
            >
              {"<"}
            </button>
            <div className="bg-gradient-light p-6 rounded-lg shadow-md text-black xs:h-[300px] mt-[23px]   md:h-[190px] xxl:h-[190px] xs:w-[226px] md:w-[550px] xxl:w-[550px] flex flex-col justify-center">
              <p className="text-lg font-bold">
                &quot;{testimonials[currentIndex].message}&quot;
              </p>
              <h3 className="mt-4 text-lg font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-lg text-black font-bold">
                {testimonials[currentIndex].location}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="text-lg px-4 py-2 bg-gray-300 rounded-full ml-3 w-[50px] h-[50px]"
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
          <h1 className="xs:text-[18px] md:text-[27px] xs:ml-2 xxl:ml-0 xxl:text-[27px] font-bold">
            ¿Por qué elegirnos?
          </h1>
          <ul className="leading-10 xs:text-[14px] xs:p-3 xxl:p-0 xxl:text-[23px]">
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
