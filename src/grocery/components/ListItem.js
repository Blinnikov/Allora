import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

const ListItem = ({item, onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={styles.li}>
      <Text style={styles.liText}>{item.title}</Text>
    </View>
  </TouchableHighlight>
);

export default ListItem;
