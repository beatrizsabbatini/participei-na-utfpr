import React, { createContext, ReactNode, useContext, useState } from "react";

interface StatisticsModalProps{
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

interface StatisticsModalProviderProps{
  children: ReactNode;
}

const StatisticsModalContext = createContext({} as StatisticsModalProps);

function StatisticsModalProvider({children, }: StatisticsModalProviderProps){
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return(
    <StatisticsModalContext.Provider 
      value={{
        modalVisible,
        setModalVisible,
      }}
    >
      { children }
    </StatisticsModalContext.Provider>
  )
}

const useStatisticsModal = () => {
  const context = useContext(StatisticsModalContext);

  return context;
}

export { StatisticsModalProvider, useStatisticsModal };