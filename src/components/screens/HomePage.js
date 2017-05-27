import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, CardSection, Card } from '../common';

import homeIcon from '../../icons/home.png';


class HomePage extends Component {
  // options for the Router
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color={tintColor}/>
    ),
  };

  render() {
    return (
      <Card>
        <Header headerText="Home" />
      </Card>
    );
  }
}

const styles = {
  iconStyle: {
    height: 26,
    width: 26,
  },
};

export default HomePage;
