import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
  padding: ${RFValue(30)}px;
  justify-content: space-between;
`;

export const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.primary_light};
  font-weight: 300;
  font-size: ${RFValue(18)}px;
`

export const PersonIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.primary_light};
  margin-right: ${RFValue(10)}px;
`

export const BadgesRow = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${RFValue(30)}px 0 ${RFValue(20)}px 0;
`

export const CategoryTitle = styled.Text`
  font-weight: 300;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ActivityTitle = styled(CategoryTitle)`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary_dark};
  margin: ${RFValue(3)}px 0 ${RFValue(10)}px 0;
`

export const ActivityDescription = styled.Text`
  font-size: ${RFValue(15)}px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary_light};
`

export const CustomImage = styled.Image`
  width: 60%;
  height: ${RFValue(55)}px;
  resize-mode: 'contain';
`

export const SaveOrReport = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DarkBlueText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  margin-left: ${RFValue(10)}px;
`