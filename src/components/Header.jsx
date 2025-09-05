import { useState } from 'react';
import Navbar from './Navbar';
import Logo from '../assets/images/imgStartSeite/logo-tdk.png';
import { Link } from 'react-router-dom';
import { menuItems } from '../menuItems'; // para renderizar no painel mobile
import MenuItems from './MenuItems';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './Language/LanguageSwitcher';
import I18nControls from './Language/I18nControls';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseAll = () => setIsOpen(false); // close the mobile painel
  
  const { t } = useTranslation('common');

  return (
    <header className="relative flex justify-between items-center bg-[#E0F5F7] px-8 py-2 shadow-sm">
      {/* Left Logo */}
      <Link to="/" className="block w-54 h-auto">
        <img src={Logo} alt={t('header.logoAlt')} />
      </Link>

      {/* Central Navbar - nur Desktop */}
      <div className="flex-1 flex justify-center">
        <Navbar />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Desktop buttons (hidden on mobile) */}
          <div className="hidden md:flex">
            <I18nControls textAs="p" />     
          </div>

        {/* Hamburger Menu - Mobile */}
        <button
          type="button"
          aria-label={t('header.toggleMenu')} /* "toggleMenu" */
          aria-expanded={isOpen ? 'true' : 'false'}
          className="md:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#027D8F]/40"
          onClick={() => setIsOpen(v => !v)}
        >
          {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {/*  Mobile Panel (column) */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full md:hidden px-2 pb-4">
          <ul className=" 
          mt-2 flex flex-col gap-1 
          rounded-lg border border-white/20 bg-[#F5EDEF] p-2 
          text-base  text-[#027D8F] backdrop-blur-md 
          max-h-[80vh] overflow-y-auto overscroll-contain 
          mx-4  ">
              {/* Menu items in a column*/}
            {menuItems.map((menu) => (
              <MenuItems
                key={menu.title}
                menu={menu}
                depthLevel={0}
                onCloseAll={(handleCloseAll)} 
              />
            ))}

            {/* Login/Signup no mobile (inside the painel) */}
            <li className="mt-2 flex items-center gap-2">
              
              <I18nControls textAs="p" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
