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
  SeeMoreText
} from './styles';
import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
}


type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Activity: React.FC<ActivityProps> = ({data, onPress}) => {
  const { navigate } = useNavigation<HomeScreenProp>();

  return (
    <Container onPress={onPress}>
      <CardTop>
        <View>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
        </View>
        <View>
          <Badge group={data.group} marginVertical/>
          <Badge points={data.points} marginVertical/>
        </View>
      </CardTop>
      <CardBottom>
        <SeeMoreContainer onPress={() => navigate('ActivityDetails', { data })}>
          <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
          <SeeMoreText>Toque para ver mais</SeeMoreText>
        </SeeMoreContainer>
        <TouchableOpacity>
          <MaterialIcons name="folder" size={24} color={theme.colors.primary_light} />
        </TouchableOpacity>
      </CardBottom>
    </Container>
  )
}

export default Activity;