import styled from 'styled-components/native';

interface TabLabelProps{
  focused: boolean
}

export const TabLabel = styled.Text<TabLabelProps>`
  color: ${({theme, focused}) => focused ? theme.colors.primary : theme.colors.primary_disabled_text};
  font-weight: bold;
`