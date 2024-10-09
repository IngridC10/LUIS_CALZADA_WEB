import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="   bg-gradient-light  fixed w-full flex items-center justify-center xs:h-40 md:h-40 xxl:h-20 ">
      <ul className="flex  xs:gap-0  md:gap-3 xxl:gap-40  xs:items-baseline    md:items-baseline xxl:items-center xs:flex-col md:flex-col xxl:flex-row xs:text-[18px]  xxl:text-[20px] font-bold">
        <li className=" hover:text-yellow-500 cursor-pointer">
          <Link href="/"> Home </Link>
        </li>
        <li className="  hover:text-yellow-500 cursor-pointer ">
          <Link href="/#about">¿Quiénes somos?</Link>
        </li>
        <li className=" hover:text-yellow-500 cursor-pointer">
          <Link href="/#contact">Contáctanos</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
