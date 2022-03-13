import React, { useEffect, useState } from 'react';

import { TouchableOpacity, View, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import base64 from 'react-native-base64'

import Badge from '../../components/Badge';
import theme from '../../global/styles/theme';
import { HomeStackParamList } from '../../routes/app.routes';

import { 
  Container, 
  UserName, 
  Row, 
  BadgesRow,
  CategoryTitle,
  ActivityTitle,
  ActivityDescription,
  DarkBlueText,
  SaveOrReport,
  ActivityImage
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { getOtherUsersDataRequest } from '../../store/modules/OtherUsers/otherUsersData/actions';
import Avatar from '../../components/Avatar';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'OtherUsersProfile'>;

const ActivityDetails: React.FC = () => {

  const { navigate, push } = useNavigation<HomeScreenProp>();
  const { setPressedActivity, setModalVisible, setIsSaved } = useConfirmationModal();

  const [image, setImage] = useState<string | undefined>();

  const route = useRoute<RouteProp<HomeStackParamList, 'ActivityDetails'>>();
  const userData = useSelector((state: IState) => state.userData);
  const otherUsersData = useSelector((state: IState) => state.otherUsersData);
  const dispatch = useDispatch();

  const { data, cameFromUserProfile } = route.params;

  useEffect(() => {
    if (data.publisherId) dispatch(getOtherUsersDataRequest({ id: data.publisherId }));
  }, [data])

  useEffect(() => {
    if (data.image){
      //const base64Image = base64.decode(data.image);
      const base64Image = `data:image/gif;base64,${data.image}`
      console.log("base64Image", base64Image)
      setImage(base64Image);
    }
  }, [data])
  

  const handlePressName = () => {
    if (data.publisherId === userData.data.uid){
      navigate('ProfileStack');
    } else {
      push('OtherUsersProfile', { activityData: data })
    }
  }

  const handlePressedFolder = () => {
    setIsSaved(data.saved || false);
    setPressedActivity(data);
    setModalVisible(true);
  }
  
  return (
    <Container>
      <View>
        {!cameFromUserProfile && (
          <Row onPress={handlePressName}>
            {data.publisherId === userData.data.uid ? (
            <>
              <Avatar size='small' url={userData.data.image?.url}/>
              <UserName>{data?.publisherName || '-'}</UserName>
            </>
          ) : (
            <>
              <Avatar size='small' url={otherUsersData.data.image?.url}/>
              <UserName>{otherUsersData.data?.name || '-'}</UserName>
            </>
          )}
          </Row>
        )}
        <BadgesRow>
          <Badge group={data?.category.group}/>
          <Badge points={data?.category.points} marginHorizontal/>
        </BadgesRow>
        <CategoryTitle>{data?.category.label}</CategoryTitle>
        <ActivityTitle>{data?.title}</ActivityTitle>
        <ActivityDescription>{data?.description || "..."}</ActivityDescription>
        <ActivityImage source={{uri: `data:image/png;base64,${data?.image}`}}
        />
      </View>
      <SaveOrReport>
        <Row>
          {/* <MaterialIcons name="report-problem" size={24} color={theme.colors.primary} />
          <DarkBlueText>Reportar</DarkBlueText> */}
        </Row>
        <TouchableOpacity onPress={handlePressedFolder}>
          <MaterialIcons name={data.saved ? 'folder' : 'folder-open'} size={24} color={theme.colors.primary_light} />
        </TouchableOpacity>
      </SaveOrReport>
    </Container>
  )
}

export default ActivityDetails;