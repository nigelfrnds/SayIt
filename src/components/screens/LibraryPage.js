import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, CardSection, Card } from '../common';


class LibraryPage extends Component {
  // options for the Router
  static navigationOptions = {
    tabBarLabel: 'Library',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="library-music" size={30} color={tintColor}/>
    ),
  };

  render() {
    return (
      <Card>
        <Header headerText="Library" />
      </Card>
    );
  }
}

export default LibraryPage;
