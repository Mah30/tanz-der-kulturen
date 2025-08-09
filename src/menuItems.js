export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: "Tanzevents", // Level 0
    submenu: [
      {title: "Tanzworkshops", url:"/tanzevent/tanzworkshops"},
      {title: "Performances", url:"/tanzevent/performances"}
    ]
  },
  {
    title: "Weiterbildung",
    submenu: [
      { title: "Aufbau + Termine", url: "/weiterbildung/aufbau-termine"},
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
  {
    title: "Kontakt",
    submenu: [
      { title: "Anmeldung", url: "/anmeldung" },
      { title: "Mitgliedschaft", url: "mitgliedschaft" },
      { title: "Spenden", url: "/spenden" },
    ]  
  },
];
