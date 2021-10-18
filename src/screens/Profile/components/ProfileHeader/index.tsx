import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { Container, ProfileImage, CustomText } from './styles';
import theme from '../../../../global/styles/theme';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';

const ProfileHeader: React.FC = () => {

  const userData = useSelector((state: IState) => state.userData);

  return (
    <Container>
      <ProfileImage>
        <MaterialIcons name="person" size={24} color={theme.colors.primary} />
      </ProfileImage>
     
        {userData.loading ? (
          <ActivityIndicator color={theme.colors.primary} size="large"/>
        ) : (
          <View>
            <CustomText bigger>{userData.data.name}</CustomText>
            <CustomText>Câmpus {userData.data.campus}</CustomText>
          </View>
        )}
    </Container>
  )
}

export default ProfileHeader;