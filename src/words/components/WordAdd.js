import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import * as database from '../../firebase/database';
import flags from '../flags'

import CommonStyles from '../../styles/Common';
import PageStyles from './WordAdd.Styles';

class WordAdd extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = database.getItemsRef();
    this.state = {
      word: null,
      translation: null,
      lang: 'en'
    }
  }

  _addItem() {
    const { word, translation, lang } = this.state
    var wordRecord = { word, translation, lang };
    this.itemsRef.push(wordRecord);

    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={CommonStyles.navigationContainer}>
        <View style={PageStyles.form}>
          <FormLabel>Word</FormLabel>
          <FormInput
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={word => this.setState({ word })}
            placeholder={'Please enter the word'}
          />
          <FormLabel>Translation</FormLabel>
          <FormInput
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={translation => this.setState({ translation })}
            placeholder={'And of course the translation'}
          />
          <FormLabel>Language</FormLabel>
          <Picker
            style={{
              paddingHorizontal: 15,
            }}
            selectedValue={this.state.lang}
            onValueChange={lang => this.setState({ lang })}
          >
            <Picker.Item label={`German ${flags.de}`} value='de' />
            <Picker.Item label={`Russian ${flags.ru}`} value='ru' />
            <Picker.Item label={`English ${flags.en}`} value='en' />
            <Picker.Item label={`Italian ${flags.it}`} value='it' />
            <Picker.Item label={`Spanish ${flags.es}`} value='es' />
            <Picker.Item label={`French ${flags.fr}`} value='fr' />
          </Picker>

        </View>
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
