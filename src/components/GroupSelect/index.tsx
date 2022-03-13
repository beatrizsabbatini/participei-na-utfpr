import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import Button from '../Button';
import theme from '../../global/styles/theme';
import { useGroupSelect } from '../../hooks/GroupsSelect';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';
import { ModalBox, CheckboxContainer, ModalTitle, CheckboxLabel, ButtonsContainer, CancelText } from './styles';

interface GroupSelectProps{
  searchQuery: string
}

const GroupSelect: React.FC<GroupSelectProps> = ({ searchQuery }) => {
  const { setModalVisible, group1, group2, group3, setGroups, toggleGroup } = useGroupSelect();

  const [group1Local, setGroup1Local] = useState<boolean>(group1);
  const [group2Local, setGroup2Local] = useState<boolean>(group2);
  const [group3Local, setGroup3Local] = useState<boolean>(group3);

  const dispatch = useDispatch();

  const handleApply = () => {
    toggleGroup(1, group1Local);
    toggleGroup(2, group2Local);
    toggleGroup(3, group3Local);

    const groupsArray: number[] = [];

    if (group1Local) groupsArray.push(1);
    else groupsArray.splice(1, 1);

    if (group2Local) groupsArray.push(2);
    else groupsArray.splice(2, 1);

    if (group3Local) groupsArray.push(3);
    else groupsArray.splice(3, 1);

    setGroups(groupsArray);

    dispatch(getActivitiesRequest({ groups: groupsArray, title: searchQuery }));
    setModalVisible(false);
  }

  const dismiss = () => {
    setModalVisible(false);
  }

  return (
      <>
        <ModalBox>
          <ModalTitle>Filtre as atividades por grupo:</ModalTitle>
          <CheckboxContainer>
            <CheckBox
              disabled={false}
              value={group1Local}
              onValueChange={() => setGroup1Local(!group1Local)}
              tintColor={theme.colors.secondary_dark}
            />
            <CheckboxLabel>Grupo 1</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <CheckBox
              disabled={false}
              value={group2Local}
              onValueChange={() => setGroup2Local(!group2Local)}
            />
           <CheckboxLabel>Grupo 2</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
          <CheckBox
            disabled={false}
            value={group3Local}
            onValueChange={() => setGroup3Local(!group3Local)}
          />
           <CheckboxLabel>Grupo 3</CheckboxLabel>
          </CheckboxContainer>
          <ButtonsContainer>
            <TouchableOpacity onPress={dismiss}>
              <CancelText>Cancelar</CancelText>
            </TouchableOpacity>
            <Button type="light" width={`${RFValue(120)}px`} onPress={handleApply}>Aplicar</Button>
          </ButtonsContainer>
        </ModalBox>
      </>
  )
}

export default GroupSelect;