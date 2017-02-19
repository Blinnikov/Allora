import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NavBarStyles from '../styles/NavigationBar';

const WordsAddButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('WordAdd')}
  >
    <Icon name='md-add' style={[
        NavBarStyles.navBarRightButtonIcon
      ]}/>
  </TouchableOpacity>
);

WordsAddButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WordsAddButton;
