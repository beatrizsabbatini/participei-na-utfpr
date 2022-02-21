import React, { useEffect, useState } from 'react';

import { ActivityIndicator, Alert, View } from 'react-native';

import { Container,  CustomText } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../../store';
import { IActivity, ICampus } from '../../../../types';
import { getOtherUsersDataRequest } from '../../../../store/modules/OtherUsers/otherUsersData/actions';
import theme from '../../../../global/styles/theme';
import Avatar from '../../../../components/Avatar';

interface ProfileHeaderProps {
  activityData?: IActivity,
  isVisitingOtherProfile?: boolean,
  isOtherUsersProfile?: boolean,
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ activityData, isVisitingOtherProfile }) => {
  const [userCampus, setUserCampus] = useState<ICampus>({} as ICampus);

  const dispatch = useDispatch();

  const userData = useSelector((state: IState) => state.userData);
  const campuses = useSelector((state: IState) => state.campuses);
  const otherUsersData = useSelector((state: IState) => state.otherUsersData);

  const onGetUserDataError = () => {
    Alert.alert("Erro ao buscar os dados!");
  }

  useEffect(() => {
    if (activityData){
      dispatch(getOtherUsersDataRequest({ id: activityData.publisherId, onError: onGetUserDataError }));
    }
  }, [activityData])

  useEffect(() => {
    if (campuses){
      if (isVisitingOtherProfile && otherUsersData.data){
        const campusFound = campuses.data?.find(item => item.id === otherUsersData.data.campusId)
        setUserCampus(campusFound || {} as ICampus);
      } else {
        const campusFound = campuses.data?.find(item => item.id === userData.data.campusId)
        setUserCampus(campusFound || {} as ICampus);
      }
    }
  }, [campuses, otherUsersData])

  return (
    <Container>
      <Avatar url={isVisitingOtherProfile ? otherUsersData.data.image?.url : userData.data.image?.url}/>
     
        {userData.loading ? (
          <ActivityIndicator color={theme.colors.primary} size="large"/>
        ) : (
          <View>
            <CustomText bigger>
              {
                isVisitingOtherProfile && otherUsersData.data 
                  ? otherUsersData.data.name 
                  : userData.data.name
              }
            </CustomText>
            <CustomText>{userCampus.city ? `Câmpus ${userCampus.city}`  : ''}</CustomText>
          </View>
        )}
    </Container>
  )
}

export default ProfileHeader;