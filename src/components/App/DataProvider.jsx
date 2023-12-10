import { createContext, useState } from 'react';
export const CountContext = createContext();

export const DataProvider = ({ children }) => {
  const [safeCount, setSafeCount] = useState(0);
  const [doubtCount, setDoubtCount] = useState(0);
  const [harmfulCount, setHarmfulCount] = useState(0);

  const [safeIngrData, setSafeIngrData] = useState([]);
  const [doubtIngrData, setDoubtIngrData] = useState([]);
  const [harmfulIngrData, setHarmfulIngrData] = useState([]);

  const [apiData, setApiData] = useState(undefined);

  return (
    <CountContext.Provider
      value={{
        safeCount,
        setSafeCount,
        doubtCount,
        setDoubtCount,
        harmfulCount,
        setHarmfulCount,
        safeIngrData,
        setSafeIngrData,
        doubtIngrData,
        setDoubtIngrData,
        harmfulIngrData,
        setHarmfulIngrData,
        apiData,
        setApiData,
      }}
    >
      {' '}
      {children}{' '}
    </CountContext.Provider>
  );
};
