import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Styles from './Styles';

const InputButton = ({value, onPress, highlight}) => (
  <TouchableHighlight style={[
                        Styles.inputButton,
                        highlight ? Styles.inputButtonHighlight : null
                      ]}
                      underlayColor='#193441'
                      onPress={onPress}>
    <Text style={Styles.inputButtonText}>{value}</Text>
  </TouchableHighlight>
);

export default InputButton;
