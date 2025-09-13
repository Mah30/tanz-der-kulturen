import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import Logo from "../assets/images/imgStartSeite/logo-tdk.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-200 text-gray-900 pt-7 md:pt-10 pb-6 px-14 ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8  justify-items-start ">
        <div>
          {/* <img
            src={Logo}
            alt={t('footer.logoAlt', 'Logo from Tanz der Kulturen Group')}
            className="h-12 mb-2"
          /> */}
          <p className="text-sm text-red-600 italic mt-4">
            {t("footer.slogan", "Put a Slogan here")}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2  text-left md:text-left">
            {t("footer.Dance_Events", "TANTZEVENTS")}
          </h3>
          <ul className="space-y-1 text-sm text-left">
            <li>
              <a href="/tanzevent/tanzworkshops" className="hover:underline">
                {t("footer.Dance_Workshops", "Tantzworkshops")}
              </a>
            </li>
            <li>
              <a href="tanzevent/Performances" className="hover:underline">
                {t("footer.Performances", "Leistung")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            {t("footer.further_education", "WEITERBILDUNG")}
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="/weiterbildung/aufbau-termine"
                className="hover:underline"
              >
                {t("footer.Schedule", "Aufbau + Termine")}
              </a>
            </li>
            <li>
              <a href="/weiterbildung/konzept" className="hover:underline">
                {t("footer.Concept", "Konzept")}
              </a>
            </li>
            <li>
              <a href="/weiterbildung/buch" className="hover:underline">
                {t("footer.Book", "Buch")}
              </a>
            </li>
            <li>
              <a
                href="/weiterbildung/lernplattform"
                className="hover:underline"
              >
                {t("footer.Learning_platform", "Lernplattform")}
              </a>
            </li>
            <li>
              <a href="/weiterbildung/anmeldung" className="hover:underline">
                {t("footer.Registration", "Anmeldung")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-left">
            {t("footer.About_us", "ABOUT US")}
          </h3>
          <ul className="space-y-1 text-sm text-left">
            <li>
              <a href="/uber-uns/team" className="hover:underline">
                {t("footer.who_we_are", "Wer wir sind")}
              </a>
            </li>
            <li>
              <a href="/uber-uns/testimonials" className="hover:underline">
                {t("footer.Testimonials", "Testimonials")}
              </a>
            </li>
            <li>
              <a href="/uber-uns/team" className="hover:underline">
                {t("footer.Team", "Team")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Admin dashboard link using React Router */}
      <Link
        to="/admin/pages/dashboardss"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: "none" }}
      >
        Admin Dashboard
      </Link>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-800 border-t border-white/50 pt-6">
        {/* icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Instagram" className="hover:text-black">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-black">
            <FaTiktok />
          </a>
        </div>

        {/* Privacy */}
        <div className="space-x-3 mb-2 md:mb-0">
          <a href="#" className="hover:underline">
            {t("footer.Imprint", "Impressum")}
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            {t("footer.Privacy_policy", "Datenschutzrichtlinie")}
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            {t("footer.Terms_of_use", "Nutzungsbedingungen")}
          </a>
        </div>
      </div>

      {/* rights reserved */}
      <div className="text-center text-sm text-gray-700 mt-4">
        © {currentYear} Tanz der Kulturen.{" "}
        <Link to="/admin/pages/admin" className="hover:underline">
          {t("footer.all_rights_reserved", "All rights reserved")}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
