import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, CardSection, Card } from '../common';


class SearchPage extends Component {
  // options for the Router
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="magnify" size={30} color={tintColor}/>
    ),
  };

  render() {
    return (
      <Card>
        <Header headerText="Search" />
      </Card>
    );
  }
}

export default SearchPage;
