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
  padding: ${RFValue(10)}px;
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