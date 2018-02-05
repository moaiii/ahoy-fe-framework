import React from 'react';
// Example of providing custom themes
import { StyleProvider } from 'react-native';
import { Container } from 'native-base';

import * as styles from './styles';


const routes = ['My Account', 'Settings', 'Messages', 'News', 'About'];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    // fetch api data and load in store

  }
  
  render() {
    if(typeof this.state.isLoaded === 'string') {
      return (
        <StyleProvider style={styles}>
          <Container>
            <Content>
              <List
                customStyleProp
                style={styles.sideBar__list}
                dataArray={routes}
                renderRow={data => {
                  return (
                    <ListItem
                      button
                      style={styles.sideBar__list}
                      onPress={() => this.props.navigation.navigate(data)}>
                      <Text>{data}</Text>
                    </ListItem>
                  );
                }}/>
            </Content>
          </Container>
        </StyleProvider>
      );
    }
  }
}