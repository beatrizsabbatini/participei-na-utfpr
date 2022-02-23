import React, { useEffect } from 'react';

import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';

import { LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../../types';
import { LinearGradientBox, HeaderTitle, Shadow, ClockImage } from './styles';
import FilterIcon from '../FilterIcon';
import ClockIcon from '../../../assets/clock.png';
import { useGroupSelect } from '../../hooks/GroupsSelect';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../routes/app.routes';

interface CustomHeaderProps{
  title: string;
  leftIconType: LEFT_ICON_TYPES;
  rightIconType: RIGHT_ICON_TYPES;
}

type ProfileScreenProp = StackNavigationProp<HomeStackParamList, 'EditProfile'>;

const CustomHeader: React.FC<CustomHeaderProps> = ({title, leftIconType, rightIconType }) => {
  const navigation = useNavigation<ProfileScreenProp>();

  useEffect(() => {
    console.log("NAVIGATION: ", navigation);
  }, [navigation])
  

  const { setModalVisible } = useGroupSelect();

  const generateRightIcon = () => {
    switch (rightIconType) {
      case RIGHT_ICON_TYPES.NONE:
        return  <View/>

      case RIGHT_ICON_TYPES.FILTER:
        return (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
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
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
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
          <TouchableOpacity onPress={() => navigation.pop()}>
            <MaterialIcons name="arrow-back" size={32} color="white" />
          </TouchableOpacity> 
        ) : (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
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