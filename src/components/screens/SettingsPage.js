import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, CardSection, Card } from '../common';


class SettingsPage extends Component {
  // options for the Router
  static navigationOptions = {
    tabBarLabel: 'Acco',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="settings" size={30} color={tintColor}/>
    ),
  };

  render() {
    return (
      <Card>
        <Header headerText="Settings" />
      </Card>
    );
  }
}
export default SettingsPage;
