import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Tts from 'react-native-tts';

import ActionButton from './ActionButton';

import styles from '../styles';

class ListItem extends Component {
  _playSound(item, lang) {
    if (lang === 'en') {
      Tts.setDefaultLanguage('en-US');
      Tts.speak(item.title);
    }

    if (lang === 'it') {
      Tts.setDefaultLanguage('it-IT');
      Tts.speak(item.title);
    }
  }

  render() {
    const {item, onPress} = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
            <View style={styles.actionButtons}>
              <ActionButton
                title="IT"
                onPress={() => this._playSound(item, 'it')}
              />
            <Text>  </Text>
              <ActionButton
                title="EN"
                onPress={() => this._playSound(item, 'en')}
              />
            </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
