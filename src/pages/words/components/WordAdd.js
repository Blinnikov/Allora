import React, { PropTypes } from 'react';
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
};

WordAdd.propTypes = {
  navigator: PropTypes.object.isRequired,
  emitter: PropTypes.object.isRequired,
};

export default WordAdd;
