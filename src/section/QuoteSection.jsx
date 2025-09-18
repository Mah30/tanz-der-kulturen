import React from "react";
import massa from "../assets/images/imgStartSeite/massa.png";
import stephanie from "../assets/images/imgStartSeite/stephanie.png";
import { useTranslation } from "react-i18next";

// auxiliar para as aspas
const QuoteBox = ({ children, align = "left" }) => (
  <div
    className={`
      shadow-md rounded-xl p-4 w-full transform transition duration-300 
      hover:scale-105 hover:shadow-lg
      ${align === "right" ? "text-right" : ""}
    `}
  >
    <p className="whitespace-pre-line text-gray-700 italic leading-relaxed">
      {children}
    </p>
  </div>
);

const QuoteSection = ({ leftQuote, rightQuote }) => {
  const { t } = useTranslation("common"); // <- precisa estar no topo do componente

  // defaults derivados via i18n (se não vier prop, usa a tradução)
  const resolvedLeftQuote = leftQuote ?? t("homepage.quotes.left");
  const resolvedRightQuote = rightQuote ?? t("homepage.quotes.right");

  // images with translate alt 
  const leftImage = {
    src: massa,
    alt: t("homepage.quotes.leftImageAlt"),
  };

  const rightImage = {
    src: stephanie,
    alt: t("homepage.quotes.rightImageAlt"),
  };

  return (
    <section className="relative w-full bg-[#E0F5F7] overflow-hidden">
      {/* ===== MOBILE ===== */}
      {/* (corrigido: removido 'class' sobrando na className) */}
      <div className="md:hidden grid justify-center">
        {/* left image */}
        <img
          src={leftImage.src}
          alt={leftImage.alt}
          className="absolute left-0 object-contain h-full w-auto max-w-[47.6vw]"
        />
        {/* right image */}
        <img
          src={rightImage.src}
          alt={rightImage.alt}
          className="absolute right-0 object-contain h-full w-auto max-w-[43vw]"
        />

        {/* quotes overlay on mobile */}
        <div className="py-4 flex flex-col gap-4 items-center max-w-sm px-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl w-full">
            <QuoteBox>“{resolvedLeftQuote}”</QuoteBox>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl w-full">
            <QuoteBox align="right">“{resolvedRightQuote}”</QuoteBox>
          </div>
        </div>
      </div>

      {/* ===== WEB/DESKTOP ===== */}
      <div className="hidden md:flex items-center justify-between py-0">
        {/* left image */}
        <img
          src={leftImage.src}
          alt={leftImage.alt}
          className="m-0 object-cover h-auto w-40 lg:w-48 shrink-0"
        />

        {/* quotes without overlay */}
        <div className="flex items-center justify-between gap-6 w-full max-w-4xl px-4">
          <div className="bg-gray-100 rounded-xl shadow-md">
            <QuoteBox>“{resolvedLeftQuote}”</QuoteBox>
          </div>

          <div className="bg-gray-100 rounded-xl shadow-md">
            <QuoteBox align="right">“{resolvedRightQuote}”</QuoteBox>
          </div>
        </div>

        {/* right image */}
        <img
          src={rightImage.src}
          alt={rightImage.alt}
          className="m-0 object-cover h-auto w-36 lg:w-44 shrink-0"
        />
      </div>
    </section>
  );
};

export default QuoteSection;
