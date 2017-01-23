import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swipeout from 'react-native-swipeout';
import Tts from 'react-native-tts';
import flags from '../flags'

import CommonStyles from '../../styles/Common';
import PageStyles from './WordList.Styles';

const getLang = (item) => {
  if (item.lang === 'en') {
    return 'en-US';
  }

  if (item.lang === 'it') {
    return 'it-IT';
  }

  return item.lang;
}

class ListItem extends Component {
  _playSound(item) {
    const lang = getLang(item);
    Tts.setDefaultLanguage(lang);
    Tts.speak(item.word);
  }

  render() {
    const {item, onPress, onEditPress, onRemovePress} = this.props;
    const swipeButtons =[{
      component:  <Icon
                    name='ios-create-outline'
                    style={PageStyles.removeButtonStyle}
                  />,
      backgroundColor: '#2980b9',
      underlayColor: 'rgba(0, 0, 0, 0.6)',
      onPress: () => onEditPress(item)
    }, {
      component:  <Icon
                    name='ios-trash-outline'
                    style={PageStyles.removeButtonStyle}
                  />,
      backgroundColor: '#e74c3c',
      underlayColor: 'rgba(0, 0, 0, 0.6)',
      onPress: () => onRemovePress(item)
    }];

    return (
      <Swipeout
        right={swipeButtons}
        autoClose={true}
      >
        <TouchableHighlight onPress={onPress}>
          <View style={PageStyles.li}>
            <View style={PageStyles.liIcon}>
              <Text style={PageStyles.liIconText}>
                {flags[item.lang]}
              </Text>
            </View>
            <View>
              <Text style={PageStyles.liTitle}>{item.word}</Text>
              <Text style={PageStyles.liSubtitle}>{item.translation}</Text>
            </View>
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
