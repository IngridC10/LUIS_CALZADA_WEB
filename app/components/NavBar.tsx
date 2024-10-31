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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-gradient-light fixed w-full h-24 p-4 z-50">
      {/* Vista móvil (xs a lg) */}
      <div className="block xl:hidden w-full flex justify-between items-center">
        <div className="w-24"></div>
        <Image
          src={LogoCar}
          alt="logo"
          width={220}
          height={130}
          className="xs:w-[90px] md:w-[98px]"
        />
        <button
          onClick={toggleMenu}
          className="text-black w-24 flex justify-end"
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Vista desktop (xl) - Simplificada */}
      <div className="hidden xl:block w-full h-full">
        <div className="flex justify-center items-center h-full">
          <ul className="flex gap-40 text-black text-[20px] font-bold">
            <li className="hover:text-yellow-500 hover:scale-110 cursor-pointer">
              <Link href="/" onClick={() => handleItemSelect("/")}>
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-500 hover:scale-110 cursor-pointer">
              <Link href="/#about" onClick={() => handleItemSelect("/#about")}>
                ¿Quiénes somos?
              </Link>
            </li>
            <li className="hover:text-yellow-500 hover:scale-110 cursor-pointer">
              <Link
                href="/#contact"
                onClick={() => handleItemSelect("/#contact")}
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú móvil desplegable */}
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
