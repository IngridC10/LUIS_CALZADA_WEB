"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import "flowbite/dist/flowbite.css";
import Travel1 from "@/images/Travel1.jpg";
import Travel2 from "@/images/Travel2.jpg";
import Travel3 from "@/images/Travel3.jpg";
import Travel4 from "@/images/Travel4.jpg";

const GalleryImagesCarousel = () => {
  const images = [
    {
      src: Travel1,
      alt: "Imagen 1",
      width: 800,
      height: 400,
      location: "Cuzco",
    },
    {
      src: Travel2,
      alt: "Imagen 2",
      width: 800,
      height: 400,
      location: "Chanchamayo",
    },
    {
      src: Travel3,
      alt: "Imagen 3",
      width: 800,
      height: 400,
      location: "Arequipa",
    },
    {
      src: Travel4,
      alt: "Imagen 4",
      width: 800,
      height: 400,
      location: "Iquitos",
    },
  ];

  return (
    <section className="xs:h-[639px] md:h-[788px] xl:h-[860px] bg-gradient-background">
      <div className="h-full">
        <div className="h-20 flex justify-center items-end">
          <h1 className="font-lilita text-white xs:text-[21px] xl:text-[27px] text-center">
            FOTOS DE NUESTROS DESTINOS
          </h1>
        </div>
        <Carousel slideInterval={5000} className="h-[90%]">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover xs:w-[300px] md:w-[500px] xl:w-[970px] xs:h-[400px] md:h-[500px] xl:h-[650px]"
              />
              {/* Superponer el nombre del lugar en el centro */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className=" xs:text-[30px]  xl:text-6xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                  {image.location}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default GalleryImagesCarousel;
