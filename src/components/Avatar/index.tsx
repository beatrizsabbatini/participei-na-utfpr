import React, { useEffect, useState } from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 

import { ProfileImage, ImageAvatar } from './styles';
import theme from '../../global/styles/theme';
import { Image, ImageSourcePropType } from 'react-native';

interface AvatarProps{
  size?: 'normal' | 'big' | 'small',
  base64?: string
}

const Avatar: React.FC<AvatarProps> = ({ size, base64 }) => {
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

  const signatures: any = {
    JVBERi0: "application/pdf",
    R0lGODdh: "image/gif",
    R0lGODlh: "image/gif",
    iVBORw0KGgo: "image/png",
    "/9j/": "image/jpg"
  };
  
  function detectMimeType() {
    for (var s in signatures) {
      if (base64?.indexOf(s) === 0) {
        return signatures[s];
      }
    }
  }

  return (
    <>
      {base64 ? (
        <ImageAvatar
          size={size} 
          source={{uri: `data:${detectMimeType()};base64,${base64}`}}
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