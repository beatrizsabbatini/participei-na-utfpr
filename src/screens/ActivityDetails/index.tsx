import React from 'react';

import { View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

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

const ActivityDetails: React.FC = () => {

  const route = useRoute<RouteProp<HomeStackParamList, 'ActivityDetails'>>();

  const { data } = route.params;
  //const renderImages: ListRenderItem<IActivity> = ({ item, index }) => <CustomImage source={item} />;
  
  return (
    <Container>
      <View>
        <Row>
          <PersonIcon name="person" size={18}/>
          <UserName>{data?.userName || 'Not found'}</UserName>
        </Row>
        <BadgesRow>
          <Badge group={data?.group}/>
          <Badge points={data?.points} marginHorizontal/>
        </BadgesRow>
        <CategoryTitle>{data?.category}</CategoryTitle>
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