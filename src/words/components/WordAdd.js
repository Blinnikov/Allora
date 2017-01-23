import React, { Component } from 'react';
import WordForm from './WordForm';
import I18n from 'react-native-i18n';

const WordAdd = ({navigator}) => {
  return (
    <WordForm
      lang='en'
      actionButtonTitle={I18n.t('words.add.addButton')}
      navigator={navigator}
    />
  );
}

export default WordAdd;
