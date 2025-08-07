
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from '../../src/assets/images/imgStartSeite/img1.jpg'
import img2 from '../../src/assets/images/imgStartSeite/img2.jpg'
import img3 from '../../src/assets/images/imgStartSeite/img3.jpg'


const images = [
  img1, img2, img3
];


const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Change image automatically after 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); 
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="relative w-full h-[570px] overflow-hidden">

      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full pb-12 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover z-0"
          />

          {/* Overlay to contraste */}
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          {/* 🔹 Texto centralizado acima do overlay */}
          <div className="absolute z-20 inset-0 flex items-center justify-start">
      <div className="ml-25 max-w-[600px]">
        <h2
         className="text-[#FAF070] text-5xl md:text-7xl font-extrabold leading-tight">
        Welcome to <br /> Tanz der Kulturen
        </h2>
      </div>
    </div>

        </div>
      ))}

      {/* Buttons Left - Right */}
      <button
        onClick={prevSlide}
        className="absolute z-30 cursor-pointer left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-30 cursor-pointer right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores */}
      <div className="absolute z-30 bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === current ? "bg-gray-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;

