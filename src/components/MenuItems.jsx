import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ menu, depthLevel = 0, onCloseAll }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if(
        dropdown && ref.current && !ref.current.contains(event.target)) {
         setDropdown(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
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
              role='button'
              className={`cursor-pointer flex gap-2 px-3 py-2 hover:bg-green-500 active:bg-green-600 w-full items-center ${
                dropdown ? 'bg-green-500' : ''
              }`}
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
            </div>

            <ul 
            className={`${
              dropdown
                ? depthLevel > 0
                  ? 'left-full top-0'
                  : ''
                : 'hidden'
            } absolute z-50 flex flex-col bg-green-400`}
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
           className='cursor-pointer flex gap-2 px-3 py-2 hover:bg-green-500 active:bg-amber-300'
          >
            {menu.title}
          </Link>
        )}
        </li>
      );
};

export default MenuItems;
