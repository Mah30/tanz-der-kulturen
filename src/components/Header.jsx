import { Link } from "react-router-dom";
import Navbar from "./Navbar";
/* import ToggleTheme from "./ToggleTheme/ToggleTheme"; */

const Header = () => {
  return ( 
    <header className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">Logo</Link>
      </div>
      <Navbar /> 
          
      {/* <ToggleTheme/> */}
    </header>
  );
}
 
export default Header;

/* https://www.youtube.com/watch?v=JbFURlz3p6U */