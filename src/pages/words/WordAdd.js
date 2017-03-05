import React, { PropTypes } from 'react';
import WordForm from './WordForm';

const WordAdd = ({ navigation }) => {
  return <WordForm lang="en" navigation={navigation} />;
};

WordAdd.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default WordAdd;
