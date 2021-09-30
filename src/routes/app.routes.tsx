import * as React from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Statistics from '../screens/Statistics';
import Notifications from '../screens/Notifications';
import PostActivity from '../screens/PostActivity';
import CustomHeader from '../components/CustomHeader';
import { IActivity, LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../types';
import theme from '../global/styles/theme';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityDetails from '../screens/ActivityDetails';

export type HomeStackParamList = {
  ActivitiesFeed: undefined;
  ActivityDetails: { data: IActivity };
};

const AppRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      screenOptions ={{ 
        tabBarInactiveBackgroundColor: theme.colors.primary,
        tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarLabelStyle: { color: '#fff' },
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <MaterialIcons name="home" size={24} color={focused ? '#fff' : '#74AEE5'} />,
        }}
      />
      <Tab.Screen 
        name="Statistics" 
        component={Statistics} 
        options={{
          tabBarIcon: ({focused}) => <FontAwesome name="bar-chart-o" size={24} color={focused ? '#fff' : '#74AEE5'} />,
          header: () => (
            <CustomHeader 
              title="Suas estatísticas" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.HELP}
            />
          )
        }}
      />
      <Tab.Screen 
        name="PostActivity" 
        component={PostActivity} 
        options={{
          tabBarIcon: ({focused}) => <Feather name="plus" size={34} color={focused ? '#fff' : '#74AEE5'} />,
          header: () => (
            <CustomHeader 
              title="Publicar atividade" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        options={{
          tabBarIcon: ({focused}) => <MaterialIcons name="notifications" size={24} color={focused ? '#fff' : '#74AEE5'} />,
          header: () => (
            <CustomHeader 
              title="Notificações" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({focused}) => <MaterialIcons name="person" size={24} color={focused ? '#fff' : '#74AEE5'} />,
          header: () => (
            <CustomHeader 
              title="Perfil" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.EDIT_PROFILE}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;

const HomeStack = () => {
  const { Navigator, Screen } = createStackNavigator();

  return(
    <Navigator >
      <Screen
       name="ActivitiesFeed" 
       component={Home} 
       options={{
         header: () => (
           <CustomHeader 
             title="Atividades divulgadas" 
             leftIconType={LEFT_ICON_TYPES.MENU} 
             rightIconType={RIGHT_ICON_TYPES.FILTER}
           />
         )
       }}
      />
      <Screen
        name="ActivityDetails"
        component={ActivityDetails}
        options={{
          header: () => (
            <CustomHeader 
              title="Detalhes da atividade" 
              leftIconType={LEFT_ICON_TYPES.BACK} 
              rightIconType={RIGHT_ICON_TYPES.CLOCK_ICON}
          />
        )}}
      />
    </Navigator>
  )
}
