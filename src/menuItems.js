 const menuItems = (t) => [
  {
    key: "home",
    title: t("menu.home"),
    url: '/',
  },
  {
    key: "tanzevents",
    title: "Tanzevents", // Level 0
    submenu: [
      {key: "tanzworkshops", title: "Tanzworkshops", url:"/tanzevent/tanzworkshops"},
      {key: "performances", title: "Performances", url:"/tanzevent/performances"}
    ],
  },
  {
    key: "weiterbildung",
    title: "Weiterbildung",
    submenu: [
      { key: "aufbau-termine", title: "Aufbau + Termine", url: "/weiterbildung/aufbau-termine" },
      { key: "konzept", title: "Konzept", url: "/weiterbildung/konzept" },
      { key: "buch", title: "Buch", url: "/weiterbildung/buch" },
      { key: "lernplattform", title: "Lernplattform", url: "/weiterbildung/lernplattform" },
      { key: "anmeldung-weiterbildung", title: "Anmeldung", url: "/weiterbildung/anmeldung" },
    ],
  },
  {
    key: "uber-uns",
    title: "Über uns",
    submenu: [
      { key: "wer-wir-sind", title: "Wer wir sind", url: "/uber-uns/team" },
      { key: "testimonials", title: "Testimonials", url: "/uber-uns/testimonials" },
      { key: "team", title: "Team", url: "/uber-uns/team" },
    ],
  },
  {
    key: "kontakt",
    title: "Kontakt",
    submenu: [
      { key: "anmeldung-kontakt", title: "Anmeldung", url: "/kontakt/anmeldung" },
      { key: "mitgliedschaft", title: "Mitgliedschaft", url: "/kontakt/mitgliedschaft" },
      { key: "spenden", title: "Spenden", url: "/kontakt/spenden" },
    ],
  },
];


export default menuItems;