import React, { createContext, ReactNode, useContext, useState } from "react";

interface FiltersProps{
  numberOfFilters: number;
  setNumberOfFilters: (value: number) => void;
}

interface FiltersProviderProps{
  children: ReactNode;
}

const FiltersContext = createContext({} as FiltersProps);

function FiltersProvider({children, }: FiltersProviderProps){
  const [numberOfFilters, setNumberOfFilters] = useState<number>(0);
  return(
    <FiltersContext.Provider 
      value={{
        numberOfFilters,
        setNumberOfFilters
      }}
    >
      { children }
    </FiltersContext.Provider>
  )
}

const useFilters = () => {
  const context = useContext(FiltersContext);

  return context;
}

export { FiltersProvider, useFilters };