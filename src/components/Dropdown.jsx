import MenuItems from "./MenuItems";
import { useTranslation } from "react-i18next";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  const { t } = useTranslation("common");
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "" : "hidden"}`}>
      {submenus.map((submenu, index) => (
        <MenuItems
          items={{ ...submenu, title: t(submenu.title) }}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};

export default Dropdown;
