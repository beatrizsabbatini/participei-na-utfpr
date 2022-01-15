import React from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';

import { HomeStackParamList } from '../../routes/app.routes';
import ProfileHeader from '../Profile/components/ProfileHeader';

const OtherUsersProfile: React.FC = () => {

  const route = useRoute<RouteProp<HomeStackParamList, 'OtherUsersProfile'>>();
  const { activityData } = route.params;

  return (
    <>
      <ProfileHeader activityData={activityData} isVisitingOtherProfile/>
    </>
  )
}

export default OtherUsersProfile;