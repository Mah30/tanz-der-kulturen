import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";




const Navbar = () => {
  return (
    <nav
    className="hidden md:flex items-center text-[#027D8F] text-sm md:text-lg font-medium bg">
      <ul className="flex gap-6">
        {menuItems.map((menu) => (
          <MenuItems key={menu.title} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;



   