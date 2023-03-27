import * as React from 'react';
import { ReactElement } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { THEME } from '../helpers/constants';
import useTheme from '../hooks/useTheme';

const Header = (): ReactElement => {
  const { theme, toggleTheme } = useTheme();
  const ToggleIcon = theme === THEME.DARK ? SunIcon : MoonIcon;

  return (
    <header className="text-right">
      <button
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={toggleTheme}
      >
        <ToggleIcon className="w-6 h-6 inline-block" />
      </button>
    </header>
  );
};

export default Header;
