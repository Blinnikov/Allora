import React, { Component } from 'react';
import WordForm from './WordForm';
import I18n from 'react-native-i18n';

const WordAdd = ({navigator, emitter}) => {
  return (
    <WordForm
      lang='en'
      actionButtonTitle={I18n.t('words.form.addButton')}
      navigator={navigator}
      emitter={emitter}
    />
  );
}

export default WordAdd;
