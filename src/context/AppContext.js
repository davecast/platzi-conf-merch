import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

export const GlobalStateContext = createContext();

const AppContextProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <GlobalStateContext.Provider value={initialState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default AppContextProvider;
