import { createContext } from 'react';
import { THEME } from '../helpers/constants';

const AppContext = createContext({
  theme: THEME.LIGHT,
  setTheme: (theme: string): void => {},
});

export default AppContext;
