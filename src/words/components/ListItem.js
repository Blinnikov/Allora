import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import Button from 'apsl-react-native-button';
import Tts from 'react-native-tts';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

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
                    style={PageStyles.removeButtonStyle}
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
          <View style={PageStyles.li}>
            <Text style={PageStyles.liText}>{item.title}</Text>
            <View style={PageStyles.actionButtonsRow}>
              <Button onPress={() => this._playSound(item, 'it')}
                style={[CommonStyles.buttonSuccess, PageStyles.actionButton]} >
                <Text style={CommonStyles.buttonPrimaryText}>IT</Text>
              </Button>
              <Button onPress={() => this._playSound(item, 'en')}
                style={[CommonStyles.buttonSuccess, PageStyles.actionButton]} >
                <Text style={CommonStyles.buttonPrimaryText}>EN</Text>
              </Button>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
}

export default ListItem;
