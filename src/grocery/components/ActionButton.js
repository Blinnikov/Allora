import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import constants from '../constants';
import styles from '../styles';

class ActionButton extends Component {
  render() {
    return (
      <View style={}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}
        >
          <Text style={}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton;
