import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const CustomButton = styled.button`
  background-color: #ff9000;
  border-radius: ${RFValue(10)}px;
  border: 0;
  padding: 0 16px;
  height: 56px;
  color: #312e38;
  width: 100%;
  font-weight: 600;
`;