import React, { useState } from "react";


const Navbar = () => {
    /* const [menuOpen, setMenu] = useState(false); */
    const [tanzOpen, setTanzOpen] = useState(false);

  return (
    <nav aria-label="Hauptnavigation" className=" px-4 py-3 "> {/* hidden md:flex space-x-8 */}

        <ul className="flex space-x-6">

        {/* Ebene 1 - Tanzevent with submenu */} {/* QUE SINIFICA V? */}
            <li className="relative">
                <button 
                aria-haspopup="true"
                aria-expanded={tanzOpen}
                onClick={() => setTanzOpen(v => !v)}
                className="text-red-600 font-bold hover:text-teal-500 focus-outline-none"
                > Tanzevents 
                </button>
                {tanzOpen && (
                    <ul>
                        <li><a href="tanzworkshops">Tanzworkshops</a></li>
                        <li><a href="performance">Performance</a></li>
                    </ul>
                )}
            </li>
            {/* Weiterbildungs */}
            <li>
                <a
                    href="#weiterbildung"
                    className="text-red-600 font-bold hover:text-teal-400"
                >
                    Weiterbildung
                </a>
            </li>

            {/* Über Uns */}
            <li>
                <a
                    href="#uberuns"
                    className="text-red-600 font-bold hover:text-teal-400"
                >
                    Über Uns
                </a>
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;
