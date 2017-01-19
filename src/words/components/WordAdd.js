import React, { Component } from 'react';
import { AlertIOS, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import * as database from '../../firebase/database';

import CommonStyles from '../../styles/Common';
import PageStyles from './WordAdd.Styles';

class WordAdd extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = database.getItemsRef();
  }

  _addItem() {
    AlertIOS.prompt(
      'Add new item',
      null,
      [
        {
          text: 'Add',
          onPress: text => {
            this.itemsRef.push({title: text})
          }
        }
      ],
      'plain-text'
    );
  }

  render() {
    return (
      <View style={CommonStyles.navigationContainer}>
        <View style={PageStyles.form}></View>
        <Button
          onPress={() => this._addItem()}
          style={[CommonStyles.buttonSuccess, PageStyles.addButton]}
          textStyle={CommonStyles.buttonPrimaryText}
        >
          Add
        </Button>
      </View>
    );
  }
}

export default WordAdd;
