import React, { useEffect, useState } from 'react';

import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector } from 'react-redux';

import theme from '../../global/styles/theme';
import { IState } from '../../store';
import ProfileHeader from './components/ProfileHeader';
import PublishedActivities from './components/PublishedActivities';
import SavedActivities from './components/SavedActivities';
import { TabLabel } from './styles';

const Profile: React.FC = () => {

  const renderScene = SceneMap({
    first: PublishedActivities,
    second: SavedActivities,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Atividades Publicadas' },
    { key: 'second', title: 'Atividades Salvas' },
  ]);
  
  return (
    <>
      <ProfileHeader/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar 
            {...props} 
            style={{backgroundColor: theme.colors.background}} 
            labelStyle={{color: theme.colors.primary, }} 
            indicatorStyle={{backgroundColor: theme.colors.primary}}
            renderLabel={({route, focused}) => <TabLabel focused={focused}>{route.title}</TabLabel>}
          />
        )}
      />
    </>
  )
}

export default Profile;