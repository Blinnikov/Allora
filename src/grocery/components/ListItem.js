import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import Button from 'apsl-react-native-button';
import Tts from 'react-native-tts';

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
    const {item, onPress, onSwipeLeft} = this.props;
    const swipeButtons =[{
      component:  <Icon
                    name='ios-trash-outline'
                    style={pageStyles.removeButtonStyle}
                  />,
      backgroundColor: '#e74c3c',
      underlayColor: 'rgba(0, 0, 0, 0.6)',
      onPress: () => onSwipeLeft(item)
    }];

    return (
      <Swipeout
        right={swipeButtons}
        autoClose={true}
      >
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
      </Swipeout>
    );
  }
}

const pageStyles = StyleSheet.create({
  removeButtonStyle: {
    fontSize: 32,
    alignSelf: 'center',
    paddingVertical: 19,
    color: '#FFF'
  }
})

export default ListItem;
