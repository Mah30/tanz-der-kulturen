import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false); // estado para refletir o tema atual

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const darkModeEnabled = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", darkModeEnabled);
    setIsDark(darkModeEnabled);
  }, []);


  // Alterna o tema manualmente
  const toggle = () => {
    const html = document.documentElement;
    const nextTheme = isDark ? "light" : "dark";

    html.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="cursor-pointer">

      {/* Ícone da Lua (claro → escuro) */}
      <MoonIcon
        className={`h-8 text-gray-800 dark:hidden`}
        onClick={toggle}
      />

      {/* Ícone do Sol (escuro → claro) */}
      <SunIcon
        className={`h-8 text-yellow-400 hidden dark:block`}
        onClick={toggle}
      />
    </div>
  );
};

export default ToggleTheme;
