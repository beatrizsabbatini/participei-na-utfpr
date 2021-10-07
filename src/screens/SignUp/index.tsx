import React, { useEffect, useState } from 'react';

import { View, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import StepIndicator from 'react-native-step-indicator';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';

import theme from '../../global/styles/theme';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Button from '../../components/Button';
import { useSteps } from '../../hooks/Steps';
import { AuthStackParamList } from '../../routes/auth.routes';
import { useAuth } from '../../hooks/Auth';
import { Background, ButtonsContainer, customStepsStyles } from './styles';
import Spinner from 'react-native-loading-spinner-overlay';
import Step0 from './Steps/Step0';

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
}

const SignUp: React.FC = () => {

  const navigation = useNavigation<SignUpScreenProp>();

  const { currentStep, setCurrentStep } = useSteps();
  const { setIsAuthenticated } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [passwordCopy, setPasswordCopy] = useState<string>();

  useEffect(() => {
    return () => {
      setCurrentStep(0);
    };
  }, []);

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
      .required('Campus é obrigatório!')
  });

  const createUserInDataBase = (values: any) => {

    firebase
    .database()
    .ref(`/userss`)
    .push({
      name: values.name,
      ra: values.ra,
      campus: values.campusId,
      image: null,
      postedActivities: [],
      savedActivities: [],
      group1Points: 0,
      group2Points: 0,
      group3Points: 0,
    })
    .then(() => {
      Alert.alert(
        'Usuário criado!',
        'Deseja realizar o login com este usuário?',
        [
          {
            text: 'Sim',
            onPress: () => {
              setIsAuthenticated(true);
              setLoading(false);
            },
          },
          {
            text: 'Não',
            onPress: () => {
              navigation.goBack();
              setLoading(false);
            },
          },
        ]
      );
    })
  }

  const signUpService = (values: any) => {
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((res: any) => {
          res.user.updateProfile({
          displayName: values.name
        })
        createUserInDataBase(values);
      })
      .catch((error) => {
        Alert.alert('Erro!', getMessageByErrorCode(error));
        setLoading(false);
      });
  };

  function getMessageByErrorCode(error: any) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Já existe um usuário com esse e-mail cadastrado! Crie uma conta com outro e-mail.';

      case 'auth/weak-password':
        return 'Senha fraca! Digite uma senha com no mínimo 6 caracteres.';

      default:
        return error.message;
    }
  }

  const labels = ["Nome", "E-mail", "Senha", "RA", "Campus"];

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
      return <Step4 formProps={formProps}/>;
      default:
        break;
    }
  }

  const getStepFieldsToValidate = () => {
    switch (currentStep) {
      case 0: return ['name'];
      case 1: return ['email'];
      case 2: return ['password', 'confirmPassword'];
      case 3: return ['ra'];
      case 4: return ['campusId'];
      default: return []
    }
  }

  const handleValidate = async (formProps: FormProps) => {
    const errors: any[] = [];
    const currentStepFields: string[] = getStepFieldsToValidate();

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
        else handleNext(formProps.values);
      })
    })
  } 

  const handleNext = (values: any) => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else signUpService(values);
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
          campusId: ''
        }}
        onSubmit={(values) => signUpService(values)}
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