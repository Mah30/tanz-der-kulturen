import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // after put white logo here
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo com link to the newsletter */}
        <a href="https://seudominio.com/newsletter" className="flex-shrink-0"> {/* escrever o dominio da newsletter aqui */}
          <img src={logo} alt="Logo do grupo" className="h-12 w-auto cursor-pointer hover:opacity-80 transition duration-300" />
        </a>

        {/* Ícones de redes sociais */}
        <div className="flex gap-6 text-white text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Tanz der Kulturen. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
