import React from 'react';

import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import StepIndicator from 'react-native-step-indicator';

import theme from '../../global/styles/theme';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Button from '../../components/Button';
import { useSteps } from '../../hooks/Steps';
import { AuthStackParamList } from '../../routes/auth.routes';
import { Background, ButtonContainer } from './styles';

type SignUpScreenProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

const SignUp: React.FC = () => {

  const { navigate } = useNavigation<SignUpScreenProp>();
  const { currentStep, setCurrentStep } = useSteps();

  const labels = ["E-mail", "Senha", "RA", "Campus"];

  const customStepsStyles = {
    stepStrokeCurrentColor: theme.colors.primary_light,
    separatorStrokeWidth: 4,
    currentStepStrokeWidth: 4,
    stepStrokeWidth: 4,
    stepStrokeFinishedColor: theme.colors.primary_light,
    stepStrokeUnFinishedColor: theme.colors.primary_disabled_background,
    separatorFinishedColor: theme.colors.primary_light,
    separatorUnFinishedColor: theme.colors.primary_disabled_background,
    stepIndicatorFinishedColor: theme.colors.primary_light,
    stepIndicatorUnFinishedColor: theme.colors.primary_disabled_background,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: theme.colors.primary_light,
    stepIndicatorLabelFinishedColor: '#fff',
    stepIndicatorLabelUnFinishedColor: theme.colors.primary_disabled_text,
    labelColor: theme.colors.primary_disabled_background,
    labelSize: 13,
    currentStepLabelColor: theme.colors.primary_light
  }

  const renderStep = (param: number) => {
    switch(param) {
      case 0:
        return <Step1/>;

      case 1:
        return <Step2/>;

      case 2:
        return <Step3/>;

      case 3:
      return <Step4/>;
      default:
        break;
    }
  }

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
    else navigate('SignIn');
  }

  return (
    <Background>
      <StepIndicator
        customStyles={customStepsStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={4}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {renderStep(currentStep)}
      </View>
      <ButtonContainer>
        <Button type="primary" onPress={handleNext}>{currentStep < 3 ? 'Próximo' : 'Cadastrar'}</Button>
      </ButtonContainer>
    </Background>
  )
}

export default SignUp;