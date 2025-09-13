const menuItems = (t) => [
  {
    title: t("menu.home"),
    url: "/",
  },
  {
    title: t("menu.tanzevents"),
    submenu: [
      { title: t("menu.tanzworkshops"), url: "/tanzevent/tanzworkshops" },
      { title: t("menu.performances"), url: "/tanzevent/performances" },
    ],
  },
  {
    title: t("menu.further_education"),
    submenu: [
      { title: t("menu.schedule"), url: "/weiterbildung/aufbau-termine" },
      { title: t("menu.concept"), url: "/weiterbildung/konzept" },
      { title: t("menu.book"), url: "/weiterbildung/buch" },
      {
        title: t("menu.learning_platform"),
        url: "/weiterbildung/lernplattform",
      },
      { title: t("menu.registration"), url: "/weiterbildung/anmeldung" },
    ],
  },
  {
    title: t("menu.about_us"),
    submenu: [
      { title: t("menu.who_we_are"), url: "/uber-uns/team" },
      { title: t("menu.testimonials"), url: "/uber-uns/testimonials" },
      { title: t("menu.team"), url: "/uber-uns/team" },
    ],
  },
  {
    title: t("menu.contact"),
    submenu: [
      { title: t("menu.registration"), url: "/anmeldung" },
      { title: t("menu.membership"), url: "mitgliedschaft" },
      { title: t("menu.donate"), url: "/spenden" },
    ],
  },
];

export default menuItems;
