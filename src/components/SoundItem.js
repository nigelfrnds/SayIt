import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, CardSection, Button } from './common';
import IconButton from './IconButton';

class SoundItem extends Component {
  // SOUND WONT PLAY, audio for react-native sucks 
  componentWillMount() {
    const { media } = this.props.sound;
    console.log('SoundItem:' , media);

    this.timeout = setInterval(() => {
      this.audio = new Sound('./nav.mp3', Sound.MAIN_BUNDLE, (e) => {
        if(e) {
          console.log(e);
        }
      });
    }, 1000);
  }

  onPlayButtonPress() {
    const { media } = this.props.sound;
    //console.log(media);

    if(this.audio.isLoaded()){
      this.audio.setVolume(0.5);
      this.audio.play((success) => {
        if(success) {
          console.log('played');
          this.audio.release();
        }else{
          console.log(success);
        }
      });

    }else {
      console.log('not loaded');
    }

  }

  onAddButtonPress() {
    const { id } = this.props.sound;
    console.log(this.props.sound, ' added to library');
  }

  render() {
    const { title, id, media } = this.props.sound;
    const { containerStyle, textStyle, buttonStyle, headerTextStyle } = styles;

    return (
      <CardSection style={containerStyle}>
        <View>
          <IconButton onPress={this.onPlayButtonPress.bind(this)}>
            <Icon name="arrow-right-drop-circle-outline" size={35}/>
          </IconButton>
        </View>

        <View>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>Duration:</Text>
        </View>

        <View>
          <IconButton onPress={this.onAddButtonPress.bind(this)}>
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
