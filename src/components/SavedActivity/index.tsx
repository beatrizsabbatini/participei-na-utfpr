import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { IActivity } from '../../types';
import theme from '../../global/styles/theme';
import Badge from '../Badge';
import { HomeStackParamList } from '../../routes/app.routes';
import { 
  Container, 
  CardTop, 
  Title, 
  Category,
  CardBottom,
  SeeMoreContainer,
  SeeMoreText,
  CertificateContainer,
  ThinText
} from './styles';

interface SavedActivityProps{
  data: IActivity;
  onPress: () => void;
  userPublished?: boolean;
}


type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivityDetails'>;

const SavedActivity: React.FC<SavedActivityProps> = ({ data, onPress }) => {
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
        <FontAwesome5 name="trash" size={18} color={theme.colors.secondary} />
        </TouchableOpacity>
      </CardBottom>
        {data.certificate ? (
          <CertificateContainer containsCertificate={data.certificate}>
            <ThinText>Visualizar certificado</ThinText>
            <Entypo name="trophy" size={15} color={theme.colors.secondary} />
          </CertificateContainer>
        ) : (
          <CertificateContainer>
            <ThinText>Adicionar certificado</ThinText>
            <MaterialIcons name="note-add" size={18} color={theme.colors.secondary} />
          </CertificateContainer>
        )}
    </Container>
  )
}

export default SavedActivity;