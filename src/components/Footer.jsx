import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Logo from '../assets/images/imgStartSeite/logo-tdk.png';




 const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-200 text-gray-900 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        
        <div>
          <img
            src={Logo} 
            alt="Logo from Tanz der Kulturen Group"
            className="h-12 mb-2"
          />
           <p className="text-sm text-red-600 italic mt-4">Put a Slogan here</p> 
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">TANTZEVENTS</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/tanzevent/tanzworkshops" className="hover:underline">Tantzworkshops</a></li>
            <li><a href="tanzevent/Performances" className="hover:underline">Performances</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">WEITERBILDUNG</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/weiterbildung/aufbau-termine" className="hover:underline">Aufbau + Termine</a></li>
            <li><a href="/weiterbildung/konzept" className="hover:underline">Konzept</a></li>
            <li><a href="/weiterbildung/buch" className="hover:underline">Buch</a></li>
            <li><a href="/weiterbildung/lernplattform" className="hover:underline">Lernplattform</a></li>
            <li><a href="/weiterbildung/anmeldung" className="hover:underline">Anmeldung</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">ABOUT US</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/uber-uns/team" className="hover:underline">Wer wir sind</a></li>
            <li><a href="/uber-uns/testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="/uber-uns/team" className="hover:underline">Team</a></li>
          </ul>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 border-t border-white/30 pt-6">

        {/* icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram" className="hover:text-black"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black"><FaLinkedinIn /></a>
          <a href="#" aria-label="TikTok" className="hover:text-black"><FaTiktok /></a>
        </div>

        {/* Privacy */}
        <div className="space-x-3 mb-2 md:mb-0">
          <a href="#" className="hover:underline">Imprint</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>

        {/* rights reserved */}
      <div className="text-center text-sm text-gray-700 mt-4">
        © {currentYear} Tanz der Kulturen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;