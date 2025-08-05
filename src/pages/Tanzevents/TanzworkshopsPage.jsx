const TanzworkshopsPage = () => {
  const workshops = [
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzjams freitags in Hamburg offen für Alle!",
      desc: "Tanzabend mit Live-Musik zum Kennenlernen mit Stephanie Bangoura und Massa Dembélé Freue Dich auf...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzworkshop mit Livemusik vom 13. – 15. Juni in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Die...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanztag und Konzert am 26. Juli 2025 auf Usedom",
      desc: "Tanzworkshop mit Livemusik Lust und Schmerz. Abends Konzert mit internationalen Musikern",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzworkshop mit Livemusik vom 15. – 17. August 2025 in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Ritueller Tanzworkshop mit westafrikanischer Livemusik am 23. August 2025 in Berlin",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura und Massa Dembélé Freue Dich auf ein...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Tanzworkshop mit Livemusik vom 12. – 14. September 2025 in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Kreativer Tanz mit afrikanischer Live-Musik am 11. Oktober 2025 in Hamburg",
      desc: "Westafrikanischer Tanz & Live Musik mit Stephanie Bangoura und Massa Dembélé Freue Dich auf ein...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzworkshop mit Livemusik vom 17. – 19. Oktober 2025 in Hamburg",
      desc: "Thema: Tanz des Stolzes mit Stephanie Bangoura, Samba Diarra und Massa Dembele Der Stolz lässt das...",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Tanzworkshop mit Livemusik vom 14. – 16. November 2025 in Hamburg",
      desc: "Thema: Tanz der Schlange mit Stephanie Bangoura, Samba Diarra und Massa Dembele Im Tanz der...",
    },
  ];

  return (
    <main>
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

        <div className="w-full flex flex-col">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center md:items-start`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={workshop.img}
                  alt={workshop.title}
                  className="w-full object-contain object-center"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-2xl font-semibold mb-4 text-center">
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
