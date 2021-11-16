import React from 'react';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import firebase from 'firebase';

import theme from '../../global/styles/theme';
import LogoImage from '../../../assets/Logo.png';
import { useAuth } from '../../hooks/Auth';
import { DrawerContainer, LogoutText, Row, Logo } from './styles';
import { useDispatch } from 'react-redux';

const logoutAction = { type: 'USER_LOGOUT' };

const CustomDrawer = (props: any) => {

  const { setIsAuthenticated } = useAuth();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutAction);
    navigation.dispatch(DrawerActions.closeDrawer());
    await firebase.auth().signOut()
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