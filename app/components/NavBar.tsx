"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoCar from "@/images/LogoCar.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemSelect = (link: string) => {
    setSelectedNavItem(link);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Deshabilitar el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar el scroll
      document.body.style.overflow = "";
    }

    // Limpiar el efecto al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-gradient-light fixed w-full flex items-center xs:justify-between md:justify-end xl:justify-center h-24  p-4 z-50">
      <div className="flex items-center">
        <ul className="xl:block hidden xs:gap-0 md:gap-3 xxl:gap-40 xs:text-[18px] xxl:text-[20px] font-bold">
          {["/", "/#about", "/#contact"].map((link, index) => {
            const titles = ["Home", "¿Quiénes somos?", "Contáctanos"];
            return (
              <li
                key={index}
                className={`hover:text-yellow-500 hover:scale-110 cursor-pointer mr-20 inline-block ${
                  selectedNavItem === link ? "text-yellow-500" : ""
                }`}
              >
                <Link href={link} onClick={() => handleItemSelect(link)}>
                  {titles[index]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button onClick={toggleMenu} className="text-black xl:hidden">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-background menuSlideDown flex flex-col items-center justify-center z-50 transition-transform duration-300 ease-in-out transform">
          <button
            onClick={toggleMenu}
            className="text-white absolute top-4 right-4"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Image
            src={LogoCar}
            alt="logo"
            width={140}
            height={150}
            className="mb-8"
          />
          <ul className="flex flex-col items-center space-y-4 text-white text-2xl">
            {["/", "/#about", "/#contact"].map((link, index) => {
              const titles = ["Home", "¿Quiénes somos?", "Contáctanos"];
              return (
                <li
                  key={index}
                  className={`hover:text-yellow-500 hover:scale-110 cursor-pointer ${
                    selectedNavItem === link ? "text-yellow-500" : ""
                  }`}
                >
                  <Link href={link} onClick={() => handleItemSelect(link)}>
                    {titles[index]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
