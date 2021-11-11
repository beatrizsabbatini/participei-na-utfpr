import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { IActivity } from '../../types';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
} from './styles';
import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}


type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Activity: React.FC<ActivityProps> = ({data, onPress, userPublished}) => {
  const { navigate } = useNavigation<HomeScreenProp>();

  return (
    <Container onPress={onPress}>
      <CardTop>
        <View style={{flex: 7}}>
          <Category>{data?.category.label}</Category>
          <Title>{data?.title}</Title>
        </View>
        <View style={{flex: 3, alignItems: 'flex-end'}}>
          <Badge group={data.category.group} marginVertical/>
          <Badge points={data.category.points} marginVertical/>
        </View>
      </CardTop>
      <CardBottom>
        <SeeMoreContainer onPress={() => navigate('ActivityDetails', { data })}>
          <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
          <SeeMoreText>Toque para ver mais</SeeMoreText>
        </SeeMoreContainer>
        <TouchableOpacity>
          {userPublished ? (
            <MaterialIcons name="edit" size={24} color={theme.colors.secondary} />
          ) : (
            <MaterialIcons name="folder" size={24} color={theme.colors.primary_light} />
          )}
        </TouchableOpacity>
      </CardBottom>
    </Container>
  )
}

export default Activity;