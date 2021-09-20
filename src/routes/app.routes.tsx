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
import { LEFT_ICON_TYPES, RIGHT_ICON_TYPES } from '../types';
import theme from '../global/styles/theme';

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
        component={Home} 
        options={{
          tabBarIcon: () => <MaterialIcons name="home" size={24} color="#fff" />,
          header: () => (
            <CustomHeader 
              title="Atividades divulgadas" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.FILTER}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Statistics" 
        component={Statistics} 
        options={{
          tabBarIcon: () => <FontAwesome name="bar-chart-o" size={24} color="#fff" />,
          header: () => (
            <CustomHeader 
              title="Suas estatísticas" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
            />
          )
        }}
      />
      <Tab.Screen 
        name="PostActivity" 
        component={PostActivity} 
        options={{
          tabBarIcon: () => <Feather name="plus" size={24} color="#fff" />,
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
          tabBarIcon: () => <MaterialIcons name="notifications" size={24} color="#fff" />,
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
          tabBarIcon: () => <FontAwesome name="user" size={24} color="#fff" />,
          header: () => (
            <CustomHeader 
              title="Perfil" 
              leftIconType={LEFT_ICON_TYPES.MENU} 
              rightIconType={RIGHT_ICON_TYPES.NONE}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;