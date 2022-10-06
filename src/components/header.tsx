import * as React from 'react';
import { ReactElement, useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import AppContext from '../context/app';
import { THEME } from '../helpers/constants';

const Header = (): ReactElement => {
  const { theme, setTheme } = useContext(AppContext);
  const isLight = theme !== THEME.DARK;

  const toggleTheme = () => {
    const newTheme = isLight ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
    if (typeof localStorage !== 'undefined') {
      localStorage.theme = newTheme;
    }
  };

  return (
    <header className="text-right">
      <button
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={toggleTheme}
      >
        {isLight ? (
          <MoonIcon className="w-6 h-6 inline-block" />
        ) : (
          <SunIcon className="w-6 h-6 inline-block" />
        )}
      </button>
    </header>
  );
};

export default Header;
