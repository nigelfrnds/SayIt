import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, CardSection, Button } from './common';
import IconButton from './IconButton';

class SoundItem extends Component {

  onButtonPress() {
    const s = new Sound(this.props.media, (error) => {
      if(error) {
        console.log('error loading sound ', error);
      }else {
        s.play((error) => {
          if(error) {
            console.log('playback error', error);
          }else {
            console.log('soundclip played');
            s.release();
          }
        });
      }
    });
  }

  render() {
    const { title, id, media } = this.props.sound;
    const { containerStyle, textStyle, buttonStyle, headerTextStyle } = styles;

    return (
      <CardSection style={containerStyle}>
        <View>
          <IconButton>
            <Icon name="arrow-right-drop-circle-outline" size={35}/>
          </IconButton>
        </View>

        <View>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>Duration:</Text>
        </View>

        <View>
          <IconButton>
            <Icon name="playlist-plus" size={35}/>
          </IconButton>
        </View>
      </CardSection>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 15,
    marginRight: 5,
    marginLeft: 5,
    height: 60,
  },
  headerTextStyle: {
    fontSize: 19,
    color: '#000',
  }
};

export default SoundItem;
