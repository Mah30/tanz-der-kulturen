import {  useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const DropdownMenu = ({ section, items, isOpen, onOpen, onClose }) => {
    const dropdownRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);


    return ( 
        <nav className="relative" ref={dropdownRef}>
            <button
            onClick={onOpen}
            className="text-gray-700 hover:text-teal-600 flex items-center gap-1"
            >
                {section}
                <ChevronDownIcon className="w-4 h-4 mt-1" />
            </button>

            {isOpen && (
                <div className="absolute top-10 left-0 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-2">
                    {items.map((item) => (
                        <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => {
                            if (typeof onClose === 'function') {
                              onClose(); // fecha o menu ao clicar
                            }
                          }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                    </div>  
                </div>
            )}
        </nav>
     );
}
 
export default DropdownMenu;