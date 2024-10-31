"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import "flowbite/dist/flowbite.css";
import Travel1 from "@/images/Travel1.jpg";
import Travel2 from "@/images/Travel2.jpg";
import Travel3 from "@/images/Travel3.jpg";
import Travel4 from "@/images/Travel4.jpg";
import Travel5 from "@/images/Travel5.png";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const GalleryImagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState<HTMLDivElement | null>(null);

  const images = [
    {
      src: Travel1,
      alt: "Imagen 1",
      width: 800,
      height: 400,
      location: "Arequipa",
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
      location: "Chanchamayo",
    },
    {
      src: Travel5,
      alt: "Imagen 5",
      width: 800,
      height: 400,
      location: "Cuzco",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    const nextButton = carouselRef?.querySelector(
      '[data-testid="carousel-right-control"]'
    ) as HTMLElement;
    nextButton?.click();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    const prevButton = carouselRef?.querySelector(
      '[data-testid="carousel-left-control"]'
    ) as HTMLElement;
    prevButton?.click();
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: false,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
    touchEventOptions: { passive: false },
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        // Umbral mínimo para considerar un swipe
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }

      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <section className="xs:h-[600px] md:h-[808px] pt-24 xl:h-[920px] bg-gradient-background">
      <div className="xs:h-[80%] xl:h-[90%]">
        <div className="h-20 flex justify-center items-end">
          <h1 className="font-lilita text-white xs:text-[22px] xl:text-[27px] text-center">
            FOTOS DE NUESTROS DESTINOS
          </h1>
        </div>

        <div
          {...handlers}
          ref={(el) => setCarouselRef(el)}
          className="h-full"
          onTouchStart={handleTouchStart}
        >
          <Carousel
            slideInterval={4000}
            className="xl:h-[90%] xs:h-[80%]"
            slide={false}
          >
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
                  className="object-cover xs:w-[300px] md:w-[500px] xl:w-[950px] xs:h-[320px] md:h-[500px] xl:h-[650px]"
                  draggable={false}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="xs:text-[30px] xl:text-6xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                    {image.location}
                  </h2>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GalleryImagesCarousel;
