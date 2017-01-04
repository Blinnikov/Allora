import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const ReactCalculator = () => (
  <View style={styles.container}>
    <View style={styles.display}></View>
    <View style={styles.buttons}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 2,
    backgroundColor: '#193441'
  },
  buttons: {
    flex: 8,
    backgroundColor: '#3E606F'
  }
})

export default ReactCalculator;
