import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { soundListFetch } from '../actions';
import SoundItem from './SoundItem';

class SoundList extends Component {
  componentWillMount() {
    this.props.soundListFetch();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    console.log('willMount:', this.props.sounds);
    this.dataSource = ds.cloneWithRows(this.props.sounds);
  }

  renderRow(sound) {
    return (
      <SoundItem sound={sound} />
    );
  }

  render() {
    //USE THIS PROP TO RENDER AN APPROPRIATE SOUNDLIST
    //BUT FOR NOW ITS A TEXT COMPONENT
    const { type } = this.props;
    return (
      <View>
        <Text>{type} Sounds:</Text>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("State: ", state.soundList);
  return { sounds: state.soundList };
};

export default connect(mapStateToProps, { soundListFetch })(SoundList);
