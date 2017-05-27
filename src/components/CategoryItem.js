import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback} from 'react-native';
import { Header, Button, CardSection} from './common';

class CategoryItem extends Component {
  onItemPress() {
    console.log('pressed');
  }

  render() {
    const { navigate } = this.props.onPress;
    const { title } = this.props.category;
    return (
      <CardSection>
      <TouchableWithoutFeedback onPress={() => navigate(title, { title })}>
        <View>
          <Text style={styles.textStyle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
};

export default CategoryItem;
