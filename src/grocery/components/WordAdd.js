import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

class WordAdd extends Component {
  render() {
    return (
      <View style={styles.navigationContainer}>
        <Text>Add word here..</Text>
      </View>
    );
  }
}

export default WordAdd;
