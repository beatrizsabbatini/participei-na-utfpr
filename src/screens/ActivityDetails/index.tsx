import React, { useEffect } from 'react';

import { View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

import Badge from '../../components/Badge';
import theme from '../../global/styles/theme';
import { HomeStackParamList } from '../../routes/app.routes';

import { 
  Container, 
  UserName, 
  Row, 
  PersonIcon,
  BadgesRow,
  CategoryTitle,
  ActivityTitle,
  ActivityDescription,
  DarkBlueText,
  SaveOrReport
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { IState } from '../../store';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'OtherUsersProfile'>;

const ActivityDetails: React.FC = () => {

  const { navigate } = useNavigation<HomeScreenProp>();

  const route = useRoute<RouteProp<HomeStackParamList, 'ActivityDetails'>>();
  const userData = useSelector((state: IState) => state.userData);

  const { data } = route.params;
  //const renderImages: ListRenderItem<IActivity> = ({ item, index }) => <CustomImage source={item} />;

  useEffect(() => {
    //dispatch get activity publisher data
  }, [data])
  
  return (
    <Container>
      <View>
        <Row onPress={() => {
          if (data.publisherId === userData.data.uid){
            //navigate('Profile', { activityData: data })
          } else {
            navigate('OtherUsersProfile', { activityData: data })
          }
          }}
        >
          <PersonIcon name="person" size={18}/>
          <UserName>{data?.publisherName || 'Not found'}</UserName>
        </Row>
        <BadgesRow>
          <Badge group={data?.category.group}/>
          <Badge points={data?.category.points} marginHorizontal/>
        </BadgesRow>
        <CategoryTitle>{data?.category.label}</CategoryTitle>
        <ActivityTitle>{data?.title}</ActivityTitle>
        <ActivityDescription>{data?.description || "..."}</ActivityDescription>
        {/* {data?.images  && (
          <FlatList data={data?.images} renderItem={renderImages} keyExtractor={({item}) => item}/>
        )} */}
      </View>
      <SaveOrReport>
        <Row>
          <MaterialIcons name="report-problem" size={24} color={theme.colors.primary} />
          <DarkBlueText>Reportar</DarkBlueText>
        </Row>
        <MaterialIcons name="folder-open" size={24} color={theme.colors.primary} />
      </SaveOrReport>
    </Container>
  )
}

export default ActivityDetails;