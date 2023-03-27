import { createContext } from 'react';
import { THEME } from '../helpers/constants';

export type ThemeContextType = {
  theme: THEME;
  toggleTheme: () => void;
};

export type AppContextType = ThemeContextType;

const AppContext = createContext<AppContextType>({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
});

export default AppContext;
