import React, { useState, useEffect } from 'react';

import { Container, BadgeText } from './styles';

interface BadgeProps{
  group?: number;
  points?: number;
  size?: 'normal' | 'small';
  marginHorizontal?: boolean;
  marginVertical?: boolean;
}

const Badge: React.FC<BadgeProps> = ({group, points, marginHorizontal, marginVertical}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    if (group) generateBackgroundColor();
  }, [group])

  const generateBackgroundColor = () => {
    switch (group) {
      case 1:
        setBackgroundColor('#2DB3F0');
        break;

      case 2:
        setBackgroundColor('#63E27F');
        break;

      case 3:
        setBackgroundColor('#FBCF7B');
        break;
  
      default:
        break;
    }
  }

  return (
    <Container color={backgroundColor} marginHorizontal={marginHorizontal} marginVertical={marginVertical}>
      <BadgeText>{group ? `Grupo ${group}` : `${points} pontos`}</BadgeText>
    </Container>
  )
}

export default Badge;