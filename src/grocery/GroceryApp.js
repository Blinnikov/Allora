import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class GroceryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Firebase container
        </Text>
      </View>
    );
  }
}

export default GroceryApp;
