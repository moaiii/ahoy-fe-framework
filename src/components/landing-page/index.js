import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, List, ListItem, 
  Text } from 'native-base';

import store from '../../store';
import * as styles from './styles';
import * as api from './api';
import * as actions from './actions';


export default class LandingPage extends Component {
  componentDidMount() {
    console.log(this, ' did mount');
  };

  render() {
    console.log(this, ' rendered');

    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text style={styles.text}>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}