import React, { useEffect } from 'react';

import { Alert, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import { IState } from '../../../../store';
import { getCategoriesRequest } from '../../../../store/modules/Categories/getCategories/actions';
import { ICategory } from '../../../../types';

import { Container, Title, CategoryContainer, CategoryLabel, IconsContainer, IconView } from './styles';
import theme from '../../../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../../../../routes/app.routes';
import { deleteCategoryRequest } from '../../../../store/modules/Categories/deleteCategory/actions';

type ProfileScreenProp = StackNavigationProp<ProfileStackParamList, 'EditCategory'>;

const AdminProfile: React.FC = () => {
  const { categories, loading } = useSelector((state: IState) => state.getCategories);
  const { errors } = useSelector((state: IState) => state.deleteCategory);
  const dispatch = useDispatch();
  const { navigate } = useNavigation<ProfileScreenProp>();
  
  useEffect(() => {
    if (categories.length === 0){
      dispatch(getCategoriesRequest());
    }
  }, [categories])

  const onSuccessDeleting = () => {
    dispatch(getCategoriesRequest());
    return Alert.alert('Categoria deletada com sucesso');
  }

  const onErrorDeleting = () => {
    console.log(errors);
    return Alert.alert('Erro ao deletar categoria', errors);
  }

  const handleDeleteCategory = async (id: string) => {
    return Alert.alert(
      'Atenção',
      'Deseja mesmo deletar essa categoria? ', 
      [
        {
          text: 'Sim',
          onPress: () => {
            dispatch(deleteCategoryRequest({ id, onSuccess: onSuccessDeleting, onError: onErrorDeleting }));
          },
        },
        {
          text: 'Não',
        },
      ]
      )
    
  }


  const renderCategory: ListRenderItem<any> = ({ item, index }) => {
    
    return (
      <CategoryContainer>
        <CategoryLabel>{item.label}</CategoryLabel>
        <IconsContainer>
          <IconView onPress={() => navigate('EditCategory', { data: item })}>
            <MaterialIcons name="edit" size={24} color={theme.colors.primary} />
          </IconView>
          <IconView onPress={() => handleDeleteCategory(item._id)}>
            <FontAwesome5 name="trash" size={20} color="#ff5959" />
          </IconView>
        </IconsContainer>
      </CategoryContainer>
    )
  };

  
  return (
    <Container>
      <Title>Categorias existentes:</Title>
      {loading ? (
        <ActivityIndicator/>
      ) : (
        <FlatList style={{width: '100%'}} data={categories} renderItem={renderCategory}/>
      )}
    </Container>
  )
}

export default AdminProfile;