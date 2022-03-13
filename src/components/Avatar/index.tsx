import React, { useEffect, useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 

import { ProfileImage, ImageAvatar } from './styles';
import theme from '../../global/styles/theme';
import { Image, ImageSourcePropType } from 'react-native';

interface AvatarProps{
  size?: 'normal' | 'big' | 'small',
  url?: string
}

const Avatar: React.FC<AvatarProps> = ({ size, url }) => {
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
    <>
      {url ? (
        <ImageAvatar
          size={size} 
          source={{uri: url }} 
          resizeMode="cover"
        />
      ) : (
        <ProfileImage size={size}>
          <MaterialIcons name="person" size={iconSize} color={theme.colors.primary} />
        </ProfileImage>
      )}
    </>
  )
}

export default Avatar;