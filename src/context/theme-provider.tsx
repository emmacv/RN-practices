import React from 'react'
import { DefaultTheme, useTheme as useTheme2 } from 'styled-components/native';

type Themes = 'light' | 'dark';

type ThemeActions = { type: 'light' | 'dark' };

type ThemeState = { [k: string | symbol]: any } & DefaultTheme;

type ThemeContext = [ThemeState, React.Dispatch<ThemeActions>];


const reducer = (prevState: ThemeState, { type }: ThemeActions) => reducerOptions[type] || prevState;

const reducerOptions: { [K in Themes]: ThemeState } = {
  light: {
    background: '#fff',
    text: '#000',
  },
  dark: {
    background: '#000',
    text: '#fff',
  },
}


const initialTheme: ThemeState = reducerOptions.light;

const ThemeContext = React.createContext([] as unknown as ThemeContext);

export const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [theme, dispatcher] = React.useReducer(reducer, initialTheme);

  return (
    <ThemeContext.Provider value={[theme, dispatcher]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;