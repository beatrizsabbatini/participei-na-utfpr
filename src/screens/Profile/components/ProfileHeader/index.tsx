import React from 'react';

import { ActivityIndicator, View } from 'react-native';

import { Container,  CustomText } from './styles';
import theme from '../../../../global/styles/theme';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import Avatar from '../../../../components/Avatar';

const ProfileHeader: React.FC = () => {

  const userData = useSelector((state: IState) => state.userData);

  return (
    <Container>
      <Avatar/>
     
        {userData.loading ? (
          <ActivityIndicator color={theme.colors.primary} size="large"/>
        ) : (
          <View>
            <CustomText bigger>{userData.data.name}</CustomText>
            <CustomText>Câmpus {userData.data.campusId}</CustomText>
          </View>
        )}
    </Container>
  )
}

export default ProfileHeader;