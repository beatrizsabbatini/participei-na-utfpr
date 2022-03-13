import React, { useState } from 'react';

import { View, Alert } from 'react-native';

import * as Yup from 'yup';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Spinner from 'react-native-loading-spinner-overlay';

import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { createCategoryRequest } from '../../store/modules/Categories/createCategory/actions';
import { ICategory } from '../../types';
import { IState } from '../../store';
import { ProfileStackParamList } from '../../routes/app.routes';
import { Background } from './styles';
import { updateCategoryRequest } from '../../store/modules/Categories/updateCategory/actions';
import { getCategoriesRequest } from '../../store/modules/Categories/getCategories/actions';

interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any,
  resetForm: () => void
}

const EditCategory: React.FC = () => {
  const { loading } = useSelector((state: IState) => state.updateCategory);
  const route = useRoute<RouteProp<ProfileStackParamList, 'EditCategory'>>();
  const { data } = route.params;

  const [group, setGroup] = useState<number | undefined>(data.group);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addCategoryFormSchema = Yup.object().shape({
    label: Yup.string().required('Título é obrigatório!'),
    points: Yup.number(),
  });

  const editCategory = async (values: any, actions: any) => {

    const onSuccess = () => {
      setGroup(undefined);
      actions.resetForm();
      dispatch(getCategoriesRequest());
      navigation.goBack();
        Alert.alert(
          'Categoria Editada com sucesso!',
        );
    }

    const onError = () => {
      actions.resetForm();
      setGroup(undefined); 
      Alert.alert(
        'Erro!',
        'Não foi possível editar a categoria, tente novamente mais tarde.'
      );
    }

    const category = {
      id: data._id,
      group: values?.group,
      label: values?.label,
      points: values?.points
    }

    await dispatch(updateCategoryRequest({category, onSuccess, onError}));

  }
  
  const groups = [
    {
      id: '0',
      placeholder: true,
      label: '',
      value: '',
    },
    {
      id: '1',
      label: 'Grupo 1',
      value: 1,
    },
    {
      id: '2',
      label: 'Grupo 2',
      value: 2,
    },
    {
      id: '3',
      label: 'Grupo 3',
      value: 3,
    }
  ]

  return (
    <Background>
      <Spinner
        visible={loading}
        textContent='Adicionando Categoria...'
        textStyle={{ color: "#fff" }}
      />
      <Formik
        validationSchema={addCategoryFormSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          label: data.label,
          group: data.group,
          points: data.points?.toString(),
        }}
        onSubmit={(values, actions) => editCategory(values, actions)}
      >
        {({ values, setFieldValue, handleSubmit, errors }: FormProps) => (
          <>
            <View>
              <Input 
                placeholder="Digite um título" 
                value={values.label}
                onChangeText={(text: string) => setFieldValue('label', text)}
              />
              <Input 
                placeholder="Pontos por essa atividade" 
                value={values.points}
                keyboardType="phone-pad"
                onChangeText={(text: string) => setFieldValue('points', text)}
                autoCorrect={false}
              />
               <Dropdown 
                enabled
                placeholder="Selecione um grupo para essa categoria" 
                value={group}
                onValueChange={(value: number) => setFieldValue('group', value)} 
                list={groups} 
                setValue={setGroup}
              />
            </View>
            <Button onPress={() => handleSubmit(values)} type="primary">Editar Categoria</Button>
          </>
        )}
      </Formik>
    </Background>
  )
}

export default EditCategory;