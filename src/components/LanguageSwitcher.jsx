import { useEffect, useRef, useState } from 'react';
import { GlobeAltIcon, CheckIcon } from '@heroicons/react/24/outline';
import i18n from '../i18n';

const LANGS = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];



const LanguageSwitcher = () => {
  // Menu state
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // Sincronization <html lang> with the actual language
  useEffect(() => {
    const current = i18n.resolvedLanguage || i18n.language || 'en';
    document.documentElement.setAttribute('lang', current);
  }, []);
  

  //Close menu when click outside
  useEffect(() => {
    function handleDocumentClick(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [open]);


  // Acessibility- close with ESC
  function onKeyDown(e) {
    if (e.key === 'Escape') setOpen(false);
  }


  // Change language + atualization <html lang> + close menu
  async function changeLanguage(code) {
    await i18n.changeLanguage(code);
    document.documentElement.setAttribute('lang', code);
    setOpen(false);
  }

  const current = i18n.resolvedLanguage || i18n.language || 'en';

 
  return (
    <div className="relative" onKeyDown={onKeyDown}>
      <button
        ref={btnRef}
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
      >
        <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">{current.toUpperCase()}</span>
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Language options"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border bg-white p-1 shadow-xl"
        >
          {LANGS.map((lng) => {
            const active = lng.code === current;
            return (
              <button
                key={lng.code}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => changeLanguage(lng.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                  active ? 'font-medium' : ''
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">
                    {lng.flag}
                  </span>
                  {lng.label}
                </span>
                {active && <CheckIcon className="h-4 w-4" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
