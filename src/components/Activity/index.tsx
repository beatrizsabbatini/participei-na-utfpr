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

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
}

const Activity: React.FC<ActivityProps> = ({data, onPress}) => {
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
        <SeeMoreContainer>
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