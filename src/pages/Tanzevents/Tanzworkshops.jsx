import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { eventsAPI } from "../../services/api";

const Tanzworkshops = () => {
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
    <main>
      <Header />
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-2xl font-bold">Tanz-Workshops</h1>
        <h3 className="text-lg font-medium">
          Lerne Dich tanzend mit Live-Musik kennen!
        </h3>
        <p className="py-2 leading-relaxed">
          Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe und der
          kraftvollen Livemusik getragen wirst...
        </p>
      </section>

      <section>
        <h2 className="text-center text-2xl font-semibold mb-10">
          Unsere kommenden Rituellen Tanz-Workshops mit Live-Musik
        </h2>

        {loading ? (
          <div className="text-center">Lade Events...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="w-full flex flex-col">
            {events.length === 0 ? (
              <div className="text-center text-gray-500">
                Keine Events gefunden.
              </div>
            ) : (
              events.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center md:items-start`}
                >
                  <div className="w-full md:w-1/2 p-4 mx-auto">
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                      {event.name}
                    </h3>
                    <p className="text-base mb-2">
                      <b>Datum:</b> {event.date} <br />
                      <b>Ort:</b> {event.location} <br />
                      <b>Teilnehmer:</b> {event.attendees} <br />
                      <b>Status:</b> {event.status}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Tanzworkshops;
