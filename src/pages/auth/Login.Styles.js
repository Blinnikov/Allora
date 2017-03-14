import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const style = StyleSheet.create({
  loginPageContainer: {
    paddingHorizontal: 16,
  },
  label: {
    color: colors.$loginLabelColor,
  },
  inputContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
});

export default style;
