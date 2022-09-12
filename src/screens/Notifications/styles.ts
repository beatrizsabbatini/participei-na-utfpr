import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const FlatlistContainer = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`

export const NotificationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #EDF4F5;
  padding: ${RFValue(18)}px;
`

export const ClockIcon = styled.Image`
  height: ${RFValue(35)}px;
  width: ${RFValue(35)}px;
  margin-right: ${RFValue(15)}px;
`

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 300;
  font-size: ${RFValue(14)}px;
`

export const Highlight = styled(Message)`
  font-weight: bold;
`