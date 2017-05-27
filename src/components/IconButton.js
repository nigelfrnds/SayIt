import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const IconButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
};

export default IconButton;
