import { Link } from "react-router-dom";
import { useState } from "react"; // <-- adiciona esse import
import DropdownMenu from "./Dropdowns/DropdownMenu";

const tanzeventLinks = [
  { name: "Tanzworkshops", path: "/tanzevent/tanzworkshops" },
  { name: "Performance", path: "/tanzevent/performance" },
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
    <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">Logo</Link>
      </div>

      <div className="flex space-x-6 items-center relative">
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
      </div>
    </nav>
  );
}

export default Navbar;