import { Link } from "react-router-dom";
import { useState } from "react";


const DropdownWeiterbildung = () => {
const [isWeiterbildungOpen, setIsWeiterbildungOpen] = useState(false);    
    return (  
                <div className="relative">
                  <button
                    onClick={() => setIsWeiterbildungOpen(!isWeiterbildungOpen)}
                    className="text-gray-700 hover:text-teal-600 transition duration-200 flex items-center gap-1"
                  >
                    Weiterbildung
                    <svg
                      className="w-4 h-4 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.14.98l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
        
                  {isWeiterbildungOpen && (
                  <div className="absolute top-14 left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-2">
                      <Link
                        to="/aufbau-termine"
                        onClick={() => setIsWeiterbildungOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Aufbau + Termine
                      </Link>
        
                      <Link
                        to="/konzept"
                        onClick={() => setIsWeiterbildungOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Konzept
                      </Link>
        
                      <Link
                        to="/buch"
                        onClick={() => setIsWeiterbildungOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Buch
                      </Link>
        
                      <Link
                        to="/lernplattform"
                        onClick={() => setIsWeiterbildungOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Lernplattform
                      </Link> 
                    </div>
                  </div>
                )}
                </div>
        
    );
}
 
export default DropdownWeiterbildung;