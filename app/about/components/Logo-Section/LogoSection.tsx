"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LogoCar from "@/images/LogoCar.png";
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
          if (typingEffect) {
            typingEffect.textContent = text;
            typingEffect.style.animation = `typing 3s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;
          }
        }, 30);

        setTimeout(() => {
          if (typingEffect) {
            typingEffect.style.animation = `delete 1s steps(${text.length}, end), blink-caret 0.75s steps(2, end)`;
          }
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
    <div className="logo-section bg-white flex flex-col items-center xs:h-[517px] sm:h-[610px] md:h-[623px] xxl:h-[630px] justify-center m-auto">
      <Image
        src={LogoCar}
        alt="logo"
        width={240}
        height={150}
        className="xs:w-[189px] md:w-[220px] xxl:w-[240px]"
      />
      <Image
        src={Text}
        alt="logo"
        width={280}
        className="w-[339px]  xs:w-[320px] md:w-[330px] xxl:w-[360px]"
      />

      <h2 className="2xl:text-[50px] text-[17px] text-black mt-14 flex justify-center">
        Somos
        <span className="typing-effect" ref={typingEffectRef}></span>
      </h2>
    </div>
  );
};

export default LogoSection;
