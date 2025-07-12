import { Link } from "react-router-dom";
import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownMenu = ({ section, items }) => {
    return ( 
        <Dropdown label={section} className="text-gray-700 hover:text-teal shadow-lg rounded-md ring-1 ring-black ring-opacity-5  bg-white hover:bg-gray-100">
          {items.map((item) => (
              <DropdownItem as={Link}
                to={item.path}
                key={item.name}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </DropdownItem>
          ))}
        </Dropdown>
     );
}
 
export default DropdownMenu;