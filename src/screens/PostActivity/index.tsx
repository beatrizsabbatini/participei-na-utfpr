import React, { useState } from 'react';

import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import uuid from 'react-native-uuid';
import * as Yup from 'yup';
import firebase from 'firebase';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Input from '../../components/Input';
import { categories } from '../../mock/activitiesMock';
import { Container } from './styles';
import { IState } from '../../store';
import { HomeStackParamList } from '../../routes/app.routes';

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'ActivitiesFeed'>;
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
  const [loading, setLoading] = useState<boolean>(false);

  const userData = useSelector((state: IState) => state.userData);
  
  const { navigate } = useNavigation<HomeScreenProp>();

  const loginFormSchema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    description: Yup.string(),
    categoryId: Yup.string(),
  });

  const postActivity = (values: any, actions: any) => {
    const categoryData = categories.find(category => category.id === values.categoryId);

    firebase
    .database()
    .ref(`/activities`)
    .push({
      id: uuid.v4(),
      title: values.title,
      description: values.description,
      category: categoryData,
      publisherRa: userData.data.ra,
      publisherName: userData.data.name,
    })
    .then(() => {
      actions.resetForm();
      setCategory(''); 
      navigate('ActivitiesFeed');
      Alert.alert(
        'Atividade Criada!',
        'Agora sua atividade já se encontra no feed de atividades'
      );
    })
    .catch((error) => {
      Alert.alert(
        'Erro ao publicar atividade!',
        error.message
      );
    }).then(() => setLoading(false))
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
          title: 'Furiosos Cheerleaders 2021-2',
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