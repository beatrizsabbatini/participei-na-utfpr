import React, { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import base64 from 'react-native-base64'
import firebase from 'firebase';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import { Container } from './styles';
import { IState } from '../../store';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity, ICategory } from '../../types';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import { publishActivityRequest } from '../../store/modules/Activities/publishActivity/actions';
import { getUserDataRequest } from '../../store/modules/LoggedUser/userData/actions';
import PostCategory from '../PostCategory';
import { getCategoriesRequest } from '../../store/modules/Categories/getCategories/actions';

type PostActivityScreenProp = StackNavigationProp<HomeStackParamList, 'ActivitiesFeed'>;
interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any,
  resetForm: () => void
}

const PostActivity: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');
  const [categoriesWithPlaceholder, setCategoriesWithPlaceholder] = useState<ICategory[]>([]);
  const userUid = firebase.auth().currentUser?.uid;

  const { loading, data, errors } = useSelector((state: IState) => state.publishActivity);
  const { data: userData, loading: loadingUserData } = useSelector((state: IState) => state.userData);
  const { categories, loading: loadingCategories } = useSelector((state: IState) => state.getCategories);
  const userDataPublishedActivitiesIds = userData.publishedActivitiesIds;

  const { navigate } = useNavigation<PostActivityScreenProp>();

  const dispatch = useDispatch();

  const loginFormSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    description: Yup.string(),
    categoryId: Yup.string(),
  });

  useEffect(() => {
    dispatch(getCategoriesRequest());
    dispatch(getUserDataRequest({id: userUid, onError}));
    if (!loadingUserData && data && userData._id){
      if (data.id){
        if (!userDataPublishedActivitiesIds.includes(data.id)){
          dispatch(
            editUserRequest(
              { _id: userData._id}, 
              { publishedActivitiesIds: [...userDataPublishedActivitiesIds, data.id] },
              onError 
            )
          );
        }
      }
    }
  }, [data])

  useEffect(() => {
    if (categories.length > 0) {

      const categoriesWithValue = categories.map(item => ({
        ...item,
        value: item._id
      })

      )
      setCategoriesWithPlaceholder(
      [
        {
          _id: '0',
          placeholder: true,
          label: '',
          value: '',
          group: 0,
          points: 0
        },
        ...categoriesWithValue
      ]
    )}
  }, [categories])
  

  const onError = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao buscar seus dados',
        error
      );
    })
  }

  const postActivity = async (values: any, actions: any) => {

    const foundCategory = categories.find(category => category._id === values.categoryId);

    const onSuccess = () => {
      dispatch(getActivitiesRequest());
      actions.resetForm();
        setCategory(''); 
        navigate('ActivitiesFeed');
        Alert.alert(
          'Atividade Criada!',
          'Agora sua atividade já se encontra no feed de atividades'
        );
    }

    const categoryData = {
      id: foundCategory?._id,
      group: foundCategory?.group,
      label: foundCategory?.label,
      points: foundCategory?.points
    }

    const activity: Omit<IActivity, "id"> = {
      title: values.title.trim(),
      description: values.description.trim(),
      category: categoryData,
      publisherId: userUid || '', 
      publisherName: userData.name,
      image: base64Image
    }

    await dispatch(publishActivityRequest({activity, onSuccess, onError}));

  }

  const getDocument = async () => {
    const image: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 0.1,
      aspect: [4, 3]
    });

    setBase64Image(image.base64);
  }

  return (
    <Container>
      {userData.admin ? (
        <PostCategory/>
      ) : (
        <>
          <Spinner
            visible={loading}
            textContent='Publicando...'
            textStyle={{ color: "#fff" }}
          />
          <Formik
            validationSchema={loginFormSchema}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{
              title: '',
              description: '',
              categoryId: '',
            }}
            onSubmit={(values, actions) => postActivity(values, actions)}
          >
          {({ values, setFieldValue, handleSubmit, errors }: FormProps) => (
            <>
              <View>
                <Input 
                  placeholder="Digite um título" 
                  value={values.title}
                  onChangeText={(text: string) => setFieldValue('title', text)}
                />
                <Input 
                  placeholder="Digite uma descrição (opcional)" 
                  value={values.description}
                  onChangeText={(text: string) => setFieldValue('description', text)}
                  multiline 
                  numberOfLines={5}
                />
                <Dropdown 
                  enabled={!loadingCategories}
                  placeholder="Selecione uma categoria" 
                  value={category}
                  onValueChange={(value: string) => setFieldValue('categoryId', value)} 
                  list={categoriesWithPlaceholder || []} 
                  setValue={setCategory}
                />
                <Button onPress={getDocument} type="light">Adicionar Imagem</Button>
              </View>
              <Button onPress={() => handleSubmit(values)} type="primary">Publicar</Button>
            </>
          )}
          </Formik>
        </>
      )}
    </Container>
  )
}

export default PostActivity;