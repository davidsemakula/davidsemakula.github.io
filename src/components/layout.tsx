import * as React from 'react';
import { HTMLAttributes, ReactElement, useEffect, useState } from 'react';
import AppContext from '../context/app';
import { THEME } from '../helpers/constants';
import Header from './header';

const Layout = ({ children }: HTMLAttributes<{}>): ReactElement => {
  // Default to undefined, prevents pollution of session cache
  const [theme, setTheme] = useState<THEME | undefined>();
  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    );
  };

  useEffect(() => {
    // set theme based on session cache or system settings from client side
    const isDarkSystemTheme =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const sessionTheme =
      typeof sessionStorage !== 'undefined' &&
      'theme' in sessionStorage &&
      sessionStorage.theme;
    const currentTheme =
      sessionTheme || (isDarkSystemTheme ? THEME.DARK : THEME.LIGHT);
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      // Remember theme change for this session
      sessionStorage.theme = theme;
    }
  }, [theme]);

  const themeContext = {
    theme: theme || THEME.LIGHT, // Default to light theme for consumers
    toggleTheme,
  };

  const thisYear = new Date().getFullYear();
  const copyrightYear =
    thisYear > 2022 ? [2022, '-', thisYear].join(' ') : thisYear;

  return (
    <AppContext.Provider value={themeContext}>
      {/* Theme container */}
      {theme ? (
        <div className={theme === THEME.DARK ? 'dark' : ''}>
          {/* Background */}
          <div className="min-h-screen bg-zinc-100 dark:bg-black">
            {/* Container */}
            <div className="container max-w-6xl mx-auto p-4 text-base text-zinc-600 dark:text-zinc-400">
              <Header />
              <main className="my-4 p-8 bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 rounded-lg">
                {children}
              </main>
              <footer className="text-center">
                © {copyrightYear} David Semakula. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      ) : null}
    </AppContext.Provider>
  );
};

export default Layout;
