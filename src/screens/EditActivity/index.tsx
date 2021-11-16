import React, { useEffect } from 'react';

import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';
import { IState } from '../../store';
import { HomeStackParamList } from '../../routes/app.routes';
import { IActivity } from '../../types';
import { getActivitiesRequest } from '../../store/modules/Activities/getActivities/actions';
import { editActivityRequest } from '../../store/modules/Activities/editActivity/actions';
import { getUserPublishedActivitiesError, getUserPublishedActivitiesRequest } from '../../store/modules/LoggedUser/publishedActivities/actions';

type EditActivityScreenProp = StackNavigationProp<HomeStackParamList, 'ActivitiesFeed'>;
interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void, 
  errors: any,
  setFieldValue: any,
  resetForm: () => void
}

const EditActivity: React.FC = () => {
  const { loading, errors } = useSelector((state: IState) => state.editActivity);
  const { data: userData } = useSelector((state: IState) => state.userData);

  const route = useRoute<RouteProp<HomeStackParamList, 'ActivityDetails'>>();
  const { navigate } = useNavigation<EditActivityScreenProp>();
  const { data } = route.params;

  const dispatch = useDispatch();

  const loginFormSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    description: Yup.string(),
    categoryId: Yup.string(),
  });

  const onError = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao editar atividade',
        error
      );
    })
  }

  const onErrorUser = () => {
    errors?.forEach(error => {
      Alert.alert(
        'Erro ao buscar seus dados',
        error
      );
    })
  }

  const postActivity = async (values: any, actions: any) => {

    const onSuccess = () => {
      dispatch(getActivitiesRequest());
      dispatch(getUserPublishedActivitiesRequest({ids: userData.publishedActivitiesIds, onErrorUser}));
      actions.resetForm();
        navigate('ActivitiesFeed');
        Alert.alert(
          'Atividade Atualizada!',
          'Sua atividade já está atualizada no feed de atividades'
        );
    }

    const activity: Omit<IActivity, "id" | "publisherId" | "publisherName" | "category"> = {
      title: values.title,
      description: values.description,
    }

    await dispatch(editActivityRequest({id: data.id, activity, onSuccess, onError}));

  }

  return (
    <Container>
      <Spinner
        visible={loading}
        textContent='Atualizando...'
        textStyle={{ color: "#fff" }}
      />
      <Formik
        validationSchema={loginFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          title: data.title,
          description: data.description
        }}
        onSubmit={(values, actions) => postActivity(values, actions)}
      >
        {({ values, setFieldValue, handleSubmit }: FormProps) => (
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
              {/* <Dropdown 
                placeholder="Selecione uma categoria" 
                value={category}
                onValueChange={(value: string) => setFieldValue('categoryId', value)} 
                list={categories} 
                setValue={setCategory}
              /> */}
            </View>
            <Button onPress={() => handleSubmit(values)} type="primary">Atualizar</Button>
          </>
        )}
      </Formik>
    </Container>
  )
}

export default EditActivity;