import { Link } from "react-router-dom";
import { useState } from "react"; // <-- adiciona esse import
import DropdownMenu from "./Dropdowns/DropdownMenu";
import ToggleTheme from "./ToggleTheme/ToggleTheme";


const tanzeventLinks = [
  
  {
    name: "Tanzworkshops",
    subMenu: [
      { name: "Tanzjams Freitag", path: "/tanzworkshops/tanzjams-freitag" },
      { name: "Salzwedel", path: "/tanzworkshops/salzwedel" },
      { name: "Usedom", path: "/tanzworkshops/usedom" },
      { name: "Berlin", path: "/tanzworkshops/berlin" },
      { name: "Hamburger Hochschule", path: "/tanzworkshops/hamburger-hochschule" },
      { name: "Hannover", path: "/tanzworkshops/hannover" },
    ]
  },
  {
    name: "Performance",
    subMenu: [
      { name: "Hochzeitsrituale", path: "/performance/hochzeitsrituale" },
    ]
  }
    
];

const weiterbildungLinks = [
  { name: "Aufbau + Termine", path: "/weiterbildung/aufbau-termine" },
  { name: "Konzept", path: "/weiterbildung/konzept" },
  { name: "Buch", path: "/weiterbildung/buch" },
  { name: "Lernplattform", path: "/weiterbildung/lernplattform" },
  { name: "Anmeldung", path: "/weiterbildung/anmeldung" },
];

const uberUnsLinks = [
  { name: "Wer wir sind", path: "/uber-uns/team" },
  { name: "Testimonials", path: "/uber-uns/testimonials" },
  { name: "Team", path: "/uber-uns/team" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null); 

  const handleOpen = (menuName) => {
    setOpenMenu(prev => (prev === menuName ? null : menuName));
  };


  return (

      <nav className="flex space-x-6 items-center relative">
        <Link
          to="/"
          className="text-gray-700 hover:text-teal-600 transition duration-200"
        >
          Home
        </Link>

        <DropdownMenu
          section="Tanzevents"
          items={tanzeventLinks}
          isOpen={openMenu === "tanz"}
          onOpen={() => handleOpen("tanz")}
          onClose={() => setOpenMenu(null)}
        />

        <DropdownMenu
          section="Weiterbildung"
          items={weiterbildungLinks}
          isOpen={openMenu === "weiter"}
          onOpen={() => handleOpen("weiter")}
          onClose={() => setOpenMenu(null)}
        />

        <DropdownMenu
          section="Über Uns"
          items={uberUnsLinks}
          isOpen={openMenu === "ueber"}
          onOpen={() => handleOpen("ueber")}
          onClose={() => setOpenMenu(null)}
        />
        
        <Link
          to="/kontakt"
          className="text-gray-700 hover:text-teal-600 transition duration-200"
        >
          Kontakt
        </Link>
    </nav>
  );
}

export default Navbar;