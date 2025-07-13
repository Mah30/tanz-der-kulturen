export const menuItems = [
  {
    title: "Tanzevents", // Level 0
    submenu: [
      {
        title: "Tanzworkshops", // Level 1
        submenu: [              // Level 2
          { title: "Tanzjams Freitag", url: "/tanzworkshops/tanzjams-freitag" },
          { title: "Salzwedel", url: "/tanzworkshops/salzwedel" },
          { title: "Usedom", url: "/tanzworkshops/usedom" },
          { title: "Berlin", url: "/tanzworkshops/berlin" },
          { title: "Hamburger Hochschule", url: "/tanzworkshops/hamburger-hochschule" },
          { title: "Hannover", url: "/tanzworkshops/hannover" },
        ]
      },
      {
        title: "Performance", // Nível 1
        submenu: [
          { title: "Hochzeitsrituale", url: "/performance/hochzeitsrituale" },
        ]
      }
    ]
  },
  {
    title: "Weiterbildung",
    submenu: [
      { title: "Aufbau + Termine", url: "/weiterbildung/aufbau-termine" },
      { title: "Konzept", url: "/weiterbildung/konzept" },
      { title: "Buch", url: "/weiterbildung/buch" },
      { title: "Lernplattform", url: "/weiterbildung/lernplattform" },
      { title: "Anmeldung", url: "/weiterbildung/anmeldung" },
    ]
  },
  {
    title: "Über uns",
    submenu: [
      { title: "Wer wir sind", url: "/uber-uns/team" },
      { title: "Testimonials", url: "/uber-uns/testimonials" },
      { title: "Team", url: "/uber-uns/team" },
    ]
  },
];
