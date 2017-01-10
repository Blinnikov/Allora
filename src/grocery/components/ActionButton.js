import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import constants from '../constants';
import styles from '../styles';

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ActionButton;
