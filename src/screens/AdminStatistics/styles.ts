import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  padding-top: ${RFValue(30)}px;
`

export const MainContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding: ${RFValue(10)}px;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(18)}px;
  padding-bottom: ${RFValue(30)}px;
`

export const NumberText = styled(Title)`
  color: ${({theme}) => theme.colors.secondary_dark};
  font-weight: bold;
`

export const Description = styled(Title)`
  padding-top: ${RFValue(30)}px; 
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(16)}px;
  text-align: justify;
`

export const ModalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  padding-bottom: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary_light};
`

export const ModalText = styled.Text`
  font-size: ${RFValue(14)}px;
  padding-bottom: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: justify;
`
export const ModalBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(30)}px;
`;