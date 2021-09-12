import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Statistics from '../screens/Statistics';
import Notifications from '../screens/Notifications';
import PostActivity from '../screens/PostActivity';

const AppRoutes = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#2186E6' }}>
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{
          tabBarIcon: () => <MaterialIcons name="dashboard" size={24} color="#fff" />
        }}
      />
      <Tab.Screen 
        name="Statistics" 
        component={Statistics} 
        options={{
          tabBarIcon: () => <FontAwesome name="bar-chart-o" size={24} color="#fff" />
        }}
      />
      <Tab.Screen 
        name="PostActivity" 
        component={PostActivity} 
        options={{
          tabBarIcon: () => <Feather name="plus" size={24} color="#fff" />
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        options={{
          tabBarIcon: () => <MaterialIcons name="notifications" size={24} color="#fff" />
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="#fff" />
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;