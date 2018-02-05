import React, { Component } from 'react';
import {Container, Header, Title, Button, Icon,Text} from 'native-base';

import LandingPage from './components/landing-page';


class Application extends React.Component {
  componentDidMount() {
    console.log(this, ' did mount');
  }

  render() {
    console.log(this, ' rendered');
    
    return (
      <Container className='Application__container'>
        <LandingPage />
      </Container>
    );
  }
}


module.exports = Application;