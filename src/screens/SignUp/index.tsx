import React, { useEffect, useState } from 'react';

import { View, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';
import StepIndicator from 'react-native-step-indicator';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';

import Step0 from './Steps/Step0';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Button from '../../components/Button';
import { useSteps } from '../../hooks/Steps';
import { AuthStackParamList } from '../../routes/auth.routes';
import { useAuth } from '../../hooks/Auth';
import { Background, ButtonsContainer, customStepsStyles } from './styles';
import { signUp } from './services';
import { getMessageByErrorCode, getStepFieldsToValidate } from './utils';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequest } from '../../store/modules/SignUp/createUser/actions';
import { getCampusesRequest } from '../../store/modules/Campuses/getCampuses/actions';
import { getUsersRequest } from '../../store/modules/OtherUsers/getUsers/actions';
import { IState } from '../../store';
import { IUser } from '../../store/modules/OtherUsers/getUsers/types';

type SignUpScreenProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

export interface FormProps{
  values: any,
  handleChange: (text: string) => void;
  handleSubmit: (values: any) => void;
  errors: any;
  setFieldValue: any
  validateField: (field: string) => void;
  setErrors: (errors: any) => void;
}

export interface Step{
  formProps: FormProps;
  setPasswordCopy?: (text: string) => void;
  showErrors?: boolean;
  campusValue?: any
  setCampusValue?: (value: any) => void;
  departmentValue?: any
  setDepartmentValue?: (value: any) => void;
}

const SignUp: React.FC = () => {

  const navigation = useNavigation<SignUpScreenProp>();
  const { data } = useSelector((state: IState) => state.getUsers);
  const dispatch = useDispatch();

  const { currentStep, setCurrentStep } = useSteps();
  const { setIsAuthenticated } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [passwordCopy, setPasswordCopy] = useState<string>();
  const [campusValue, setCampusValue] = useState<any>();
  const [departmentValue, setDepartmentValue] = useState<any>();

  useEffect(() => {
    return () => {
      setCurrentStep(0);
    };
  }, []);

  useEffect(() => {
    dispatch(getCampusesRequest());
    dispatch(getUsersRequest());
  }, [])

  const userAlreadyExists = (ra: number) => {
    const foundUser = data.find((user: IUser) => user.ra === Number(ra));
    if (foundUser) return true;
    else return false;
  }
  

  const labels = ["Nome", "E-mail", "Senha", "RA", "Campus"];
  const signUpFormSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome é obrigatório!'),
    email: Yup.string()
      .required('E-mail obrigatório!')
      .email('Digite um email válido!'),
    password: Yup.string()
      .required('Senha é obrigatório!')
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .oneOf([passwordCopy, null], 'Passwords do not match')
      .required('Password confirm is required'),
    ra: Yup.string()
      .required('RA é obrigatório!'), 
    campusId: Yup.string()
      .required('Campus é obrigatório!'),
    departmentId: Yup.string()
    .required('Departamento é obrigatório!')
  });

  const renderStep = (param: number, formProps: FormProps) => {
    switch(param) {
      case 0:
        return <Step0 formProps={formProps}/>;
      case 1:
        return <Step1 formProps={formProps}/>;

      case 2:
        return <Step2 formProps={formProps} setPasswordCopy={setPasswordCopy}/>;

      case 3:
        return <Step3 formProps={formProps}/>;
 
      case 4:
      return (
        <Step4 
          formProps={formProps} 
          campusValue={campusValue} 
          setCampusValue={setCampusValue}
          departmentValue={departmentValue}
          setDepartmentValue={setDepartmentValue}
        />
      )
      default:
        break;
    }
  }

  const handleValidate = async (formProps: FormProps) => {

    const errors: any[] = [];
    const currentStepFields: string[] = getStepFieldsToValidate(currentStep);

    currentStepFields.forEach(async(field) => {
      // to show the inputs in the error style (in case of having errors):
      formProps.validateField(field); 
      // to validate the fields with yup and prevent going to next step with errors:
      await Yup.reach(signUpFormSchema, field).isValid(formProps.values[field]).then((res: any) => {
        if (res === false) {
          errors.push(`error_${field}`);
        }
      }).then(() => {
        if (errors.length > 0) console.log(errors);
        else handleNext(formProps.values, formProps);
      })
    })
  } 

  const handleNext = (values: any, formProps?: any) => {
    if (currentStep === 3){
      const raInUse = userAlreadyExists(formProps.values.ra);
      if (raInUse) {
        Alert.alert("Esse RA já está em uso! Verifique se digitou corretamente.");
        return;
      }
    }
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else {
      if (Object.keys(formProps.errors).length === 0){
        setLoading(true);
        signUp(values, onCreationSuccess, onCreationError);
      }
    }
  } 

  const loginService = async (values: any) => {
    setLoading(true);

    return await firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setLoading(false);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert('Erro!', getMessageByErrorCode(error.code));
      });
  }

  const onCreationSuccess = (userUid?: string, values?: any) => {

    const user = {
      uid: userUid,
      campusId: values.campusId,
      name: values.name,
      ra: values.ra,
      group1Points: 0,
      group2Points: 0,
      group3Points: 0,
      publishedActivitiesIds: [],
      savedActivitiesIds: []
    }

    const onError = () => {
      setLoading(false);
      Alert.alert('Error creating user!');
    }

    const onSuccess = () => {
      setLoading(false);
      Alert.alert(
        'Usuário criado!',
        'Deseja realizar o login com este usuário?',
        [
          {
            text: 'Sim',
            onPress: async () => {
              await loginService(values)
              setIsAuthenticated(true);
            },
          },
          {
            text: 'Não',
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    }

    dispatch(createUserRequest({body: user, onSuccess, onError}));
  }

  const onCreationError = (error: any) => {
    Alert.alert('Erro!', getMessageByErrorCode(error));
    setLoading(false);
  }
  
  return (
    <Background>
      <StepIndicator
        customStyles={customStepsStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={5}
      />
      <Spinner
        visible={loading}
        textContent='Carregando...'
        textStyle={{ color: "#fff" }}
      />
      <Formik
        validationSchema={signUpFormSchema}
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          ra: '',
          campusId: undefined,
          departmentId: undefined
        }}
        onSubmit={(values) => signUp(values, onCreationSuccess, onCreationError)}
      >
        {(formProps: FormProps) => (
          <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {renderStep(currentStep, formProps)}
            </View>
            
            <ButtonsContainer>
              {currentStep > 0 && (
                <Button 
                  type="light" 
                  width="48%"
                  onPress={() => setCurrentStep(currentStep - 1)}>
                    Anterior
                </Button>
              )}
              <Button 
                type="primary" 
                width={currentStep === 0 ? "100%" : "48%"}
                onPress={() => handleValidate(formProps)}
              >
                {currentStep < 4 ? 'Próximo' : 'Cadastrar'}
              </Button>
            </ButtonsContainer>
          </>
        )}
      </Formik>
    </Background>
  )
}

export default SignUp;