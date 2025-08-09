import React from "react";

const EventCard = ({ day, month, title, description, workshopLeitung }) => {
  return (
    <article className="bg-white shadow-md p-6 rounded-md text-center hover:shadow-lg transition flex flex-col justify-between h-full">

       {/* Header with date */}
      <header className="flex flex-col items-center justify-center mb-4">
        <span className="text-3xl font-bold md:text-5xl text-[#068d74] leading-tight">{day}</span>
        <span className="text-sm md:text-xl uppercase text-gray-700">{month}</span>
      </header>

      {/* Card content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      </div>

      {/* footer with workshop Leitung */}
      <footer className="text-gray-400 text-xs md:text-sm italic mt-2 md:mt-4">
        {workshopLeitung}
      </footer>
    </article>
  );
};

export default EventCard;


