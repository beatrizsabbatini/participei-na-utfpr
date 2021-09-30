import React from 'react';

import { View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../../types';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradientBox, HeaderTitle, Shadow, ClockImage } from './styles';
import FilterIcon from '../FilterIcon';
import ClockIcon from '../../../assets/clock.png';

interface CustomHeaderProps{
  title: string;
  leftIconType: LEFT_ICON_TYPES;
  rightIconType: RIGHT_ICON_TYPES;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title, leftIconType, rightIconType }) => {
  const { goBack } = useNavigation();

  const generateRightIcon = () => {
    switch (rightIconType) {
      case RIGHT_ICON_TYPES.NONE:
        return  <View/>

      case RIGHT_ICON_TYPES.FILTER:
        return (
          <TouchableOpacity>
            <FilterIcon/>
          </TouchableOpacity>
        )

      case RIGHT_ICON_TYPES.CLOCK_ICON:
        return  <ClockImage source={ClockIcon} />
       
      case RIGHT_ICON_TYPES.HELP:
        return (
          <TouchableOpacity>
            <MaterialIcons name="help" size={24} color="white" />
          </TouchableOpacity>
        )

      case RIGHT_ICON_TYPES.EDIT_PROFILE:
        return (
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
        )

      default:
        return <View/>
    }
  }

  return  (
    <>
      <LinearGradientBox 
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }} 
        colors={['#55c4f8', '#1b79d1']}
      >
        {leftIconType === LEFT_ICON_TYPES.BACK ? (
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="arrow-back" size={32} color="white" />
          </TouchableOpacity> 
        ) : (
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="menu" size={32} color="white" />
          </TouchableOpacity> 
        )}
        <HeaderTitle>{title}</HeaderTitle>
        <View>
          {generateRightIcon()}
        </View>
      </LinearGradientBox>
      <Shadow />
    </>
  )
}

export default CustomHeader;