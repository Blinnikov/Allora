import React, { Component, PropTypes } from 'react';
import { Button, Picker, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import * as database from '../../firebase/database';
import { flags } from '../../constants';

import NavBarStyles from '../../styles/NavigationBar';
import CommonStyles from '../../styles/Common';
import PageStyles from './WordForm.Styles';

class WordForm extends Component {
  constructor(props) {
    super(props);

    this.itemsRef = database.getItemsRef();
    this.state = {
      word: props.word,
      translation: props.translation,
      lang: props.lang
    };

    this._processItem = this._processItem.bind(this);
  }

  _processItem() {
    const { editMode } = this.props;
    const { word, translation, lang } = this.state;
    const wordItem = { word, translation, lang };
    if (editMode) {
      database.updateWordItem(this.props.itemKey, wordItem);
    } else {
      database.addWordItem(wordItem);
    }

    this.props.navigation.goBack();
  }

  componentDidMount () {
    const params = {
      header: {
        right: (
          <View style={NavBarStyles.navBarRightButton}>
            <Button
                onPress={() => this._processItem()}
                title={I18n.t('words.form.done')}
            />
          </View>
        ),
      }
    };
    this.props.navigation.setParams(params);
  }

  render() {
    return (
      <View style={CommonStyles.pageContainer}>
        <View style={PageStyles.form}>
          <FormLabel>{I18n.t('words.form.wordLabel')}</FormLabel>
          <FormInput
            value={this.state.word}
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={word => this.setState({ word })}
            placeholder={I18n.t('words.form.wordPlaceholder')}
          />
          <FormLabel>{I18n.t('words.form.translationLabel')}</FormLabel>
          <FormInput
            value={this.state.translation}
            autoCapitalize="none"
            containerStyle={PageStyles.input}
            onChangeText={translation => this.setState({ translation })}
            placeholder={I18n.t('words.form.translationPlaceholder')}
          />
          <FormLabel>{I18n.t('words.form.languageLabel')}</FormLabel>
          <Picker
            style={PageStyles.picker}
            selectedValue={this.state.lang}
            onValueChange={lang => this.setState({ lang })}
          >
            <Picker.Item
              label={I18n.t('words.form.languages.de', {flag: flags.de})}
              value='de' />
            <Picker.Item
              label={I18n.t('words.form.languages.ru', {flag: flags.ru})}
              value='ru' />
            <Picker.Item
              label={I18n.t('words.form.languages.en', {flag: flags.en})}
              value='en' />
            <Picker.Item
              label={I18n.t('words.form.languages.it', {flag: flags.it})}
              value='it' />
            <Picker.Item
              label={I18n.t('words.form.languages.es', {flag: flags.es})}
              value='es' />
            <Picker.Item
              label={I18n.t('words.form.languages.fr', {flag: flags.fr})}
              value='fr' />
          </Picker>
        </View>
      </View>
    );
  }
}

WordForm.propTypes = {
  navigation: PropTypes.object.isRequired,
  word: PropTypes.string,
  translation: PropTypes.string,
  lang: PropTypes.string,
  editMode: PropTypes.bool,
  itemKey: PropTypes.string
};

export default WordForm;
