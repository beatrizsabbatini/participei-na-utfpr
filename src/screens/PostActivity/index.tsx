import React, { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import { categories } from '../../mock/activitiesMock';
import { Container } from './styles';
import { IState } from '../../store';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity } from '../../types';
import firebase from 'firebase';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';
import { editUserRequest } from '../../store/modules/LoggedUser/editUser/actions';
import { publishActivitieyRequest } from '../../store/modules/Activities/publishActivity/actions';
import { getUserDataRequest } from '../../store/modules/LoggedUser/userData/actions';

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
  const userUid = firebase.auth().currentUser?.uid;

  const { loading, data, errors } = useSelector((state: IState) => state.publishActivity);
  const { data: userData, loading: loadingUserData } = useSelector((state: IState) => state.userData);
  const userDataPublishedActivitiesIds = userData.publishedActivitiesIds;

  const { navigate } = useNavigation<PostActivityScreenProp>();

  const dispatch = useDispatch();

  const loginFormSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    description: Yup.string(),
    categoryId: Yup.string(),
  });

  useEffect(() => {
    dispatch(getUserDataRequest({uid: userUid, onError}));
    if (!loadingUserData && data && userUid){
      if (data.id){
        if (!userDataPublishedActivitiesIds.includes(data.id)){
          dispatch(
            editUserRequest(
              userUid, 
              { publishedActivitiesIds: [...userDataPublishedActivitiesIds, data.id] },
              onError 
            )
          );
        }
      }
    }
  }, [data])

  const onError = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao buscar seus dados',
        error
      );
    })
  }

  const postActivity = async (values: any, actions: any) => {
    const foundCategory = categories.find(category => category.id === values.categoryId);

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
      id: foundCategory?.id,
      group: foundCategory?.group,
      label: foundCategory?.label,
      points: foundCategory?.points
    }

    const activity: Omit<IActivity, "id"> = {
      title: values.title,
      description: values.description,
      category: categoryData,
      publisherId: "cHmmY2kQrSfol8gpLNDqOTlJq0C2", //userData.data.ra, trocar dps para id (pegar do mongo)
      publisherName: "Beatriz Schwartz" //userData.data.name,
    }

    await dispatch(publishActivitieyRequest({activity, onSuccess, onError}));

  }

  return (
    <Container>
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
          title: 'Volei',
          description: 'Descrição Teste',
          categoryId: '2',
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
                placeholder="Selecione uma categoria" 
                value={category}
                onValueChange={(value: string) => setFieldValue('categoryId', value)} 
                list={categories} 
                setValue={setCategory}
              />
            </View>
            <Button onPress={() => handleSubmit(values)} type="primary">Publicar</Button>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default PostActivity;