import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Styles from './Styles';

const ReactCalculator = () => (
  <View style={Styles.container}>
    <View style={Styles.display}></View>
    <View style={Styles.buttons}></View>
  </View>
);



export default ReactCalculator;
