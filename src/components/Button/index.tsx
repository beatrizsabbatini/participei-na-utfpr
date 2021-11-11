import React, { useEffect, useState } from 'react';

import theme from '../../global/styles/theme';
import { PrimaryButton } from './styles';

interface ButtonComponentProps{
  type: 'primary' | 'light' | 'dark' | 'white';
  onPress: () => void;
  loading?: boolean;
  width?: string;
}

const Button: React.FC<ButtonComponentProps> = ({type, children, onPress, width, loading = false}) => {
  const [buttonColor, setButtonColor] = useState<string>(theme.colors.primary);

  const generateButtonColor = () => {
    switch (type) {
      case 'primary':
        setButtonColor(theme.colors.primary);
      break;

      case 'light':
        setButtonColor(theme.colors.primary_light);
      break;

      case 'dark':
        setButtonColor(theme.colors.primary_dark);
      break
    }
  }

  useEffect(() => {
    generateButtonColor();
  }, [])

  return (
    <PrimaryButton 
      mode="contained" 
      color={buttonColor} 
      onPress={onPress}
      labelStyle={{ color: "white" }}
      loading={loading}
      width={width}
    >
      {children}
    </PrimaryButton>
  )
}

export default Button;