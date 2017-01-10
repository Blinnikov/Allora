import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

const StatusBar = ({title}) => (
  <View>
    <View style={styles.statusBar}></View>
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>{title}</Text>
    </View>
  </View>
);

export default StatusBar;
