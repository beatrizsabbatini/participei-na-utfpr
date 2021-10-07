import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const Background = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  padding: ${RFValue(25)}px;
  flex: 1;
`

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const customStepsStyles = {
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