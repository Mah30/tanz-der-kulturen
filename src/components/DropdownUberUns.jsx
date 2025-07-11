import { Link } from "react-router-dom";
import { useState } from "react";

const DropdownUberUns = () => {
const [isUberUnsOpen, setIsUberUnsOpen] = useState(false);
    return (  
        <div className="relative">
                  <button
                    onClick={() => setIsUberUnsOpen(!isUberUnsOpen)}
                    className="text-gray-700 hover:text-teal-600 transition duration-200 flex items-center gap-1"
                  >
                    Über Uns
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
        
                  {isUberUnsOpen && (
                  <div className="absolute top-14 left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-2">
                      <Link
                        to="/wer-wir-sind"
                        onClick={() => setIsUberUnsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Wer wir sind
                      </Link>
        
                      <Link
                        to="/testimonials"
                        onClick={() => setIsUberUnsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Testimonials
                      </Link>
        
                      <Link
                        to="/team"
                        onClick={() => setIsUberUnsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Team
                      </Link>
                   
        
                    </div>
                  </div>
                )}
                </div>
        
    );
}
 
export default DropdownUberUns;