import React, { useEffect, useState } from 'react';

import { ActivityIndicator, View } from 'react-native';

import { Container,  CustomText } from './styles';
import theme from '../../../../global/styles/theme';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store';
import Avatar from '../../../../components/Avatar';
import { ICampus } from '../../../../types';

const ProfileHeader: React.FC = () => {
  const [userCampus, setUserCampus] = useState<ICampus>({} as ICampus);

  const userData = useSelector((state: IState) => state.userData);
  const campuses = useSelector((state: IState) => state.campuses);

  useEffect(() => {
    if (campuses){
      const campusFound = campuses.data?.find(item => item.id === userData.data.campusId)
      setUserCampus(campusFound || {} as ICampus);
    }
  }, [campuses])

  return (
    <Container>
      <Avatar/>
     
        {userData.loading ? (
          <ActivityIndicator color={theme.colors.primary} size="large"/>
        ) : (
          <View>
            <CustomText bigger>{userData.data.name}</CustomText>
            <CustomText>Câmpus {userCampus.city || 'não encontrado'}</CustomText>
          </View>
        )}
    </Container>
  )
}

export default ProfileHeader;