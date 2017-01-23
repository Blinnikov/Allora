import React, { Component } from 'react';
import WordForm from './WordForm';
import I18n from 'react-native-i18n';

const WordEdit = ({navigator, item}) => {
  return (
    <WordForm
      navigator={navigator}
      editMode={true}
      itemKey={item.key}
      word={item.word}
      translation={item.translation}
      lang={item.lang}
      actionButtonTitle={I18n.t('words.form.editButton')}
    />
  );
}

export default WordEdit;
