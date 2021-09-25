import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { IActivity } from '../../types';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  BadgeText,
  GroupBadge,
  PointsBadge,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText
} from './styles';
import theme from '../../global/styles/theme';

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
          <GroupBadge color="#FBCF7B">
            <BadgeText>Grupo {data.group}</BadgeText>
          </GroupBadge>
          <PointsBadge>
            <BadgeText>{data.points} pontos</BadgeText>
          </PointsBadge>
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