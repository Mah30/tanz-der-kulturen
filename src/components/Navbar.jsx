/* import React, { useState } from "react"; */
import { Link } from "react-router-dom";
import DropdownTanzevent from "./DropdownTanzevent";
import DropdownWeiterbildung from "./DropdownWeiterbildung";
import DropdownUberUns from "./DropdownUberUns";


 const Navbar = () => {
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


        {/* Dropdown menu */}
        <DropdownTanzevent />
        <DropdownWeiterbildung />
        <DropdownUberUns />

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