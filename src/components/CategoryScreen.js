import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button, CardSection, Card} from './common';
import SoundList from './SoundList';
/*
  Dynamic Screen Component that renders out each category page.
  Probably the most important component
*/
class CategoryScreen extends Component {

  static navigationOptions = ({ navigation, ScreenProps }) => ({
    headerTitle: navigation.state.params.title,
  });

  render() {
    const { navigate, state } = this.props.navigation;
    const { title } = state.params;

    return (
      <View>
        <SoundList type={title}/>
        <Text>{title}</Text>
      </View>
    );
  }
}



export default CategoryScreen;
