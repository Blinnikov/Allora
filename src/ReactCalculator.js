import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import InputButton from './InputButton';
import Styles from './Styles';

const ReactCalculator = () => (
  <View style={Styles.container}>
    <View style={Styles.display}></View>
    <View style={Styles.buttons}>
      <InputButton value={1} />
      <InputButton value={2} />
      <InputButton value={3} />
      <InputButton value={4} />
    </View>
  </View>
);

export default ReactCalculator;
