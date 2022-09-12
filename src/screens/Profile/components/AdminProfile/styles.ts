import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-weight: 300;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 0 20px 8px;
`

export const CategoryLabel = styled.Text`
  font-weight: 300;
  font-size: ${RFValue(14)}px;
  color: #000;
`

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  border-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.border};
  border-radius: ${RFValue(10)}px;
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
`

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const IconView = styled.TouchableOpacity`
  padding: 0 ${RFValue(5)}px;
`