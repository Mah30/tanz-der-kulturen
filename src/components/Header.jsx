import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/images/imgStartSeite/logo-tdk.png";
import { Link } from "react-router-dom";
import menuItems from "../menuItems";
import MenuItems from "./MenuItems";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import I18nControls from "./Language/I18nControls";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseAll = () => setIsOpen(false); // close the mobile painel

  const { t } = useTranslation("common");

  return (
    <header className="relative flex justify-between items-center bg-[#E0F5F7] px-8 py-2 shadow-sm">
      {/* Left Logo */}
      <Link to="/" className="block w-54 h-auto">
        <img src={Logo} alt={t("header.logoAlt")} />
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
          aria-label={t("header.toggleMenu")} /* "toggleMenu" */
          aria-expanded={isOpen ? "true" : "false"}
          className="md:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#027D8F]/40"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/*  Mobile Panel (column) */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 md:hidden"
            onClick={handleCloseAll}
            aria-hidden="true"
          />
          {/* Offcanvas */}
          <aside
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl border-l border-gray-200 flex flex-col md:hidden animate-slideIn"
            style={{
              animation: isOpen ? "slideIn 0.3s ease-out forwards" : undefined,
            }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <img
                src={Logo}
                alt={t("header.logoAlt") || "Logo"}
                className="h-10"
              />
              <button
                className="text-[#027D8F] focus:outline-none"
                onClick={handleCloseAll}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-2 text-base text-[#027D8F]">
                {menuItems(t).map((menu) => (
                  <MenuItems
                    key={menu.title}
                    menu={menu}
                    depthLevel={0}
                    onCloseAll={handleCloseAll}
                  />
                ))}
                {/* Language Switcher inside menu list */}
                <li className="mt-2 flex items-center gap-2">
                  <I18nControls textAs="p" />
                </li>
              </ul>
            </nav>
            {/* Social icons at the bottom of offcanvas */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-center">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-black mx-2"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-black mx-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-black mx-2"
              >
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-black mx-2">
                <FaTiktok />
              </a>
            </div>
          </aside>
          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
          `}</style>
        </>
      )}
    </header>
  );
};

export default Header;
