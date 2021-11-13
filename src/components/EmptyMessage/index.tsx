import React from 'react';

import EmptyList from '../../../assets/empty.png';

import { EmptyMessageContainer, Message, EmptyIcon  } from './styles';

interface EmptyMessageProps{
  text?: string
}

const EmptyMessage: React.FC<EmptyMessageProps> = ({text}) => {
  return (
    <EmptyMessageContainer>
      <EmptyIcon source={EmptyList}/>
      <Message>{text || "Oops, ainda não foram publicadas atividades!"}</Message>
    </EmptyMessageContainer>
  )
}

export default EmptyMessage;