import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { eventsAPI } from "../services/api";

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventsAPI.getAll();
        console.log("Events API response:", response);
        setEvents(response.data.data || []);
      } catch (err) {
        setError("Fehler beim Laden der Events.");
        console.error("Events API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text- text-center mb-8">
        Veranstaltungskalender
      </h2>

      {loading ? (
        <div className="text-center">Lade Events...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {events.length === 0 ? (
            <div className="text-center text-gray-500">
              Keine Events gefunden.
            </div>
          ) : (
            events
              .slice(0, 3)
              .map((event) => (
                <EventCard
                  key={event.id}
                  day={
                    event.date
                      ? new Date(
                          new Date(event.date).getTime() + 24 * 60 * 60 * 1000
                        )
                          .getDate()
                          .toString()
                          .padStart(2, "0")
                      : ""
                  }
                  month={
                    event.date
                      ? new Date(
                          new Date(event.date).getTime() + 24 * 60 * 60 * 1000
                        ).toLocaleString("de-DE", { month: "long" })
                      : ""
                  }
                  title={event.name}
                  description={event.description || event.status || ""}
                  workshopLeitung={event.location}
                />
              ))
          )}
        </div>
      )}

      {/* Button */}
      <div className="mt-10 flex justify-center md:justify-end">
        <Link
          to="/pages/tanzevents/tanzworkshops"
          className="rounded-lg bg-teal-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-200"
          aria-label="Mehr Info zu allen Veranstaltungen"
        >
          Mehr Info
        </Link>
      </div>
    </section>
  );
};

export default EventSection;
