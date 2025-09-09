const menuItems = (t) => [
  {
    key: "home",
    title: t("menu.home"),
    url: "/",
  },
  {
    key: "tanzevents",
    title: t("menu.tanzevents"),
    submenu: [
      {
        key: "tanzworkshops",
        title: t("menu.tanzworkshops"),
        url: "/tanzevent/tanzworkshops",
      },
      {
        key: "performances",
        title: t("menu.performances"),
        url: "/tanzevent/performances",
      },
      {
        key: "tanzreise",
        title: t("menu.tanzreise"),
        url: "/tanzevent/tanzreise",
      },
    ],
  },
  {
    key: "weiterbildung",
    title: t("menu.weiterbildung"),
    submenu: [
      {
        key: "aufbau-termine",
        title: t("menu.aufbau-termine"),
        url: "/weiterbildung/aufbau-termine",
      },
      {
        key: "konzept",
        title: t("menu.konzept"),
        url: "/weiterbildung/konzept",
      },
      {
        key: "buch",
        title: t("menu.buch"),
        url: "/weiterbildung/buch",
      },
      {
        key: "lernplattform",
        title: t("menu.lernplattform"),
        url: "/weiterbildung/lernplattform",
      },
      {
        key: "anmeldung-weiterbildung",
        title: t("menu.anmeldung-weiterbildung"),
        url: "/weiterbildung/anmeldung",
      },
    ],
  },
  {
    key: "uber-uns",
    title: t("menu.uber-uns"),
    submenu: [
      {
        key: "unser-werte",
        title: t("menu.unser-werte"),
        url: "/uber-uns/unser-werte",
      },
      {
        key: "unser-team",
        title: t("menu.unser-team"),
        url: "/uber-uns/unser-team",
      },
      {
        key: "vergangene-projekte",
        title: t("menu.vergangene-projekte"),
        url: "/uber-uns/vergangene-projekte",
      },
      {
        key: "testimonials",
        title: t("menu.testimonials"),
        url: "/uber-uns/testimonials",
      },
      
    ],
  },
  {
    key: "kontakt",
    title: t("menu.kontakt"),
    submenu: [
      {
        key: "so-erreichst-du-uns",
        title: t("menu.so-erreichst-du-uns"),
        url: "/kontakt/so-erreichst-du-uns",
      },
      {
        key: "mitglied-werden",
        title: t("menu.mitglied-werden"),
        url: "/kontakt/mitglied-werden",
      },
      {
        key: "spenden",
        title: t("menu.spenden"),
        url: "/kontakt/spenden",
      },
      {
        key: "open-call",
        title: t("menu.open-call"),
        url: "/kontakt/open-call",
      },
      {
        key: "kooperation",
        title: t("menu.kooperation"),
        url: "/kontakt/kooperation",
      },
    ],
  },
];

export default menuItems;
