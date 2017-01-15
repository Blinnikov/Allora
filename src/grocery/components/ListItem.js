import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Button from 'apsl-react-native-button';
import Tts from 'react-native-tts';

import ActionButton from './ActionButton';

import AppStyles from '../../Styles';
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
          <View style={styles.actionButtonsRow}>
            <Button onPress={() => this._playSound(item, 'it')}
              style={[AppStyles.buttonSuccess, styles.actionButton]} >
              <Text style={AppStyles.buttonPrimaryText}>IT</Text>
            </Button>
            <Button onPress={() => this._playSound(item, 'en')}
              style={[AppStyles.buttonSuccess, styles.actionButton]} >
              <Text style={AppStyles.buttonPrimaryText}>EN</Text>
            </Button>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
