import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ProfileImageProps{
  size?: 'normal' | 'big' | 'small';
}

const getCircleSize = (size?: string) => {
  switch (size) {
    case 'normal':
      return RFValue(50);

    case 'big':
      return RFValue(150);

    case 'small':
      return RFValue(25);
  
    default:
      return RFValue(50);
  }
}

export const ProfileImage = styled.View<ProfileImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => getCircleSize(size)}px;
  width: ${({ size }) => getCircleSize(size)}px;
  margin-right: ${RFValue(20)}px;
  background-color: #F0F0F0;
  border-radius: ${RFValue(100)}px;
`