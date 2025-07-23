import React from "react";


const EventCard = ({day, month,title, description, workshopLeitung}) => {

    return ( 
      <div className="bg-white shadow-md p-6 rounded-md text-center hover:shadow-lg transition">

      {/* Data */}
      <div className="flex flex-col items-center justify-center mb-4">
        <span className="text-5xl font-bold text-green-600 leading-tight">{day}</span>
        <span className="text-1 uppercase text-gray-500">{month}</span>
      </div>

      {/* Título e descrição */}
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 overflow-hidden text-ellipsis line-clamp-2">{description}</p>
      <p className="text-gray-400 text-xs italic">{workshopLeitung}</p>
    </div>
     );
};
 
export default EventCard;



/* import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
      <p className="text-sm text-gray-500">{event.date}</p>
      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
      <p className="text-gray-700">{event.description}</p>
      <p className="text-green-700 font-semibold mt-2">{event.price}</p>
    </div>
  );
}; */

/* import React from "react";

const EventCard = ({day, month,title, description, workshopLeitung}) => {

    return ( 
        <div className="flex w-full max-w-3xl bg-white shadow-md mb-4">
        
        <div className="bg-white shadow-md p-15 rounded-md text-center text-white flex flex-col items-center justify-center w-20">
          <span className="text-2xl font-bold">{day}</span>
          <span className="text-sm uppercase">{month}</span>
        </div>
  
      
        <div className="flex-1 p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{description}</p>
          <p className="text-sm text-gray-500">{workshopLeitung}</p>
          <div className="flex gap-4 mt-2 text-sm">
  
          </div>
        </div>
      </div>  
     );
};
export default EventCard; */

