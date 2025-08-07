import Navbar from './Navbar';
import Logo from '../assets/images/imgStartSeite/logo-tdk.png';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <header 
    style={{ backgroundColor: '#E0F5F7' }} 
    className="flex justify-between items-center  px-8 py-2 shadow-sm">
  
        <Link to="/" className="block w-54 h-auto">
          <img src={Logo} alt="Logo of tanz der kulturen" />
        </Link>

        <div className='flex-1 flex justify-center'>
          <Navbar />
        </div>
        
        <div className='flex gap-4'>
          <Link
                  to="/login"
                  className="rounded-lg bg-green-500 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  Login
          </Link> 

          <Link
                  to="/signup"
                  className="rounded-lg bg-green-500 px-5 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-200"
                >
                  Signup
          </Link>

        </div>
        
      
    </header>
  );
};

export default Header;
