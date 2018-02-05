import {Container, Header, Title, Button, Icon, Text} from 'native-base'; //Include Nativebase required components
import React from 'react';
import {  StatusBar, StyleSheet ,View} from 'react-native'; //Most of the react native components can be found in NativeBase
import { Font } from 'expo';

import HomeScreen from './src/components/HomeScreen';
import * as globals from './src/common/styles/globals';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fontLoaded: false
    };
  };

  async componentDidMount() {
    console.log(this, ' component did mount');
    
    await Font.loadAsync({
      'FuturaNormal': require('./assets/fonts/FuturaNormal.ttf'),
      'FuturaLight': require('./assets/fonts/FuturaLight.ttf'),
      'FuturaHeavy': require('./assets/fonts/FuturaHeavy.ttf')
    });

    this.setState({
      fontLoaded: true
    });
  };

  render() {
    let homescreen = this.state.fontLoaded 
      ? <HomeScreen />
      : null;

    return (
      <Container>
        {homescreen}
      </Container>
    );
  }
}