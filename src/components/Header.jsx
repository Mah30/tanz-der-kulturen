import Navbar from './Navbar';
import Logo from '../assets/images/logo.png';


// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center">
  
        <Link to="/" className="block w-24 h-auto">
          <img src={Logo} alt="Logo of tanz der kulturen" />
        </Link>
        <Navbar />
      
    </header>
  );
};

export default Header;
