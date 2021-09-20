import React from 'react';

import { FlatList, ListRenderItem, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

import Activity from '../../components/Activity';
import { activities } from '../../mock/activitiesMock';
import { IActivity } from '../../types';
import { Background } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const renderActivities: ListRenderItem<IActivity> = ({ item }) => (
    <Activity data={item}/>
  );

  return (
    <Background>
      <Searchbar
        placeholder="Busque uma atividade"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        inputStyle={{borderColor: 'red'}}
      />
      <FlatList 
        data={activities} 
        keyExtractor={({id}) => id}
        renderItem={renderActivities}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 2}}
          />
        )
        }
        style={{width: '100%', paddingTop: RFValue(25)}}
      />
    </Background>
  )
}

export default Home;