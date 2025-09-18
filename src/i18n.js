// src/i18n.js
// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

// // Em Vite, os arquivos em /public ficam servidos em /locales/...
const base =
  typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL
    ? import.meta.env.BASE_URL
    : "/";



i18n
  .use(HttpBackend)                  // carrega JSON via HTTP
  .use(LanguageDetector)           
  .use(initReactI18next)            
  .init({
    debug: true,                    // to see missingKey no console
    fallbackLng: "de",
    supportedLngs: ["de", "en"],
    ns: ["common", "events"],       
    defaultNS: "common",
    fallbackNS: "common",
    backend: {
      loadPath: `${base}locales/{{lng}}/{{ns}}.json` // busca em /public/locales
    },          // caminho correto dos JSON
    react: { useSuspense: false },
    interpolation: { escapeValue: false }
  });

export default i18n;
