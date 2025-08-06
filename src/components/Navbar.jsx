import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center text-sm font-medium text-gray-700">
      <ul className="flex gap-6">
        {menuItems.map((menu) => (
          <MenuItems key={menu.title} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;



   