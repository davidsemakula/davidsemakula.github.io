import { useContext } from 'react';
import AppContext, { ThemeContextType } from '../context/app';

export default function useTheme(): ThemeContextType {
  const { theme, toggleTheme } = useContext(AppContext);

  return {
    theme,
    toggleTheme,
  };
}
