import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ menu, depthLevel = 0, onCloseAll }) => {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  return (menu.submenu ? (
          <>
            <button
              className={"cursor-pointer flex gap-2 px-3 py-2 hover:bg-green-500 active:bg-green-600 w-full" + (dropdown ? "bg-green-500" : "")}
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={toggleDropdown}
            >
              <span>{menu.title}</span>
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>

            <menu className={dropdown
              ? (depthLevel > 0 ? " left-full top-0" : "") + " absolute flex flex-col bg-green-400 z-50"
              : "hidden"}>
             {menu.submenu.map((item) => (
                <li
                  className="relative"
                  key={item.title}
                >
                  <MenuItems
                    depthLevel={depthLevel+1}
                    menu={item}
                    onCloseAll={() => {
                      setDropdown(false);
                      onCloseAll();
                    }}
                  />
                </li>
             ))}
            </menu> 
          </>
        ) : (
          <Link
            to={menu.url}
            onClick={onCloseAll}
           className='cursor-pointer flex gap-2 px-3 py-2 hover:bg-green-500 active:bg-amber-300'
          >{menu.title}</Link>
        )
      );
};

export default MenuItems;
