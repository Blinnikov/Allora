import React, { PropTypes } from 'react';
import WordForm from './WordForm';

const WordEdit = ({ navigation }) => {
  const { item } = navigation.state.params;
  return (
    <WordForm
      navigation={navigation}
      editMode={true}
      itemKey={item.key}
      word={item.word}
      translation={item.translation}
      lang={item.lang}
    />
  );
};

WordEdit.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: PropTypes.object.isRequired
      })
    })
  }).isRequired
};

export default WordEdit;
