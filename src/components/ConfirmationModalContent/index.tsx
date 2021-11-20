import React from 'react';

import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Button from '../Button';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';
import { ModalTitle, ButtonsContainer, CancelText, ModalBox } from './styles';

interface ConfirmationModalContentProps{
  title: string;
  onYes: () => void;
}

const ConfirmationModalContent: React.FC<ConfirmationModalContentProps> = ({title, onYes}) => {

  const { setModalVisible } = useConfirmationModal();

  const dismiss = () => {
    setModalVisible(false);
  }

  return (
    <ModalBox>
      <ModalTitle>{title}</ModalTitle>
      <ButtonsContainer>
        <TouchableOpacity onPress={dismiss}>
          <CancelText>Cancelar</CancelText>
        </TouchableOpacity>
        <Button type="light" width={`${RFValue(120)}px`} onPress={onYes}>Sim</Button>
      </ButtonsContainer>
    </ModalBox>
  )
}

export default ConfirmationModalContent;