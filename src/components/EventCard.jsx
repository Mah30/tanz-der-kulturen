import React from "react";

const EventCard = ({ day, month, title, description, workshopLeitung }) => {
  return (
    <article className="bg-white shadow-md p-6 rounded-md text-center hover:shadow-lg transition flex flex-col justify-between h-full">

      {/* Cabeçalho com data */}
      <header className="flex flex-col items-center justify-center mb-4">
        <span className="text-5xl font-bold text-green-600 leading-tight">{day}</span>
        <span className="text-sm uppercase text-gray-500">{month}</span>
      </header>

      {/* Conteúdo do card */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      </div>

      {/* Rodapé com workshop Leitung */}
      <footer className="text-gray-400 text-xs italic mt-4">
        {workshopLeitung}
      </footer>
    </article>
  );
};

export default EventCard;


