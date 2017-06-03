import React, { Component } from 'react';
import { CardSection, Card } from '../common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryList from '../CategoryList';

class BrowsePage extends Component {
  // options for the Router
  static navigationOptions = {
    tabBarLabel: 'Browse',
    headerTitle: 'Browse',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Card>
        <CardSection>
          <CategoryList navigation={this.props.navigation}/>
        </CardSection>
      </Card>
    );
  }
}

export default BrowsePage;
