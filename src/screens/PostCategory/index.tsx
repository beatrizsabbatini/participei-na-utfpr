import React, { useEffect, useState } from 'react';

import { View, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryRequest } from '../../store/modules/Categories/createCategory/actions';
import { ICategory } from '../../types';
import Spinner from 'react-native-loading-spinner-overlay';
import { IState } from '../../store';
import { getCategoriesRequest } from '../../store/modules/Categories/getCategories/actions';

interface FormProps{
  values: any,
  handleChange: (text: string) => void,
  handleSubmit: (values: any) => void,
  errors: any,
  setFieldValue: any,
  resetForm: () => void
}

const AdminPostCategory: React.FC = () => {
  const [group, setGroup] = useState<number>();
  const { loading } = useSelector((state: IState) => state.createCategory);

  const dispatch = useDispatch();

  const addCategoryFormSchema = Yup.object().shape({
    label: Yup.string().required('Título é obrigatório!'),
    points: Yup.number(),
  });

  const addCategory = async (values: any, actions: any) => {

    const onSuccess = () => {
      setGroup(undefined);
      actions.resetForm();
      dispatch(getCategoriesRequest());
        Alert.alert(
          'Categoria Criada!',
        );
    }

    const onError = () => {
      actions.resetForm();
      setGroup(undefined); 
      Alert.alert(
        'Erro!',
        'Não foi possível criar a categoria, tente novamente mais tarde.'
      );
    }

    const category:  Omit<ICategory, "id"> = {
      group: values?.group,
      label: values?.label,
      points: values?.points
    }

    await dispatch(createCategoryRequest({category, onSuccess, onError}));

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
    <View>
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
          label: '',
          group: '',
          points: '',
        }}
        onSubmit={(values, actions) => addCategory(values, actions)}
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
            <Button onPress={() => handleSubmit(values)} type="primary">Criar categoria</Button>
          </>
        )}
      </Formik>
    </View>
  )
}

export default AdminPostCategory;