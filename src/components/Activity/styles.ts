import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  align-self: stretch;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: ${RFValue(11)}px;
  padding: ${RFValue(10)}px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 3;
  margin: 5px;
`;

export const CardTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Category = styled.Text`
  font-weight: 100;
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.secondary};
`

export const CardBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`

export const SeeMoreContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const SeeMoreText = styled.Text`
  color: ${({ theme }) => theme.colors.primary_light};
  font-size: ${RFValue(12)}px;
`