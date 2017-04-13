import React from 'react';
import PropTypes from 'prop-types';
import WordForm from './WordForm';

const WordAdd = ({ navigation }) => {
  return <WordForm lang="en" navigation={navigation} />;
};

WordAdd.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WordAdd;
