import Navbar from './Navbar';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <header className="flex justify-between items-center  px-8 py-2 shadow-sm bg-gray-200">
  
        <Link to="/" className="block w-24 h-auto">
          <img src={Logo} alt="Logo of tanz der kulturen" />
        </Link>

        <div className='flex-1 flex justify-center'>
          <Navbar />
        </div>
        
        <Link
                to="/login"
                className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                Login
        </Link> 

        <Link
                to="/signup"
                className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                Sign Up
        </Link>
      
    </header>
  );
};

export default Header;
