import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as database from '../../firebase/database';
import flags from '../flags'

import CommonStyles from '../../styles/Common';
import PageStyles from './WordAdd.Styles';

class WordForm extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = database.getItemsRef();
    this.state = {
      word: props.word,
      translation: props.translation,
      lang: props.lang
    }
  }

  _processItem() {
    const { editMode } = this.props;
    const wordItem = { word, translation, lang } = this.state;
    console.log(wordItem);
    if (editMode) {
      database.updateWordItem(this.props.key, wordItem);
    } else {
      database.addWordItem(wordItem);
    }

    this.props.navigator.pop();
  }

  render() {
    const { actionButtonTitle } = this.props;
    return (
      <View style={CommonStyles.navigationContainer}>
        <View style={PageStyles.form}>
          <FormLabel>{I18n.t('words.add.wordLabel')}</FormLabel>
          <FormInput
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={word => this.setState({ word })}
            placeholder={I18n.t('words.add.wordPlaceholder')}
          />
        <FormLabel>{I18n.t('words.add.translationLabel')}</FormLabel>
          <FormInput
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={translation => this.setState({ translation })}
            placeholder={I18n.t('words.add.translationPlaceholder')}
          />
        <FormLabel>{I18n.t('words.add.languageLabel')}</FormLabel>
          <Picker
            style={{
              paddingHorizontal: 15,
            }}
            selectedValue={this.state.lang}
            onValueChange={lang => this.setState({ lang })}
          >
            <Picker.Item
              label={I18n.t('words.add.languages.de', {flag: flags.de})}
              value='de' />
            <Picker.Item
              label={I18n.t('words.add.languages.ru', {flag: flags.ru})}
              value='ru' />
            <Picker.Item
              label={I18n.t('words.add.languages.en', {flag: flags.en})}
              value='en' />
            <Picker.Item
              label={I18n.t('words.add.languages.it', {flag: flags.it})}
              value='it' />
            <Picker.Item
              label={I18n.t('words.add.languages.es', {flag: flags.es})}
              value='es' />
            <Picker.Item
              label={I18n.t('words.add.languages.fr', {flag: flags.fr})}
              value='fr' />
          </Picker>

        </View>
        <Button
          title={actionButtonTitle}
          onPress={() => this._processItem()}
          buttonStyle={[CommonStyles.buttonSuccess, PageStyles.addButton]}
          textStyle={CommonStyles.buttonPrimaryText}
        />
      </View>
    );
  }
}

export default WordForm;
