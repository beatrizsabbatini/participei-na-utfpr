import React from 'react';

import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../../types';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradientBox, HeaderTitle, Shadow } from './styles';
import FilterIcon from '../FilterIcon';

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
        return  <FilterIcon/>
    
      default:
        return <View/>
    }
  }

  return  (
    <>
      <LinearGradientBox 
        start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }} 
        colors={['#3dbdf8', '#1b79d1']}
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