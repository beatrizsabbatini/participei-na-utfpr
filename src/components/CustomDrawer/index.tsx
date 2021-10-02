import React from 'react';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons'; 

import theme from '../../global/styles/theme';
import LogoImage from '../../../assets/Logo.png';
import { useAuth } from '../../hooks/Auth';
import { DrawerContainer, LogoutText, Row, Logo } from './styles';

const CustomDrawer = (props: any) => {

  const { setIsAuthenticated } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    setIsAuthenticated(false);
  }
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerContainer>
        <Logo source={LogoImage} />
        <Row onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={24} color={theme.colors.primary_dark} />
          <LogoutText>Sair</LogoutText>
        </Row>
      </DrawerContainer>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer