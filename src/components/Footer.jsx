import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Logo from '../assets/images/imgStartSeite/logo-tdk.png';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




 const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("common");

  return (
    <footer className="bg-green-200 text-gray-900 pt-7 md:pt-10 pb-6 px-14 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-start">

        {/* coluna logo/slogan (sem mudanças funcionais) */}
        <div>
          {/* <img
            src={Logo} 
            alt="Logo from Tanz der Kulturen Group"
            className="h-12 mb-2"
          /> */}
          <p className="text-sm text-red-600 italic mt-4">Put a Slogan here</p> 
        </div>

        {/* === TANZEVENTS === */}
        <div>
          <h3 className="font-semibold mb-2 text-left">{t("menu.tanzevents")}</h3>
          <ul className="space-y-1 text-sm text-left">
            <li>
              <Link to="/tanzevent/tanzworkshops" className="hover:underline">
                {t("menu.tanzworkshops")}
              </Link>
            </li>
            <li>
              <Link to="/tanzevent/performances" className="hover:underline">
                {t("menu.performances")}
              </Link>
            </li>
            <li>
              <Link to="/tanzevent/tanzreise" className="hover:underline">
                {t("menu.tanzreise")}
              </Link>
            </li>
          </ul>
        </div>

        {/* === WEITERBILDUNG === */}
        <div>
          <h3 className="font-semibold mb-2">{t("menu.weiterbildung")}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/weiterbildung/aufbau-termine" className="hover:underline">
                {t("menu.aufbau-termine")}
              </Link>
            </li>
            <li>
              <Link to="/weiterbildung/konzept" className="hover:underline">
                {t("menu.konzept")}
              </Link>
            </li>
            <li>
              <Link to="/weiterbildung/buch" className="hover:underline">
                {t("menu.buch")}
              </Link>
            </li>
            <li>
              <Link to="/weiterbildung/lernplattform" className="hover:underline">
                {t("menu.lernplattform")}
              </Link>
            </li>
            <li>
              <Link to="/weiterbildung/anmeldung" className="hover:underline">
                {t("menu.anmeldung-weiterbildung")}
              </Link>
            </li>
          </ul>
        </div>

        {/* === ÜBER UNS === */}
        <div>
          <h3 className="font-semibold mb-2 text-left">{t("menu.uber-uns")}</h3>
          <ul className="space-y-1 text-sm text-left">
            <li>
              <Link to="/uber-uns/unser-werte" className="hover:underline">
                {t("menu.unser-werte")}
              </Link>
            </li>
            <li>
              <Link to="/uber-uns/unser-team" className="hover:underline">
                {t("menu.unser-team")}
              </Link>
            </li>
            <li>
              <Link to="/uber-uns/vergangene-projekte" className="hover:underline">
                {t("menu.vergangene-projekte")}
              </Link>
            </li>
            <li>
              <Link to="/uber-uns/testimonials" className="hover:underline">
                {t("menu.testimonials")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/*baixo - sem alterações ligadas ao menu*/}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-800 border-t border-white/50 pt-6">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram" className="hover:text-black"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black"><FaLinkedinIn /></a>
          <a href="#" aria-label="TikTok" className="hover:text-black"><FaTiktok /></a>
        </div>
        <div className="space-x-3 mb-2 md:mb-0">
          <a href="#" className="hover:underline">Imprint</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-700 mt-4">
        © {currentYear} Tanz der Kulturen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;