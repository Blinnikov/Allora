import React from 'react';
import { Text, View } from 'react-native';
import Styles from './Styles';

const InputButton = ({value}) => (
  <View style={Styles.inputButton}>
    <Text style={Style.inputButtonText}>{value}</Text>
  </View>
);

export default InputButton;
