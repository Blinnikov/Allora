import React, { PropTypes } from 'react';
import WordForm from './WordForm';
import I18n from 'react-native-i18n';

const WordEdit = ({navigator, emitter, item}) => {
  return (
    <WordForm
      navigator={navigator}
      emitter={emitter}
      editMode={true}
      itemKey={item.key}
      word={item.word}
      translation={item.translation}
      lang={item.lang}
      actionButtonTitle={I18n.t('words.form.editButton')}
    />
  );
};

WordEdit.propTypes = {
  navigator: PropTypes.object.isRequired,
  emitter: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default WordEdit;
