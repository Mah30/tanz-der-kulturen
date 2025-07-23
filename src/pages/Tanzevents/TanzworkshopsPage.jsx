const TanzworkshopsPage = () => {
  const workshops = [
    {
      img: "/src/assets/images/imgTanzworkshopPage/afrika_tanztherapie_hamburg4.jpg",
      title: "Tanzjams freitags in Hamburg offen für Alle!",
      desc: "Tanzabend mit Live-Musik zum Kennenlernen mit Stephanie Bangoura und Massa Dembélé Freue Dich auf...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/mega_Lisa_afro.jpg",
      title: "Tanzworkshop mit Livemusik vom 13. – 15. Juni in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Die...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Tanzworkshop-02.jpg",
      title: "Tanztag und Konzert am 26. Juli 2025 auf Usedom",
      desc: "Tanzworkshop mit Livemusik Lust und Schmerz. Abends Konzert mit internationalen Musikern",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Tanzworkshop-04.jpg",
      title: "Tanzworkshop mit Livemusik vom 15. – 17. August 2025 in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Tanzworkshop-08.jpeg",
      title:
        "Ritueller Tanzworkshop mit westafrikanischer Livemusik am 23. August 2025 in Berlin",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura und Massa Dembélé Freue Dich auf ein...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Tanzworkshop_10.png",
      title:
        "Tanzworkshop mit Livemusik vom 12. – 14. September 2025 in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/webseite!-mega_trommel_tanz_sw.jpg",
      title:
        "Kreativer Tanz mit afrikanischer Live-Musik am 11. Oktober 2025 in Hamburg",
      desc: "Westafrikanischer Tanz & Live Musik mit Stephanie Bangoura und Massa Dembélé Freue Dich auf ein...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Tanzworkshops-03.jpg",
      title: "Tanzworkshop mit Livemusik vom 17. – 19. Oktober 2025 in Hamburg",
      desc: "Thema: Tanz des Stolzes mit Stephanie Bangoura, Samba Diarra und Massa Dembele Der Stolz lässt das...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/Mega_stephanie_kick_gruppe.jpg",
      title:
        "Tanzworkshop mit Livemusik vom 14. – 16. November 2025 in Hamburg",
      desc: "Thema: Tanz der Schlange mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
  ];

  return (
    <main className="px-4 py-8">
      <section className="w-4/5 mx-auto text-center">
        <h1 className="text-2xl font-bold">Tanz-Workshops</h1>
        <h3 className="text-lg font-medium">
          Lerne Dich tanzend mit Live-Musik kennen!
        </h3>
        <p className="py-2 leading-relaxed">
          Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe und der
          kraftvollen Livemusik getragen wirst. In diesem Live-Erlebnis kannst
          Du Dich spüren, ausdrücken und loslassen. Du lernst einfache
          Bewegungen aus dem westafrikanischen Tanz, mit denen Du mehr in Deine
          Erdung und Aufrichtung kommst.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Unsere kommenden Rituellen Tanz-Workshops mit Live-Musik
        </h2>

        <div className="w-full flex flex-col gap-16">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center md:items-start gap-6`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={workshop.img}
                  alt={workshop.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h3 className="text-2xl font-semibold mb-4">
                  {workshop.title}
                </h3>
                <p className="text-base">{workshop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TanzworkshopsPage;
