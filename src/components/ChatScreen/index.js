import React, { Component } from 'react';
import LucyChat from './LucyChat.js';
import JadeChat from './JadeChat.js';
import NineChat from './NineChat.js';
import { TabNavigator } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';


export default (MainScreenNavigator = TabNavigator(
  {
    LucyChat: { screen: LucyChat },
    JadeChat: { screen: JadeChat },
    NineChat: { screen: NineChat },
  },
  {
    tabBarPosition: 'bottom',

    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate('LucyChat')}>
              <Icon name='boat' />
              <Text>Charter</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate('JadeChat')}>
              <Icon name='life-buoy' />
              <Text>Bookings</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate('NineChat')}>
              <Icon name='mail' />
              <Text>Message</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate('NineChat')}>
              <Icon name='user' />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
