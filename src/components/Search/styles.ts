import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 3;
  position: relative;
`

export const Input = styled.TextInput`
  padding-horizontal: 8px;
  color: #000;
  font-size: 18px;
  width: 88%;
`