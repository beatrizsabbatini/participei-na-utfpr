import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, StatusBar } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const verticalMarginSize = 50;
const statusBarHeight = 10;
const drawerHeight = windowHeight - verticalMarginSize - statusBarHeight;

export const DrawerContainer = styled.View`
  height: ${drawerHeight}px;
  justify-content: space-between;
  margin: ${RFValue(25)}px;
`

export const LogoutText = styled.Text`
  color: ${({theme}) => theme.colors.primary_dark};
  font-weight: bold;
  margin-left: ${RFValue(15)}px;
  font-size: ${RFValue(18)}px;
`

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(180)}px;
  resizeMode: contain;
  align-self: center;
`