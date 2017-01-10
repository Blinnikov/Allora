import React from 'react';
import { View } from 'react-native';
import InputButton from './InputButton';
import Styles from './Styles';

const InputButtonRow = ({buttons, onButtonClick, selectedSymbol}) => (
  <View style={Styles.inputRow}>
    {buttons.map((button, index) =>
      <InputButton
        key={index}
        value={button}
        highlight={selectedSymbol === button}
        onPress={() => onButtonClick(button)} />
    )}
  </View>
);

export default InputButtonRow;
