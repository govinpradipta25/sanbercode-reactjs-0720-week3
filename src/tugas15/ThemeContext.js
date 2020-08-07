import {  createContext } from "react";

export const themes = {
    blue: {
      color: 'rgb(55, 0, 255)',
    },
    dark: {
      color: '#ffffff',
    },
  };

  export const ThemeContext = createContext(
    themes.dark // nilai *default*
  );