import React from 'react';
import { View } from 'react-native';
import InputButton from './InputButton';
import Styles from './Styles';

const InputButtonRow = ({buttons}) => (
  <View style={Styles.inputRow}>
    {buttons.map((button, index) =>
      <InputButton key={index} value={button} />
    )}
  </View>
);

export default InputButtonRow;
