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
    { src: Travel1, alt: "Imagen 1", width: 800, height: 400 },
    { src: Travel2, alt: "Imagen 2", width: 800, height: 400 },
    { src: Travel3, alt: "Imagen 3", width: 800, height: 400 },
    { src: Travel4, alt: "Imagen 4", width: 800, height: 400 },
  ];

  return (
    <section className="xs:h-[780px] md:h-[788px] xxl:h-[860px] bg-gradient-background">
      <Carousel slideInterval={5000}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover xs:w-[300px] md:w-[500px] xxl:w-[970px] xs:h-[400px] md:h-[500px] xxl:h-[650px]"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default GalleryImagesCarousel;
