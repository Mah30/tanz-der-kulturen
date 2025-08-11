const TanzworkshopsPage = () => {
  const workshops = [
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzjams freitags in Hamburg offen für Alle!",
      desc: "Tanzabend mit Live-Musik zum Kennenlernen mit Stephanie Bangoura und Massa Dembélé. Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe und der kraftvollen Livemusik getragen wirst. In diesem Live-Erlebnis kannst Du Dich spüren, ausdrücken und loslassen. Du lernst einfache Bewegungen aus dem westafrikanischen Tanz, mit denen Du mehr in Deine Erdung und Aufrichtung kommst. Alle Körper und tänzerischen Erfahrungslevel sind willkommen.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzworkshop mit Livemusik vom 15. - 17. August in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura und Massa Dembelé. Im Tanz der Befreiung finden wir einen Zugang zu der Kraft unserer Aggressionen. Aggressionen helfen uns, Entscheidungen zu fällen und nicht gewollte Verbindungen abzuschneiden. Der Mythos der Befreiung lehrt uns, unserer Intuition zu folgen. Folgen wir ihr, braucht es keine Diskussion, keine Rechtfertigungen oder Erklärungen. Im Tanz der Befreiung lernen wir, wie der Wind zu verschwinden, aufzutauchen und selbstbestimmt unseren ureigenen Weg einzuschlagen. Es wird aufgezeigt, wie die Prinzipien von animistischen Tanztraditionen zur Heilung und Gruppenbildung sinnvoll in jeden Bewegungsunterricht übersetzt werden können. Alle Körper und tänzerischen Erfahrungslevel sind willkommen.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Tanzworkshop mit Livemusik vom 12. – 14. September 2025 in Hamburg",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura und Massa Dembelé. Im Tanz der Befreiung finden wir einen Zugang zu der Kraft unserer Aggressionen. Aggressionen helfen uns, Entscheidungen zu fällen und nicht gewollte Verbindungen abzuschneiden. Der Mythos der Befreiung lehrt uns, unserer Intuition zu folgen. Folgen wir ihr, braucht es keine Diskussion, keine Rechtfertigungen oder Erklärungen. Im Tanz der Befreiung lernen wir, wie der Wind zu verschwinden, aufzutauchen und selbstbestimmt unseren ureigenen Weg einzuschlagen. Es wird aufgezeigt, wie die Prinzipien von animistischen Tanztraditionen zur Heilung und Gruppenbildung sinnvoll in jeden Bewegungsunterricht übersetzt werden können. Alle Körper und tänzerischen Erfahrungslevel sind willkommen.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Kreativer Tanz mit afrikanischer Live-Musik am 11. Oktober 2025 in Hamburg",
      desc: "mit Stephanie Bangoura und Massa Dembélé. Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe getragen wirst. Erlebe improvisierten Tanz im Dialog mit der Live-Musik. Bei diesem Erlebnis kannst Du Dich spüren, ausdrücken und loslassen. Die Rituelle Tanzpädagogik zeigt dir, wie Tanz zu einer heilenden Erfahrung wird.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title: "Tanzworkshop mit Livemusik vom 17. – 19. Oktober 2025 in Hamburg",
      desc: "Thema: Tanz des Stolzes mit Stephanie Bangoura und Massa Dembelé. Der Stolz lässt das Ich und den eigenen Raum deutlich werden. Im Tanz des Stolzes werden Selbstbehauptung und Grenzen erkämpft, verteidigt und gehalten. Ist der Stolz mit dem Herzen und der eigenen Klarheit für Grenzen verbunden, entstehen Ich-Stabilität, Autonomie und Strahlkraft. Alle Körper und tänzerischen Erfahrungslevel sind willkommen.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Snake Awake mit Billie Konate Workshop in Hamburg – 31 Oktober – November 01 2025",
      desc: "Thema: Tanz der Befreiung mit Stephanie Bangoura und Massa Dembelé. Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe und der kraftvollen Live- Musik getragen wirst. In diesem Live-Erlebnis kannst Du Dich spüren, ausdrücken und loslassen. Du lernst einfache Bewegungen aus dem westafrikanischen Tanz, mit denen Du mehr in Deine Erdung und Aufrichtung kommst. Alle Körper und tänzerischen Erfahrungslevel sind willkommen.",
    },
    {
      img: "/src/assets/images/imgTanzworkshopPage/test.jpg",
      title:
        "Tanzworkshop mit Livemusik vom 14. - 16. November 2025 in Hamburg",
      desc: "Thema: Tanz der Schlange mit Stephanie Bangoura und Massa Dembelé. Im Tanz der Schlange verbinden wir uns mit dem zentralen Schöpfungsmythos vieler indigener Traditionen: Die Schlange langweilte sich im Himmel, weil sie keinen Widerstand erfuhr. Deshalb stieg sie eines Tages als Regenbogen zur Erde hinab. So entstand die Verbindung zwischen Himmel und Erde, zwischen geistiger und materieller Welt. Im permanenten Schlängeln verbindet und versöhnt die Schlange die Gegensätze. Es heißt, seitdem sind Menschen und Gottheiten für immer Eins. Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe und der kraftvollen Livemusik getragen wirst. In diesem Live-Erlebnis kannst Du Dich spüren, ausdrücken und loslassen. Du lernst einfache Bewegungen aus dem westafrikanischen Tanz, mit denen Du mehr in Deine Erdung und Aufrichtung kommst.",
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
