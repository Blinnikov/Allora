import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import ActionButton from './ActionButton';

import styles from '../styles';

class ListItem extends Component {
  _playSound(item) {
    alert(item.title);
  }

  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
            <ActionButton
              title="Sound"
              onPress={() => this._playSound(item)}
            />
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
