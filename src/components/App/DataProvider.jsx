import { createContext, useState } from 'react';
export const CountContext = createContext();

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount, count2, setCount2 }}>
      {children}
    </CountContext.Provider>
  );
};
