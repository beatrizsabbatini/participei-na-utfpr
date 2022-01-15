import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { IActivity } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';
import { useConfirmationModal } from '../../hooks/ConfirmationModal';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
  Row
} from './styles';

interface ActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const Activity: React.FC<ActivityProps> = ({data, onPress, userPublished}) => {
  const { navigate, push } = useNavigation<HomeScreenProp>();

  const { setPressedActivity, setModalVisible, setIsSaved } = useConfirmationModal();

  const handleEditActivity = () => {
    navigate('EditActivity', { data } )
  }

  const handlePressedFolder = () => {
    setIsSaved(data.saved || false);
    setPressedActivity(data);
    setModalVisible(true);
  }

  return (
    <>
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
          <SeeMoreContainer onPress={() => push('ActivityDetails', { data })}>
            <MaterialIcons name="add" size={14} color={theme.colors.primary_light} />
            <SeeMoreText>Toque para ver mais</SeeMoreText>
          </SeeMoreContainer>
          <Row userPublished={userPublished}>
            {userPublished && (
              <TouchableOpacity onPress={handleEditActivity}>
                <MaterialIcons name="edit" size={22} color={theme.colors.primary_light} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handlePressedFolder}>
              <MaterialIcons name={data.saved ? 'folder' : 'folder-open'} size={24} color={theme.colors.primary_light} />
            </TouchableOpacity>
          </Row>
        </CardBottom>
      </Container>
    </>
  )
}

export default Activity;