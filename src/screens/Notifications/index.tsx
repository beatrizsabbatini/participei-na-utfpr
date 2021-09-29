import React from 'react';

import { ListRenderItem, FlatList,View } from 'react-native';

import ClockImage from '../../../assets/clock.png';
import { notificationsMock } from '../../mock/activitiesMock';
import { INotification } from '../../types';
import { FlatlistContainer, NotificationContainer, ClockIcon, Message, Highlight } from './styles';

const Notifications: React.FC = () => {

  const renderNotifications: ListRenderItem<INotification> = ({ item, index }) => {
    return (
      <NotificationContainer>
        <ClockIcon source={ClockImage} />
        <View>
          <Message>{item.message}</Message>
          <Highlight>{item.highlight}</Highlight>
        </View>
      </NotificationContainer>
    )
  }
  return (
    <FlatlistContainer>
      <FlatList 
        data={notificationsMock} 
        keyExtractor={({id}) => id} 
        renderItem={renderNotifications}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 2}}
          />
        )}
      />
    </FlatlistContainer> 
     
  )
}

export default Notifications;