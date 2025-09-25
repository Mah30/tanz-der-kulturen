const Hochschule11okt = () => {
  return (
    <main className="mt-8">
      {/* Hero-Bild mit Overlay */}
      <section className="relative w-full">
        <img
          src="/src/assets/images/imgTanzworkshopPage/test.jpg"
          alt="Ritueller Tanz-Workshop Hochschule"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Ritueller Tanz-Workshop an der Hochschule am 11. Oktober 2025
          </h1>
        </div>
      </section>

      {/* Einführung */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Mit Stephanie Bangoura und Massa Dembélé
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          Freue Dich auf ein Tanzerlebnis, in dem Du von der Gruppe getragen
          wirst. Erlebe improvisierten Tanz im Dialog mit der Live-Musik. Bei
          diesem Erlebnis kannst Du Dich spüren, ausdrücken und loslassen. Die
          Rituelle Tanzpädagogik zeigt dir, wie Tanz zu einer heilenden
          Erfahrung wird.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Du lernst einfache Bewegungen aus dem westafrikanischen Tanz, mit
          denen Du mehr in Deine Aufrichtung und Deinen ganz eigenen Ausdruck
          kommst. Live gespielte Rhythmen geben Dir Erdung und Halt.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Komm in Deine Kraft mit einem schonenden und effektiven
          Körpertraining. Lerne eine gesunde Tanztechnik für jeden Körper. Wir
          verstehen Tanz als gemeinschaftsbildendes und empowerndes Ritual für
          alle Beteiligten. Ritual – weil alles eine Frage des Fokus und der
          inneren Bilder ist.
        </p>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 text-lg">
          „Zusammen. Ganz bei Dir. Animist Tradition for Today! Radikal
          undogmatisch, transkulturell und post-spirituell. Kein Programm, kein
          Hype, keine Show, sondern echte Begegnungen im geschützten Raum.
          Zutiefst persönlich als auch hochgradig politisch.“
        </blockquote>
      </section>

      {/* Über Stephanie */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Über die Leitung</h2>
        <p className="leading-relaxed text-justify">
          Die Tänzerin <strong>Stephanie Bangoura</strong> ist Künstlerische
          Leitung des Vereins Tanz der Kulturen, des Instituts für Rituelle
          Tanzpädagogik und deren Performance SnakeAwake. Sie lebte über 25
          Jahre in den afrikanischen Kulturhauptstädten Dakar (Senegal),
          Salvador (Brasilien), Havanna, Paris und New York, um afrikanische
          Tanzformen zu studieren und zu performen.
        </p>
        <p className="leading-relaxed text-justify">
          Während ihres Masterstudienganges der Tanz- und Theaterwissenschaften
          an der staatlichen Universität von Salvador in Brasilien fundierte sie
          wissenschaftlich den animistisch-humanistischen Ansatz ihrer späteren
          Rituellen Tanzpädagogik. Als Capoeirista diente ihr die
          afro-brasilianische Resistenzbewegung Capoeira als Vorbild, wie
          afrikanische Tanzsprachen in einen zeitgenössischen Kontext sinnhaft
          übersetzt werden können.
        </p>
        <p className="leading-relaxed text-justify">
          Ausbildungen in Yoga, Qi-Gong, Pilates, Gyrokinesis, TaKeTiNa,
          Psychomotorik, Musiktherapie, Rhythmik, Stimmbildung und vor allem der
          Gestalt- und Tanztherapie führten zum tieferen Verständnis, wie
          Tanzrituale auf den Körper und den Menschen wirken.
        </p>
        <p className="leading-relaxed text-justify">
          In dem performativen Ansatz der Rituellen Tanzpädagogik vereinigt sich
          die Essenz ihrer gesamten Forschung und Lehre, welche sie als Autorin
          im Lehrbuch „Rituelle Tanzpädagogik – die Kunst, Gemeinschaft zu
          tanzen“ zusammengefasst hat.
        </p>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 text-lg">
          „Im Ritual zu tanzen, bedeutet für mich, meinen Körper zu befreien, zu
          stärken und mich an größere Energiekreisläufe anzuschließen.“
        </blockquote>
      </section>

      {/* Veranstaltungsinfos */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <strong>Termin:</strong> Samstag, 11. Oktober 2025, 15 – 18 Uhr
              </li>
              <li>
                <strong>Ort:</strong> Hochschulsport, Gymnastikhalle, Turmweg 2,
                20148 Hamburg
              </li>
              <li>
                <strong>Kosten:</strong> Studierende 40€ / Beschäftigte 50€ /
                Gäste 60€
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Pädagog*innen und Tanzausbildungsschüler*innen können zu einem
              vergünstigten Preis (40€) teilnehmen. Bitte nach der Buchung als
              Gast eine E-Mail mit entsprechendem Nachweis schicken.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Anmeldung</h3>
            <p className="text-lg">An Stephanie Bangoura</p>
            <p className="text-lg">📧 info@tanz-der-kulturen.de</p>
            <p className="text-lg">📱 Tel./WhatsApp 015152013306</p>
            <p className="mt-4 text-sm text-gray-600">
              Bitte beachte die Stornierungshinweise in den AGB.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hochschule11okt;
