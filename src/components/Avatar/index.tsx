import React, { useEffect, useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 

import { ProfileImage } from './styles';
import theme from '../../global/styles/theme';

interface AvatarProps{
  size?: 'normal' | 'big' | 'small'
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
  const [iconSize, setIconSize] = useState<number>(24);

  const getIconSize = () => {
    switch (size) {
      case 'normal':
        setIconSize(24);
        
        break;

      case 'big':
      setIconSize(54);
      
      break;

      case 'small':
      setIconSize(14);
        
        break;
    
      default:
        break;
    }
  }

  useEffect(() => {
    getIconSize();
  }, [])

  return (
    <ProfileImage size={size}>
      <MaterialIcons name="person" size={iconSize} color={theme.colors.primary} />
    </ProfileImage>
  )
}

export default Avatar;