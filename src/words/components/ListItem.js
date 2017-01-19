import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import Tts from 'react-native-tts';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

const getLang = (item) => {
  if (item.lang.toLowerCase() === 'en') {
    return 'en-US';
  }

  if (item.lang.toLowerCase() === 'it') {
    return 'it-IT';
  }

  throw new Error('Unsupported language');
}

class ListItem extends Component {
  _playSound(item) {
    const lang = getLang(item);
    Tts.setDefaultLanguage(lang);
    Tts.speak(item.word);
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
            <Text style={PageStyles.liText}>{item.word}</Text>
            <View style={PageStyles.actionButtonsRow}>
              <TouchableOpacity
                onPress={() => this._playSound(item)}
                style={PageStyles.soundButton}
              >
                <Icon
                  name='ios-volume-up'
                  style={PageStyles.soundButtonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
}

export default ListItem;
