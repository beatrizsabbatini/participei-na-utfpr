import React from 'react';

import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { Container, ProfileImage, CustomText } from './styles';
import theme from '../../../../global/styles/theme';

const ProfileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileImage>
        <MaterialIcons name="person" size={24} color={theme.colors.primary} />
      </ProfileImage>
      <View>
        <CustomText bigger>Beatriz Schwartz</CustomText>
        <CustomText>Câmpus Cornélio Procópio</CustomText>
      </View>
    </Container>
  )
}

export default ProfileHeader;