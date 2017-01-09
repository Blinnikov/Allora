import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import InputButtonSet from './InputButtonSet';
import Styles from './Styles';

const rows = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

const ReactCalculator = () => (
  <View style={Styles.container}>
    <View style={Styles.display}></View>
    <InputButtonSet rows={rows} />
  </View>
);

export default ReactCalculator;
