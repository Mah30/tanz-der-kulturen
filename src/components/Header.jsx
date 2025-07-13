import Navbar from './Navbar';

// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="shadow-md text-gray-900 bg-red-400">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

/* https://www.youtube.com/watch?v=JbFURlz3p6U */