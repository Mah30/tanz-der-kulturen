import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav
    className="hidden md:flex items-center text-[#027D8F] text-sm font-medium">
      <ul className="flex gap-6">
        {menuItems.map((menu) => (
          <MenuItems key={menu.title} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;



   