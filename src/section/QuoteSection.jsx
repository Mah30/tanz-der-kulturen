import React from 'react';
import massa from "../assets/images/imgStartSeite/massa.png";
import stephanie from "../assets/images/imgStartSeite/stephanie.png";

//  auxiliar component to the quotes
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

const QuoteSection = ({ 
  leftQuote = "„Afrikanischer Tanz“? \nLasst uns unsere Gemeinsamkeiten feiern und \nunsere Unterschiede respektieren: \nDie Kunst, Gemeinschaft zu tanzen." ,
  rightQuote = "Was im Tanzritual geschieht, ist sowohl zutiefst persönlich als auch hochgradig politisch." 
}) => {
  
  // images constants
  const leftImage = {
    src: massa,
    alt: "Profile image of a Black man with a beard, calm expression, looking straight ahead toward the woman."
  };

  const rightImage = {
    src: stephanie,
    alt: "Profile image of a white woman, smiling, looking straight ahead toward the man."
  };

  return (
    <section className="relative w-full bg-[#E0F5F7] overflow-hidden">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden class grid justify-center">
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
          <div className='bg-white/60 backdrop-blur-sm rounded-xl w-full'>
            <QuoteBox>“{leftQuote}”</QuoteBox>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl w-full">
            <QuoteBox align="right">“{rightQuote}”</QuoteBox>
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

        {/* quotes side by side, without overlay */}
        <div className="flex items-center justify-between gap-6 w-full max-w-4xl px-4">
          <div className='bg-gray-100 rounded-xl shadow-md'>
            <QuoteBox>“{leftQuote}”</QuoteBox>
          </div>
          
          <div className="bg-gray-100 rounded-xl shadow-md">
            <QuoteBox align="right">“{rightQuote}”</QuoteBox>
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
