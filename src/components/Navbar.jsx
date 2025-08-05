import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
          {menuItems.map(menu => {
            return (
              <li key={menu.title} className="relative">
                <MenuItems
                  menu={menu}
                />
              </li>
            );
          })}
      </ul>
 
      <Link
                to="/login"
                className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                Login
      </Link> 
       
    </nav>
  );
};

export default Navbar;



   