// EventSection.jsx
import React from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const events = [
  { id: 1, day: "12" },
  { id: 2, day: "19" },
  { id: 3, day: "10" }
];

function EventSection() {
  // rendering common + events
  const { t } = useTranslation(["events", "common"]); 

  return (
    <section className="py-12 px-4 bg-gray-100">
     
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        {t("calendar.heading", { ns: "events" })}
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {events.map(({ id, day }) => (
          <EventCard
            key={id}
            day={day}
            // // chaves por id no arquivo events.json
            month={t(`list.${id}.month`, { ns: "events" })}
            title={t(`list.${id}.title`, { ns: "events" })}
            description={t(`list.${id}.description`, { ns: "events" })}
            workshopLeitung={t(`list.${id}.workshopLeitung`, { ns: "events" })}
          />
        ))}
      </div>

      {/* // botão padrão verde que você definiu */}
      <div className="mt-10 flex justify-center md:justify-end">
        <Link
          to="/tanzevent/tanzworkshops"
          className="rounded-lg bg-teal-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-200"
          aria-label={t("calendar.moreInfoAria", { ns: "events" })}
        >
          {t("moreInfo", { ns: "common" })}
        </Link>
      </div>
    </section>
  );
}

export default EventSection;
