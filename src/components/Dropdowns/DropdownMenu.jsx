
/* import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownMenu = ({ section, items, placement }) => {
  return (
    <div className="relative group">
      <Dropdown
        label={section}
        placement={placement}
        inline={true}
        className="z-50"
      >
        {items.map((item) =>
          "path" in item ? (
            <DropdownItem
              as={Link}
              to={item.path}
              key={item.name}
              className="px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
            >
              {item.name}
            </DropdownItem>
          ) : (
            <DropdownMenu
              key={item.name}
              section={item.name}
              items={item.subMenu}
              placement="right-start"
            />
          )
        )}
      </Dropdown>

      * Aplica estilo no botão de forma externa */
   {/*    <style jsx>{`
    .group > button {
      @apply bg-transparent text-base font-medium text-gray-800 hover:text-teal-600 transition-colors duration-300 p-0;
    }
    `}</style> */}
 /*    </div>
  );
};

export default DropdownMenu; */ 




/* import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownMenu = ({ section, items, placement }) => {
    return ( 
        <Dropdown 
        label={section} placement={placement} className="text-gray-700 hover:text-teal shadow-lg rounded-md ring-1 ring-black ring-opacity-5  bg-white hover:bg-gray-100">
          {items.map((item) => "path" in item ? (
              <DropdownItem as={Link}
                to={item.path}
                key={item.name}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </DropdownItem> 
          ) : (
            <DropdownMenu
            key={item.name} 
            section={item.name} items={item.subMenu} placement="right-start" />
          ))}
        </Dropdown>
     );
}
 
export default DropdownMenu; */


import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownMenu = ({ section, items, placement }) => (
  <Dropdown
    label={section}
    placement={placement}
    inline={true}
    theme={{
      
      // Personaliza o botão interno (label)
      dropdown: {
        toggle: {
          base: "bg-transparent p-0 text-gray-800 hover:text-teal-600 font-medium transition-colors duration-200",
        },
        menu: "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
        item: {
          base: "px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
        },
      },
    }}
  >
    {items.map((item) =>
      "path" in item ? (
        <DropdownItem
          as={Link}
          to={item.path}
          key={item.name}
        >
          {item.name}
        </DropdownItem>
      ) : (
        <DropdownMenu
          key={item.name}
          section={item.name}
          items={item.subMenu}
          placement="right-start"
        />
      )
    )}
  </Dropdown>
);
export default DropdownMenu;


/* renderTrigger={() => <span>My custom trigger</span>} */