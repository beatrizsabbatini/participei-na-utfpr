import React, { FunctionComponent, useState } from 'react'

import { Keyboard, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import { MaterialIcons } from '@expo/vector-icons'; 
import { Container, Input } from './styles';

const Search: FunctionComponent<{
    value: string
    onChangeText: (text: string) => void
    onSubmitEditing: (shouldClear?: boolean) => void
}> = ({ value, onChangeText, onSubmitEditing }) => {
    const [text, setText] = useState<string>('')
      
    const onChange = (text: string): void => {
        setText(text)
        onChangeText(text)
    }

    const onClear = () => {
      Keyboard.dismiss();
      onChange('');
      onSubmitEditing(true);
  }

    return (
      <>
        <Container>
            <MaterialIcons name="search" size={22} color="#8A8A8E" />
            <Input 
                autoCorrect={false} 
                autoCapitalize="none" 
                placeholder="Digite um nome de atividade"
                value={text || value} 
                onChangeText={onChange} 
                onSubmitEditing={() => onSubmitEditing()}
            />
            <TouchableOpacity onPress={onClear} style={{display: text.length == 0 ? "none" : "flex"}}>
              <Ionicons name="md-close-circle" size={24} color="#8A8A8E" />
            </TouchableOpacity>
        </Container>
      </>
    )
}

export default Search