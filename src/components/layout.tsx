import * as React from 'react';
import { HTMLAttributes, ReactElement, useState } from 'react';
import AppContext from '../context/app';
import { THEME } from '../helpers/constants';
import Header from './header';

const Layout = ({ children }: HTMLAttributes<{}>): ReactElement => {
  const isDarkColorScheme =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const cachedTheme =
    typeof localStorage !== 'undefined' &&
    'theme' in localStorage &&
    localStorage.theme;
  const currentTheme =
    cachedTheme || (isDarkColorScheme ? THEME.DARK : THEME.LIGHT);
  const [theme, setTheme] = useState(currentTheme);
  const themeContext = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={themeContext}>
      {/* Theme container */}
      <div className={theme === THEME.DARK ? 'dark' : ''}>
        {/* Background */}
        <div className="min-h-screen bg-zinc-50 dark:bg-black">
          {/* Container */}
          <div className="container max-w-6xl mx-auto p-4 text-base text-zinc-600 dark:text-zinc-400">
            <Header />
            <main className="my-4 p-8 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 rounded-lg">
              {children}
            </main>
            <footer className="text-center">
              © {new Date().getFullYear()} David Semakula. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
