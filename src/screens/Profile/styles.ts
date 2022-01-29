import styled from 'styled-components/native';

interface TabLabelProps{
  focused: boolean
}

export const TabLabel = styled.Text<TabLabelProps>`
  color: ${({theme, focused}) => focused ? theme.colors.primary : theme.colors.primary_disabled_text};
  font-weight: bold;
`

export const ShadowDivider = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  position: relative;
  width: 100%;
  height: 1px;
  align-self: stretch;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 5;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-top: 20px;
`