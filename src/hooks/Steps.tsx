import React, { createContext, ReactNode, useContext, useState } from "react";

interface StepsProps{
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

interface StepsProviderProps{
  children: ReactNode;
}

const StepsContext = createContext({} as StepsProps);

function StepsProvider({children, }: StepsProviderProps){
  const [currentStep, setCurrentStep] = useState<number>(0);
  return(
    <StepsContext.Provider 
      value={{
        currentStep,
        setCurrentStep
      }}
    >
      { children }
    </StepsContext.Provider>
  )
}

const useSteps = () => {
  const context = useContext(StepsContext);

  return context;
}

export { StepsProvider, useSteps };