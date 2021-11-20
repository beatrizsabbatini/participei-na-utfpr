import React, { createContext, ReactNode, useContext, useState } from "react";
import { IActivity } from "../types";

interface ConfirmationModalProps{
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  pressedActivity: IActivity;
  setPressedActivity: (data: IActivity) => void;
}

interface ConfirmationModalProviderProps{
  children: ReactNode;
}

const ConfirmationModalContext = createContext({} as ConfirmationModalProps);

function ConfirmationModalProvider({children, }: ConfirmationModalProviderProps){
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pressedActivity, setPressedActivity] = useState<IActivity>({} as IActivity);

  return(
    <ConfirmationModalContext.Provider 
      value={{
        modalVisible,
        setModalVisible,
        pressedActivity,
        setPressedActivity
      }}
    >
      { children }
    </ConfirmationModalContext.Provider>
  )
}

const useConfirmationModal = () => {
  const context = useContext(ConfirmationModalContext);

  return context;
}

export { ConfirmationModalProvider, useConfirmationModal };