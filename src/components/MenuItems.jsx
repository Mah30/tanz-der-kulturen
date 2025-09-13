import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuItems = ({ menu, depthLevel = 0, onCloseAll }) => {
  const { t } = useTranslation("common");
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown]);

  /* show dropdown - mouse on big screen */
  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  /* hidden when the mouse is off */
  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  // Toggle on mobile mode (onClick)
  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (
    <li
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative"
    >
      {menu.submenu ? (
        <>
          <div
            role="button"
            className={`cursor-pointer inline-flex gap-2 px-3 py-2 font-bold hover:text-[#336c74] active:text-orange-600 w-full items-center ${
              dropdown ? "border-b-2 border-[#027D8F]" : ""
            }`}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span>{t(menu.title)}</span>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform duration-200 ${
                dropdown ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <ul
            className={`${
              dropdown ? (depthLevel > 0 ? "left-full top-0" : "") : "hidden"
            } md:absolute z-50 flex flex-col  bg-[#F5EDEF]  rounded-lg  border border-white/20`}
          >
            {menu.submenu.map((item) => (
              <MenuItems
                key={item.title}
                depthLevel={depthLevel + 1}
                menu={item}
                onCloseAll={() => {
                  setDropdown(false);
                  onCloseAll();
                }}
              />
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={menu.url}
          onClick={onCloseAll}
          className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded
          text-[#034B54]
          hover:text-[#039FB5]
          hover:bg-white/30
          transition
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#027D8F]/40 focus-visible:ring-offset-2"
        >
          {menu.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
