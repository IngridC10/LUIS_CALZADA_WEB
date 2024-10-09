"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Minivan from "@/images/Minivan.jpg";
import Text from "@/images/Text.png";

const LogoSection = () => {
  const typingEffectRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = [
      { text: "una", readTime: 2500, deleteTime: 1000 },
      {
        text: "empresa de servicio de transporte",
        readTime: 4000,
        deleteTime: 1000,
      },
    ];
    let wordIndex = 0;

    function changeWord() {
      const { text, readTime, deleteTime } = words[wordIndex];
      const typingEffect = typingEffectRef.current;

      if (typingEffect) {
        typingEffect.classList.remove("word-una", "word-empresa");

        if (wordIndex === 0) {
          typingEffect.classList.add("word-una");
        } else if (wordIndex === 1) {
          typingEffect.classList.add("word-empresa");
        }

        typingEffect.textContent = "";
        typingEffect.style.animation = "none";

        setTimeout(() => {
          typingEffect.textContent = text;

          typingEffect.style.animation = `typing 3s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;
        }, 30);

        setTimeout(() => {
          typingEffect.style.animation = `delete 1s steps(${text.length}, end), blink-caret 0.75s steps(2, end)`;
        }, readTime);

        wordIndex = (wordIndex + 1) % words.length;

        setTimeout(changeWord, readTime + deleteTime - 1000);
      }
    }

    changeWord();

    return () => {
      const currentRef = typingEffectRef.current;
      if (currentRef) {
        currentRef.style.animation = "none";
      }
    };
  }, []);

  return (
    <div className="logo-section flex flex-col items-center xs:h-[600px] sm:h-[610px] md:h-[601px] xxl:h-[512px] justify-center m-auto">
      <Image
        src={Minivan}
        alt="logo"
        width={240}
        height={150}
        className="xs:w-[145px] md:w-[220px] xxl:w-[240px]"
      />
      <Image
        src={Text}
        alt="logo"
        width={280}
        className="ml-4 w-[339px] mt-5 xs:w-[200px] md:w-[249px] xxl:w-[280px]"
      />

      <h2 className="2xl:text-[50px] text-[17px] text-black mt-14 flex justify-center">
        Somos
        <span className="typing-effect" ref={typingEffectRef}></span>
      </h2>
    </div>
  );
};

export default LogoSection;
