import React, { useRef } from 'react';

import { Animated, ListRenderItem, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

import Activity from '../../components/Activity';
import { activities } from '../../mock/activitiesMock';
import { IActivity } from '../../types';
import { Background } from './styles';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const scrollY = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = RFValue(130);

  const renderActivities: ListRenderItem<IActivity> = ({ item, index }) => {
    const inputRange = [
      -1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0]
    })

    return (
      <Animated.View style={{transform: [{scale}]}}>
        <Activity data={item}/>
      </Animated.View>
    )
  };

  return (
    <Background>
      <Searchbar
        placeholder="Busque uma atividade"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        inputStyle={{borderColor: 'red'}}
      />
        <Animated.FlatList 
          onScroll={Animated.event(
            [{nativeEvent: { contentOffset: { y: scrollY}}}],
            { useNativeDriver: true }
          )}
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
          contentContainerStyle={{paddingBottom: 30}}
        />
    </Background>
  )
}

export default Home;