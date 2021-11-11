import React, { createContext, ReactNode, useContext, useState } from "react";

interface GroupSelectProps{
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  group1: boolean,
  group2: boolean,
  group3: boolean,
  toggleGroup: (group: number, value: boolean) => void;
  groups: number[],
  setGroups: (groups: number[]) => void;
}

interface GroupSelectProviderProps{
  children: ReactNode;
}

const GroupSelectContext = createContext({} as GroupSelectProps);

function GroupSelectProvider({children, }: GroupSelectProviderProps){
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [group1, setGroup1] = useState<boolean>(false);
  const [group2, setGroup2] = useState<boolean>(false);
  const [group3, setGroup3] = useState<boolean>(false);
  const [groups, setGroups] = useState<number[]>([]);

  const toggleGroup = (group: number, value: boolean) => {
    switch (group) {
      case 1:
        setGroup1(value)
      break;

      case 2:
        setGroup2(value)
      break;

      case 3:
        setGroup3(value)
      break;
    
      default:
        break;
    }
  }

  return(
    <GroupSelectContext.Provider 
      value={{
        modalVisible,
        setModalVisible,
        group1,
        group2,
        group3,
        toggleGroup,
        groups,
        setGroups
      }}
    >
      { children }
    </GroupSelectContext.Provider>
  )
}

const useGroupSelect = () => {
  const context = useContext(GroupSelectContext);

  return context;
}

export { GroupSelectProvider, useGroupSelect };