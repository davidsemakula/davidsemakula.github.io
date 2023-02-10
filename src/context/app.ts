import { createContext } from 'react';
import { THEME } from '../helpers/constants';

export type AppContextType = {
  theme: THEME;
  setTheme: (theme: string) => void;
};

const AppContext = createContext<AppContextType>({
  theme: THEME.LIGHT,
  setTheme: () => {},
});

export default AppContext;
