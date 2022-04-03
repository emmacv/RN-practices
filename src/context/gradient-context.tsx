import React, { useContext } from 'react';

type ImageColorsContextType = {
  currentColors: {
    primary: string;
    secondary: string;
  };
  previousColors: {
    primary: string;
    secondary: string;
  }
  setCurrentColors: Function; 
  setPreviousColors: Function; 
};

export const useGradientColor = () => useContext(GradientContext);

const GradientContext = React.createContext({} as ImageColorsContextType);

const GradientProvider = ({ children }) => {
  const [currentColors, setCurrentColors] = React.useState({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [previousColors, setPreviousColors] = React.useState({
    primary: '#45a',
    secondary: '#3ff',
  });

  return (
    <GradientContext.Provider
      value={{
        currentColors,
        previousColors,
        setCurrentColors,
        setPreviousColors,
      }}
    >
      {children}
    </GradientContext.Provider>
  )
}

export default GradientProvider;