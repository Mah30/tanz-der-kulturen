import { useTranslation } from "react-i18next";
import menuItems from "../menuItems";
import MenuItems from "./MenuItems";




const Navbar = () => {
  const { t } = useTranslation("common")

  const items = menuItems(t); 





  return (
    <nav
      aria-label="Hauptnavigation"
      className="hidden md:flex items-center text-[#027D8F] text-sm md:text-lg font-medium bg"
    >
      <ul className="flex gap-6" role="menubar">
        {items.map((menu) => (
          <MenuItems key={menu.key} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;



   