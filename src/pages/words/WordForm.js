import React, { Component, PropTypes } from 'react';
import { Button, Picker, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import db from '../../firebase/database';
import { flags } from '../../constants';

import NavBarStyles from '../../styles/NavigationBar';
import CommonStyles from '../../styles/Common';
import PageStyles from './WordForm.Styles';

const availableLanguages = ['de', 'ru', 'en', 'it', 'es', 'fr'];

class WordForm extends Component {
  constructor(props) {
    super(props);

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
      db.words.update(this.props.itemKey, wordItem);
    } else {
      db.words.add(wordItem);
    }

    this.props.navigation.goBack();
  }

  componentDidMount() {
    const params = {
      header: {
        right: (
          <View style={NavBarStyles.navBarRightButton}>
            <Button
              onPress={() => this._processItem()}
              title={I18n.t('words.form.done')}
            />
          </View>
        )
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
            {availableLanguages.map((lang, idx) => {
              const flag = flags[lang];
              const label = I18n.t(`words.form.languages.${lang}`, { flag });
              return <Picker.Item key={idx} label={label} value={lang} />;
            })}
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
