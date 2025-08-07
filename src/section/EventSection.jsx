import React from "react";
import EventCard from "../components/EventCard";


const dummyEvents = [
  {
    id: 1,
    day: "12",
    month:"August",
    title: "Tanztag und Konzert",
    description: "Tanz der Lust und des Schmerzes ",
    workshopLeitung:"Stephanie Bangoura, Massa Dembélé & Guests",
  },
  {
    id: 2,
    day: "19",
    month:"August",
    title: "Creative Movement",
    description: "Training Course innovative methods with dance",
    workshopLeitung:"Stephanie Bangoura und Massa Dembele",
  },
  {
    id: 3,
    day: "10",
    month:"September",
    title: "Live Music",
    description: "Music and Performance with artists ",
    workshopLeitung:"Stephanie Bangoura",
  },
];

const EventSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Veranstaltungskalender</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {dummyEvents.map(({ id, day, month, title, description, workshopLeitung }) => (
            <EventCard 
            key={id} 
            day={day}
            month={month}
            title={title}
            description={description}
            workshopLeitung={workshopLeitung} 
            />
        ))}
      </div>
    </section>
  );
};

export default EventSection;